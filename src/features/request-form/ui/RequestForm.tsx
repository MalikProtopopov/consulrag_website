"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle } from "lucide-react";

import { Button, Input, Textarea } from "@/shared/ui";

import { useCreatePlanRequest } from "../model/useCreatePlanRequest";
import {
  planRequestSchema,
  RequestType,
  type PlanRequestCreate,
  type RequestTypeValue,
} from "../types";

interface RequestFormProps {
  defaultRequestType?: RequestTypeValue;
  onSuccess?: () => void;
}

export const RequestForm = ({
  defaultRequestType = RequestType.DEMO_REQUEST,
  onSuccess,
}: RequestFormProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate, isPending, error } = useCreatePlanRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PlanRequestCreate>({
    resolver: zodResolver(planRequestSchema),
    defaultValues: {
      request_type: defaultRequestType,
      contact_email: "",
      contact_phone: "",
      contact_telegram: "",
      message: "",
    },
  });

  const onSubmit = (data: PlanRequestCreate) => {
    // Filter out empty strings
    const cleanData: PlanRequestCreate = {
      request_type: data.request_type,
      ...(data.contact_email && { contact_email: data.contact_email }),
      ...(data.contact_phone && { contact_phone: data.contact_phone }),
      ...(data.contact_telegram && { contact_telegram: data.contact_telegram }),
      ...(data.message && { message: data.message }),
    };

    mutate(cleanData, {
      onSuccess: () => {
        setIsSuccess(true);
        reset();
        onSuccess?.();
      },
    });
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-bg-secondary p-8 text-center">
        <CheckCircle className="h-16 w-16 text-success" />
        <h3 className="text-xl font-semibold text-text-primary">
          Спасибо за заявку!
        </h3>
        <p className="text-text-secondary">
          Мы свяжемся с вами в ближайшее время.
        </p>
        <Button
          variant="secondary"
          onClick={() => setIsSuccess(false)}
          className="mt-4"
        >
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      noValidate
    >
      <input type="hidden" {...register("request_type")} />

      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        error={errors.contact_email?.message}
        {...register("contact_email")}
      />

      <Input
        label="Телефон"
        type="tel"
        placeholder="+7 (999) 123-45-67"
        error={errors.contact_phone?.message}
        {...register("contact_phone")}
      />

      <Input
        label="Telegram"
        placeholder="@username"
        error={errors.contact_telegram?.message}
        {...register("contact_telegram")}
      />

      <Textarea
        label="Сообщение"
        placeholder="Расскажите о вашем проекте..."
        rows={4}
        error={errors.message?.message}
        {...register("message")}
      />

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-error/10 p-3 text-sm text-error">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>
            {error.message || "Произошла ошибка. Попробуйте позже."}
          </span>
        </div>
      )}

      <Button type="submit" size="lg" isLoading={isPending} className="mt-2">
        {isPending ? "Отправка..." : "Отправить заявку"}
      </Button>

      <p className="text-center text-sm text-text-muted">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
};

