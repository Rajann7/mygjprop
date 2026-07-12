-- 0006: Notifications, outbox events, background jobs, provider deliveries.

create table notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  channel notification_channel not null default 'in_app',
  title text not null,
  body text not null,
  entity_kind text,
  entity_id uuid,
  destination_path text,
  read_at timestamptz,
  archived_at timestamptz,
  created_at timestamptz not null default now()
);
create index notifications_user_unread_idx on notifications (user_id, created_at desc) where read_at is null and archived_at is null;
create index notifications_user_idx on notifications (user_id, created_at desc);

create table outbox_events (
  id uuid primary key default gen_random_uuid(),
  topic text not null,
  payload jsonb not null default '{}',
  idempotency_key text,
  processed_at timestamptz,
  attempts int not null default 0 check (attempts >= 0),
  next_attempt_at timestamptz,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);
create unique index outbox_events_idem_key on outbox_events (idempotency_key) where idempotency_key is not null;
create index outbox_events_pending_idx on outbox_events (next_attempt_at) where processed_at is null;

create table background_job_runs (
  id uuid primary key default gen_random_uuid(),
  job_name text not null,
  status text not null check (status in ('running','succeeded','failed')),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  detail jsonb not null default '{}'
);
create index background_job_runs_idx on background_job_runs (job_name, started_at desc);

create table scheduler_runs (
  id uuid primary key default gen_random_uuid(),
  schedule_key text not null,
  fired_at timestamptz not null default now(),
  status text not null check (status in ('fired','skipped','failed')),
  detail jsonb not null default '{}'
);
create index scheduler_runs_idx on scheduler_runs (schedule_key, fired_at desc);

create table provider_delivery_events (
  id uuid primary key default gen_random_uuid(),
  provider_key text not null,
  channel notification_channel not null,
  recipient_ref text not null,
  status text not null check (status in ('queued','sent','delivered','failed','bounced')),
  provider_message_id text,
  error_detail text,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);
create index provider_delivery_events_idx on provider_delivery_events (provider_key, created_at desc);
create index provider_delivery_provider_msg_idx on provider_delivery_events (provider_message_id) where provider_message_id is not null;
