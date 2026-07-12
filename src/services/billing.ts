import type { ServiceResult } from "@/lib/result";
import type { PaymentState, SubscriptionState } from "@/types/domain";
import { stubService } from "@/services/base";

/** Billing, subscriptions, and payment webhooks (Razorpay; test mode first). */
export interface BillingService {
  getSubscription(input: { userId: string }): Promise<ServiceResult<{ state: SubscriptionState; planId: string | null }>>;
  createCheckout(input: { userId: string; planId: string }): Promise<ServiceResult<{ checkoutRef: string }>>;
  handleWebhook(input: { signature: string; rawBody: string }): Promise<ServiceResult<{ payment: PaymentState }>>;
}

export const billingService: BillingService = stubService<BillingService>("billing", ["getSubscription", "createCheckout", "handleWebhook"]);
