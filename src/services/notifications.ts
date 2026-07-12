import type { ServiceResult } from "@/lib/result";
import { stubService } from "@/services/base";

/** Server-backed in-app notifications with real unread counts. */
export interface NotificationsService {
  listForUser(input: { userId: string; cursor?: string }): Promise<ServiceResult<{ items: unknown[]; unreadCount: number; nextCursor: string | null }>>;
  markRead(input: { userId: string; notificationId: string }): Promise<ServiceResult<null>>;
}

export const notificationsService: NotificationsService = stubService<NotificationsService>("notifications", ["listForUser", "markRead"]);
