"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button, Container, FadeInOnLoad } from "@/shared/ui";
import { ROUTES } from "@/shared/config";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/10 via-transparent to-transparent opacity-50" />

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <FadeInOnLoad delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-accent-primary" />
              <span className="text-sm font-medium text-accent-primary">
                AI Avatar Platform
              </span>
            </div>
          </FadeInOnLoad>

          {/* H1 */}
          <FadeInOnLoad delay={0.1}>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl">
              AI-консультант на документах компании{" "}
              <span className="text-accent-primary">за 5 минут</span>, без кода
            </h1>
          </FadeInOnLoad>

          {/* Subheadline */}
          <FadeInOnLoad delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
              Загрузите документы, настройте аватара, опубликуйте в Telegram.
              Всё работает на вашей базе знаний, не галлюцинирует.
            </p>
          </FadeInOnLoad>

          {/* CTAs */}
          <FadeInOnLoad delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={ROUTES.REQUEST}>
                <Button size="lg" className="group w-full sm:w-auto">
                  Получить демо
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/#pricing">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Смотреть тарифы
                </Button>
              </Link>
            </div>
          </FadeInOnLoad>

          {/* Trust badges */}
          <FadeInOnLoad delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-success"
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
                Без кредитной карты
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-success"
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
                GDPR compliant
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-success"
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
                5 минут до результата
              </div>
            </div>
          </FadeInOnLoad>
        </div>
      </Container>
    </section>
  );
};
