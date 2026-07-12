/**
 * Centralized role model for My Gujarat Property.
 *
 * Public registration exposes exactly three roles: owner, broker, builder.
 * Internal roles (super_admin, admin, staff) are never available through
 * public registration and are managed only by internal administration.
 */

export const PUBLIC_ROLES = ["owner", "broker", "builder"] as const;
export const INTERNAL_ROLES = ["super_admin", "admin", "staff"] as const;
export const ALL_ROLES = [...PUBLIC_ROLES, ...INTERNAL_ROLES] as const;

export type PublicRole = (typeof PUBLIC_ROLES)[number];
export type InternalRole = (typeof INTERNAL_ROLES)[number];
export type Role = (typeof ALL_ROLES)[number];

export function isPublicRole(value: unknown): value is PublicRole {
  return typeof value === "string" && (PUBLIC_ROLES as readonly string[]).includes(value);
}

export function isInternalRole(value: unknown): value is InternalRole {
  return typeof value === "string" && (INTERNAL_ROLES as readonly string[]).includes(value);
}

export function isRole(value: unknown): value is Role {
  return isPublicRole(value) || isInternalRole(value);
}

/** Parse an untrusted value into a public registration role, or null. */
export function parsePublicRegistrationRole(value: unknown): PublicRole | null {
  return isPublicRole(value) ? value : null;
}

export const ROLE_DISPLAY_NAMES: Record<Role, string> = {
  owner: "Owner",
  broker: "Broker",
  builder: "Builder/Developer",
  super_admin: "Super Admin",
  admin: "Admin",
  staff: "Staff",
};

export function roleDisplayName(role: Role): string {
  return ROLE_DISPLAY_NAMES[role];
}

/** Application areas used for route access control. */
export const APP_AREAS = ["public", "auth", "owner", "broker", "builder", "internal"] as const;
export type AppArea = (typeof APP_AREAS)[number];

/**
 * Which application areas each role may enter.
 * Every role may use the public marketplace and auth area.
 * Internal roles use the internal application only (plus public browsing).
 */
export const ROLE_AREA_ACCESS: Record<Role, readonly AppArea[]> = {
  owner: ["public", "auth", "owner"],
  broker: ["public", "auth", "broker"],
  builder: ["public", "auth", "builder"],
  super_admin: ["public", "auth", "internal"],
  admin: ["public", "auth", "internal"],
  staff: ["public", "auth", "internal"],
};

export function roleCanAccessArea(role: Role, area: AppArea): boolean {
  return ROLE_AREA_ACCESS[role].includes(area);
}

/** The home application area for a role after authentication. */
export const ROLE_HOME_AREA: Record<Role, AppArea> = {
  owner: "owner",
  broker: "broker",
  builder: "builder",
  super_admin: "internal",
  admin: "internal",
  staff: "internal",
};
