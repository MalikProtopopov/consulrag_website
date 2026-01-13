"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container, Button, SectionHeader } from "@/shared/ui";
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
      "Ваши документы хранятся на защищённых серверах в России. Не используются для обучения других моделей. Соответствуем 152-ФЗ. Все данные шифруются при хранении и передаче (SSL/TLS).",
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
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand-primary"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-text-primary group-hover:text-brand-primary">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32" id="faq">
      <Container size="md">
        <SectionHeader
          number="06"
          label="FAQ"
          title="Частые вопросы"
          description="Ответы на популярные вопросы о платформе"
        />

        <div className="border-t border-border">
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-4">Не нашли ответ?</p>
          <Link href={ROUTES.REQUEST}>
            <Button variant="secondary" size="md">
              Связаться с нами
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};
