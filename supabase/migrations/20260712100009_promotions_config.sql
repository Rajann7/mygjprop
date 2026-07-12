-- 0009: Promotions, provider configuration (non-secret), platform config,
-- CMS, blog, legal, SEO, redirects, feature flags, system settings.

-- ── Promotions ─────────────────────────────────────────────
create table promotions (
  id uuid primary key default gen_random_uuid(),
  builder_user_id uuid not null references profiles(user_id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  status promotion_status not null default 'draft',
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint promotion_window check (starts_at is null or ends_at is null or starts_at < ends_at)
);
create index promotions_live_idx on promotions (status, starts_at) where status = 'live';
create trigger trg_promotions_updated before update on promotions for each row execute function set_updated_at();

create table promotion_creatives (
  id uuid primary key default gen_random_uuid(),
  promotion_id uuid not null references promotions(id) on delete cascade,
  storage_path text not null,
  headline text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table promotion_schedules (
  id uuid primary key default gen_random_uuid(),
  promotion_id uuid not null references promotions(id) on delete cascade,
  slot_date date not null,
  position int not null check (position between 1 and 20),
  created_at timestamptz not null default now()
);
create unique index promotion_schedules_slot_key on promotion_schedules (slot_date, position);

create table promotion_impressions (
  id uuid primary key default gen_random_uuid(),
  promotion_id uuid not null references promotions(id) on delete cascade,
  day date not null default current_date,
  count int not null default 0 check (count >= 0)
);
create unique index promotion_impressions_day_key on promotion_impressions (promotion_id, day);

create table promotion_clicks (
  id uuid primary key default gen_random_uuid(),
  promotion_id uuid not null references promotions(id) on delete cascade,
  day date not null default current_date,
  count int not null default 0 check (count >= 0)
);
create unique index promotion_clicks_day_key on promotion_clicks (promotion_id, day);

create table promotion_status_history (
  id uuid primary key default gen_random_uuid(),
  promotion_id uuid not null references promotions(id) on delete cascade,
  from_status promotion_status,
  to_status promotion_status not null,
  actor_id uuid,
  reason text,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);

-- ── Provider and platform configuration (non-secret only) ──
create table provider_configurations (
  provider_key text primary key,
  status provider_status not null default 'NOT_STARTED',
  mode text check (mode in ('test','live')),
  non_secret_config jsonb not null default '{}',
  last_status_change timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint provider_config_no_secret check (
    non_secret_config::text !~* '(secret|password|api_key|token)'
  )
);
create trigger trg_provider_configurations_updated before update on provider_configurations for each row execute function set_updated_at();

create table provider_health_checks (
  id uuid primary key default gen_random_uuid(),
  provider_key text not null references provider_configurations(provider_key) on delete cascade,
  status provider_status not null,
  latency_ms int,
  detail text,
  checked_at timestamptz not null default now()
);
create index provider_health_checks_idx on provider_health_checks (provider_key, checked_at desc);

create table feature_flags (
  flag_key text primary key,
  enabled boolean not null default false,
  description text not null default '',
  updated_by uuid,
  updated_at timestamptz not null default now()
);
create trigger trg_feature_flags_updated before update on feature_flags for each row execute function set_updated_at();

create table system_settings (
  setting_key text primary key,
  value jsonb not null,
  updated_by uuid,
  updated_at timestamptz not null default now()
);
create trigger trg_system_settings_updated before update on system_settings for each row execute function set_updated_at();

create table maintenance_events (
  id uuid primary key default gen_random_uuid(),
  kind text not null,
  message text not null,
  starts_at timestamptz not null,
  ends_at timestamptz,
  created_by uuid,
  created_at timestamptz not null default now()
);

create table redirects (
  id uuid primary key default gen_random_uuid(),
  from_path text not null unique,
  to_path text not null,
  is_permanent boolean not null default true,
  created_at timestamptz not null default now()
);

create table seo_page_configs (
  id uuid primary key default gen_random_uuid(),
  page_kind text not null,
  location_id uuid references locations(id) on delete cascade,
  title_template text not null,
  description_template text not null,
  is_indexed boolean not null default true,
  updated_at timestamptz not null default now()
);
create unique index seo_page_configs_key on seo_page_configs (page_kind, coalesce(location_id, '00000000-0000-0000-0000-000000000000'::uuid));
create index seo_page_configs_slug_idx on seo_page_configs (page_kind) where is_indexed;
create trigger trg_seo_page_configs_updated before update on seo_page_configs for each row execute function set_updated_at();

create table cms_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  publication publication_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_cms_pages_updated before update on cms_pages for each row execute function set_updated_at();

create table cms_page_versions (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references cms_pages(id) on delete cascade,
  version int not null,
  body jsonb not null default '{}',
  author_id uuid,
  is_current boolean not null default false,
  created_at timestamptz not null default now()
);
create unique index cms_page_versions_key on cms_page_versions (page_id, version);
create unique index cms_page_versions_one_current on cms_page_versions (page_id) where is_current;

create table blog_articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  body jsonb not null default '{}',
  author_id uuid,
  publication publication_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index blog_articles_public_idx on blog_articles (published_at desc) where publication = 'published';
create trigger trg_blog_articles_updated before update on blog_articles for each row execute function set_updated_at();

create table legal_documents (
  id uuid primary key default gen_random_uuid(),
  doc_key text not null,
  version int not null,
  title text not null,
  body jsonb not null default '{}',
  effective_from date not null,
  is_current boolean not null default false,
  created_at timestamptz not null default now()
);
create unique index legal_documents_key on legal_documents (doc_key, version);
create unique index legal_documents_one_current on legal_documents (doc_key) where is_current;
