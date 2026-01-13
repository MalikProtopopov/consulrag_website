"use client";

import Link from "next/link";
import { Check, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Container, Card, Button, SectionHeader } from "@/shared/ui";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export const Pricing = () => {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary" id="pricing">
      <Container>
        <SectionHeader
          number="05"
          label="Тарифы"
          title="Простые и прозрачные цены"
          description="Начните бесплатно, масштабируйтесь по мере роста"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card
                variant="default"
                className={`relative flex h-full flex-col bg-bg-primary ${
                  plan.popular
                    ? "ring-2 ring-brand-primary border-brand-primary"
                    : ""
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
                      <Sparkles className="h-3 w-3" />
                      Популярный
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center">
                  <h3 className="font-mono text-sm font-semibold text-text-muted tracking-wider">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline justify-center gap-1">
                    <span
                      className={`font-heading text-3xl lg:text-4xl font-bold ${
                        plan.popular ? "text-brand-primary" : "text-text-primary"
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
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
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
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-text-muted">
            Все планы включают российские сервера и защиту данных по 152-ФЗ.{" "}
            <Link
              href={ROUTES.REQUEST}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors"
            >
              Нужна консультация?
            </Link>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
