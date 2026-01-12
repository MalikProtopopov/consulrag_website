"use client";

import { Upload, Settings, Send, BarChart3 } from "lucide-react";

import {
  Container,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerHoverItem,
} from "@/shared/ui";

const steps = [
  {
    icon: Upload,
    step: 1,
    title: "Загрузите документы",
    description: "PDF, Word, TXT — любые документы вашей компании",
  },
  {
    icon: Settings,
    step: 2,
    title: "Настройте аватара",
    description: "Выберите имя, стиль ответа и поведение бота",
  },
  {
    icon: Send,
    step: 3,
    title: "Опубликуйте в Telegram",
    description: "Один клик — и ваш бот уже работает в Telegram",
  },
  {
    icon: BarChart3,
    step: 4,
    title: "Смотрите результаты",
    description: "Аналитика в реальном времени по каждому вопросу",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20" id="how-it-works">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Как это работает
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            4 простых шага до вашего AI-консультанта
          </p>
        </FadeIn>

        <StaggerContainer
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.15}
        >
          {steps.map((item, index) => (
            <StaggerHoverItem key={item.step}>
              <Card
                variant="bordered"
                className="relative flex h-full flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent-primary text-sm font-bold text-accent-contrast">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-bg-hover transition-colors group-hover:bg-accent-primary/10">
                  <item.icon className="h-7 w-7 text-accent-primary" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>

                {/* Arrow (not for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-text-muted lg:block">
                    →
                  </div>
                )}
              </Card>
            </StaggerHoverItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
