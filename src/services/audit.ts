import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Append-only audit log for sensitive actions. */
export interface AuditEntry {
  actorId: string;
  actorRole: string;
  action: string;
  entity: { kind: string; id: string };
  reason?: string;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
  correlationId: string;
}

export interface AuditService {
  record(entry: AuditEntry): Promise<ServiceResult<null>>;
  listForEntity(input: { actorId: string; entity: { kind: string; id: string }; cursor?: string }): Promise<ServiceResult<{ items: AuditEntry[]; nextCursor: string | null }>>;
}

export const auditService: AuditService = stubService<AuditService>("audit", ["record", "listForEntity"]);
