import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Code,
  MessageCircle,
  Globe,
  ChevronRight,
} from "lucide-react";

import { Header, Footer } from "@/widgets";
import { Container, Card, Button } from "@/shared/ui";
import { ROUTES } from "@/shared/config";

export const metadata: Metadata = {
  title: "Документация — Parmenid",
  description:
    "Документация по AI Avatar Platform. Гайды, API, интеграции и FAQ.",
};

const docSections = [
  {
    icon: FileText,
    title: "Начало работы",
    description:
      "Пошаговое руководство по созданию вашего первого AI-консультанта",
    items: [
      "Создание проекта",
      "Загрузка документов",
      "Настройка аватара",
      "Тестирование",
    ],
  },
  {
    icon: Code,
    title: "API Документация",
    description: "Полная документация REST API для интеграции",
    items: [
      "Аутентификация",
      "Endpoints",
      "Rate Limits",
      "Webhooks",
    ],
  },
  {
    icon: MessageCircle,
    title: "Telegram интеграция",
    description: "Как подключить вашего AI-консультанта к Telegram",
    items: [
      "Создание бота в BotFather",
      "Подключение к платформе",
      "Настройка webhook",
      "Мониторинг",
    ],
  },
  {
    icon: Globe,
    title: "Web Chat виджет",
    description: "Встраивание чата на ваш сайт",
    items: [
      "Установка SDK",
      "Кастомизация внешнего вида",
      "События и callbacks",
      "Примеры",
    ],
  },
];

const faqItems = [
  {
    question: "Что такое RAG и зачем мне это?",
    answer:
      "RAG (Retrieval-Augmented Generation) — это когда AI ищет ответы в ваших документах вместо того, чтобы придумывать. Результат: аватар отвечает правильно, на основе ВАШЕЙ информации, не галлюцинирует.",
  },
  {
    question: "Как быстро начать?",
    answer:
      "За 5 минут: 1) Загрузите PDF/Word, 2) Настройте аватара, 3) Опубликуйте в Telegram, 4) Готово. Можно попробовать на FREE плане прямо сейчас.",
  },
  {
    question: "Мне нужны разработчики?",
    answer:
      "Нет. Всё делается в UI: drag-drop загрузка документов, кнопки для настройки. Разработчики нужны только для custom интеграций через API.",
  },
  {
    question: "Какие LLM модели поддерживаются?",
    answer:
      "По умолчанию: GPT-4o (самый умный). Также поддерживаем GPT-4 turbo, GPT-4o mini (дешевле). На SCALE+ можно выбрать другие модели.",
  },
  {
    question: "Как работает безопасность данных?",
    answer:
      "Ваши документы хранятся на защищённых серверах (EU data centers). Не используются для обучения других моделей. GDPR compliant. Все данные шифруются.",
  },
];

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="py-12 md:py-20">
        <Container>
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
              Документация
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Всё, что нужно знать для работы с AI Avatar Platform
            </p>
          </div>

          {/* Documentation sections */}
          <div className="grid gap-6 md:grid-cols-2">
            {docSections.map((section) => (
              <Card key={section.title} variant="bordered" className="group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-bg-hover">
                    <section.icon className="h-6 w-6 text-accent-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-text-primary">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      {section.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <ChevronRight className="h-4 w-4 text-text-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold text-text-primary">
              Часто задаваемые вопросы
            </h2>

            <div className="mx-auto max-w-3xl space-y-4">
              {faqItems.map((item) => (
                <Card key={item.question} variant="bordered">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-text-secondary">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-text-primary">
              Не нашли ответ?
            </h2>
            <p className="mt-2 text-text-secondary">
              Свяжитесь с нами, и мы поможем разобраться
            </p>
            <Link href={ROUTES.REQUEST} className="mt-6 inline-block">
              <Button size="lg">Связаться с нами</Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

