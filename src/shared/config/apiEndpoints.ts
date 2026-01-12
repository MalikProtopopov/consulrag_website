export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.parmenid.tech/api/v1";

export const API_ENDPOINTS = {
  PLAN_REQUESTS: "/plan-requests/",
  HEALTH: "/health",
} as const;

