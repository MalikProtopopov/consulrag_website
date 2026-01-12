"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  Container,
  Button,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AccordionContent,
} from "@/shared/ui";
import { ROUTES } from "@/shared/config";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Что такое RAG и зачем мне это?",
    answer:
      "RAG (Retrieval-Augmented Generation) — это когда AI ищет ответы в ваших документах вместо того, чтобы придумывать. Результат: аватар отвечает правильно, на основе ВАШЕЙ информации, не галлюцинирует.",
  },
  {
    question: "Как быстро начать?",
    answer:
      "За 5 минут: 1) Загрузите PDF/Word, 2) Настройте аватара (выберите имя, тон), 3) Опубликуйте в Telegram, 4) Готово. Можно попробовать на FREE плане прямо сейчас.",
  },
  {
    question: "Мне нужны разработчики?",
    answer:
      "Нет. Всё делается в UI: drag-drop загрузка документов, кнопочки для настройки, 1 клик = опубликовано в Telegram. Разработчики нужны только если хотите custom интеграции через API.",
  },
  {
    question: "Сколько документов можно загрузить?",
    answer:
      "На FREE: 10 документов. На STARTER: 50. На GROWTH: 200. Каждый документ может быть PDF, Word, TXT, Markdown, HTML. Лимит размера файла: 50MB PDF, 20MB Word, 10MB остальное.",
  },
  {
    question: "Как работает безопасность данных?",
    answer:
      "Ваши документы хранятся на защищённых серверах (EU data centers). Не используются для обучения других моделей. GDPR compliant. Все данные шифруются at-rest и in-transit (SSL/TLS).",
  },
  {
    question: "Какие LLM модели используются?",
    answer:
      "По умолчанию: GPT-4o (самый умный). Также поддерживаем GPT-4 turbo, GPT-4o mini (дешевле). На SCALE+ можно выбрать другие модели (Claude, Mistral).",
  },
  {
    question: "Что если я превышу лимит токенов?",
    answer:
      "На FREE: жёсткий блок (новые вопросы не принимаются). На STARTER+: можно включить overage ($0.030 за тысячу токенов чата). Либо просто обновить план.",
  },
  {
    question: "Как работает интеграция с Telegram?",
    answer:
      "Очень просто: скопируйте bot token из BotFather → вставьте в платформу → нажмите «Publish» → готово. Webhook настраивается автоматически. Вы сразу видите, что пишут люди.",
  },
];

const FAQAccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg-secondary">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-bg-hover"
      >
        <span className="text-base font-medium text-text-primary">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AccordionContent isOpen={isOpen}>
        <div className="border-t border-border px-6 py-4">
          <p className="text-text-secondary">{item.answer}</p>
        </div>
      </AccordionContent>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20" id="faq">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Ответы на популярные вопросы о платформе
          </p>
        </FadeIn>

        <StaggerContainer className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <StaggerItem key={index}>
              <FAQAccordionItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-text-secondary">Не нашли ответ?</p>
          <Link href={ROUTES.REQUEST} className="mt-4 inline-block">
            <Button variant="secondary" size="md">
              Связаться с нами
            </Button>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
};

