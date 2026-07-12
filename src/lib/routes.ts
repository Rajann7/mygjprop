/**
 * Final route map. Every route the product exposes is declared here with its
 * area and access rule; navigation and middleware must use these constants
 * instead of string literals. Routes marked planned are defined by the
 * authority documents and will be implemented in their phases — nothing
 * links to a planned route until it exists.
 */

import type { AppArea } from "@/lib/roles";

export type RouteAccess = "public" | "guest_only" | "authenticated" | "role" | "internal";

export interface RouteDef {
  /** Path pattern relative to the area host ([param] segments allowed). */
  path: string;
  area: AppArea;
  access: RouteAccess;
  purpose: string;
  implemented: boolean;
}

export const ROUTES = {
  // Public marketplace (canonical public host only)
  home: { path: "/", area: "public", access: "public", purpose: "Homepage with city selector", implemented: true },
  search: { path: "/search", area: "public", access: "public", purpose: "Search results", implemented: false },
  propertyDetail: { path: "/property/[slug]", area: "public", access: "public", purpose: "Property detail", implemented: false },
  projectDetail: { path: "/project/[slug]", area: "public", access: "public", purpose: "Builder project detail", implemented: false },
  citySeo: { path: "/city/[city]", area: "public", access: "public", purpose: "City SEO landing page", implemented: false },
  publicProfile: { path: "/profile/[slug]", area: "public", access: "public", purpose: "Public Broker/Builder profile", implemented: false },
  pricing: { path: "/pricing", area: "public", access: "public", purpose: "Plans and pricing", implemented: false },
  help: { path: "/help", area: "public", access: "public", purpose: "Help and support", implemented: false },
  blog: { path: "/blog", area: "public", access: "public", purpose: "Blog index", implemented: false },
  blogPost: { path: "/blog/[slug]", area: "public", access: "public", purpose: "Blog post", implemented: false },
  legalTerms: { path: "/legal/terms", area: "public", access: "public", purpose: "Terms of service", implemented: false },
  legalPrivacy: { path: "/legal/privacy", area: "public", access: "public", purpose: "Privacy policy", implemented: false },

  // Authentication (contextual over public shell)
  login: { path: "/login", area: "auth", access: "guest_only", purpose: "Mobile-number OTP login", implemented: false },
  register: { path: "/register", area: "auth", access: "guest_only", purpose: "Three-role public registration", implemented: false },

  // Owner application (public host, /owner section)
  ownerDashboard: { path: "/owner", area: "owner", access: "role", purpose: "Owner dashboard", implemented: false },
  ownerProperties: { path: "/owner/properties", area: "owner", access: "role", purpose: "Owner property list", implemented: false },
  ownerLeads: { path: "/owner/leads", area: "owner", access: "role", purpose: "Owner unified Leads workspace", implemented: false },

  // Broker application (broker host)
  brokerDashboard: { path: "/", area: "broker", access: "role", purpose: "Broker dashboard", implemented: false },
  brokerListings: { path: "/listings", area: "broker", access: "role", purpose: "Broker listings", implemented: false },
  brokerLeads: { path: "/leads", area: "broker", access: "role", purpose: "Broker unified Leads workspace", implemented: false },

  // Builder application (builder host)
  builderDashboard: { path: "/", area: "builder", access: "role", purpose: "Builder dashboard", implemented: false },
  builderProjects: { path: "/projects", area: "builder", access: "role", purpose: "Builder projects", implemented: false },
  builderLeads: { path: "/leads", area: "builder", access: "role", purpose: "Builder unified Leads workspace", implemented: false },

  // Internal application (internal host)
  internalDashboard: { path: "/", area: "internal", access: "internal", purpose: "Admin overview", implemented: false },
  internalUsers: { path: "/users", area: "internal", access: "internal", purpose: "User management", implemented: false },
  internalModeration: { path: "/moderation", area: "internal", access: "internal", purpose: "Moderation queues", implemented: false },
  internalAudit: { path: "/audit", area: "internal", access: "internal", purpose: "Audit log", implemented: false },
} as const satisfies Record<string, RouteDef>;

export type RouteKey = keyof typeof ROUTES;

export function routesForArea(area: AppArea): RouteDef[] {
  return Object.values(ROUTES).filter((r) => r.area === area);
}
