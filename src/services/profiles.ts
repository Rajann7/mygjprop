import type { ServiceResult } from "@/lib/result";
import type { PublicRole } from "@/lib/roles";
import type { VerificationState } from "@/types/domain";
import { stubService } from "@/services/base";

export interface Profile {
  userId: string;
  role: PublicRole;
  fullName: string;
  email: string;
  mobile: string;
  verification: VerificationState;
}

/** Profile management for public roles; business identity for Broker/Builder. */
export interface ProfilesService {
  getProfile(input: { userId: string }): Promise<ServiceResult<Profile>>;
  updateProfile(input: { userId: string; changes: Partial<Pick<Profile, "fullName" | "email">> }): Promise<ServiceResult<Profile>>;
}

export const profilesService: ProfilesService = stubService<ProfilesService>("profiles", ["getProfile", "updateProfile"]);
