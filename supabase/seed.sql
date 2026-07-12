-- Development seed (applied only by `supabase db reset` locally or explicit
-- run — never part of production migrations). Deterministic IDs. Clearly
-- development data; contains no fake users, leads, or payments.
-- Role test accounts: create via the documented dev process (Supabase Auth
-- dashboard or CLI OTP sign-in) — never seeded as fake rows here.

-- ── Gujarat location foundation ────────────────────────────
insert into locations (id, level, name, slug, parent_id) values
  ('11111111-1111-1111-1111-111111111111','state','Gujarat','gujarat',null)
on conflict do nothing;

insert into locations (id, level, name, slug, parent_id) values
  ('22222222-1111-1111-1111-111111111101','district','Ahmedabad','ahmedabad','11111111-1111-1111-1111-111111111111'),
  ('22222222-1111-1111-1111-111111111102','district','Surat','surat','11111111-1111-1111-1111-111111111111'),
  ('22222222-1111-1111-1111-111111111103','district','Vadodara','vadodara','11111111-1111-1111-1111-111111111111'),
  ('22222222-1111-1111-1111-111111111104','district','Rajkot','rajkot','11111111-1111-1111-1111-111111111111'),
  ('22222222-1111-1111-1111-111111111105','district','Gandhinagar','gandhinagar','11111111-1111-1111-1111-111111111111')
on conflict do nothing;

insert into locations (id, level, name, slug, parent_id) values
  ('33333333-1111-1111-1111-111111111101','taluka','Ahmedabad City','ahmedabad-city','22222222-1111-1111-1111-111111111101'),
  ('33333333-1111-1111-1111-111111111102','taluka','Surat City','surat-city','22222222-1111-1111-1111-111111111102'),
  ('33333333-1111-1111-1111-111111111103','taluka','Vadodara City','vadodara-city','22222222-1111-1111-1111-111111111103'),
  ('33333333-1111-1111-1111-111111111104','taluka','Rajkot City','rajkot-city','22222222-1111-1111-1111-111111111104'),
  ('33333333-1111-1111-1111-111111111105','taluka','Gandhinagar','gandhinagar-taluka','22222222-1111-1111-1111-111111111105')
on conflict do nothing;

insert into locations (id, level, name, slug, parent_id) values
  ('44444444-1111-1111-1111-111111111101','city','Ahmedabad','ahmedabad-city-c','33333333-1111-1111-1111-111111111101'),
  ('44444444-1111-1111-1111-111111111102','city','Surat','surat-c','33333333-1111-1111-1111-111111111102'),
  ('44444444-1111-1111-1111-111111111103','city','Vadodara','vadodara-c','33333333-1111-1111-1111-111111111103'),
  ('44444444-1111-1111-1111-111111111104','city','Rajkot','rajkot-c','33333333-1111-1111-1111-111111111104'),
  ('44444444-1111-1111-1111-111111111105','city','Gandhinagar','gandhinagar-c','33333333-1111-1111-1111-111111111105')
on conflict do nothing;

insert into locations (id, level, name, slug, parent_id) values
  ('55555555-1111-1111-1111-111111111101','locality','Satellite','satellite','44444444-1111-1111-1111-111111111101'),
  ('55555555-1111-1111-1111-111111111102','locality','Bopal','bopal','44444444-1111-1111-1111-111111111101'),
  ('55555555-1111-1111-1111-111111111103','locality','Vesu','vesu','44444444-1111-1111-1111-111111111102'),
  ('55555555-1111-1111-1111-111111111104','locality','Alkapuri','alkapuri','44444444-1111-1111-1111-111111111103'),
  ('55555555-1111-1111-1111-111111111105','locality','Kalavad Road','kalavad-road','44444444-1111-1111-1111-111111111104')
on conflict do nothing;

-- ── Basic plans (development pricing, INR minor units) ─────
insert into plans (id, plan_key, name, audience, is_active) values
  ('66666666-1111-1111-1111-111111111101','owner_free','Owner Free','owner',true),
  ('66666666-1111-1111-1111-111111111102','broker_standard','Broker Standard','broker',true),
  ('66666666-1111-1111-1111-111111111103','builder_standard','Builder Standard','builder',true)
on conflict do nothing;

insert into plan_versions (id, plan_id, version, price_minor, currency, period_days, is_current) values
  ('77777777-1111-1111-1111-111111111101','66666666-1111-1111-1111-111111111101',1,0,'INR',365,true),
  ('77777777-1111-1111-1111-111111111102','66666666-1111-1111-1111-111111111102',1,99900,'INR',30,true),
  ('77777777-1111-1111-1111-111111111103','66666666-1111-1111-1111-111111111103',1,499900,'INR',30,true)
on conflict do nothing;

insert into plan_features (plan_id, feature_key, limit_value) values
  ('66666666-1111-1111-1111-111111111101','active_properties',3),
  ('66666666-1111-1111-1111-111111111102','active_listings',50),
  ('66666666-1111-1111-1111-111111111103','active_projects',10)
on conflict do nothing;
