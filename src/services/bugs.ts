import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Internal bug and issue tracking with linked entities. */
export interface BugsService {
  reportBug(input: { reporterId: string; summary: string; context?: Record<string, unknown> }): Promise<ServiceResult<{ bugId: string }>>;
  listBugs(input: { actorId: string; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; nextCursor: string | null }>>;
}

export const bugsService: BugsService = stubService<BugsService>("bugs", ["reportBug", "listBugs"]);
