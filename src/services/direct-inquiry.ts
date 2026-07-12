import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/**
 * Direct Inquiry — the public contact action for properties and projects.
 * Creates a real server-backed lead preserving the originating context.
 */
export interface DirectInquiryService {
  submitInquiry(input: {
    senderUserId: string;
    target: { kind: "property" | "project" | "unit"; id: string };
    message: string;
    consent: boolean;
  }): Promise<ServiceResult<{ leadId: string }>>;
}

export const directInquiryService: DirectInquiryService = stubService<DirectInquiryService>("direct-inquiry", ["submitInquiry"]);
