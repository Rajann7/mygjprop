/**
 * Shared service result and error contracts.
 *
 * Every service returns ServiceResult<T>. Errors carry a typed code, a safe
 * user-facing message, and a correlation ID for support and audit — raw
 * technical details stay server-side in `internal` and are never serialized
 * to clients.
 */

export const DOMAIN_ERROR_CODES = [
  "validation_failed",
  "not_found",
  "permission_denied",
  "authentication_required",
  "account_restricted",
  "provider_setup_required",
  "rate_limited",
  "conflict",
  "invalid_state_transition",
  "internal_error",
] as const;
export type DomainErrorCode = (typeof DOMAIN_ERROR_CODES)[number];

/** Safe default messages. Never expose raw technical errors to users. */
const USER_MESSAGES: Record<DomainErrorCode, string> = {
  validation_failed: "Some details need correction. Please review and try again.",
  not_found: "We couldn't find what you were looking for.",
  permission_denied: "You don't have permission to do this.",
  authentication_required: "Please sign in to continue.",
  account_restricted: "Your account can't perform this action right now. Contact support if you need help.",
  provider_setup_required: "This feature isn't available yet. Please check back soon.",
  rate_limited: "Too many attempts. Please wait a moment and try again.",
  conflict: "This was changed elsewhere. Please refresh and try again.",
  invalid_state_transition: "This action isn't available in the current status.",
  internal_error: "Something went wrong on our side. Please try again.",
};

export interface FieldError {
  field: string;
  message: string;
}

export interface DomainError {
  code: DomainErrorCode;
  /** Safe, user-facing message. */
  message: string;
  /** Correlation ID for support references and audit lookup. */
  correlationId: string;
  /** Field-level validation errors, when applicable. */
  fields?: FieldError[];
  /** Server-only diagnostic detail. Excluded from serialization. */
  internal?: unknown;
}

export type ServiceResult<T> =
  | { ok: true; data: T; correlationId: string }
  | { ok: false; error: DomainError };

export function newCorrelationId(): string {
  return globalThis.crypto?.randomUUID?.() ?? `cid_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function ok<T>(data: T, correlationId: string = newCorrelationId()): ServiceResult<T> {
  return { ok: true, data, correlationId };
}

export function fail<T = never>(
  code: DomainErrorCode,
  options: { message?: string; fields?: FieldError[]; internal?: unknown; correlationId?: string } = {},
): ServiceResult<T> {
  return {
    ok: false,
    error: {
      code,
      message: options.message ?? USER_MESSAGES[code],
      correlationId: options.correlationId ?? newCorrelationId(),
      ...(options.fields ? { fields: options.fields } : {}),
      ...(options.internal !== undefined ? { internal: options.internal } : {}),
    },
  };
}

/** Client-safe wire format. `internal` is always stripped. */
export interface SerializedError {
  code: DomainErrorCode;
  message: string;
  correlationId: string;
  fields?: FieldError[];
}

export function serializeError(error: DomainError): SerializedError {
  return {
    code: error.code,
    message: error.message,
    correlationId: error.correlationId,
    ...(error.fields ? { fields: error.fields } : {}),
  };
}
