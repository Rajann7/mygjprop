import type { ServiceResult } from "@/lib/result";
import type { ModerationState } from "@/types/domain";
import { stubService } from "@/services/base";

/** Moderation queues and audited decisions with recovery support. */
export interface ModerationService {
  listQueue(input: { actorId: string; entityKind: string; state?: ModerationState; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; nextCursor: string | null }>>;
  decide(input: { actorId: string; entity: { kind: string; id: string }; to: ModerationState; reason: string }): Promise<ServiceResult<null>>;
}

export const moderationService: ModerationService = stubService<ModerationService>("moderation", ["listQueue", "decide"]);
