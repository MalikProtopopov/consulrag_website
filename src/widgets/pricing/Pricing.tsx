"use client";

import Link from "next/link";
import { Check, X, Sparkles } from "lucide-react";

import {
  Container,
  Card,
  Button,
  StaggerContainer,
  StaggerHoverItem,
  FadeIn,
} from "@/shared/ui";
import { ROUTES } from "@/shared/config";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
  contactSales?: boolean;
}

const plans: Plan[] = [
  {
    name: "FREE",
    price: "$0",
    period: "навсегда",
    description: "Попробуйте платформу без обязательств",
    features: [
      { text: "~1,000 вопросов/месяц", included: true },
      { text: "1 проект", included: true },
      { text: "1 AI-консультант", included: true },
      { text: "10 документов", included: true },
      { text: "Telegram интеграция", included: true },
      { text: "Базовая аналитика", included: true },
      { text: "Командная работа", included: false },
    ],
    cta: "Начать бесплатно",
  },
  {
    name: "STARTER",
    price: "$29",
    period: "/месяц",
    description: "Для стартапов и малого бизнеса",
    features: [
      { text: "~5,000 вопросов/месяц", included: true },
      { text: "3 проекта", included: true },
      { text: "5 AI-консультантов", included: true },
      { text: "50 документов", included: true },
      { text: "Telegram + Web Chat", included: true },
      { text: "Расширенная аналитика", included: true },
      { text: "Email поддержка", included: true },
    ],
    cta: "Выбрать",
  },
  {
    name: "GROWTH",
    price: "$99",
    period: "/месяц",
    description: "Для растущих компаний",
    popular: true,
    features: [
      { text: "~25,000 вопросов/месяц", included: true },
      { text: "10 проектов", included: true },
      { text: "20 AI-консультантов", included: true },
      { text: "200 документов", included: true },
      { text: "Все интеграции", included: true },
      { text: "Продвинутая аналитика", included: true },
      { text: "Приоритетная поддержка", included: true },
    ],
    cta: "Выбрать",
  },
  {
    name: "SCALE",
    price: "$299",
    period: "/месяц",
    description: "Для команд и среднего бизнеса",
    features: [
      { text: "~100,000 вопросов/месяц", included: true },
      { text: "Неограниченно проектов", included: true },
      { text: "50 AI-консультантов", included: true },
      { text: "500 документов", included: true },
      { text: "Все интеграции + API", included: true },
      { text: "Командные роли", included: true },
      { text: "Персональный менеджер", included: true },
    ],
    cta: "Выбрать",
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    period: "",
    description: "Индивидуальные решения",
    contactSales: true,
    features: [
      { text: "Неограниченные вопросы", included: true },
      { text: "Неограниченно всего", included: true },
      { text: "On-premise deployment", included: true },
      { text: "Custom LLM модели", included: true },
      { text: "SLA гарантии 99.9%", included: true },
      { text: "Dedicated support 24/7", included: true },
      { text: "White-label опция", included: true },
    ],
    cta: "Связаться с sales",
  },
];

export const Pricing = () => {
  return (
    <section className="py-20" id="pricing">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Простые и прозрачные цены
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Начните бесплатно, масштабируйтесь по мере роста
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => (
            <StaggerHoverItem key={plan.name}>
              <Card
                variant="bordered"
                className={`relative flex h-full flex-col ${
                  plan.popular
                    ? "border-accent-primary ring-2 ring-accent-primary/20"
                    : ""
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 rounded-full bg-accent-primary px-3 py-1 text-xs font-semibold text-accent-contrast">
                      <Sparkles className="h-3 w-3" />
                      Популярный
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span
                      className={`text-3xl font-bold ${
                        plan.popular ? "text-accent-primary" : "text-text-primary"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm text-text-muted">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-text-muted" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-text-secondary"
                            : "text-text-muted"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href={plan.contactSales ? ROUTES.REQUEST : ROUTES.REQUEST}
                    className="block"
                  >
                    <Button
                      variant={plan.popular ? "primary" : "secondary"}
                      size="md"
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            </StaggerHoverItem>
          ))}
        </StaggerContainer>

        {/* Footer note */}
        <FadeIn delay={0.3} className="mt-10 text-center">
          <p className="text-sm text-text-muted">
            Все планы включают GDPR compliance и EU data centers.{" "}
            <Link
              href={ROUTES.REQUEST}
              className="text-accent-primary hover:text-accent-hover"
            >
              Нужна консультация?
            </Link>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

