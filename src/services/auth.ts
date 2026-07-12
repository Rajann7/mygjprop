import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Authentication: mobile-number OTP login, registration, sessions. */
export interface AuthService {
  requestOtp(input: { mobile: string; context: "login" | "register" }): Promise<ServiceResult<{ resendAvailableAt: string }>>;
  verifyOtp(input: { mobile: string; code: string }): Promise<ServiceResult<{ userId: string }>>;
  logout(input: { sessionId: string }): Promise<ServiceResult<null>>;
}

export const authService: AuthService = stubService<AuthService>("auth", ["requestOtp", "verifyOtp", "logout"]);
