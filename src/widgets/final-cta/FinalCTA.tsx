"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container, Card, SectionHeader } from "@/shared/ui";
import { RequestForm } from "@/features/request-form";

export const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary" id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden bg-bg-primary p-0">
            <div className="grid lg:grid-cols-2">
              {/* Left - Text */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-brand-primary" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                    07 — Связь
                  </span>
                </div>

                <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl text-text-primary mb-4">
                  Готовы к демо<span className="text-brand-primary">?</span>
                </h2>

                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Оставьте заявку, и мы покажем, как AI Avatar Platform поможет
                  вашему бизнесу автоматизировать общение с клиентами.
                </p>

                <ul className="space-y-4">
                  {[
                    "Персональная демонстрация",
                    "Ответим на все вопросы",
                    "Свяжемся в течение 1 часа",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-text-secondary"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                        <ArrowRight className="h-3 w-3 text-success" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Form */}
              <div className="bg-bg-secondary p-8 lg:p-12">
                <RequestForm />
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};
