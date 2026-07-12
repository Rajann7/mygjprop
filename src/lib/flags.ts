/**
 * Server-authoritative typed feature flags.
 *
 * Flags gate feature availability only. They must never be used to bypass
 * role checks, permissions, RLS, billing, or security — those layers run
 * regardless of flag state. Flags are evaluated on the server; clients only
 * ever see the resolved boolean for features they are already authorized on.
 */

export const FEATURE_FLAGS = {
  builder_homepage_carousel: { default: false, description: "Builder promotion carousel on homepage" },
  city_seo_pages: { default: false, description: "City-based SEO landing pages" },
  blog: { default: false, description: "Public blog" },
  requirements_marketplace: { default: false, description: "Requirements and proposals workflows" },
  in_app_notifications: { default: false, description: "Server-backed in-app notifications" },
} as const;

export type FeatureFlagKey = keyof typeof FEATURE_FLAGS;

export function isFeatureFlagKey(value: unknown): value is FeatureFlagKey {
  return typeof value === "string" && value in FEATURE_FLAGS;
}

/**
 * Evaluate a flag from server configuration. Environment variables named
 * FLAG_<KEY_IN_UPPERCASE>=true|false override the default; anything else
 * falls back to the declared default. Later phases may add a database-backed
 * override layer behind this same function.
 */
export function evaluateFlag(
  key: FeatureFlagKey,
  source: Record<string, string | undefined> = process.env,
): boolean {
  const raw = source[`FLAG_${key.toUpperCase()}`];
  if (raw === "true") return true;
  if (raw === "false") return false;
  return FEATURE_FLAGS[key].default;
}
