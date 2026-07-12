-- 0007: Internal platform — staff, permissions, moderation, reports, support,
-- bugs, audit, security, recovery, exports. Audit logs are append-only.

create table staff_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  internal_role internal_role not null default 'staff',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_staff_profiles_updated before update on staff_profiles for each row execute function set_updated_at();

create table staff_roles (
  id uuid primary key default gen_random_uuid(),
  role_key text not null unique,
  label text not null,
  description text,
  created_at timestamptz not null default now()
);

create table permissions (
  permission_key text primary key,
  label text not null,
  category text not null,
  is_sensitive boolean not null default false
);

create table staff_role_permissions (
  role_id uuid not null references staff_roles(id) on delete cascade,
  permission_key text not null references permissions(permission_key) on delete cascade,
  primary key (role_id, permission_key)
);

create table staff_user_roles (
  user_id uuid not null references staff_profiles(user_id) on delete cascade,
  role_id uuid not null references staff_roles(id) on delete cascade,
  assigned_by uuid,
  assigned_at timestamptz not null default now(),
  primary key (user_id, role_id)
);

create table staff_permission_overrides (
  user_id uuid not null references staff_profiles(user_id) on delete cascade,
  permission_key text not null references permissions(permission_key) on delete cascade,
  granted boolean not null,
  reason text not null,
  set_by uuid,
  created_at timestamptz not null default now(),
  primary key (user_id, permission_key)
);

create table moderation_cases (
  id uuid primary key default gen_random_uuid(),
  entity_kind text not null,
  entity_id uuid not null,
  status moderation_status not null default 'pending',
  assigned_to uuid references staff_profiles(user_id) on delete set null,
  opened_at timestamptz not null default now(),
  closed_at timestamptz
);
create index moderation_cases_queue_idx on moderation_cases (status, opened_at) where closed_at is null;
create index moderation_cases_entity_idx on moderation_cases (entity_kind, entity_id);

create table moderation_actions (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references moderation_cases(id) on delete cascade,
  actor_id uuid not null,
  action text not null,
  reason text not null,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);

create table reports (
  id uuid primary key default gen_random_uuid(),
  reporter_user_id uuid references profiles(user_id) on delete set null,
  entity_kind text not null,
  entity_id uuid not null,
  reason text not null,
  status report_status not null default 'open',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index reports_queue_idx on reports (status, created_at);
create trigger trg_reports_updated before update on reports for each row execute function set_updated_at();

create table report_actions (
  id uuid primary key default gen_random_uuid(),
  report_id uuid not null references reports(id) on delete cascade,
  actor_id uuid not null,
  action text not null,
  reason text,
  created_at timestamptz not null default now()
);

create table support_tickets (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  user_id uuid references profiles(user_id) on delete set null,
  subject text not null,
  status support_ticket_status not null default 'open',
  assigned_to uuid references staff_profiles(user_id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index support_tickets_queue_idx on support_tickets (status, updated_at desc);
create trigger trg_support_tickets_updated before update on support_tickets for each row execute function set_updated_at();

create table support_messages (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references support_tickets(id) on delete cascade,
  sender_kind text not null check (sender_kind in ('user','staff')),
  sender_id uuid,
  body text not null,
  created_at timestamptz not null default now()
);
create index support_messages_idx on support_messages (ticket_id, created_at);

create table support_internal_notes (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references support_tickets(id) on delete cascade,
  author_id uuid not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table bugs (
  id uuid primary key default gen_random_uuid(),
  reporter_kind text not null check (reporter_kind in ('user','staff','system')),
  reporter_id uuid,
  summary text not null,
  detail text,
  status bug_status not null default 'reported',
  severity text check (severity in ('low','medium','high','critical')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index bugs_status_idx on bugs (status, updated_at desc);
create trigger trg_bugs_updated before update on bugs for each row execute function set_updated_at();

create table bug_events (
  id uuid primary key default gen_random_uuid(),
  bug_id uuid not null references bugs(id) on delete cascade,
  actor_id uuid,
  kind text not null,
  detail jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table bug_entity_links (
  bug_id uuid not null references bugs(id) on delete cascade,
  entity_kind text not null,
  entity_id uuid not null,
  primary key (bug_id, entity_kind, entity_id)
);

create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid,
  actor_role text not null,
  action text not null,
  entity_kind text not null,
  entity_id uuid,
  reason text,
  before_state jsonb,
  after_state jsonb,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);
create index audit_logs_entity_idx on audit_logs (entity_kind, entity_id, created_at desc);
create index audit_logs_actor_idx on audit_logs (actor_id, created_at desc);
create index audit_logs_action_idx on audit_logs (action, created_at desc);

create table security_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  kind text not null,
  ip_hash text,
  detail jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index security_events_idx on security_events (kind, created_at desc);

create table recovery_actions (
  id uuid primary key default gen_random_uuid(),
  entity_kind text not null,
  entity_id uuid not null,
  status recovery_status not null default 'requested',
  requested_by uuid,
  decided_by uuid,
  reason text not null,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now(),
  decided_at timestamptz
);
create index recovery_actions_entity_idx on recovery_actions (entity_kind, entity_id);

create table export_jobs (
  id uuid primary key default gen_random_uuid(),
  requested_by uuid not null,
  scope text not null,
  status text not null check (status in ('requested','running','completed','failed','denied')),
  reason text not null,
  file_path text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

-- Append-only enforcement for audit logs.
create or replace function forbid_mutation() returns trigger
language plpgsql as $$
begin
  raise exception 'this table is append-only';
end $$;
create trigger trg_audit_logs_no_update before update or delete on audit_logs for each row execute function forbid_mutation();

-- Sensitive action audit helper (called from trusted server pathways).
create or replace function record_audit(
  p_actor_id uuid, p_actor_role text, p_action text,
  p_entity_kind text, p_entity_id uuid, p_reason text,
  p_before jsonb default null, p_after jsonb default null,
  p_correlation_id uuid default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_id uuid;
begin
  insert into audit_logs (actor_id, actor_role, action, entity_kind, entity_id, reason, before_state, after_state, correlation_id)
  values (p_actor_id, p_actor_role, p_action, p_entity_kind, p_entity_id, p_reason, p_before, p_after, coalesce(p_correlation_id, new_correlation_id()))
  returning id into v_id;
  return v_id;
end $$;
revoke execute on function record_audit from public, anon, authenticated;
