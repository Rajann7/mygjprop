import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Support tickets with reference IDs surfaced to users. */
export interface SupportService {
  createTicket(input: { userId: string; subject: string; body: string }): Promise<ServiceResult<{ ticketId: string; reference: string }>>;
  getTicket(input: { ticketId: string; requesterId: string }): Promise<ServiceResult<Record<string, unknown>>>;
}

export const supportService: SupportService = stubService<SupportService>("support", ["createTicket", "getTicket"]);
