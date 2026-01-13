"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Code,
  MessageCircle,
  Globe,
  ChevronRight,
  Zap,
  Shield,
  Settings,
  BookOpen,
  Terminal,
  Webhook,
  Key,
  Database,
  Users,
  BarChart2,
  ExternalLink,
} from "lucide-react";

import { Header, Footer } from "@/widgets";
import { Container, Card, Button, SectionHeader } from "@/shared/ui";
import { ROUTES } from "@/shared/config";

const quickStartSteps = [
  {
    step: "01",
    title: "Создайте проект",
    description: "Зарегистрируйтесь на parmenid.tech и создайте новый проект в личном кабинете.",
    code: null,
  },
  {
    step: "02",
    title: "Загрузите документы",
    description: "Перетащите PDF, DOCX или TXT файлы в область загрузки. Система автоматически обработает и проиндексирует их.",
    code: null,
  },
  {
    step: "03",
    title: "Настройте аватара",
    description: "Выберите имя, стиль общения и параметры ответов. Всё через удобный интерфейс без кода.",
    code: null,
  },
  {
    step: "04",
    title: "Подключите Telegram",
    description: "Скопируйте токен бота из BotFather и вставьте в настройках. Webhook настроится автоматически.",
    code: "BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
  },
];

const apiEndpoints = [
  {
    method: "POST",
    path: "/api/v1/chat/completions",
    description: "Отправка сообщения AI-консультанту",
  },
  {
    method: "GET",
    path: "/api/v1/documents",
    description: "Получение списка загруженных документов",
  },
  {
    method: "POST",
    path: "/api/v1/documents/upload",
    description: "Загрузка нового документа",
  },
  {
    method: "GET",
    path: "/api/v1/analytics/conversations",
    description: "Получение аналитики по диалогам",
  },
  {
    method: "PUT",
    path: "/api/v1/avatar/settings",
    description: "Обновление настроек аватара",
  },
  {
    method: "DELETE",
    path: "/api/v1/documents/{id}",
    description: "Удаление документа",
  },
];

const docSections = [
  {
    icon: Zap,
    title: "Быстрый старт",
    description: "Создайте AI-консультанта за 5 минут",
    href: "#quickstart",
    color: "text-amber-500",
  },
  {
    icon: Code,
    title: "REST API",
    description: "Полная документация API для интеграций",
    href: "#api",
    color: "text-blue-500",
  },
  {
    icon: MessageCircle,
    title: "Telegram Bot",
    description: "Настройка и деплой бота в Telegram",
    href: "#telegram",
    color: "text-sky-500",
  },
  {
    icon: Globe,
    title: "Web Widget",
    description: "Встраивание чата на ваш сайт",
    href: "#widget",
    color: "text-green-500",
  },
  {
    icon: Database,
    title: "RAG & Документы",
    description: "Работа с базой знаний и индексацией",
    href: "#rag",
    color: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Шифрование, доступы и 152-ФЗ",
    href: "#security",
    color: "text-red-500",
  },
];

const codeExamples = {
  curl: `curl -X POST https://api.parmenid.tech/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "avatar_id": "av_123abc",
    "message": "Какие документы нужны для оформления?",
    "session_id": "user_456"
  }'`,
  response: `{
  "id": "msg_789xyz",
  "avatar_id": "av_123abc",
  "response": "Для оформления вам потребуются следующие документы: паспорт, ИНН, СНИЛС...",
  "sources": [
    {
      "document_id": "doc_001",
      "title": "Регламент оформления.pdf",
      "relevance": 0.94
    }
  ],
  "tokens_used": 156
}`,
  widget: `<script src="https://cdn.parmenid.tech/widget.js"></script>
<script>
  ParmenidChat.init({
    avatarId: 'av_123abc',
    position: 'bottom-right',
    theme: 'light',
    primaryColor: '#FF006E'
  });
</script>`,
};

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="py-16 md:py-24 lg:py-32">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
            className="mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Документация
              </span>
              <div className="h-px flex-1 max-w-[80px] bg-border" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary">
              parmenid ai docs
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Всё, что нужно для создания, настройки и интеграции вашего AI-консультанта
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={ROUTES.REQUEST}>
                <Button size="lg" className="group">
                  Оставить заявку
                </Button>
              </Link>
              <a href="#api">
                <Button variant="secondary" size="lg">
                  API Reference
                </Button>
              </a>
          </div>
          </motion.div>

          {/* Documentation sections grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-24"
          >
            {docSections.map((section, index) => (
              <motion.a
                key={section.title}
                href={section.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group"
              >
                <Card variant="bordered" className="h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-bg-elevated transition-colors group-hover:bg-brand-primary/10">
                      <section.icon className={`h-6 w-6 ${section.color}`} />
                  </div>
                  <div className="flex-1">
                      <h2 className="font-heading text-lg tracking-tight text-text-primary group-hover:text-brand-primary transition-colors">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      {section.description}
                    </p>
                  </div>
                    <ChevronRight className="h-5 w-5 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
                  </div>
                </Card>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Start Section */}
          <section id="quickstart" className="mb-24 scroll-mt-24">
            <SectionHeader
              number="01"
              label="Быстрый старт"
              title="Запуск за 5 минут"
              description="Пошаговое руководство по созданию вашего первого AI-консультанта."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {quickStartSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card variant="bordered" className="h-full p-6">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-3xl font-bold text-bg-elevated">
                        {step.step}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl tracking-tight text-text-primary">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-text-secondary">
                          {step.description}
                        </p>
                        {step.code && (
                          <div className="mt-4 rounded-lg bg-text-primary p-3 overflow-x-auto">
                            <code className="font-mono text-xs text-bg-primary">
                              {step.code}
                            </code>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
                </div>
          </section>

          {/* API Section */}
          <section id="api" className="mb-24 scroll-mt-24">
            <SectionHeader
              number="02"
              label="REST API"
              title="API Reference"
              description="Полная документация REST API для интеграции с вашими системами."
            />

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Endpoints list */}
              <div>
                <h3 className="font-heading text-2xl tracking-tight text-text-primary mb-6">
                  Основные endpoints
                </h3>
                <div className="space-y-3">
                  {apiEndpoints.map((endpoint) => (
                    <div
                      key={endpoint.path}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border bg-bg-card hover:border-brand-primary transition-colors"
                    >
                      <span
                        className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                          endpoint.method === "GET"
                            ? "bg-green-500/10 text-green-600"
                            : endpoint.method === "POST"
                            ? "bg-blue-500/10 text-blue-600"
                            : endpoint.method === "PUT"
                            ? "bg-amber-500/10 text-amber-600"
                            : "bg-red-500/10 text-red-600"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-sm text-text-primary flex-1">
                        {endpoint.path}
                      </code>
                    </div>
                  ))}
                </div>
                <a
                  href="https://api.parmenid.tech/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-brand-primary hover:text-brand-primary-hover transition-colors"
                >
                  Полная документация API
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Code example */}
              <div>
                <h3 className="font-heading text-2xl tracking-tight text-text-primary mb-6">
                  Пример запроса
                </h3>
                <div className="rounded-xl bg-[#1a1a1a] p-6 overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="h-4 w-4 text-text-muted" />
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                      cURL
                    </span>
                  </div>
                  <pre className="font-mono text-sm text-green-400 overflow-x-auto whitespace-pre-wrap">
                    {codeExamples.curl}
                  </pre>
                </div>

                <div className="mt-4 rounded-xl bg-[#1a1a1a] p-6 overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="h-4 w-4 text-text-muted" />
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                      Response
                    </span>
                  </div>
                  <pre className="font-mono text-sm text-amber-400 overflow-x-auto whitespace-pre-wrap">
                    {codeExamples.response}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Telegram Section */}
          <section id="telegram" className="mb-24 scroll-mt-24">
            <SectionHeader
              number="03"
              label="Telegram"
              title="Telegram Bot"
              description="Настройка и деплой AI-консультанта в Telegram."
            />

            <div className="grid gap-8 lg:grid-cols-3">
              <Card variant="bordered" className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elevated mb-4">
                  <Key className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="font-heading text-xl tracking-tight text-text-primary">
                  1. Получите токен
                </h3>
                <p className="mt-2 text-text-secondary">
                  Создайте бота через @BotFather в Telegram и скопируйте токен.
                </p>
              </Card>

              <Card variant="bordered" className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elevated mb-4">
                  <Settings className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="font-heading text-xl tracking-tight text-text-primary">
                  2. Настройте в Dashboard
                </h3>
                <p className="mt-2 text-text-secondary">
                  Вставьте токен в настройках интеграций вашего проекта на parmenid.tech
                </p>
              </Card>

              <Card variant="bordered" className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elevated mb-4">
                  <Webhook className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="font-heading text-xl tracking-tight text-text-primary">
                  3. Автоматический Webhook
                </h3>
                <p className="mt-2 text-text-secondary">
                  Webhook настроится автоматически. Бот сразу начнёт отвечать.
                </p>
              </Card>
            </div>
          </section>

          {/* Widget Section */}
          <section id="widget" className="mb-24 scroll-mt-24">
            <SectionHeader
              number="04"
              label="Web Widget"
              title="Виджет для сайта"
              description="Встройте AI-консультанта на ваш сайт одной строкой кода."
            />

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-heading text-2xl tracking-tight text-text-primary mb-4">
                  Установка
                </h3>
                <p className="text-text-secondary mb-6">
                  Добавьте скрипт перед закрывающим тегом &lt;/body&gt; на вашем сайте:
                </p>
                <div className="rounded-xl bg-[#1a1a1a] p-6 overflow-hidden">
                  <pre className="font-mono text-sm text-purple-400 overflow-x-auto whitespace-pre-wrap">
                    {codeExamples.widget}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl tracking-tight text-text-primary mb-4">
                  Параметры
                </h3>
                <div className="space-y-3">
                  {[
                    { param: "avatarId", type: "string", desc: "ID вашего аватара" },
                    { param: "position", type: "string", desc: "bottom-right | bottom-left" },
                    { param: "theme", type: "string", desc: "light | dark | auto" },
                    { param: "primaryColor", type: "string", desc: "HEX цвет акцента" },
                    { param: "greeting", type: "string", desc: "Приветственное сообщение" },
                  ].map((item) => (
                    <div key={item.param} className="flex items-start gap-3 p-3 rounded-lg bg-bg-elevated">
                      <code className="font-mono text-sm text-brand-primary">{item.param}</code>
                      <span className="font-mono text-xs text-text-muted">{item.type}</span>
                      <span className="text-sm text-text-secondary flex-1">{item.desc}</span>
                    </div>
            ))}
          </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="mb-24 scroll-mt-24">
            <SectionHeader
              number="05"
              label="Безопасность"
              title="Защита данных"
              description="Как мы обеспечиваем безопасность ваших документов и данных."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "152-ФЗ Compliant",
                  description: "Полное соответствие требованиям закона о персональных данных РФ",
                },
                {
                  icon: Database,
                  title: "RU Data Centers",
                  description: "Все данные хранятся на защищённых серверах в России",
                },
                {
                  icon: Key,
                  title: "Шифрование",
                  description: "AES-256 для данных at-rest, TLS 1.3 для данных in-transit",
                },
                {
                  icon: Users,
                  title: "Ролевой доступ",
                  description: "Гибкая система прав: Owner, Manager, Content Manager",
                },
                {
                  icon: BarChart2,
                  title: "Аудит логи",
                  description: "Полная история всех действий в системе",
                },
                {
                  icon: Settings,
                  title: "API Keys",
                  description: "Отдельные ключи для разных интеграций с возможностью отзыва",
                },
              ].map((item) => (
                <Card key={item.title} variant="bordered" className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elevated mb-4">
                    <item.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="font-heading text-lg tracking-tight text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-12 bg-bg-elevated border-0">
              <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-text-primary">
                Готовы начать?
            </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
                Создайте своего AI-консультанта прямо сейчас или свяжитесь с нами для консультации
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="https://parmenid.tech/signup" target="_blank" rel="noopener noreferrer">
                  <Button size="lg">
                    Начать бесплатно
                  </Button>
                </a>
                <Link href={ROUTES.REQUEST}>
                  <Button variant="secondary" size="lg">
                    Связаться с нами
                  </Button>
            </Link>
          </div>
            </Card>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
