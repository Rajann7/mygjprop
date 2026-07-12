-- 0004: Marketplace — properties, projects, units, requirements, saved items.
-- Money uses bigint minor units (paise). Soft delete via deleted_at with
-- consistency checks. Publication requires approved moderation (view-level).

-- ── Properties ─────────────────────────────────────────────
create table properties (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references profiles(user_id) on delete cascade,
  title text not null check (char_length(title) between 5 and 160),
  slug text not null,
  purpose property_purpose not null,
  property_type text not null,
  price_minor bigint check (price_minor is null or price_minor >= 0),
  city_id uuid not null references locations(id),
  locality_id uuid references locations(id),
  address_text text not null default '',
  moderation moderation_status not null default 'pending',
  publication publication_status not null default 'draft',
  lifecycle lifecycle_status not null default 'active',
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint properties_soft_delete_consistent check ((lifecycle = 'deleted') = (deleted_at is not null))
);
create unique index properties_slug_key on properties (slug);
create index properties_owner_idx on properties (owner_user_id, publication) where deleted_at is null;
create index properties_public_idx on properties (city_id, publication, moderation) where deleted_at is null and publication = 'published' and moderation = 'approved';
create index properties_locality_idx on properties (locality_id) where deleted_at is null;
create trigger trg_properties_updated before update on properties for each row execute function set_updated_at();

create table property_details (
  property_id uuid primary key references properties(id) on delete cascade,
  bedrooms int check (bedrooms between 0 and 50),
  bathrooms int check (bathrooms between 0 and 50),
  carpet_area_sqft numeric check (carpet_area_sqft is null or carpet_area_sqft >= 0),
  built_up_area_sqft numeric check (built_up_area_sqft is null or built_up_area_sqft >= 0),
  floor_number int,
  total_floors int,
  furnishing text,
  facing text,
  age_years int check (age_years is null or age_years >= 0),
  description text,
  updated_at timestamptz not null default now()
);
create trigger trg_property_details_updated before update on property_details for each row execute function set_updated_at();

create table property_amenities (
  property_id uuid not null references properties(id) on delete cascade,
  amenity_key text not null,
  primary key (property_id, amenity_key)
);

create table property_media (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references properties(id) on delete cascade,
  storage_path text not null,
  media_kind text not null default 'image',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
create index property_media_idx on property_media (property_id, sort_order);

create table property_drafts (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references profiles(user_id) on delete cascade,
  payload jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_property_drafts_updated before update on property_drafts for each row execute function set_updated_at();

create table property_status_history (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references properties(id) on delete cascade,
  field text not null,
  from_value text,
  to_value text not null,
  actor_id uuid,
  reason text,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);
create index property_status_history_idx on property_status_history (property_id, created_at desc);

create table saved_properties (
  user_id uuid not null references profiles(user_id) on delete cascade,
  property_id uuid not null references properties(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, property_id)
);

-- ── Projects and Units ─────────────────────────────────────
create table projects (
  id uuid primary key default gen_random_uuid(),
  builder_user_id uuid not null references profiles(user_id) on delete cascade,
  name text not null check (char_length(name) between 3 and 160),
  slug text not null,
  city_id uuid not null references locations(id),
  locality_id uuid references locations(id),
  address_text text not null default '',
  rera_number text,
  possession_by date,
  moderation moderation_status not null default 'pending',
  publication publication_status not null default 'draft',
  lifecycle lifecycle_status not null default 'active',
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint projects_soft_delete_consistent check ((lifecycle = 'deleted') = (deleted_at is not null))
);
create unique index projects_slug_key on projects (slug);
create index projects_builder_idx on projects (builder_user_id, publication) where deleted_at is null;
create index projects_public_idx on projects (city_id, publication, moderation) where deleted_at is null and publication = 'published' and moderation = 'approved';
create trigger trg_projects_updated before update on projects for each row execute function set_updated_at();

create table project_details (
  project_id uuid primary key references projects(id) on delete cascade,
  description text,
  total_towers int check (total_towers is null or total_towers >= 0),
  total_units int check (total_units is null or total_units >= 0),
  land_area_sqyd numeric check (land_area_sqyd is null or land_area_sqyd >= 0),
  price_min_minor bigint check (price_min_minor is null or price_min_minor >= 0),
  price_max_minor bigint check (price_max_minor is null or price_max_minor >= 0),
  updated_at timestamptz not null default now(),
  constraint project_price_range check (price_min_minor is null or price_max_minor is null or price_min_minor <= price_max_minor)
);
create trigger trg_project_details_updated before update on project_details for each row execute function set_updated_at();

create table project_amenities (
  project_id uuid not null references projects(id) on delete cascade,
  amenity_key text not null,
  primary key (project_id, amenity_key)
);

create table project_media (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  storage_path text not null,
  media_kind text not null default 'image',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
create index project_media_idx on project_media (project_id, sort_order);

create table project_documents (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  storage_path text not null,
  doc_kind text not null,
  is_public boolean not null default false,
  created_at timestamptz not null default now()
);

create table project_drafts (
  id uuid primary key default gen_random_uuid(),
  builder_user_id uuid not null references profiles(user_id) on delete cascade,
  payload jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_project_drafts_updated before update on project_drafts for each row execute function set_updated_at();

create table project_status_history (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  field text not null,
  from_value text,
  to_value text not null,
  actor_id uuid,
  reason text,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);
create index project_status_history_idx on project_status_history (project_id, created_at desc);

-- Units always live inside a project.
create table project_units (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  unit_label text not null,
  unit_type text not null,
  carpet_area_sqft numeric check (carpet_area_sqft is null or carpet_area_sqft >= 0),
  price_minor bigint check (price_minor is null or price_minor >= 0),
  total_count int not null default 1 check (total_count >= 0),
  available_count int not null default 1 check (available_count >= 0),
  publication publication_status not null default 'draft',
  lifecycle lifecycle_status not null default 'active',
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint unit_inventory_bound check (available_count <= total_count),
  constraint unit_soft_delete_consistent check ((lifecycle = 'deleted') = (deleted_at is not null))
);
create unique index project_units_label_key on project_units (project_id, unit_label);
create index project_units_project_idx on project_units (project_id) where deleted_at is null;
create trigger trg_project_units_updated before update on project_units for each row execute function set_updated_at();

create table unit_media (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid not null references project_units(id) on delete cascade,
  storage_path text not null,
  media_kind text not null default 'image',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table unit_inventory_events (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid not null references project_units(id) on delete cascade,
  delta int not null,
  reason text not null,
  actor_id uuid,
  created_at timestamptz not null default now()
);
create index unit_inventory_events_idx on unit_inventory_events (unit_id, created_at desc);

create table unit_price_history (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid not null references project_units(id) on delete cascade,
  old_price_minor bigint,
  new_price_minor bigint check (new_price_minor is null or new_price_minor >= 0),
  actor_id uuid,
  created_at timestamptz not null default now()
);

create table saved_projects (
  user_id uuid not null references profiles(user_id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, project_id)
);

-- ── Requirements ───────────────────────────────────────────
create table requirements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  title text not null check (char_length(title) between 5 and 160),
  purpose property_purpose not null,
  city_id uuid references locations(id),
  budget_min_minor bigint check (budget_min_minor is null or budget_min_minor >= 0),
  budget_max_minor bigint check (budget_max_minor is null or budget_max_minor >= 0),
  details text,
  moderation moderation_status not null default 'pending',
  lifecycle lifecycle_status not null default 'active',
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint requirement_budget_range check (budget_min_minor is null or budget_max_minor is null or budget_min_minor <= budget_max_minor),
  constraint requirement_soft_delete_consistent check ((lifecycle = 'deleted') = (deleted_at is not null))
);
create index requirements_user_idx on requirements (user_id) where deleted_at is null;
create trigger trg_requirements_updated before update on requirements for each row execute function set_updated_at();

create table requirement_drafts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  payload jsonb not null default '{}',
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
create trigger trg_requirement_drafts_updated before update on requirement_drafts for each row execute function set_updated_at();

create table requirement_responses (
  id uuid primary key default gen_random_uuid(),
  requirement_id uuid not null references requirements(id) on delete cascade,
  responder_user_id uuid not null references profiles(user_id) on delete cascade,
  message text not null,
  created_at timestamptz not null default now()
);
create unique index requirement_responses_once on requirement_responses (requirement_id, responder_user_id);

create table requirement_status_history (
  id uuid primary key default gen_random_uuid(),
  requirement_id uuid not null references requirements(id) on delete cascade,
  field text not null,
  from_value text,
  to_value text not null,
  actor_id uuid,
  correlation_id uuid not null default new_correlation_id(),
  created_at timestamptz not null default now()
);

create table saved_searches (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(user_id) on delete cascade,
  label text not null,
  query jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create unique index saved_searches_label_key on saved_searches (user_id, label);
