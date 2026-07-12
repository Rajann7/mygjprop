-- 0010: Row Level Security for every table.
-- Principles: indexed ownership checks; security-definer helpers to avoid
-- recursive RLS; server-only tables get RLS enabled with NO policies (only
-- the trusted service role can touch them); frontend hiding is never relied on.

-- ── Helper functions (security definer, non-recursive) ─────
create or replace function is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from staff_profiles s where s.user_id = auth.uid() and s.is_active)
$$;

create or replace function is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from staff_profiles s where s.user_id = auth.uid() and s.is_active and s.internal_role in ('admin','super_admin'))
$$;

create or replace function is_super_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from staff_profiles s where s.user_id = auth.uid() and s.is_active and s.internal_role = 'super_admin')
$$;

create or replace function has_permission(p_key text) returns boolean
language sql stable security definer set search_path = public as $$
  select is_super_admin()
    or coalesce((select o.granted from staff_permission_overrides o where o.user_id = auth.uid() and o.permission_key = p_key), false)
    or (
      not coalesce((select not o.granted from staff_permission_overrides o where o.user_id = auth.uid() and o.permission_key = p_key), false)
      and exists (
        select 1 from staff_user_roles ur
        join staff_role_permissions rp on rp.role_id = ur.role_id
        where ur.user_id = auth.uid() and rp.permission_key = p_key
      )
    )
$$;

-- Parent visibility helpers (indexed lookups, definer to avoid recursion).
create or replace function property_is_public(p_id uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from properties p where p.id = p_id and p.deleted_at is null
    and p.publication = 'published' and p.moderation = 'approved')
$$;

create or replace function property_owned_by_me(p_id uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from properties p where p.id = p_id and p.owner_user_id = auth.uid())
$$;

create or replace function project_is_public(p_id uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from projects p where p.id = p_id and p.deleted_at is null
    and p.publication = 'published' and p.moderation = 'approved')
$$;

create or replace function project_owned_by_me(p_id uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from projects p where p.id = p_id and p.builder_user_id = auth.uid())
$$;

create or replace function lead_participant(p_lead uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from leads l where l.id = p_lead
    and (l.owner_user_id = auth.uid() or l.sender_user_id = auth.uid()))
$$;

-- ── Enable RLS on every table in public schema ─────────────
do $$
declare t record;
begin
  for t in select tablename from pg_tables where schemaname = 'public' loop
    execute format('alter table public.%I enable row level security', t.tablename);
  end loop;
end $$;

-- ── Identity ───────────────────────────────────────────────
create policy profiles_select_own on profiles for select using (user_id = auth.uid() or (is_staff() and has_permission('users.read')));
create policy profiles_insert_self on profiles for insert with check (user_id = auth.uid());
create policy profiles_update_own on profiles for update using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy role_assignments_select on role_assignments for select using (user_id = auth.uid() or (is_staff() and has_permission('users.read')));

create policy owner_profiles_all on owner_profiles for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy owner_profiles_staff on owner_profiles for select using (is_staff() and has_permission('users.read'));
create policy broker_profiles_all on broker_profiles for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy broker_profiles_staff on broker_profiles for select using (is_staff() and has_permission('users.read'));
create policy builder_profiles_all on builder_profiles for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy builder_profiles_staff on builder_profiles for select using (is_staff() and has_permission('users.read'));

create policy account_status_history_select on account_status_history for select using (user_id = auth.uid() or (is_staff() and has_permission('users.read')));
create policy role_change_requests_own on role_change_requests for select using (user_id = auth.uid() or (is_staff() and has_permission('users.manage')));
create policy role_change_requests_insert on role_change_requests for insert with check (user_id = auth.uid());
create policy consent_records_own on consent_records for select using (user_id = auth.uid() or (is_staff() and has_permission('users.read')));
create policy consent_records_insert on consent_records for insert with check (user_id = auth.uid());

create policy verification_cases_own on profile_verification_cases for select using (user_id = auth.uid() or (is_staff() and has_permission('verification.manage')));
create policy verification_cases_insert on profile_verification_cases for insert with check (user_id = auth.uid());
create policy verification_cases_staff on profile_verification_cases for update using (is_staff() and has_permission('verification.manage'));
create policy verification_docs_own on profile_verification_documents for select using (
  exists (select 1 from profile_verification_cases c where c.id = case_id and c.user_id = auth.uid())
  or (is_staff() and has_permission('verification.manage')));
create policy verification_docs_insert on profile_verification_documents for insert with check (
  exists (select 1 from profile_verification_cases c where c.id = case_id and c.user_id = auth.uid()));

create policy mobile_change_own on mobile_change_requests for select using (user_id = auth.uid() or (is_staff() and has_permission('users.manage')));
create policy mobile_change_insert on mobile_change_requests for insert with check (user_id = auth.uid());
create policy email_change_own on email_change_requests for select using (user_id = auth.uid() or (is_staff() and has_permission('users.manage')));
create policy email_change_insert on email_change_requests for insert with check (user_id = auth.uid());
create policy recovery_cases_own on account_recovery_cases for select using (user_id = auth.uid() or (is_staff() and has_permission('recovery.manage')));
create policy recovery_cases_insert on account_recovery_cases for insert with check (user_id = auth.uid());
create policy session_metadata_own on session_metadata for select using (user_id = auth.uid() or (is_staff() and has_permission('users.read')));
create policy session_metadata_delete on session_metadata for delete using (user_id = auth.uid());

-- ── Locations (public read, staff manage) ──────────────────
create policy locations_public_read on locations for select using (true);
create policy locations_staff_write on locations for all using (is_staff() and has_permission('locations.manage')) with check (is_staff() and has_permission('locations.manage'));
create policy location_aliases_read on location_aliases for select using (true);
create policy location_aliases_write on location_aliases for all using (is_staff() and has_permission('locations.manage')) with check (is_staff() and has_permission('locations.manage'));
create policy location_slug_history_read on location_slug_history for select using (true);
create policy missing_location_select on missing_location_requests for select using (requested_by = auth.uid() or (is_staff() and has_permission('locations.manage')));
create policy missing_location_insert on missing_location_requests for insert with check (requested_by = auth.uid());
create policy missing_location_staff on missing_location_requests for update using (is_staff() and has_permission('locations.manage'));

-- ── Properties ─────────────────────────────────────────────
create policy properties_public_read on properties for select using (
  (deleted_at is null and publication = 'published' and moderation = 'approved')
  or owner_user_id = auth.uid()
  or (is_staff() and has_permission('properties.read')));
create policy properties_insert_own on properties for insert with check (owner_user_id = auth.uid());
create policy properties_update_own on properties for update using (owner_user_id = auth.uid() or (is_staff() and has_permission('properties.moderate')));

create policy property_details_read on property_details for select using (property_is_public(property_id) or property_owned_by_me(property_id) or (is_staff() and has_permission('properties.read')));
create policy property_details_write on property_details for all using (property_owned_by_me(property_id)) with check (property_owned_by_me(property_id));
create policy property_amenities_read on property_amenities for select using (property_is_public(property_id) or property_owned_by_me(property_id) or (is_staff() and has_permission('properties.read')));
create policy property_amenities_write on property_amenities for all using (property_owned_by_me(property_id)) with check (property_owned_by_me(property_id));
create policy property_media_read on property_media for select using (property_is_public(property_id) or property_owned_by_me(property_id) or (is_staff() and has_permission('properties.read')));
create policy property_media_write on property_media for all using (property_owned_by_me(property_id)) with check (property_owned_by_me(property_id));
create policy property_drafts_own on property_drafts for all using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy property_history_read on property_status_history for select using (property_owned_by_me(property_id) or (is_staff() and has_permission('properties.read')));
create policy saved_properties_own on saved_properties for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ── Projects and units ─────────────────────────────────────
create policy projects_public_read on projects for select using (
  (deleted_at is null and publication = 'published' and moderation = 'approved')
  or builder_user_id = auth.uid()
  or (is_staff() and has_permission('projects.read')));
create policy projects_insert_own on projects for insert with check (builder_user_id = auth.uid());
create policy projects_update_own on projects for update using (builder_user_id = auth.uid() or (is_staff() and has_permission('projects.moderate')));

create policy project_details_read on project_details for select using (project_is_public(project_id) or project_owned_by_me(project_id) or (is_staff() and has_permission('projects.read')));
create policy project_details_write on project_details for all using (project_owned_by_me(project_id)) with check (project_owned_by_me(project_id));
create policy project_amenities_read on project_amenities for select using (project_is_public(project_id) or project_owned_by_me(project_id) or (is_staff() and has_permission('projects.read')));
create policy project_amenities_write on project_amenities for all using (project_owned_by_me(project_id)) with check (project_owned_by_me(project_id));
create policy project_media_read on project_media for select using (project_is_public(project_id) or project_owned_by_me(project_id) or (is_staff() and has_permission('projects.read')));
create policy project_media_write on project_media for all using (project_owned_by_me(project_id)) with check (project_owned_by_me(project_id));
create policy project_documents_read on project_documents for select using ((is_public and project_is_public(project_id)) or project_owned_by_me(project_id) or (is_staff() and has_permission('projects.read')));
create policy project_documents_write on project_documents for all using (project_owned_by_me(project_id)) with check (project_owned_by_me(project_id));
create policy project_drafts_own on project_drafts for all using (builder_user_id = auth.uid()) with check (builder_user_id = auth.uid());
create policy project_history_read on project_status_history for select using (project_owned_by_me(project_id) or (is_staff() and has_permission('projects.read')));

create policy units_read on project_units for select using (
  (deleted_at is null and publication = 'published' and project_is_public(project_id))
  or project_owned_by_me(project_id)
  or (is_staff() and has_permission('projects.read')));
create policy units_write on project_units for all using (project_owned_by_me(project_id)) with check (project_owned_by_me(project_id));
create policy unit_media_read on unit_media for select using (
  exists (select 1 from project_units u where u.id = unit_id and (project_is_public(u.project_id) or project_owned_by_me(u.project_id))));
create policy unit_media_write on unit_media for all using (
  exists (select 1 from project_units u where u.id = unit_id and project_owned_by_me(u.project_id)));
create policy unit_inventory_read on unit_inventory_events for select using (
  exists (select 1 from project_units u where u.id = unit_id and project_owned_by_me(u.project_id)) or (is_staff() and has_permission('projects.read')));
create policy unit_price_history_read on unit_price_history for select using (
  exists (select 1 from project_units u where u.id = unit_id and project_owned_by_me(u.project_id)) or (is_staff() and has_permission('projects.read')));
create policy saved_projects_own on saved_projects for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ── Requirements ───────────────────────────────────────────
create policy requirements_own on requirements for select using (user_id = auth.uid() or (is_staff() and has_permission('requirements.read')));
create policy requirements_write on requirements for insert with check (user_id = auth.uid());
create policy requirements_update on requirements for update using (user_id = auth.uid());
create policy requirement_drafts_own on requirement_drafts for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy requirement_responses_select on requirement_responses for select using (
  responder_user_id = auth.uid()
  or exists (select 1 from requirements r where r.id = requirement_id and r.user_id = auth.uid())
  or (is_staff() and has_permission('requirements.read')));
create policy requirement_responses_insert on requirement_responses for insert with check (responder_user_id = auth.uid());
create policy requirement_history_read on requirement_status_history for select using (
  exists (select 1 from requirements r where r.id = requirement_id and r.user_id = auth.uid()) or (is_staff() and has_permission('requirements.read')));
create policy saved_searches_own on saved_searches for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ── Direct Inquiry and Leads ───────────────────────────────
create policy inquiries_insert on direct_inquiries for insert with check (sender_user_id = auth.uid());
create policy inquiries_select on direct_inquiries for select using (
  sender_user_id = auth.uid()
  or (property_id is not null and property_owned_by_me(property_id))
  or (project_id is not null and project_owned_by_me(project_id))
  or (is_staff() and has_permission('leads.read')));

create policy leads_select on leads for select using (
  owner_user_id = auth.uid() or sender_user_id = auth.uid() or (is_staff() and has_permission('leads.read')));
create policy leads_update_owner on leads for update using (owner_user_id = auth.uid());

create policy lead_participants_select on lead_participants for select using (lead_participant(lead_id) or (is_staff() and has_permission('leads.read')));
create policy lead_messages_select on lead_messages for select using (lead_participant(lead_id) or (is_staff() and has_permission('leads.read')));
create policy lead_messages_insert on lead_messages for insert with check (sender_user_id = auth.uid() and lead_participant(lead_id));
create policy lead_message_reads_all on lead_message_reads for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy lead_notes_select on lead_notes for select using (
  (lead_participant(lead_id) and exists (select 1 from leads l where l.id = lead_id and l.owner_user_id = auth.uid()))
  or author_user_id = auth.uid() or (is_staff() and has_permission('leads.read')));
create policy lead_notes_insert on lead_notes for insert with check (author_user_id = auth.uid() and lead_participant(lead_id));
create policy lead_follow_ups_own on lead_follow_ups for all using (owner_user_id = auth.uid()) with check (owner_user_id = auth.uid());
create policy lead_activity_select on lead_activity_events for select using (lead_participant(lead_id) or (is_staff() and has_permission('leads.read')));
create policy lead_history_select on lead_status_history for select using (lead_participant(lead_id) or (is_staff() and has_permission('leads.read')));
create policy lead_reports_own on lead_reports for select using (reporter_user_id = auth.uid() or (is_staff() and has_permission('reports.manage')));
create policy lead_reports_insert on lead_reports for insert with check (reporter_user_id = auth.uid() and lead_participant(lead_id));

-- ── Notifications (own only; writes are server-side) ──────
create policy notifications_own_select on notifications for select using (user_id = auth.uid());
create policy notifications_own_update on notifications for update using (user_id = auth.uid()) with check (user_id = auth.uid());
-- outbox_events, background_job_runs, scheduler_runs, provider_delivery_events:
-- RLS enabled, no policies → trusted server only.

-- ── Internal platform ──────────────────────────────────────
create policy staff_profiles_self on staff_profiles for select using (user_id = auth.uid() or is_admin());
create policy staff_roles_read on staff_roles for select using (is_staff());
create policy staff_roles_admin on staff_roles for all using (is_super_admin()) with check (is_super_admin());
create policy permissions_read on permissions for select using (is_staff());
create policy staff_role_permissions_read on staff_role_permissions for select using (is_staff());
create policy staff_role_permissions_admin on staff_role_permissions for all using (is_super_admin()) with check (is_super_admin());
create policy staff_user_roles_read on staff_user_roles for select using (user_id = auth.uid() or is_admin());
create policy staff_user_roles_admin on staff_user_roles for all using (is_super_admin()) with check (is_super_admin());
create policy staff_overrides_read on staff_permission_overrides for select using (user_id = auth.uid() or is_admin());
create policy staff_overrides_admin on staff_permission_overrides for all using (is_super_admin()) with check (is_super_admin());

create policy moderation_cases_staff on moderation_cases for select using (is_staff() and has_permission('moderation.read'));
create policy moderation_cases_manage on moderation_cases for all using (is_staff() and has_permission('moderation.manage')) with check (is_staff() and has_permission('moderation.manage'));
create policy moderation_actions_staff on moderation_actions for select using (is_staff() and has_permission('moderation.read'));
create policy moderation_actions_insert on moderation_actions for insert with check (actor_id = auth.uid() and is_staff() and has_permission('moderation.manage'));

create policy reports_own on reports for select using (reporter_user_id = auth.uid() or (is_staff() and has_permission('reports.manage')));
create policy reports_insert on reports for insert with check (reporter_user_id = auth.uid());
create policy reports_staff_update on reports for update using (is_staff() and has_permission('reports.manage'));
create policy report_actions_staff on report_actions for select using (is_staff() and has_permission('reports.manage'));
create policy report_actions_insert on report_actions for insert with check (actor_id = auth.uid() and is_staff() and has_permission('reports.manage'));

create policy support_tickets_own on support_tickets for select using (user_id = auth.uid() or (is_staff() and has_permission('support.manage')));
create policy support_tickets_insert on support_tickets for insert with check (user_id = auth.uid());
create policy support_tickets_staff on support_tickets for update using (is_staff() and has_permission('support.manage'));
create policy support_messages_select on support_messages for select using (
  exists (select 1 from support_tickets t where t.id = ticket_id and (t.user_id = auth.uid() or (is_staff() and has_permission('support.manage')))));
create policy support_messages_insert on support_messages for insert with check (
  (sender_kind = 'user' and sender_id = auth.uid() and exists (select 1 from support_tickets t where t.id = ticket_id and t.user_id = auth.uid()))
  or (sender_kind = 'staff' and sender_id = auth.uid() and is_staff() and has_permission('support.manage')));
create policy support_notes_staff on support_internal_notes for all using (is_staff() and has_permission('support.manage')) with check (author_id = auth.uid() and is_staff() and has_permission('support.manage'));

create policy bugs_staff on bugs for select using (is_staff() and has_permission('bugs.read'));
create policy bugs_manage on bugs for all using (is_staff() and has_permission('bugs.manage')) with check (is_staff() and has_permission('bugs.manage'));
create policy bug_events_staff on bug_events for select using (is_staff() and has_permission('bugs.read'));
create policy bug_links_staff on bug_entity_links for select using (is_staff() and has_permission('bugs.read'));

create policy audit_logs_staff_read on audit_logs for select using (is_staff() and has_permission('audit.read'));
-- audit inserts happen only via record_audit() or the trusted server.
create policy security_events_staff on security_events for select using (is_staff() and has_permission('security.read'));
create policy recovery_actions_staff on recovery_actions for select using (is_staff() and has_permission('recovery.manage'));
create policy recovery_actions_manage on recovery_actions for all using (is_staff() and has_permission('recovery.manage')) with check (is_staff() and has_permission('recovery.manage'));
create policy export_jobs_staff on export_jobs for select using (requested_by = auth.uid() or (is_staff() and has_permission('exports.manage')));

-- ── Billing ────────────────────────────────────────────────
create policy plans_public_read on plans for select using (is_active or is_staff());
create policy plan_versions_public_read on plan_versions for select using (true);
create policy plan_features_public_read on plan_features for select using (true);
create policy subscriptions_own on subscriptions for select using (user_id = auth.uid() or (is_staff() and has_permission('billing.read')));
create policy subscription_events_own on subscription_events for select using (
  exists (select 1 from subscriptions s where s.id = subscription_id and s.user_id = auth.uid()) or (is_staff() and has_permission('billing.read')));
create policy usage_counters_own on usage_counters for select using (user_id = auth.uid() or (is_staff() and has_permission('billing.read')));
create policy payment_orders_own on payment_orders for select using (user_id = auth.uid() or (is_staff() and has_permission('billing.read')));
create policy payments_own on payments for select using (
  exists (select 1 from payment_orders o where o.id = order_id and o.user_id = auth.uid()) or (is_staff() and has_permission('billing.read')));
create policy payment_events_staff on payment_events for select using (is_staff() and has_permission('billing.read'));
create policy payment_recon_staff on payment_reconciliation_cases for select using (is_staff() and has_permission('billing.manage'));
create policy refunds_own on refunds for select using (
  exists (select 1 from payments p join payment_orders o on o.id = p.order_id where p.id = payment_id and o.user_id = auth.uid())
  or (is_staff() and has_permission('billing.read')));
create policy invoices_own on invoices for select using (user_id = auth.uid() or (is_staff() and has_permission('billing.read')));
create policy invoice_items_own on invoice_items for select using (
  exists (select 1 from invoices i where i.id = invoice_id and i.user_id = auth.uid()) or (is_staff() and has_permission('billing.read')));
create policy credit_notes_own on credit_notes for select using (
  exists (select 1 from invoices i where i.id = invoice_id and i.user_id = auth.uid()) or (is_staff() and has_permission('billing.read')));

-- ── Promotions ─────────────────────────────────────────────
create policy promotions_own on promotions for select using (builder_user_id = auth.uid() or status = 'live' or (is_staff() and has_permission('promotions.manage')));
create policy promotions_insert on promotions for insert with check (builder_user_id = auth.uid());
create policy promotions_update on promotions for update using (builder_user_id = auth.uid() or (is_staff() and has_permission('promotions.manage')));
create policy promotion_creatives_read on promotion_creatives for select using (
  exists (select 1 from promotions p where p.id = promotion_id and (p.builder_user_id = auth.uid() or p.status = 'live')) or (is_staff() and has_permission('promotions.manage')));
create policy promotion_creatives_write on promotion_creatives for all using (
  exists (select 1 from promotions p where p.id = promotion_id and p.builder_user_id = auth.uid()));
create policy promotion_schedules_read on promotion_schedules for select using (
  exists (select 1 from promotions p where p.id = promotion_id and p.builder_user_id = auth.uid()) or (is_staff() and has_permission('promotions.manage')));
create policy promotion_metrics_own on promotion_impressions for select using (
  exists (select 1 from promotions p where p.id = promotion_id and p.builder_user_id = auth.uid()) or (is_staff() and has_permission('promotions.manage')));
create policy promotion_clicks_own on promotion_clicks for select using (
  exists (select 1 from promotions p where p.id = promotion_id and p.builder_user_id = auth.uid()) or (is_staff() and has_permission('promotions.manage')));
create policy promotion_history_read on promotion_status_history for select using (
  exists (select 1 from promotions p where p.id = promotion_id and p.builder_user_id = auth.uid()) or (is_staff() and has_permission('promotions.manage')));

-- ── Provider and platform configuration ────────────────────
create policy provider_config_staff on provider_configurations for select using (is_staff() and has_permission('providers.read'));
create policy provider_config_admin on provider_configurations for all using (is_super_admin()) with check (is_super_admin());
create policy provider_health_staff on provider_health_checks for select using (is_staff() and has_permission('providers.read'));
create policy feature_flags_staff on feature_flags for select using (is_staff());
create policy feature_flags_admin on feature_flags for all using (is_super_admin()) with check (is_super_admin());
create policy system_settings_staff on system_settings for select using (is_staff());
create policy system_settings_admin on system_settings for all using (is_super_admin()) with check (is_super_admin());
create policy maintenance_events_read on maintenance_events for select using (true);
create policy maintenance_events_admin on maintenance_events for all using (is_super_admin()) with check (is_super_admin());
create policy redirects_read on redirects for select using (true);
create policy redirects_admin on redirects for all using (is_staff() and has_permission('content.manage')) with check (is_staff() and has_permission('content.manage'));
create policy seo_configs_read on seo_page_configs for select using (true);
create policy seo_configs_admin on seo_page_configs for all using (is_staff() and has_permission('content.manage')) with check (is_staff() and has_permission('content.manage'));

create policy cms_pages_public on cms_pages for select using (publication = 'published' or (is_staff() and has_permission('content.manage')));
create policy cms_pages_admin on cms_pages for all using (is_staff() and has_permission('content.manage')) with check (is_staff() and has_permission('content.manage'));
create policy cms_versions_public on cms_page_versions for select using (
  (is_current and exists (select 1 from cms_pages p where p.id = page_id and p.publication = 'published'))
  or (is_staff() and has_permission('content.manage')));
create policy cms_versions_admin on cms_page_versions for all using (is_staff() and has_permission('content.manage')) with check (is_staff() and has_permission('content.manage'));
create policy blog_public on blog_articles for select using (publication = 'published' or (is_staff() and has_permission('content.manage')));
create policy blog_admin on blog_articles for all using (is_staff() and has_permission('content.manage')) with check (is_staff() and has_permission('content.manage'));
create policy legal_public on legal_documents for select using (is_current or (is_staff() and has_permission('content.manage')));
create policy legal_admin on legal_documents for all using (is_staff() and has_permission('content.manage')) with check (is_staff() and has_permission('content.manage'));
