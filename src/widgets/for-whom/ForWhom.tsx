"use client";

import { Home, ShoppingCart, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { Container, SectionHeader, Card } from "@/shared/ui";

const segments = [
  {
    icon: Home,
    title: "Риелторы и застройщики",
    benefits: [
      "Получайте лиды 24/7",
      "Автоматическая квалификация клиентов",
      "Ответы на вопросы о проектах",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    benefits: [
      "Суппорт работает ночью",
      "Быстрые ответы на FAQ",
      "Клиенты не уходят к конкурентам",
    ],
  },
  {
    icon: Briefcase,
    title: "B2B / SaaS",
    benefits: [
      "Кастомизация под ваши процессы",
      "API-first подход",
      "Интеграция в существующие системы",
    ],
  },
  {
    icon: GraduationCap,
    title: "Тренеры и авторы",
    benefits: [
      "Преподаёт ваш опыт",
      "Масштабируйте себя",
      "Ученики не ждут ответов",
    ],
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
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export const ForWhom = () => {
  return (
    <section className="py-24 lg:py-32" id="for-whom">
      <Container>
        <SectionHeader
          number="02"
          label="Аудитория"
          title="Идеально подходит для"
          description="Решения для разных индустрий и задач"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {segments.map((segment) => (
            <motion.div key={segment.title} variants={itemVariants}>
              <Card variant="interactive" className="h-full">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elevated mb-5">
                  <segment.icon className="h-6 w-6 text-brand-primary" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl lg:text-2xl text-text-primary mb-4">
                  {segment.title}
                </h3>

                {/* Benefits */}
                <ul className="space-y-3">
                  {segment.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
