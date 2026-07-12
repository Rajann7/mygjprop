import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Builder projects; units are managed inside the project context. */
export interface ProjectsService {
  createProject(input: { builderUserId: string; draft: Record<string, unknown> }): Promise<ServiceResult<{ projectId: string }>>;
  getProject(input: { projectId: string }): Promise<ServiceResult<Record<string, unknown>>>;
  listOwned(input: { builderUserId: string; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; nextCursor: string | null }>>;
}

export const projectsService: ProjectsService = stubService<ProjectsService>("projects", ["createProject", "getProject", "listOwned"]);
