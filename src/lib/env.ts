/**
 * Typed environment validation.
 *
 * Required core variables fail safely: in production a descriptive
 * ConfigurationError is thrown at load; in development the app boots and the
 * affected provider reports SETUP_REQUIRED. Optional providers never crash
 * unrelated features — they resolve to SETUP_REQUIRED.
 *
 * Secrets are read server-side only and are never logged or serialized.
 */

import { z } from "zod";
import type { DeployStage } from "@/lib/hosts";
import type { ProviderState } from "@/types/domain";

export class ConfigurationError extends Error {
  readonly missing: readonly string[];
  constructor(missing: readonly string[]) {
    super(`Missing required environment variables: ${missing.join(", ")}`);
    this.name = "ConfigurationError";
    this.missing = missing;
  }
}

const url = z.string().url();
const nonEmpty = z.string().min(1);

/** Provider variable groups. A group is configured only when every listed variable is present. */
export const PROVIDER_ENV_GROUPS = {
  supabase: ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY", "SUPABASE_SERVICE_ROLE_KEY"],
  otp: ["SMS_OTP_PROVIDER", "SMS_OTP_API_KEY"],
  email: ["EMAIL_PROVIDER", "EMAIL_API_KEY", "EMAIL_FROM_ADDRESS"],
  payment: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET", "RAZORPAY_WEBHOOK_SECRET"],
  media: ["MEDIA_PROVIDER", "MEDIA_BUCKET"],
  analytics: ["ANALYTICS_PROVIDER"],
  monitoring: ["MONITORING_DSN"],
  scheduler: ["SCHEDULER_PROVIDER"],
  backup: ["BACKUP_REFERENCE"],
} as const;

export type ProviderKey = keyof typeof PROVIDER_ENV_GROUPS;

/** Providers that must be configured for a production deployment. */
const PRODUCTION_REQUIRED: readonly ProviderKey[] = ["supabase", "otp", "email", "payment", "media"];

const hostSchema = z.object({
  NEXT_PUBLIC_APP_URL: url.optional(),
  NEXT_PUBLIC_BROKER_APP_URL: url.optional(),
  NEXT_PUBLIC_BUILDER_APP_URL: url.optional(),
  INTERNAL_APP_URL: url.optional(),
});

export interface ValidatedEnv {
  stage: DeployStage;
  hosts: z.infer<typeof hostSchema>;
  /** State of every provider group, derived from variable presence only. */
  providers: Record<ProviderKey, ProviderState>;
  /** Read a validated variable value (server-side use only). */
  read: (name: string) => string | undefined;
}

export function detectStage(source: Record<string, string | undefined>): DeployStage {
  const explicit = source.DEPLOY_STAGE;
  if (explicit === "production" || explicit === "staging" || explicit === "development") {
    return explicit;
  }
  return source.NODE_ENV === "production" ? "production" : "development";
}

export function validateEnv(
  source: Record<string, string | undefined> = process.env,
): ValidatedEnv {
  const stage = detectStage(source);

  const hostResult = hostSchema.safeParse(source);
  if (!hostResult.success) {
    throw new ConfigurationError(hostResult.error.issues.map((i) => i.path.join(".")));
  }
  if (stage !== "development" && !hostResult.data.NEXT_PUBLIC_APP_URL) {
    throw new ConfigurationError(["NEXT_PUBLIC_APP_URL"]);
  }

  const providers = {} as Record<ProviderKey, ProviderState>;
  const missingRequired: string[] = [];
  for (const key of Object.keys(PROVIDER_ENV_GROUPS) as ProviderKey[]) {
    const vars = PROVIDER_ENV_GROUPS[key];
    const missing = vars.filter((v) => !nonEmpty.safeParse(source[v]).success);
    if (missing.length === 0) {
      providers[key] = "CONFIGURED_NOT_TESTED";
    } else {
      providers[key] = "SETUP_REQUIRED";
      if (stage === "production" && PRODUCTION_REQUIRED.includes(key)) {
        missingRequired.push(...missing);
      }
    }
  }
  if (missingRequired.length > 0) {
    throw new ConfigurationError(missingRequired);
  }

  return {
    stage,
    hosts: hostResult.data,
    providers,
    read: (name) => source[name],
  };
}
