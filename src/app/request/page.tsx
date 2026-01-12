import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Header, Footer } from "@/widgets";
import { Container, Card } from "@/shared/ui";
import { RequestForm } from "@/features/request-form";
import { ROUTES } from "@/shared/config";

export const metadata: Metadata = {
  title: "Оставить заявку — Parmenid",
  description:
    "Оставьте заявку на демонстрацию AI Avatar Platform. Мы свяжемся с вами в течение часа.",
};

export default function RequestPage() {
  return (
    <>
      <Header />
      <main className="py-12 md:py-20">
        <Container size="sm">
          {/* Back link */}
          <Link
            href={ROUTES.HOME}
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Вернуться на главную
          </Link>

          {/* Form Card */}
          <Card className="mx-auto max-w-lg">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-text-primary md:text-3xl">
                Оставить заявку
              </h1>
              <p className="mt-2 text-text-secondary">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <RequestForm />
          </Card>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted">
              Или напишите нам напрямую:{" "}
              <a
                href="mailto:work@parmenid.tech"
                className="text-accent-primary hover:text-accent-hover"
              >
                work@parmenid.tech
              </a>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

