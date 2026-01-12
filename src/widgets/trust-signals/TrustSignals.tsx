"use client";

import { Shield, Lock, Server } from "lucide-react";

import { Container, StaggerContainer, StaggerItem } from "@/shared/ui";

const signals = [
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Соответствуем требованиям защиты персональных данных",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Все данные зашифрованы при передаче и хранении",
  },
  {
    icon: Server,
    title: "EU Data Centers",
    description: "Данные хранятся на защищённых серверах в Европе",
  },
];

export const TrustSignals = () => {
  return (
    <section className="border-y border-border bg-bg-secondary py-16">
      <Container>
        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {signals.map((signal) => (
            <StaggerItem
              key={signal.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary/10 transition-transform hover:scale-110">
                <signal.icon className="h-7 w-7 text-accent-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {signal.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {signal.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
