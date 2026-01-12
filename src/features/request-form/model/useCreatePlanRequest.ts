"use client";

import { useMutation } from "@tanstack/react-query";

import { planRequestApi } from "../api/planRequestApi";
import type { PlanRequestCreate, PlanRequestResponse } from "../types";

export const useCreatePlanRequest = () => {
  return useMutation<PlanRequestResponse, Error, PlanRequestCreate>({
    mutationFn: planRequestApi.create,
  });
};

