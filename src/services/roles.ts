import type { ServiceResult } from "@/lib/result";
import type { InternalRole, Role } from "@/lib/roles";
import { stubService } from "@/services/base";

/** Role resolution and audited internal role assignment. */
export interface RolesService {
  getUserRole(input: { userId: string }): Promise<ServiceResult<{ role: Role }>>;
  assignInternalRole(input: { actorId: string; userId: string; role: InternalRole; reason: string }): Promise<ServiceResult<null>>;
}

export const rolesService: RolesService = stubService<RolesService>("roles", ["getUserRole", "assignInternalRole"]);
