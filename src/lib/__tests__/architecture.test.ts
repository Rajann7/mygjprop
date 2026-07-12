import { describe, expect, it } from "vitest";
import {
  isPublicRole,
  isInternalRole,
  parsePublicRegistrationRole,
  roleCanAccessArea,
  roleDisplayName,
  PUBLIC_ROLES,
} from "@/lib/roles";
import {
  resolveHosts,
  roleHomeUrl,
  isSafeIntendedRoute,
  safeCrossHostRedirect,
  detectAreaFromHost,
  canonicalPublicHost,
} from "@/lib/hosts";
import { validateEnv, ConfigurationError } from "@/lib/env";
import { evaluateFlag, isFeatureFlagKey } from "@/lib/flags";
import {
  MODERATION_TRANSITIONS,
  PUBLICATION_TRANSITIONS,
  canTransition,
} from "@/types/domain";
import { fail, ok, serializeError } from "@/lib/result";

describe("role validation", () => {
  it("accepts exactly owner, broker, builder as public registration roles", () => {
    expect(PUBLIC_ROLES).toEqual(["owner", "broker", "builder"]);
    for (const r of PUBLIC_ROLES) expect(parsePublicRegistrationRole(r)).toBe(r);
  });

  it("rejects internal and unknown roles at public registration", () => {
    for (const bad of ["super_admin", "admin", "staff", "agent", "", null, 42]) {
      expect(parsePublicRegistrationRole(bad)).toBeNull();
    }
  });

  it("keeps public and internal role sets disjoint", () => {
    expect(isPublicRole("admin")).toBe(false);
    expect(isInternalRole("owner")).toBe(false);
    expect(isInternalRole("super_admin")).toBe(true);
  });

  it("provides display names for every role", () => {
    expect(roleDisplayName("builder")).toBe("Builder/Developer");
    expect(roleDisplayName("super_admin")).toBe("Super Admin");
  });

  it("enforces area access per role", () => {
    expect(roleCanAccessArea("owner", "owner")).toBe(true);
    expect(roleCanAccessArea("owner", "internal")).toBe(false);
    expect(roleCanAccessArea("broker", "builder")).toBe(false);
    expect(roleCanAccessArea("admin", "internal")).toBe(true);
  });
});

describe("role-to-host mapping", () => {
  const prod = resolveHosts({
    stage: "production",
    publicUrl: "https://mygujaratproperty.example",
    brokerUrl: "https://broker.mygujaratproperty.example",
    builderUrl: "https://builder.mygujaratproperty.example",
    internalUrl: "https://internal.mygujaratproperty.example",
  });

  it("maps each role to its home host", () => {
    expect(roleHomeUrl(prod, "owner").href).toContain("mygujaratproperty.example/owner");
    expect(roleHomeUrl(prod, "broker").hostname).toBe("broker.mygujaratproperty.example");
    expect(roleHomeUrl(prod, "builder").hostname).toBe("builder.mygujaratproperty.example");
    expect(roleHomeUrl(prod, "admin").hostname).toBe("internal.mygujaratproperty.example");
  });

  it("detects the area of a request host", () => {
    expect(detectAreaFromHost(prod, "broker.mygujaratproperty.example")).toBe("broker");
    expect(detectAreaFromHost(prod, "mygujaratproperty.example")).toBe("public");
    expect(detectAreaFromHost(prod, "evil.example")).toBeNull();
  });

  it("generates the canonical public URL from the public host only", () => {
    expect(canonicalPublicHost(prod).origin).toBe("https://mygujaratproperty.example");
    const dev = resolveHosts({ stage: "development" });
    expect(canonicalPublicHost(dev).origin).toBe("http://localhost:3000");
  });

  it("falls back to a single localhost origin in development", () => {
    const dev = resolveHosts({ stage: "development" });
    expect(dev.singleOrigin).toBe(true);
    expect(roleHomeUrl(dev, "broker").pathname).toBe("/broker");
  });

  it("requires the public URL outside development", () => {
    expect(() => resolveHosts({ stage: "production" })).toThrow();
  });
});

describe("safe redirect validation", () => {
  const hosts = resolveHosts({ stage: "development" });

  it("accepts same-app relative paths only", () => {
    expect(isSafeIntendedRoute("/owner/properties?tab=active")).toBe(true);
    expect(isSafeIntendedRoute("/")).toBe(true);
  });

  it("rejects open-redirect vectors", () => {
    for (const bad of [
      "https://evil.example/",
      "//evil.example",
      "/\\evil.example",
      "javascript:alert(1)",
      "",
      "owner/properties",
      "/a\nb",
    ]) {
      expect(isSafeIntendedRoute(bad)).toBe(false);
    }
  });

  it("rejects percent-encoded redirect vectors", () => {
    for (const bad of ["/%5Cevil.example", "/%5c%5cevil", "/a%0d%0ab", "/%2F%2Fevil.example", "/%E0%A4%A"]) {
      expect(isSafeIntendedRoute(bad)).toBe(false);
    }
  });

  it("clamps cross-host redirects to configured hosts", () => {
    const url = safeCrossHostRedirect(hosts, "broker", "https://evil.example/steal");
    expect(url.origin).toBe(hosts.broker.origin);
    expect(url.pathname).toBe("/");
  });

  it("breaks role-host redirect loops", () => {
    const current = new URL("/leads", hosts.broker.origin).toString();
    const url = safeCrossHostRedirect(hosts, "broker", "/leads", current);
    expect(url.pathname).toBe("/");
  });
});

describe("environment validation", () => {
  it("marks unconfigured providers SETUP_REQUIRED without crashing in development", () => {
    const env = validateEnv({ NODE_ENV: "development" });
    expect(env.providers.otp).toBe("SETUP_REQUIRED");
    expect(env.providers.email).toBe("SETUP_REQUIRED");
  });

  it("marks fully configured provider groups CONFIGURED_NOT_TESTED", () => {
    const env = validateEnv({
      NODE_ENV: "development",
      NEXT_PUBLIC_SUPABASE_URL: "https://x.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
      SUPABASE_SERVICE_ROLE_KEY: "service",
    });
    expect(env.providers.supabase).toBe("CONFIGURED_NOT_TESTED");
  });

  it("fails safely in production when required variables are absent", () => {
    expect(() =>
      validateEnv({ NODE_ENV: "production", NEXT_PUBLIC_APP_URL: "https://app.example" }),
    ).toThrow(ConfigurationError);
  });

  it("requires the public app URL outside development", () => {
    expect(() => validateEnv({ NODE_ENV: "production" })).toThrow(ConfigurationError);
  });

  it("rejects a malformed application URL", () => {
    expect(() =>
      validateEnv({ NODE_ENV: "development", NEXT_PUBLIC_APP_URL: "not-a-url" }),
    ).toThrow(ConfigurationError);
  });

  it("treats a malformed Supabase URL as unconfigured, not configured", () => {
    const env = validateEnv({
      NODE_ENV: "development",
      NEXT_PUBLIC_SUPABASE_URL: "garbage-without-scheme",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
      SUPABASE_SERVICE_ROLE_KEY: "service",
    });
    expect(env.providers.supabase).toBe("SETUP_REQUIRED");
  });
});

describe("provider-state mapping", () => {
  it("never reports ACTIVE from configuration presence alone", () => {
    const env = validateEnv({
      NODE_ENV: "development",
      NEXT_PUBLIC_SUPABASE_URL: "https://x.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon",
      SUPABASE_SERVICE_ROLE_KEY: "service",
    });
    for (const state of Object.values(env.providers)) {
      expect(["SETUP_REQUIRED", "CONFIGURED_NOT_TESTED"]).toContain(state);
    }
  });
});

describe("feature-flag evaluation", () => {
  it("uses declared defaults when no override exists", () => {
    expect(evaluateFlag("blog", {})).toBe(false);
  });

  it("honors server environment overrides", () => {
    expect(evaluateFlag("blog", { FLAG_BLOG: "true" })).toBe(true);
    expect(evaluateFlag("blog", { FLAG_BLOG: "garbage" })).toBe(false);
  });

  it("validates flag keys", () => {
    expect(isFeatureFlagKey("blog")).toBe(true);
    expect(isFeatureFlagKey("bypass_rls")).toBe(false);
  });
});

describe("status transition validation", () => {
  it("allows rejected items to be reopened and re-approved (moderation recovery)", () => {
    expect(canTransition(MODERATION_TRANSITIONS, "rejected", "reopened")).toBe(true);
    expect(canTransition(MODERATION_TRANSITIONS, "reopened", "approved")).toBe(true);
  });

  it("blocks invalid transitions", () => {
    expect(canTransition(MODERATION_TRANSITIONS, "rejected", "approved")).toBe(false);
    expect(canTransition(PUBLICATION_TRANSITIONS, "archived", "published")).toBe(false);
    expect(canTransition(PUBLICATION_TRANSITIONS, "paused", "published")).toBe(true);
  });
});

describe("error serialization", () => {
  it("strips internal detail and keeps safe fields", () => {
    const result = fail("permission_denied", { internal: { stack: "secret" } });
    if (result.ok) throw new Error("expected failure");
    const wire = serializeError(result.error);
    expect(wire).not.toHaveProperty("internal");
    expect(wire.code).toBe("permission_denied");
    expect(wire.correlationId).toBeTruthy();
    expect(wire.message).not.toMatch(/secret|stack/);
  });

  it("carries field-level validation errors", () => {
    const result = fail("validation_failed", { fields: [{ field: "mobile", message: "Enter a valid 10-digit mobile number." }] });
    if (result.ok) throw new Error("expected failure");
    expect(serializeError(result.error).fields?.[0].field).toBe("mobile");
  });

  it("produces unique correlation ids for success and failure", () => {
    const a = ok(1);
    const b = ok(1);
    if (!a.ok || !b.ok) throw new Error("expected success");
    expect(a.correlationId).not.toBe(b.correlationId);
  });
});
