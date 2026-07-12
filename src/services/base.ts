/**
 * Service boundary base. Phase 1 defines interfaces and dependency
 * boundaries only — implementations arrive in their feature phases. Until
 * then every method returns an honest typed failure (never fake success).
 */

import { fail, type ServiceResult } from "@/lib/result";

export type Service<T> = { readonly [K in keyof T]: T[K] };

export function notImplemented<T = never>(service: string, method: string): Promise<ServiceResult<T>> {
  return Promise.resolve(
    fail<T>("provider_setup_required", {
      internal: `${service}.${method} is not implemented yet (Phase 1 boundary stub)`,
    }),
  );
}

/**
 * Build a stub implementation whose every method resolves to a typed
 * "not implemented" failure. Replaced per-service in later phases.
 */
export function stubService<T extends object>(service: string, methods: readonly (keyof T & string)[]): T {
  const impl = {} as Record<string, unknown>;
  for (const m of methods) {
    impl[m] = () => notImplemented(service, m);
  }
  return impl as T;
}
