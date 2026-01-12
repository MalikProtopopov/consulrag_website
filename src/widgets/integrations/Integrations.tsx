"use client";

import { Send, Globe, MessageSquare, Mail, Code } from "lucide-react";

import {
  Container,
  Card,
  StaggerContainer,
  StaggerHoverItem,
  FadeIn,
} from "@/shared/ui";

interface Integration {
  icon: typeof Send;
  name: string;
  status: "ready" | "soon";
  description: string;
  color: string;
}

const integrations: Integration[] = [
  {
    icon: Send,
    name: "Telegram",
    status: "ready",
    description: "Бот в Telegram за 1 клик, webhook автоматический",
    color: "text-blue-400",
  },
  {
    icon: Globe,
    name: "Web Chat",
    status: "ready",
    description: "Встраиваемый чат для вашего сайта (SDK или iframe)",
    color: "text-green-400",
  },
  {
    icon: MessageSquare,
    name: "WhatsApp",
    status: "soon",
    description: "Интеграция планируется в Q1 2026",
    color: "text-emerald-400",
  },
  {
    icon: Mail,
    name: "Email",
    status: "soon",
    description: "Автоответы на письма на базе RAG",
    color: "text-orange-400",
  },
  {
    icon: Code,
    name: "REST API",
    status: "ready",
    description: "Полный API для custom интеграций",
    color: "text-purple-400",
  },
];

export const Integrations = () => {
  return (
    <section className="py-20 bg-bg-secondary" id="integrations">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Работает везде, где ваши клиенты
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Подключайте каналы коммуникации в пару кликов
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {integrations.map((integration) => (
            <StaggerHoverItem key={integration.name}>
              <Card
                variant="bordered"
                className="group relative flex h-full flex-col items-center text-center"
              >
                {/* Status badge */}
                <div
                  className={`absolute -top-2 right-4 rounded-full px-2 py-0.5 text-xs font-medium ${
                    integration.status === "ready"
                      ? "bg-success/20 text-success"
                      : "bg-accent-primary/20 text-accent-primary"
                  }`}
                >
                  {integration.status === "ready" ? "✓ Готово" : "🚀 Скоро"}
                </div>

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-bg-hover transition-colors group-hover:bg-bg-primary">
                  <integration.icon
                    className={`h-8 w-8 ${integration.color}`}
                  />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {integration.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {integration.description}
                </p>
              </Card>
            </StaggerHoverItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

