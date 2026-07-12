-- 0003: Gujarat textual location hierarchy with enforced parent-child levels.
-- State → District → Taluka → City → Village/Locality. No map/geo dependency.

create table locations (
  id uuid primary key default gen_random_uuid(),
  level location_level not null,
  name text not null check (char_length(name) between 1 and 120),
  slug text not null,
  parent_id uuid references locations(id) on delete restrict,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  -- state has no parent; every other level requires one
  constraint locations_parent_rule check ((level = 'state') = (parent_id is null))
);
create unique index locations_slug_per_parent on locations (coalesce(parent_id, '00000000-0000-0000-0000-000000000000'::uuid), slug);
create index locations_parent_idx on locations (parent_id);
create index locations_level_name_idx on locations (level, name text_pattern_ops);
create index locations_slug_idx on locations (slug);
create trigger trg_locations_updated before update on locations for each row execute function set_updated_at();

-- Enforce correct parent level (district under state, etc.).
create or replace function check_location_parent() returns trigger
language plpgsql as $$
declare parent_level location_level;
begin
  if new.parent_id is null then return new; end if;
  select level into parent_level from locations where id = new.parent_id;
  if (new.level = 'district' and parent_level = 'state')
    or (new.level = 'taluka' and parent_level = 'district')
    or (new.level = 'city' and parent_level = 'taluka')
    or (new.level = 'locality' and parent_level = 'city') then
    return new;
  end if;
  raise exception 'invalid location hierarchy: % under %', new.level, parent_level;
end $$;
create trigger trg_locations_hierarchy before insert or update on locations
for each row execute function check_location_parent();

create table location_aliases (
  id uuid primary key default gen_random_uuid(),
  location_id uuid not null references locations(id) on delete cascade,
  alias text not null,
  created_at timestamptz not null default now()
);
create unique index location_aliases_key on location_aliases (location_id, lower(alias));
create index location_aliases_alias_idx on location_aliases (lower(alias) text_pattern_ops);

create table missing_location_requests (
  id uuid primary key default gen_random_uuid(),
  requested_by uuid references profiles(user_id) on delete set null,
  level location_level not null,
  name text not null,
  parent_hint text,
  status moderation_status not null default 'pending',
  resolved_location_id uuid references locations(id),
  created_at timestamptz not null default now()
);

create table location_slug_history (
  id uuid primary key default gen_random_uuid(),
  location_id uuid not null references locations(id) on delete cascade,
  old_slug text not null,
  changed_at timestamptz not null default now()
);
create index location_slug_history_idx on location_slug_history (old_slug);
