import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Permission-controlled messages inside a lead context. */
export interface MessagesService {
  listForLead(input: { leadId: string; requesterId: string; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; nextCursor: string | null }>>;
  sendMessage(input: { leadId: string; senderId: string; body: string }): Promise<ServiceResult<{ messageId: string }>>;
}

export const messagesService: MessagesService = stubService<MessagesService>("messages", ["listForLead", "sendMessage"]);
