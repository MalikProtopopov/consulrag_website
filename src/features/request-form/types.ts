import { z } from "zod";

export const RequestType = {
  DEMO_REQUEST: "demo_request",
  CONTACT_SALES: "contact_sales",
  PLAN_UPGRADE: "plan_upgrade",
} as const;

export type RequestTypeValue = (typeof RequestType)[keyof typeof RequestType];

export const planRequestSchema = z
  .object({
    request_type: z.enum([
      RequestType.DEMO_REQUEST,
      RequestType.CONTACT_SALES,
      RequestType.PLAN_UPGRADE,
    ]),
    contact_email: z.string().email("Введите корректный email").optional().or(z.literal("")),
    contact_phone: z.string().optional().or(z.literal("")),
    contact_telegram: z.string().optional().or(z.literal("")),
    message: z.string().max(2000, "Максимум 2000 символов").optional().or(z.literal("")),
    requested_plan: z.string().optional(),
  })
  .refine(
    (data) => {
      const hasEmail = data.contact_email && data.contact_email.length > 0;
      const hasPhone = data.contact_phone && data.contact_phone.length > 0;
      const hasTelegram = data.contact_telegram && data.contact_telegram.length > 0;
      return hasEmail || hasPhone || hasTelegram;
    },
    {
      message: "Укажите хотя бы один способ связи (email, телефон или Telegram)",
      path: ["contact_email"],
    }
  );

export type PlanRequestCreate = z.infer<typeof planRequestSchema>;

export interface PlanRequestResponse {
  id: string;
  request_type: RequestTypeValue;
  status: "new" | "in_progress" | "completed" | "cancelled";
  requested_plan: string | null;
  created_at: string;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

