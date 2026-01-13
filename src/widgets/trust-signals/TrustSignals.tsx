"use client";

import { Shield, Lock, Server } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/shared/ui";

const signals = [
  {
    icon: Shield,
    title: "152-ФЗ",
    description: "Соответствуем требованиям защиты персональных данных",
  },
  {
    icon: Lock,
    title: "Шифрование данных",
    description: "Все данные зашифрованы при передаче и хранении",
  },
  {
    icon: Server,
    title: "Российские сервера",
    description: "Данные хранятся на защищённых серверах в России",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export const TrustSignals = () => {
  return (
    <section className="border-y border-border bg-bg-secondary py-12 lg:py-16">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {signals.map((signal) => (
            <motion.div
              key={signal.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 transition-transform hover:scale-110">
                <signal.icon className="h-7 w-7 text-brand-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg text-text-primary">
                {signal.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
