import type { ServiceResult } from "@/lib/result";
import type { ReportState } from "@/types/domain";
import { stubService } from "@/services/base";

/** User reports against listings, profiles, or content. */
export interface ReportsService {
  submitReport(input: { reporterId: string; target: { kind: string; id: string }; reason: string }): Promise<ServiceResult<{ reportId: string }>>;
  resolveReport(input: { actorId: string; reportId: string; to: ReportState; reason: string }): Promise<ServiceResult<null>>;
}

export const reportsService: ReportsService = stubService<ReportsService>("reports", ["submitReport", "resolveReport"]);
