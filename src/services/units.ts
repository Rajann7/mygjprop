import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Project units and inventory — always scoped to a parent project. */
export interface UnitsService {
  listByProject(input: { projectId: string; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; nextCursor: string | null }>>;
  upsertUnit(input: { actorId: string; projectId: string; unit: Record<string, unknown> }): Promise<ServiceResult<{ unitId: string }>>;
}

export const unitsService: UnitsService = stubService<UnitsService>("units", ["listByProject", "upsertUnit"]);
