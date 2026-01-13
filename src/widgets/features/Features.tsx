"use client";

import {
  FileText,
  Palette,
  MessageCircle,
  BarChart2,
  Users,
  Cog,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container, SectionHeader, Card } from "@/shared/ui";

const features = [
  {
    icon: FileText,
    title: "RAG на документах",
    description:
      "Чат работает только на ваших данных. Загрузили документы → аватар изучил → отвечает точно.",
  },
  {
    icon: Palette,
    title: "Без кода",
    description:
      "Все настройки в браузере. Drag-drop для документов, кнопки для настроек. Разработчики не нужны.",
  },
  {
    icon: MessageCircle,
    title: "Telegram интеграция",
    description:
      "Скопировали bot token → вставили → опубликовали. Webhook автоматический.",
  },
  {
    icon: BarChart2,
    title: "Аналитика реал-тайм",
    description:
      "Каждый вопрос, каждый ответ, лайки/дизлайки. Видите, что работает, что нет.",
  },
  {
    icon: Users,
    title: "Управление командой",
    description:
      "Owner, Manager, Content Manager. Каждый видит только то, что ему нужно.",
  },
  {
    icon: Cog,
    title: "Гибкие LLM",
    description:
      "Выбирайте модель (GPT-4, GPT-4o). Меняйте параметры без перезагрузки.",
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
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export const Features = () => {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary" id="features">
      <Container>
        <SectionHeader
          number="03"
          label="Возможности"
          title="Основные функции"
          description="Всё, что нужно для создания умного AI-консультанта"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card variant="default" className="h-full bg-bg-primary">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elevated mb-5">
                  <feature.icon className="h-6 w-6 text-brand-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl lg:text-2xl text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
