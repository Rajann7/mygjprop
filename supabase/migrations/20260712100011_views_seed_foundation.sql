-- 0011: Public-safe views (exclude private fields) and taxonomy seeds that
-- are part of the schema foundation (permissions, provider rows, flags).
-- Views run as owner and expose only publicly-eligible rows and columns.

create view public_properties as
  select p.id, p.slug, p.title, p.purpose, p.property_type, p.price_minor,
         p.city_id, p.locality_id, p.address_text, p.created_at
  from properties p
  where p.deleted_at is null and p.publication = 'published' and p.moderation = 'approved';

create view public_projects as
  select p.id, p.slug, p.name, p.city_id, p.locality_id, p.address_text,
         p.rera_number, p.possession_by, p.created_at
  from projects p
  where p.deleted_at is null and p.publication = 'published' and p.moderation = 'approved';

create view public_units as
  select u.id, u.project_id, u.unit_label, u.unit_type, u.carpet_area_sqft,
         u.price_minor, u.total_count, u.available_count
  from project_units u
  join projects p on p.id = u.project_id
  where u.deleted_at is null and u.publication = 'published'
    and p.deleted_at is null and p.publication = 'published' and p.moderation = 'approved';

create view public_profiles as
  select pr.user_id, pr.role,
         case pr.role when 'broker' then b.business_name when 'builder' then bu.company_name else null end as display_name,
         coalesce(b.public_slug, bu.public_slug) as public_slug,
         coalesce(b.about, bu.about) as about,
         pr.verification
  from profiles pr
  left join broker_profiles b on b.user_id = pr.user_id
  left join builder_profiles bu on bu.user_id = pr.user_id
  where pr.deleted_at is null and pr.account_status = 'active' and pr.role in ('broker','builder');

create view public_promotions as
  select pm.id, pm.project_id, c.storage_path, c.headline, c.sort_order
  from promotions pm
  join promotion_creatives c on c.promotion_id = pm.id
  where pm.status = 'live'
    and (pm.starts_at is null or pm.starts_at <= now())
    and (pm.ends_at is null or pm.ends_at > now());

create view public_locations as
  select id, level, name, slug, parent_id from locations where is_active;

create view public_cms_pages as
  select p.slug, p.title, v.body, v.version
  from cms_pages p join cms_page_versions v on v.page_id = p.id and v.is_current
  where p.publication = 'published';

create view public_blog_articles as
  select slug, title, excerpt, body, published_at
  from blog_articles where publication = 'published';

grant select on public_properties, public_projects, public_units, public_profiles,
  public_promotions, public_locations, public_cms_pages, public_blog_articles
  to anon, authenticated;

-- ── Status-history helper ──────────────────────────────────
create or replace function record_status_history(
  p_table text, p_entity_id uuid, p_field text,
  p_from text, p_to text, p_actor uuid, p_reason text
) returns void
language plpgsql security definer set search_path = public as $$
begin
  if p_table = 'properties' then
    insert into property_status_history (property_id, field, from_value, to_value, actor_id, reason) values (p_entity_id, p_field, p_from, p_to, p_actor, p_reason);
  elsif p_table = 'projects' then
    insert into project_status_history (project_id, field, from_value, to_value, actor_id, reason) values (p_entity_id, p_field, p_from, p_to, p_actor, p_reason);
  elsif p_table = 'requirements' then
    insert into requirement_status_history (requirement_id, field, from_value, to_value, actor_id) values (p_entity_id, p_field, p_from, p_to, p_actor);
  else
    raise exception 'unsupported status history table %', p_table;
  end if;
end $$;
revoke execute on function record_status_history from public, anon, authenticated;

-- ── Permission taxonomy ────────────────────────────────────
insert into permissions (permission_key, label, category, is_sensitive) values
  ('users.read','Read user data','users',false),
  ('users.manage','Manage users','users',true),
  ('verification.manage','Manage verification','users',true),
  ('locations.manage','Manage locations','platform',false),
  ('properties.read','Read all properties','marketplace',false),
  ('properties.moderate','Moderate properties','marketplace',true),
  ('projects.read','Read all projects','marketplace',false),
  ('projects.moderate','Moderate projects','marketplace',true),
  ('requirements.read','Read requirements','marketplace',false),
  ('leads.read','Read leads','leads',true),
  ('moderation.read','Read moderation queues','moderation',false),
  ('moderation.manage','Decide moderation cases','moderation',true),
  ('reports.manage','Handle reports','moderation',true),
  ('support.manage','Handle support tickets','support',false),
  ('bugs.read','Read bugs','support',false),
  ('bugs.manage','Manage bugs','support',false),
  ('audit.read','Read audit logs','security',true),
  ('security.read','Read security events','security',true),
  ('recovery.manage','Manage recovery','security',true),
  ('exports.manage','Manage exports','security',true),
  ('billing.read','Read billing','billing',true),
  ('billing.manage','Manage billing','billing',true),
  ('promotions.manage','Manage promotions','marketplace',true),
  ('providers.read','Read provider status','platform',false),
  ('content.manage','Manage CMS, SEO, legal','content',false);

-- ── Baseline staff roles ───────────────────────────────────
insert into staff_roles (role_key, label, description) values
  ('moderator','Moderator','Moderation queues, reports'),
  ('support_agent','Support Agent','Support tickets and bugs'),
  ('operations','Operations','Locations, content, providers');

insert into staff_role_permissions (role_id, permission_key)
select r.id, p.permission_key from staff_roles r
join lateral (values
  ('moderator','moderation.read'),('moderator','moderation.manage'),('moderator','reports.manage'),
  ('moderator','properties.read'),('moderator','properties.moderate'),('moderator','projects.read'),('moderator','projects.moderate'),
  ('support_agent','support.manage'),('support_agent','bugs.read'),('support_agent','bugs.manage'),('support_agent','users.read'),
  ('operations','locations.manage'),('operations','content.manage'),('operations','providers.read')
) as m(role_key, permission_key) on m.role_key = r.role_key
join permissions p on p.permission_key = m.permission_key;

-- ── Provider configuration rows (non-secret status only) ───
insert into provider_configurations (provider_key, status, mode) values
  ('supabase','CONFIGURED_NOT_TESTED', null),
  ('razorpay','TEST_MODE_ONLY','test'),
  ('sms_otp','SETUP_REQUIRED', null),
  ('email','SETUP_REQUIRED', null),
  ('media','SETUP_REQUIRED', null),
  ('analytics','SETUP_REQUIRED', null),
  ('monitoring','SETUP_REQUIRED', null),
  ('scheduler','SETUP_REQUIRED', null),
  ('backup','SETUP_REQUIRED', null);

-- ── Feature flags (server-authoritative defaults) ──────────
insert into feature_flags (flag_key, enabled, description) values
  ('builder_homepage_carousel', false, 'Builder promotion carousel on homepage'),
  ('city_seo_pages', false, 'City-based SEO landing pages'),
  ('blog', false, 'Public blog'),
  ('requirements_marketplace', false, 'Requirements and proposals workflows'),
  ('in_app_notifications', false, 'Server-backed in-app notifications');
