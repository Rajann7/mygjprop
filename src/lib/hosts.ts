/**
 * Centralized, environment-configured host architecture.
 *
 * Four application hosts: public marketplace, Broker app, Builder app,
 * internal app. In local development all areas may share one host and are
 * separated by path prefix; in staging/production each area resolves to its
 * configured host. The public marketplace host is the only canonical host
 * for public content — role hosts must never duplicate it.
 */

import { type AppArea, type Role, ROLE_HOME_AREA } from "@/lib/roles";

export type HostedArea = Exclude<AppArea, "auth">;

export interface HostConfig {
  public: URL;
  broker: URL;
  builder: URL;
  internal: URL;
  /** true when all four areas share one origin (local development). */
  singleOrigin: boolean;
}

export type DeployStage = "development" | "staging" | "production";

export interface HostEnvInput {
  stage: DeployStage;
  publicUrl?: string;
  brokerUrl?: string;
  builderUrl?: string;
  internalUrl?: string;
}

const DEV_DEFAULT = "http://localhost:3000";

function parseUrl(value: string, name: string): URL {
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new Error("unsupported protocol");
    }
    return url;
  } catch {
    throw new Error(`Invalid host URL for ${name}: "${value}"`);
  }
}

/**
 * Resolve the host configuration for the current stage.
 * Development: missing URLs fall back to a single shared localhost origin.
 * Staging/production: the public URL is required; role hosts fall back to
 * the public origin (path-separated) only when not configured.
 */
export function resolveHosts(input: HostEnvInput): HostConfig {
  const isDev = input.stage === "development";
  const publicRaw = input.publicUrl ?? (isDev ? DEV_DEFAULT : undefined);
  if (!publicRaw) {
    throw new Error("NEXT_PUBLIC_APP_URL is required outside development");
  }
  const pub = parseUrl(publicRaw, "public");
  const broker = input.brokerUrl ? parseUrl(input.brokerUrl, "broker") : pub;
  const builder = input.builderUrl ? parseUrl(input.builderUrl, "builder") : pub;
  const internal = input.internalUrl ? parseUrl(input.internalUrl, "internal") : pub;
  const origins = new Set([pub.origin, broker.origin, builder.origin, internal.origin]);
  return { public: pub, broker, builder, internal, singleOrigin: origins.size === 1 };
}

/** The canonical public host. Public content must only be served here. */
export function canonicalPublicHost(config: HostConfig): URL {
  return config.public;
}

/** Detect which application area a request host belongs to. */
export function detectAreaFromHost(config: HostConfig, requestHost: string): HostedArea | null {
  const host = requestHost.toLowerCase().split(":")[0];
  const match = (url: URL) => url.hostname.toLowerCase() === host;
  // Order matters when hosts are shared: most specific area wins only when
  // hosts are distinct; on a shared origin the area is path-based, so the
  // caller must treat "public" as the ambient area.
  if (config.singleOrigin) return match(config.public) ? "public" : null;
  if (match(config.internal)) return "internal";
  if (match(config.broker)) return "broker";
  if (match(config.builder)) return "builder";
  if (match(config.public)) return "public";
  return null;
}

/** Map a role to the base URL of its home application. */
export function roleHomeUrl(config: HostConfig, role: Role): URL {
  const area = ROLE_HOME_AREA[role];
  switch (area) {
    case "owner":
      // Owner uses the public marketplace host with a dedicated app section.
      return new URL("/owner", config.public);
    case "broker":
      return config.singleOrigin ? new URL("/broker", config.broker) : config.broker;
    case "builder":
      return config.singleOrigin ? new URL("/builder", config.builder) : config.builder;
    case "internal":
      return config.singleOrigin ? new URL("/internal", config.internal) : config.internal;
    default:
      return config.public;
  }
}

/**
 * Validate an intended post-auth route supplied by the client.
 * Only same-app relative paths are accepted — absolute URLs, protocol-relative
 * URLs, and backslash tricks are rejected to prevent open redirects.
 */
export function isSafeIntendedRoute(value: unknown): value is string {
  if (typeof value !== "string" || value.length === 0 || value.length > 2048) return false;
  if (!value.startsWith("/")) return false;
  if (value.startsWith("//") || value.startsWith("/\\")) return false;
  if (value.includes("\\") || value.includes("\n") || value.includes("\r")) return false;
  return true;
}

/**
 * Build a safe cross-host redirect. The target must be one of the configured
 * application hosts; anything else falls back to the canonical public host.
 * Guards against role-host loops by refusing a redirect to the current URL.
 */
export function safeCrossHostRedirect(
  config: HostConfig,
  target: HostedArea,
  path: string,
  currentUrl?: string,
): URL {
  const base =
    target === "broker"
      ? config.broker
      : target === "builder"
        ? config.builder
        : target === "internal"
          ? config.internal
          : config.public;
  const safePath = isSafeIntendedRoute(path) ? path : "/";
  const destination = new URL(safePath, base.origin);
  if (currentUrl && destination.toString() === currentUrl) {
    // Redirecting to self would loop; send to the area root instead.
    return new URL("/", base.origin);
  }
  return destination;
}
