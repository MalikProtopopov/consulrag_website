"use client";

import { Container, Card, FadeIn } from "@/shared/ui";
import { RequestForm } from "@/features/request-form";

export const FinalCTA = () => {
  return (
    <section className="py-20" id="contact">
      <Container size="md">
        <FadeIn>
          <Card className="overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left - Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
                  Готовы к демо?
                </h2>
                <p className="mt-4 text-lg text-text-secondary">
                  Оставьте заявку, и мы покажем, как AI Avatar Platform поможет
                  вашему бизнесу автоматизировать общение с клиентами.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-text-secondary">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-success"
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
                    Персональная демонстрация
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-success"
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
                    Ответим на все вопросы
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-success"
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
                    Свяжемся в течение 1 часа
                  </li>
                </ul>
              </div>

              {/* Right - Form */}
              <div className="rounded-xl bg-bg-primary p-6">
                <RequestForm />
              </div>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
};
