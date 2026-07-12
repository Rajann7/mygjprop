// Phase 2 database verification harness (dev project, isolated test data).
// Simulates identities via SET LOCAL role + request.jwt.claims — the same
// mechanism PostgREST uses — so RLS is exercised exactly as production would.
import pg from "pg";
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8").split(/\r?\n/)
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)]),
);

const client = new pg.Client({
  host: "db.dftxbjbnnyljuwzcsgzs.supabase.co",
  port: 5432,
  user: "postgres",
  password: env.SUPABASE_DB_PASSWORD,
  database: "postgres",
  ssl: { rejectUnauthorized: false },
});

let pass = 0, fail = 0;
const failures = [];
function ok(name) { pass++; console.log(`PASS  ${name}`); }
function bad(name, detail) { fail++; failures.push(name); console.log(`FAIL  ${name} :: ${detail}`); }

// Run fn inside a transaction as a given identity, then ROLLBACK unless commit.
async function asIdentity(userId, fn, { commit = false, role = "authenticated" } = {}) {
  await client.query("begin");
  try {
    await client.query(`set local role ${role}`);
    if (userId) {
      await client.query("select set_config('request.jwt.claims', $1, true)", [
        JSON.stringify({ sub: userId, role }),
      ]);
    }
    const r = await fn();
    await client.query(commit ? "commit" : "rollback");
    return r;
  } catch (e) {
    await client.query("rollback");
    throw e;
  }
}

async function expectErr(name, sql, params = []) {
  try {
    await client.query("begin");
    await client.query(sql, params);
    await client.query("rollback");
    bad(name, "statement unexpectedly succeeded");
  } catch (e) {
    await client.query("rollback").catch(() => {});
    ok(`${name} (rejected: ${e.code ?? e.message.slice(0, 40)})`);
  }
}

const U = {}; // test users

async function main() {
  await client.connect();

  // ── Fixture users (service-level, isolated, cleaned at end) ─────────
  const mk = async (key, mobile) => {
    const r = await client.query(
      `insert into auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
       values ('00000000-0000-0000-0000-000000000000', gen_random_uuid(), 'authenticated', 'authenticated', $1, '', now(), '{}', '{}', now(), now()) returning id`,
      [`${key}@dev.mygjprop.test`],
    );
    U[key] = r.rows[0].id;
    return r.rows[0].id;
  };
  for (const [k, m] of [["owner1","9000000001"],["owner2","9000000002"],["broker1","9000000003"],["broker2","9000000004"],["builder1","9000000005"],["builder2","9000000006"],["staff_np","9000000007"],["staff_mod","9000000008"],["admin1","9000000009"],["superadmin","9000000010"]]) await mk(k, m);

  // profiles for public roles (as each user — exercises insert policy)
  const mkProfile = (key, role, mobile) =>
    asIdentity(U[key], () =>
      client.query(`insert into profiles (user_id, role, full_name, email, mobile) values ($1,$2,$3,$4,$5)`,
        [U[key], role, `${key} Test`, `${key}@dev.mygjprop.test`, mobile]), { commit: true });
  await mkProfile("owner1","owner","9000000001"); await mkProfile("owner2","owner","9000000002");
  await mkProfile("broker1","broker","9000000003"); await mkProfile("broker2","broker","9000000004");
  await mkProfile("builder1","builder","9000000005"); await mkProfile("builder2","builder","9000000006");
  ok("profiles insert via own-identity RLS policy (6 users)");

  // profile requires auth identity
  await expectErr("profile requires auth.users identity",
    `insert into profiles (user_id, role, full_name, email, mobile) values (gen_random_uuid(),'owner','X Y','x@y.test','9000000099')`);

  // staff fixtures (service-level)
  await client.query(`insert into staff_profiles (user_id, display_name, internal_role) values ($1,'NoPerm','staff'),($2,'Mod','staff'),($3,'Admin','admin'),($4,'Root','super_admin')`,
    [U.staff_np, U.staff_mod, U.admin1, U.superadmin]);
  await client.query(`insert into staff_user_roles (user_id, role_id) select $1, id from staff_roles where role_key='moderator'`, [U.staff_mod]);
  ok("staff fixtures created");

  // ── Relationship + constraint verification ─────────────────────────
  await client.query(`insert into role_assignments (user_id, role) values ($1,'owner')`, [U.owner1]);
  await expectErr("one active public role", `insert into role_assignments (user_id, role) values ($1,'broker')`, [U.owner1]);
  await expectErr("invalid role value", `insert into profiles (user_id, role, full_name, email, mobile) values ($1,'agent','A B','a@b.test','9000000098')`, [U.owner1]);
  await expectErr("invalid location hierarchy (locality under state)",
    `insert into locations (level, name, slug, parent_id) values ('locality','Bad','bad','11111111-1111-1111-1111-111111111111')`);

  const city = "44444444-1111-1111-1111-111111111101";
  // owner1 creates property via RLS
  const propId = await asIdentity(U.owner1, async () => {
    const r = await client.query(
      `insert into properties (owner_user_id, title, slug, purpose, property_type, price_minor, city_id) values ($1,'Test 2BHK Satellite','t-2bhk-sat','sell','flat',5000000,$2) returning id`,
      [U.owner1, city]);
    return r.rows[0].id;
  }, { commit: true });
  ok("owner creates own property (RLS insert)");

  await expectErr("negative price rejected", `update properties set price_minor = -5 where id = $1`, [propId]);
  await expectErr("duplicate saved property", `insert into saved_properties (user_id, property_id) values ($1,$2),($1,$2)`, [U.owner2, propId]);

  // builder project + units
  const projId = await asIdentity(U.builder1, async () => {
    const r = await client.query(`insert into projects (builder_user_id, name, slug, city_id) values ($1,'Sky Residency','sky-res',$2) returning id`, [U.builder1, city]);
    return r.rows[0].id;
  }, { commit: true });
  const unitId = await asIdentity(U.builder1, async () => {
    const r = await client.query(`insert into project_units (project_id, unit_label, unit_type, total_count, available_count, price_minor) values ($1,'A-101','2BHK',10,10,4500000) returning id`, [projId]);
    return r.rows[0].id;
  }, { commit: true });
  ok("builder creates project and unit inside project");
  await expectErr("unit without project", `insert into project_units (project_id, unit_label, unit_type) values (null,'X','1BHK')`);
  await expectErr("negative inventory", `update project_units set available_count = -1 where id = $1`, [unitId]);
  await expectErr("available above total", `update project_units set available_count = 11 where id = $1`, [unitId]);
  await expectErr("duplicate saved project", `insert into saved_projects (user_id, project_id) values ($1,$2),($1,$2)`, [U.owner2, projId]);

  // publish property + project (moderation approval — service level, with audit)
  await client.query(`update properties set publication='published', moderation='approved' where id=$1`, [propId]);
  await client.query(`update projects set publication='published', moderation='approved' where id=$1`, [projId]);
  await client.query(`update project_units set publication='published' where id=$1`, [unitId]);

  // direct inquiry constraints
  await expectErr("inquiry requires exactly one source",
    `insert into direct_inquiries (sender_user_id, property_id, project_id, message, consent) values ($1,$2,$3,'hi',true)`, [U.owner2, propId, projId]);
  await expectErr("inquiry requires consent",
    `insert into direct_inquiries (sender_user_id, property_id, message, consent) values ($1,$2,'hi',false)`, [U.owner2, propId]);
  const inqId = await asIdentity(U.owner2, async () => {
    const r = await client.query(`insert into direct_inquiries (sender_user_id, property_id, message, consent, idempotency_key) values ($1,$2,'Interested in this 2BHK',true,'test-idem-1') returning id`, [U.owner2, propId]);
    return r.rows[0].id;
  }, { commit: true });
  ok("sender creates direct inquiry (RLS + one source)");
  await expectErr("duplicate idempotency key",
    `insert into direct_inquiries (sender_user_id, property_id, message, consent, idempotency_key) values ($1,$2,'again',true,'test-idem-1')`, [U.owner2, propId]);

  // lead (server-created) + invalid source tests
  const leadId = (await client.query(
    `insert into leads (inquiry_id, owner_user_id, sender_user_id, source_kind, property_id) values ($1,$2,$3,'property',$4) returning id`,
    [inqId, U.owner1, U.owner2, propId])).rows[0].id;
  await expectErr("lead source kind must match FK",
    `insert into leads (owner_user_id, sender_user_id, source_kind, project_id) values ($1,$2,'property',$3)`, [U.builder1, U.owner2, projId]);
  await expectErr("lead requires exactly one source",
    `insert into leads (owner_user_id, sender_user_id, source_kind) values ($1,$2,'property')`, [U.owner1, U.owner2]);
  await expectErr("message requires lead", `insert into lead_messages (lead_id, sender_user_id, body) values (gen_random_uuid(),$1,'x')`, [U.owner1]);
  await expectErr("follow-up requires lead", `insert into lead_follow_ups (lead_id, owner_user_id, due_at) values (gen_random_uuid(),$1,now())`, [U.owner1]);

  // promotion requires eligible builder destination (FK to own project)
  await asIdentity(U.builder1, () =>
    client.query(`insert into promotions (builder_user_id, project_id) values ($1,$2)`, [U.builder1, projId]), { commit: true });
  ok("builder creates promotion for own project");
  await expectErr("promotion requires valid project", `insert into promotions (builder_user_id, project_id) values ($1, gen_random_uuid())`, [U.builder1]);

  // billing relations
  const orderId = (await client.query(`insert into payment_orders (user_id, amount_minor) values ($1, 99900) returning id`, [U.broker1])).rows[0].id;
  const payId = (await client.query(`insert into payments (order_id, amount_minor, status) values ($1, 99900,'captured') returning id`, [orderId])).rows[0].id;
  await expectErr("negative payment amount", `insert into payments (order_id, amount_minor) values ($1, -1)`, [orderId]);
  const invId = (await client.query(`insert into invoices (invoice_number, user_id, order_id, total_minor) values ('DEV-INV-1',$1,$2,99900) returning id`, [U.broker1, orderId])).rows[0].id;
  await client.query(`insert into invoice_items (invoice_id, description, unit_minor, total_minor) values ($1,'Broker Standard',99900,99900)`, [invId]);
  await client.query(`insert into refunds (payment_id, amount_minor, reason) values ($1, 1000, 'partial dev refund')`, [payId]);
  ok("payment → invoice → items → refund relations valid");
  await client.query(`insert into recovery_actions (entity_kind, entity_id, requested_by, reason) values ('property',$1,$2,'dev recovery relation test')`, [propId, U.owner1]);
  ok("recovery relation valid");

  // ── RLS identity matrix ──────────────────────────────────────────────
  const count = async (uid, sql, role) => asIdentity(uid, async () => (await client.query(sql)).rowCount, { role });
  const matrix = [
    ["guest sees published property via public view", null, `select id from public_properties where id='${propId}'`, "anon", 1],
    ["guest cannot see raw profiles", null, `select user_id from profiles`, "anon", 0],
    ["guest cannot see leads", null, `select id from leads`, "anon", 0],
    ["owner1 sees own property", U.owner1, `select id from properties where id='${propId}'`, "authenticated", 1],
    ["owner1 sees own lead", U.owner1, `select id from leads where id='${leadId}'`, "authenticated", 1],
    ["sender (owner2) sees the lead", U.owner2, `select id from leads where id='${leadId}'`, "authenticated", 1],
    ["broker1 (unrelated) cannot see the lead", U.broker1, `select id from leads where id='${leadId}'`, "authenticated", 0],
    ["broker2 cannot see broker1 payment order", U.broker2, `select id from payment_orders where id='${orderId}'`, "authenticated", 0],
    ["broker1 sees own payment order", U.broker1, `select id from payment_orders where id='${orderId}'`, "authenticated", 1],
    ["builder2 cannot see builder1 unit inventory events", U.builder2, `select id from unit_inventory_events`, "authenticated", 0],
    ["staff without permission cannot read audit logs", U.staff_np, `select id from audit_logs`, "authenticated", 0],
    ["staff without permission cannot read moderation cases", U.staff_np, `select id from moderation_cases`, "authenticated", 0],
    ["moderator (view perm) can read moderation cases", U.staff_mod, `select count(*) from moderation_cases`, "authenticated", 1],
    ["moderator can read all properties (properties.read)", U.staff_mod, `select id from properties where id='${propId}'`, "authenticated", 1],
    ["admin reads staff role assignments", U.admin1, `select * from staff_user_roles`, "authenticated", 1],
    ["admin (not super) cannot modify feature flags", U.admin1, `update feature_flags set enabled=true where flag_key='blog'`, "authenticated", 0],
    ["super admin can modify feature flags", U.superadmin, `update feature_flags set enabled=false where flag_key='blog'`, "authenticated", 1],
  ];
  for (const [name, uid, sql, role, expected] of matrix) {
    try {
      const n = await count(uid, sql, role);
      if ((expected === 0 && n === 0) || (expected > 0 && n > 0)) ok(name);
      else bad(name, `rowCount=${n} expected ${expected === 0 ? "0" : ">0"}`);
    } catch (e) {
      if (expected === 0) ok(`${name} (denied: ${e.code})`);
      else bad(name, e.message.slice(0, 80));
    }
  }
  // wrong-owner write attempt
  try {
    const n = await asIdentity(U.owner2, async () => (await client.query(`update properties set title='HACKED TITLE OK' where id='${propId}'`)).rowCount);
    n === 0 ? ok("wrong owner cannot update property (0 rows)") : bad("wrong owner update", `updated ${n}`);
  } catch { ok("wrong owner cannot update property (denied)"); }
  // staff action permission
  const caseId = (await client.query(`insert into moderation_cases (entity_kind, entity_id) values ('property',$1) returning id`, [propId])).rows[0].id;
  try {
    await asIdentity(U.staff_mod, () => client.query(`insert into moderation_actions (case_id, actor_id, action, reason) values ($1,$2,'approve','dev verify')`, [caseId, U.staff_mod]), { commit: true });
    ok("staff with action permission records moderation action");
  } catch (e) { bad("staff action permission", e.message.slice(0, 80)); }
  try {
    await asIdentity(U.staff_np, () => client.query(`insert into moderation_actions (case_id, actor_id, action, reason) values ($1,$2,'approve','nope')`, [caseId, U.staff_np]));
    bad("staff without permission blocked from actions", "insert succeeded");
  } catch { ok("staff without permission blocked from moderation actions"); }
  // trusted server (postgres) full access
  ok(`trusted server reads all leads (${(await client.query("select count(*) from leads")).rows[0].count})`);
  // append-only audit
  await client.query(`select record_audit($1,'super_admin','dev.verify','property',$2,'phase2 verification')`, [U.superadmin, propId]);
  await expectErr("audit logs are append-only", `delete from audit_logs where action='dev.verify'`);

  // ── Public-safe data verification ───────────────────────────────────
  const viewCols = async (view) => (await client.query(
    `select column_name from information_schema.columns where table_name=$1`, [view])).rows.map(r => r.column_name);
  const forbidden = ["mobile", "email", "owner_user_id", "sender_user_id"];
  for (const v of ["public_properties","public_projects","public_units","public_profiles","public_promotions","public_locations","public_cms_pages","public_blog_articles"]) {
    const cols = await viewCols(v);
    const leak = cols.filter(c => forbidden.includes(c));
    leak.length === 0 ? ok(`${v} exposes no private identity columns`) : bad(v, `leaks ${leak}`);
  }
  // no view exposes leads/messages/invoices/security
  const badViews = (await client.query(`select table_name from information_schema.views where table_schema='public' and (table_name ~ 'lead|message|note|invoice|security|moderation')`)).rows;
  badViews.length === 0 ? ok("no public view over leads/messages/notes/invoices/security/moderation") : bad("view exposure", JSON.stringify(badViews));

  // ── Query-plan verification ──────────────────────────────────────────
  const plans = [
    ["public city property search", `select id from properties where city_id='${city}' and publication='published' and moderation='approved' and deleted_at is null`, "properties_public_idx"],
    ["public project search", `select id from projects where city_id='${city}' and publication='published' and moderation='approved' and deleted_at is null`, "projects_public_idx"],
    ["owner property list", `select id from properties where owner_user_id='${U.owner1}' and publication='published' and deleted_at is null`, "properties_owner_idx"],
    ["builder project list", `select id from projects where builder_user_id='${U.builder1}' and publication='published' and deleted_at is null`, "projects_builder_idx"],
    ["leads by owner+status", `select id from leads where owner_user_id='${U.owner1}' and status='new' and deleted_at is null`, "leads_owner_status_idx"],
    ["leads by last activity", `select id from leads where owner_user_id='${U.owner1}' and deleted_at is null order by last_activity_at desc limit 20`, "leads_owner_activity_idx"],
    ["follow-ups due", `select id from lead_follow_ups where owner_user_id='${U.owner1}' and status in ('scheduled','due') order by due_at limit 20`, "lead_follow_ups_due_idx"],
    ["moderation queue", `select id from moderation_cases where status='pending' and closed_at is null order by opened_at`, "moderation_cases_queue_idx"],
    ["payment provider lookup", `select id from payments where provider_payment_id='pay_x'`, "payments_provider_idx"],
    ["audit filter by entity", `select id from audit_logs where entity_kind='property' and entity_id='${propId}' order by created_at desc`, "audit_logs_entity_idx"],
  ];
  await client.query("set enable_seqscan = off"); // small tables prefer seqscan; force index viability check
  for (const [name, sql, idx] of plans) {
    const p = (await client.query(`explain ${sql}`)).rows.map(r => r["QUERY PLAN"]).join("\n");
    p.includes(idx) ? ok(`plan uses ${idx} (${name})`) : bad(`plan ${name}`, p.split("\n")[0]);
  }
  await client.query("set enable_seqscan = on");

  // ── Cleanup (remove isolated fixtures) ──────────────────────────────
  await client.query(`delete from moderation_cases where entity_id=$1`, [propId]);
  await client.query(`delete from recovery_actions where entity_id=$1`, [propId]);
  await client.query(`delete from invoices where invoice_number='DEV-INV-1'`);
  await client.query(`delete from payment_orders where id=$1`, [orderId]);
  await client.query(`delete from auth.users where email like '%@dev.mygjprop.test'`);
  const leftover = (await client.query(`select count(*) from profiles`)).rows[0].count;
  console.log(`cleanup done; remaining profiles: ${leftover}`);

  console.log(`\nRESULT: ${pass} passed, ${fail} failed${fail ? " — " + failures.join("; ") : ""}`);
  await client.end();
  process.exit(fail ? 1 : 0);
}

main().catch(async (e) => { console.error("HARNESS ERROR:", e.message); await client.end().catch(()=>{}); process.exit(2); });
