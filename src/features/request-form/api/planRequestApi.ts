import { apiClient } from "@/shared/api";
import { API_ENDPOINTS } from "@/shared/config";

import type { PlanRequestCreate, PlanRequestResponse } from "../types";

export const planRequestApi = {
  create: async (data: PlanRequestCreate): Promise<PlanRequestResponse> => {
    return apiClient.post<PlanRequestCreate, PlanRequestResponse>(
      API_ENDPOINTS.PLAN_REQUESTS,
      data
    );
  },
};

