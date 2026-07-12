import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Gujarat textual location hierarchy: State to District to Taluka to City to Village/Locality. */
export interface LocationNode {
  id: string;
  level: "state" | "district" | "taluka" | "city" | "locality";
  name: string;
  parentId: string | null;
}

export interface LocationsService {
  searchLocations(input: { query: string; level?: LocationNode["level"] }): Promise<ServiceResult<LocationNode[]>>;
  getChildren(input: { parentId: string }): Promise<ServiceResult<LocationNode[]>>;
}

export const locationsService: LocationsService = stubService<LocationsService>("locations", ["searchLocations", "getChildren"]);
