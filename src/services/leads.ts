import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Unified Leads workspace: leads, activity timeline, status history. */
export interface LeadsService {
  listLeads(input: { ownerUserId: string; entity?: { kind: "property" | "project" | "unit"; id: string }; status?: string; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; nextCursor: string | null }>>;
  getLead(input: { leadId: string; requesterId: string }): Promise<ServiceResult<Record<string, unknown>>>;
  appendActivity(input: { leadId: string; actorId: string; kind: "note" | "status" | "follow_up"; payload: Record<string, unknown> }): Promise<ServiceResult<null>>;
}

export const leadsService: LeadsService = stubService<LeadsService>("leads", ["listLeads", "getLead", "appendActivity"]);
