import type { ServiceResult } from "@/lib/result";
import type { RecoveryState } from "@/types/domain";
import { stubService } from "@/services/base";

/** Permission-controlled recovery for rejected or deleted entities. */
export interface RecoveryService {
  requestRecovery(input: { requesterId: string; entity: { kind: string; id: string }; reason: string }): Promise<ServiceResult<{ recoveryId: string }>>;
  decideRecovery(input: { actorId: string; recoveryId: string; to: RecoveryState; reason: string }): Promise<ServiceResult<null>>;
}

export const recoveryService: RecoveryService = stubService<RecoveryService>("recovery", ["requestRecovery", "decideRecovery"]);
