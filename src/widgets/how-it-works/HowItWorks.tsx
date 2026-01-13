"use client";

import { useRef } from "react";
import { Upload, Settings, Send, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Container, SectionHeader } from "@/shared/ui";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Загрузите",
    subtitle: "документы",
    description: "PDF, Word, TXT — любые документы вашей компании",
    duration: "2 мин",
  },
  {
    icon: Settings,
    step: "02",
    title: "Настройте",
    subtitle: "аватара",
    description: "Выберите имя, стиль ответа и поведение бота",
    duration: "2 мин",
  },
  {
    icon: Send,
    step: "03",
    title: "Опубликуйте",
    subtitle: "в Telegram",
    description: "Один клик — и ваш бот уже работает в Telegram",
    duration: "30 сек",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Смотрите",
    subtitle: "результаты",
    description: "Аналитика в реальном времени по каждому вопросу",
    duration: "∞",
  },
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "100%"]);

  return (
    <section className="py-24 lg:py-32 bg-bg-secondary" id="how-it-works" ref={containerRef}>
      <Container>
        {/* Header with 50/50 split */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24">
          <SectionHeader
            number="01"
            label="Процесс"
            title="5 минут до запуска"
            className="mb-0"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed lg:pt-16"
          >
            Проверенная методология: от загрузки документов до работающего бота в Telegram.
            Без разработчиков, без сложных настроек.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line - desktop only */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-border">
            <motion.div
              className="h-full bg-brand-primary"
              style={{ width: lineWidth }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative lg:pt-16"
              >
                {/* Circle indicator - desktop */}
                <div className="hidden lg:flex absolute top-0 left-0 w-5 h-5 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-brand-primary" />
                  <div className="absolute w-5 h-5 rounded-full border-2 border-brand-primary" />
                </div>

                {/* Step number */}
                <div className="font-mono text-6xl lg:text-7xl font-bold text-bg-elevated mb-4">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-primary border border-border mb-4">
                  <item.icon className="h-6 w-6 text-brand-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl lg:text-3xl text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-lg text-text-muted mb-3">{item.subtitle}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Duration badge */}
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded border border-brand-primary text-brand-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  {item.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <span className="font-mono text-sm text-text-muted">Итого:</span>
            <span className="ml-3 font-heading text-3xl lg:text-4xl text-text-primary">
              5 минут
            </span>
          </div>
          <p className="text-sm text-text-secondary max-w-md">
            * Время может варьироваться в зависимости от размера документов и сложности настройки
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
