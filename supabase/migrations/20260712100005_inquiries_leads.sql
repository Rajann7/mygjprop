-- 0005: Direct Inquiry and unified Leads workspace.
-- Every lead has exactly one valid source relationship (property XOR project
-- XOR unit XOR requirement). Inquiries are idempotency-protected.

create table direct_inquiries (
  id uuid primary key default gen_random_uuid(),
  sender_user_id uuid not null references profiles(user_id) on delete cascade,
  property_id uuid references properties(id) on delete set null,
  project_id uuid references projects(id) on delete set null,
  unit_id uuid references project_units(id) on delete set null,
  requirement_id uuid references requirements(id) on delete set null,
  message text not null check (char_length(message) between 1 and 4000),
  consent boolean not null,
  idempotency_key text,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now(),
  constraint inquiry_one_source check (
    (property_id is not null)::int + (project_id is not null)::int
    + (unit_id is not null)::int + (requirement_id is not null)::int = 1
  ),
  constraint inquiry_consent_required check (consent)
);
create unique index direct_inquiries_idem_key on direct_inquiries (idempotency_key) where idempotency_key is not null;
create index direct_inquiries_sender_idx on direct_inquiries (sender_user_id, created_at desc);

create table leads (
  id uuid primary key default gen_random_uuid(),
  inquiry_id uuid references direct_inquiries(id) on delete set null,
  owner_user_id uuid not null references profiles(user_id) on delete cascade,
  sender_user_id uuid not null references profiles(user_id) on delete cascade,
  source_kind lead_source_kind not null,
  property_id uuid references properties(id) on delete set null,
  project_id uuid references projects(id) on delete set null,
  unit_id uuid references project_units(id) on delete set null,
  requirement_id uuid references requirements(id) on delete set null,
  status lead_status not null default 'new',
  priority lead_priority not null default 'medium',
  last_activity_at timestamptz not null default now(),
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lead_one_source check (
    (property_id is not null)::int + (project_id is not null)::int
    + (unit_id is not null)::int + (requirement_id is not null)::int = 1
  ),
  constraint lead_source_kind_matches check (
    (source_kind = 'property' and property_id is not null)
    or (source_kind = 'project' and project_id is not null)
    or (source_kind = 'unit' and unit_id is not null)
    or (source_kind = 'requirement' and requirement_id is not null)
  )
);
create index leads_owner_status_idx on leads (owner_user_id, status) where deleted_at is null;
create index leads_owner_activity_idx on leads (owner_user_id, last_activity_at desc) where deleted_at is null;
create index leads_property_idx on leads (property_id) where property_id is not null;
create index leads_project_idx on leads (project_id) where project_id is not null;
create trigger trg_leads_updated before update on leads for each row execute function set_updated_at();

create table lead_participants (
  lead_id uuid not null references leads(id) on delete cascade,
  user_id uuid not null references profiles(user_id) on delete cascade,
  participant_role text not null check (participant_role in ('owner','sender','staff')),
  added_at timestamptz not null default now(),
  primary key (lead_id, user_id)
);

create table lead_messages (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  sender_user_id uuid not null references profiles(user_id) on delete cascade,
  body text not null check (char_length(body) between 1 and 4000),
  status message_status not null default 'sent',
  created_at timestamptz not null default now()
);
create index lead_messages_lead_idx on lead_messages (lead_id, created_at);

create table lead_message_reads (
  message_id uuid not null references lead_messages(id) on delete cascade,
  user_id uuid not null references profiles(user_id) on delete cascade,
  read_at timestamptz not null default now(),
  primary key (message_id, user_id)
);

create table lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  author_user_id uuid not null references profiles(user_id) on delete cascade,
  body text not null check (char_length(body) between 1 and 4000),
  created_at timestamptz not null default now()
);
create index lead_notes_lead_idx on lead_notes (lead_id, created_at desc);

create table lead_follow_ups (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  owner_user_id uuid not null references profiles(user_id) on delete cascade,
  due_at timestamptz not null,
  note text,
  status follow_up_status not null default 'scheduled',
  completed_at timestamptz,
  created_at timestamptz not null default now()
);
create index lead_follow_ups_due_idx on lead_follow_ups (owner_user_id, due_at) where status in ('scheduled','due');

create table lead_activity_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  actor_id uuid,
  kind text not null,
  payload jsonb not null default '{}',
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);
create index lead_activity_events_idx on lead_activity_events (lead_id, created_at desc);

create table lead_status_history (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  from_status lead_status,
  to_status lead_status not null,
  actor_id uuid,
  reason text,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);

create table lead_reports (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  reporter_user_id uuid not null references profiles(user_id) on delete cascade,
  reason text not null,
  status report_status not null default 'open',
  created_at timestamptz not null default now()
);
