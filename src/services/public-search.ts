import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Public marketplace search across properties, projects, and locations. */
export interface PublicSearchService {
  search(input: { query?: string; cityId?: string; filters?: Record<string, string>; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; nextCursor: string | null }>>;
}

export const publicSearchService: PublicSearchService = stubService<PublicSearchService>("public-search", ["search"]);
