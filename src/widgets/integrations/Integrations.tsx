"use client";

import { Send, Globe, MessageSquare, Mail, Code } from "lucide-react";
import { motion } from "framer-motion";

import { Container, SectionHeader, Card } from "@/shared/ui";

interface Integration {
  icon: typeof Send;
  name: string;
  status: "ready" | "soon";
  description: string;
}

const integrations: Integration[] = [
  {
    icon: Send,
    name: "Telegram",
    status: "ready",
    description: "Бот в Telegram за 1 клик, webhook автоматический",
  },
  {
    icon: Globe,
    name: "Web Chat",
    status: "ready",
    description: "Встраиваемый чат для вашего сайта (SDK или iframe)",
  },
  {
    icon: MessageSquare,
    name: "WhatsApp",
    status: "soon",
    description: "Интеграция планируется в Q1 2026",
  },
  {
    icon: Mail,
    name: "Email",
    status: "soon",
    description: "Автоответы на письма на базе RAG",
  },
  {
    icon: Code,
    name: "REST API",
    status: "ready",
    description: "Полный API для custom интеграций",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export const Integrations = () => {
  return (
    <section className="py-24 lg:py-32" id="integrations">
      <Container>
        <SectionHeader
          number="04"
          label="Интеграции"
          title="Работает везде"
          description="Подключайте каналы коммуникации в пару кликов"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {integrations.map((integration) => (
            <motion.div key={integration.name} variants={itemVariants}>
              <Card
                variant="interactive"
                className="h-full flex flex-col items-center text-center relative pt-8"
              >
                {/* Status badge */}
                <div
                  className={`absolute top-3 right-3 rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${
                    integration.status === "ready"
                      ? "bg-success/10 text-success"
                      : "bg-brand-primary/10 text-brand-primary"
                  }`}
                >
                  {integration.status === "ready" ? "Готово" : "Скоро"}
                </div>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-elevated mb-4">
                  <integration.icon className="h-7 w-7 text-brand-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  {integration.name}
                </h3>
                <p className="text-xs lg:text-sm text-text-secondary leading-relaxed">
                  {integration.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
