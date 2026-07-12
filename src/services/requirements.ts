import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Permitted requirement and proposal workflows (flag-gated marketplace feature). */
export interface RequirementsService {
  createRequirement(input: { userId: string; draft: Record<string, unknown> }): Promise<ServiceResult<{ requirementId: string }>>;
  listRequirements(input: { userId: string; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; nextCursor: string | null }>>;
}

export const requirementsService: RequirementsService = stubService<RequirementsService>("requirements", ["createRequirement", "listRequirements"]);
