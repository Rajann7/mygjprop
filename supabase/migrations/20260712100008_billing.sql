-- 0008: Billing — plans, subscriptions, payments, invoices, refunds.
-- All money in bigint minor units (paise). Provider IDs indexed for
-- webhook reconciliation. Idempotency enforced on payment events.

create table plans (
  id uuid primary key default gen_random_uuid(),
  plan_key text not null unique,
  name text not null,
  audience public_role not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table plan_versions (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null references plans(id) on delete cascade,
  version int not null,
  price_minor bigint not null check (price_minor >= 0),
  currency text not null default 'INR',
  period_days int not null check (period_days > 0),
  is_current boolean not null default false,
  created_at timestamptz not null default now()
);
create unique index plan_versions_key on plan_versions (plan_id, version);
create unique index plan_versions_one_current on plan_versions (plan_id) where is_current;

create table plan_features (
  plan_id uuid not null references plans(id) on delete cascade,
  feature_key text not null,
  limit_value int,
  primary key (plan_id, feature_key)
);

create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  plan_version_id uuid not null references plan_versions(id),
  status subscription_status not null default 'none',
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancelled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index subscriptions_user_idx on subscriptions (user_id, status);
create trigger trg_subscriptions_updated before update on subscriptions for each row execute function set_updated_at();

create table subscription_events (
  id uuid primary key default gen_random_uuid(),
  subscription_id uuid not null references subscriptions(id) on delete cascade,
  kind text not null,
  detail jsonb not null default '{}',
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);

create table usage_counters (
  user_id uuid not null references profiles(user_id) on delete cascade,
  counter_key text not null,
  period_start date not null,
  used int not null default 0 check (used >= 0),
  primary key (user_id, counter_key, period_start)
);

create table payment_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  subscription_id uuid references subscriptions(id) on delete set null,
  amount_minor bigint not null check (amount_minor >= 0),
  currency text not null default 'INR',
  provider_key text not null default 'razorpay',
  provider_order_id text,
  status payment_status not null default 'created',
  idempotency_key text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index payment_orders_idem_key on payment_orders (idempotency_key) where idempotency_key is not null;
create index payment_orders_provider_idx on payment_orders (provider_order_id) where provider_order_id is not null;
create index payment_orders_user_idx on payment_orders (user_id, created_at desc);
create trigger trg_payment_orders_updated before update on payment_orders for each row execute function set_updated_at();

create table payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references payment_orders(id) on delete cascade,
  provider_payment_id text,
  amount_minor bigint not null check (amount_minor >= 0),
  status payment_status not null default 'pending',
  method text,
  captured_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index payments_provider_idx on payments (provider_payment_id) where provider_payment_id is not null;
create trigger trg_payments_updated before update on payments for each row execute function set_updated_at();

create table payment_events (
  id uuid primary key default gen_random_uuid(),
  payment_id uuid references payments(id) on delete set null,
  order_id uuid references payment_orders(id) on delete set null,
  provider_event_id text,
  kind text not null,
  payload jsonb not null default '{}',
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);
create unique index payment_events_provider_key on payment_events (provider_event_id) where provider_event_id is not null;

create table payment_reconciliation_cases (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references payment_orders(id) on delete set null,
  status text not null check (status in ('open','matched','manual_review','resolved')),
  detail jsonb not null default '{}',
  opened_at timestamptz not null default now(),
  resolved_at timestamptz
);

create table refunds (
  id uuid primary key default gen_random_uuid(),
  payment_id uuid not null references payments(id) on delete cascade,
  amount_minor bigint not null check (amount_minor >= 0),
  status payment_status not null default 'pending',
  provider_refund_id text,
  reason text not null,
  actor_id uuid,
  created_at timestamptz not null default now()
);
create index refunds_provider_idx on refunds (provider_refund_id) where provider_refund_id is not null;

create table invoices (
  id uuid primary key default gen_random_uuid(),
  invoice_number text not null unique,
  user_id uuid not null references profiles(user_id) on delete cascade,
  order_id uuid references payment_orders(id) on delete set null,
  total_minor bigint not null check (total_minor >= 0),
  tax_minor bigint not null default 0 check (tax_minor >= 0),
  currency text not null default 'INR',
  issued_at timestamptz not null default now(),
  file_path text
);
create index invoices_user_idx on invoices (user_id, issued_at desc);

create table invoice_items (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid not null references invoices(id) on delete cascade,
  description text not null,
  quantity int not null default 1 check (quantity > 0),
  unit_minor bigint not null check (unit_minor >= 0),
  total_minor bigint not null check (total_minor >= 0)
);

create table credit_notes (
  id uuid primary key default gen_random_uuid(),
  credit_note_number text not null unique,
  invoice_id uuid not null references invoices(id) on delete cascade,
  amount_minor bigint not null check (amount_minor >= 0),
  reason text not null,
  issued_at timestamptz not null default now()
);
