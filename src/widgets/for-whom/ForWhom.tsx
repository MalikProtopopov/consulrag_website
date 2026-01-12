"use client";

import { Home, ShoppingCart, Briefcase, GraduationCap } from "lucide-react";

import {
  Container,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerHoverItem,
} from "@/shared/ui";

const segments = [
  {
    icon: Home,
    title: "Риелторы и застройщики",
    benefits: [
      "Получайте лиды 24/7",
      "Автоматическая квалификация клиентов",
      "Ответы на вопросы о проектах",
    ],
    color: "text-blue-400",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    benefits: [
      "Суппорт работает ночью",
      "Быстрые ответы на FAQ",
      "Клиенты не уходят к конкурентам",
    ],
    color: "text-green-400",
  },
  {
    icon: Briefcase,
    title: "B2B / SaaS",
    benefits: [
      "Кастомизация под ваши процессы",
      "API-first подход",
      "Интеграция в существующие системы",
    ],
    color: "text-purple-400",
  },
  {
    icon: GraduationCap,
    title: "Тренеры и авторы",
    benefits: [
      "Преподаёт ваш опыт",
      "Масштабируйте себя",
      "Ученики не ждут ответов",
    ],
    color: "text-orange-400",
  },
];

export const ForWhom = () => {
  return (
    <section className="bg-bg-secondary py-20" id="for-whom">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Идеально подходит для
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Решения для разных индустрий и задач
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <StaggerHoverItem key={segment.title} scale={1.05}>
              <Card className="h-full">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-hover transition-colors">
                  <segment.icon className={`h-6 w-6 ${segment.color}`} />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {segment.title}
                </h3>

                {/* Benefits */}
                <ul className="mt-4 space-y-2">
                  {segment.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerHoverItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
