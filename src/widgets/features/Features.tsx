"use client";

import {
  FileText,
  Palette,
  MessageCircle,
  BarChart2,
  Users,
  Cog,
} from "lucide-react";

import {
  Container,
  Card,
  FadeIn,
  StaggerContainer,
  StaggerHoverItem,
} from "@/shared/ui";

const features = [
  {
    icon: FileText,
    title: "RAG на документах",
    description:
      "Чат работает только на ваших данных. Загрузили документы → аватар изучил → отвечает точно.",
    color: "text-teal-400",
  },
  {
    icon: Palette,
    title: "Без кода",
    description:
      "Все настройки в браузере. Drag-drop для документов, кнопки для настроек. Разработчики не нужны.",
    color: "text-orange-400",
  },
  {
    icon: MessageCircle,
    title: "Telegram интеграция",
    description:
      "Скопировали bot token → вставили → опубликовали. Webhook автоматический.",
    color: "text-blue-400",
  },
  {
    icon: BarChart2,
    title: "Аналитика реал-тайм",
    description:
      "Каждый вопрос, каждый ответ, лайки/дизлайки. Видите, что работает, что нет.",
    color: "text-green-400",
  },
  {
    icon: Users,
    title: "Управление командой",
    description:
      "Owner, Manager, Content Manager. Каждый видит только то, что ему нужно.",
    color: "text-purple-400",
  },
  {
    icon: Cog,
    title: "Гибкие LLM",
    description:
      "Выбирайте модель (GPT-4, GPT-4o). Меняйте параметры без перезагрузки.",
    color: "text-red-400",
  },
];

export const Features = () => {
  return (
    <section className="py-20" id="features">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Основные возможности
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Всё, что нужно для создания умного AI-консультанта
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerHoverItem key={feature.title}>
              <Card variant="bordered" className="h-full">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-hover transition-colors">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {feature.description}
                </p>
              </Card>
            </StaggerHoverItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
