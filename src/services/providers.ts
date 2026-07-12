import type { ServiceResult } from "@/lib/result";
import type { ProviderState } from "@/types/domain";
import type { ProviderKey } from "@/lib/env";
import { ok } from "@/lib/result";
import { validateEnv } from "@/lib/env";

/** Provider status resolution — presence-based until real tests run. */
export interface ProvidersService {
  getProviderState(input: { key: ProviderKey }): Promise<ServiceResult<{ state: ProviderState }>>;
}

export const providersService: ProvidersService = {
  async getProviderState({ key }) {
    const env = validateEnv();
    return ok({ state: env.providers[key] });
  },
};
