-- 0001: Extensions, authoritative enums, and shared helpers.
-- Affects: global types used by every later migration. No destructive behavior.
-- Rollback: drop types/functions (forward-fix preferred once dependents exist).

create extension if not exists pgcrypto;

-- ── Authoritative status enums ─────────────────────────────
create type public_role as enum ('owner','broker','builder');
create type internal_role as enum ('super_admin','admin','staff');
create type account_status as enum ('active','pending_verification','restricted','suspended','closed');
create type onboarding_status as enum ('registered','profile_pending','profile_complete');
create type profile_completion as enum ('minimal','basic','complete');
create type verification_status as enum ('unverified','pending','verified','rejected');
create type moderation_status as enum ('pending','approved','rejected','changes_requested','reopened');
create type publication_status as enum ('draft','published','paused','archived');
create type lifecycle_status as enum ('active','paused','deleted','restored');
create type property_purpose as enum ('sell','rent','lease');
create type lead_status as enum ('new','contacted','qualified','negotiating','converted','closed_lost','spam');
create type lead_priority as enum ('low','medium','high','urgent');
create type message_status as enum ('sent','delivered','read','deleted');
create type follow_up_status as enum ('scheduled','due','done','cancelled','missed');
create type subscription_status as enum ('none','trialing','active','past_due','cancelled','expired');
create type payment_status as enum ('created','pending','authorized','captured','failed','refunded');
create type provider_status as enum ('NOT_STARTED','SETUP_REQUIRED','CONFIGURED_NOT_TESTED','TEST_MODE_ONLY','ACTIVE','LIVE_READY','BLOCKED','FAILED','DEGRADED','DISABLED_BY_FLAG');
create type report_status as enum ('open','in_review','resolved','dismissed','escalated');
create type support_ticket_status as enum ('open','waiting_user','waiting_staff','resolved','closed');
create type bug_status as enum ('reported','triaged','in_progress','fixed','wont_fix','duplicate');
create type recovery_status as enum ('none','requested','in_progress','recovered','denied');
create type promotion_status as enum ('draft','submitted','approved','live','paused','ended','rejected');
create type location_level as enum ('state','district','taluka','city','locality');
create type lead_source_kind as enum ('property','project','unit','requirement');
create type notification_channel as enum ('in_app','email','sms');

-- ── Shared helpers ─────────────────────────────────────────
create or replace function set_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

-- Correlation id helper for audit and status history writes.
create or replace function new_correlation_id() returns uuid
language sql volatile as $$ select gen_random_uuid() $$;
