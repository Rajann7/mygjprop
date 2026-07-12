-- 0002: Identity, profiles, role assignment, account history, consent,
-- verification, change requests, recovery, session metadata.
-- Ownership: user_id references auth.users. One active public role per user.

create table profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role public_role not null,
  full_name text not null check (char_length(full_name) between 2 and 120),
  email text not null check (position('@' in email) > 1),
  mobile text not null check (mobile ~ '^[6-9][0-9]{9}$'),
  account_status account_status not null default 'pending_verification',
  onboarding_status onboarding_status not null default 'registered',
  profile_completion profile_completion not null default 'minimal',
  verification verification_status not null default 'unverified',
  avatar_media_id uuid,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index profiles_mobile_key on profiles (mobile) where deleted_at is null;
create unique index profiles_email_key on profiles (lower(email)) where deleted_at is null;
create trigger trg_profiles_updated before update on profiles for each row execute function set_updated_at();

-- Public role assignment history (current role lives on profiles.role).
create table role_assignments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  role public_role not null,
  active boolean not null default true,
  assigned_at timestamptz not null default now(),
  revoked_at timestamptz
);
create unique index role_assignments_one_active on role_assignments (user_id) where active;

create table owner_profiles (
  user_id uuid primary key references profiles(user_id) on delete cascade,
  preferred_city_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_owner_profiles_updated before update on owner_profiles for each row execute function set_updated_at();

create table broker_profiles (
  user_id uuid primary key references profiles(user_id) on delete cascade,
  business_name text not null default '',
  rera_number text,
  about text,
  service_city_ids uuid[] not null default '{}',
  public_slug text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index broker_profiles_slug_key on broker_profiles (public_slug) where public_slug is not null;
create trigger trg_broker_profiles_updated before update on broker_profiles for each row execute function set_updated_at();

create table builder_profiles (
  user_id uuid primary key references profiles(user_id) on delete cascade,
  company_name text not null default '',
  rera_number text,
  about text,
  established_year int check (established_year between 1900 and 2100),
  public_slug text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index builder_profiles_slug_key on builder_profiles (public_slug) where public_slug is not null;
create trigger trg_builder_profiles_updated before update on builder_profiles for each row execute function set_updated_at();

create table account_status_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  from_status account_status,
  to_status account_status not null,
  actor_id uuid,
  reason text,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);

create table role_change_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  from_role public_role not null,
  to_role public_role not null,
  status moderation_status not null default 'pending',
  reason text,
  decided_by uuid,
  decided_at timestamptz,
  created_at timestamptz not null default now()
);

create table consent_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  consent_key text not null,
  granted boolean not null,
  source text not null default 'web',
  created_at timestamptz not null default now()
);
create index consent_records_user_idx on consent_records (user_id, consent_key);

create table profile_verification_cases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  status verification_status not null default 'pending',
  reviewer_id uuid,
  reason text,
  created_at timestamptz not null default now(),
  decided_at timestamptz
);

create table profile_verification_documents (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references profile_verification_cases(id) on delete cascade,
  storage_path text not null,
  doc_kind text not null,
  created_at timestamptz not null default now()
);

create table mobile_change_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  new_mobile text not null check (new_mobile ~ '^[6-9][0-9]{9}$'),
  status moderation_status not null default 'pending',
  verified_at timestamptz,
  created_at timestamptz not null default now()
);

create table email_change_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  new_email text not null check (position('@' in new_email) > 1),
  status moderation_status not null default 'pending',
  verified_at timestamptz,
  created_at timestamptz not null default now()
);

create table account_recovery_cases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  status recovery_status not null default 'requested',
  reason text not null,
  handled_by uuid,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now(),
  decided_at timestamptz
);

create table session_metadata (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  session_id text not null,
  device_label text,
  ip_hash text,
  user_agent text,
  last_seen_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
create index session_metadata_user_idx on session_metadata (user_id, last_seen_at desc);
