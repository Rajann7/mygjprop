/**
 * Shared domain state types. Every status-bearing entity uses these unions —
 * uncontrolled strings are not permitted for state fields.
 *
 * Allowed transitions live next to the types so services and tests share one
 * source of truth.
 */

export type { Role, PublicRole, InternalRole } from "@/lib/roles";

export const ACCOUNT_STATES = [
  "active",
  "pending_verification",
  "restricted",
  "suspended",
  "closed",
] as const;
export type AccountState = (typeof ACCOUNT_STATES)[number];

export const MODERATION_STATES = [
  "pending",
  "approved",
  "rejected",
  "changes_requested",
  "reopened",
] as const;
export type ModerationState = (typeof MODERATION_STATES)[number];

export const PUBLICATION_STATES = ["draft", "published", "paused", "archived"] as const;
export type PublicationState = (typeof PUBLICATION_STATES)[number];

export const LIFECYCLE_STATES = ["active", "paused", "deleted", "restored"] as const;
export type LifecycleState = (typeof LIFECYCLE_STATES)[number];

export const PROVIDER_STATES = [
  "NOT_STARTED",
  "SETUP_REQUIRED",
  "CONFIGURED_NOT_TESTED",
  "TEST_MODE_ONLY",
  "ACTIVE",
  "LIVE_READY",
  "BLOCKED",
  "FAILED",
  "DEGRADED",
  "DISABLED_BY_FLAG",
] as const;
export type ProviderState = (typeof PROVIDER_STATES)[number];

export const VERIFICATION_STATES = ["unverified", "pending", "verified", "rejected"] as const;
export type VerificationState = (typeof VERIFICATION_STATES)[number];

export const PAYMENT_STATES = [
  "created",
  "pending",
  "authorized",
  "captured",
  "failed",
  "refunded",
] as const;
export type PaymentState = (typeof PAYMENT_STATES)[number];

export const SUBSCRIPTION_STATES = [
  "none",
  "trialing",
  "active",
  "past_due",
  "cancelled",
  "expired",
] as const;
export type SubscriptionState = (typeof SUBSCRIPTION_STATES)[number];

export const REPORT_STATES = [
  "open",
  "in_review",
  "resolved",
  "dismissed",
  "escalated",
] as const;
export type ReportState = (typeof REPORT_STATES)[number];

export const RECOVERY_STATES = ["none", "requested", "in_progress", "recovered", "denied"] as const;
export type RecoveryState = (typeof RECOVERY_STATES)[number];

/**
 * Allowed state transitions. A transition not listed here is invalid.
 * Moderation recovery: a rejected item can be reopened, reviewed, and approved.
 */
export const MODERATION_TRANSITIONS: Record<ModerationState, readonly ModerationState[]> = {
  pending: ["approved", "rejected", "changes_requested"],
  approved: ["reopened"],
  rejected: ["reopened"],
  changes_requested: ["pending"],
  reopened: ["pending", "approved", "rejected", "changes_requested"],
};

export const PUBLICATION_TRANSITIONS: Record<PublicationState, readonly PublicationState[]> = {
  draft: ["published", "archived"],
  published: ["paused", "archived"],
  paused: ["published", "archived"],
  archived: ["draft"],
};

export function canTransition<S extends string>(
  map: Record<S, readonly S[]>,
  from: S,
  to: S,
): boolean {
  return map[from]?.includes(to) ?? false;
}
