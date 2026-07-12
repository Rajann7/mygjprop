import type { ServiceResult } from "@/lib/result";
import type { AccountState } from "@/types/domain";
import { stubService } from "@/services/base";

/** Account state lifecycle (active, restricted, suspended, closed) with audit. */
export interface AccountStatusService {
  getAccountState(input: { userId: string }): Promise<ServiceResult<{ state: AccountState }>>;
  setAccountState(input: { actorId: string; userId: string; state: AccountState; reason: string }): Promise<ServiceResult<null>>;
}

export const accountStatusService: AccountStatusService = stubService<AccountStatusService>("account-status", ["getAccountState", "setAccountState"]);
