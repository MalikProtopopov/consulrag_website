import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Header, Footer } from "@/widgets";
import { Container, Card } from "@/shared/ui";
import { ROUTES } from "@/shared/config";

export const metadata: Metadata = {
  title: "Условия использования — parmenid ai",
  description: "Пользовательское соглашение сервиса parmenid ai",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-12 md:py-20 lg:py-32">
        <Container size="md">
          <Link
            href={ROUTES.HOME}
            className="mb-8 inline-flex items-center gap-2 text-base font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-5 w-5" />
            На главную
          </Link>

          <article className="prose prose-lg max-w-none">
            <h1 className="font-heading text-4xl md:text-5xl tracking-tight text-text-primary mb-8">
              Условия использования
            </h1>
            
            <p className="text-text-muted text-sm mb-8">
              Последнее обновление: 14 января 2026 г.
            </p>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                1. Предмет соглашения
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между ООО «Парменид» (далее — «Компания») и пользователем сервиса parmenid ai (далее — «Пользователь»).
              </p>
              <p className="text-text-secondary leading-relaxed">
                Сервис parmenid ai предоставляет платформу для создания AI-консультантов на основе документов Пользователя с использованием технологии RAG (Retrieval-Augmented Generation).
              </p>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                2. Регистрация и аккаунт
              </h2>
              <ul className="text-text-secondary space-y-2">
                <li>Для использования Сервиса требуется регистрация на parmenid.tech</li>
                <li>Пользователь обязан предоставить достоверную информацию при регистрации</li>
                <li>Пользователь несёт ответственность за сохранность учётных данных</li>
                <li>Один пользователь может иметь только один аккаунт</li>
                <li>Компания вправе заблокировать аккаунт при нарушении условий Соглашения</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                3. Права и обязанности Пользователя
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Пользователь имеет право:</strong>
              </p>
              <ul className="text-text-secondary space-y-2 mb-4">
                <li>Создавать AI-консультантов в рамках выбранного тарифного плана</li>
                <li>Загружать документы для обучения AI</li>
                <li>Интегрировать консультантов в Telegram и на веб-сайты</li>
                <li>Получать техническую поддержку</li>
                <li>Экспортировать свои данные</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Пользователь обязуется:</strong>
              </p>
              <ul className="text-text-secondary space-y-2">
                <li>Не использовать Сервис для незаконных целей</li>
                <li>Не загружать контент, нарушающий права третьих лиц</li>
                <li>Не пытаться получить несанкционированный доступ к системе</li>
                <li>Не создавать нагрузку, превышающую разумные пределы</li>
                <li>Своевременно оплачивать услуги согласно выбранному тарифу</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                4. Тарифы и оплата
              </h2>
              <ul className="text-text-secondary space-y-2">
                <li>Актуальные тарифы опубликованы на странице parmenid.tech/pricing</li>
                <li>Оплата производится в рублях РФ</li>
                <li>Подписка продлевается автоматически, если не отменена за 3 дня до окончания</li>
                <li>Возврат средств возможен в течение 14 дней с момента оплаты</li>
                <li>При превышении лимитов тарифа применяются дополнительные тарифы</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                5. Интеллектуальная собственность
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Все права на Сервис, включая программный код, дизайн, товарные знаки, принадлежат Компании.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Документы, загруженные Пользователем, остаются его интеллектуальной собственностью. Компания не приобретает прав на содержимое документов и не использует их для обучения моделей других пользователей.
              </p>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                6. Ограничение ответственности
              </h2>
              <ul className="text-text-secondary space-y-2">
                <li>Сервис предоставляется «как есть» (as is)</li>
                <li>Компания не гарантирует 100% точность ответов AI-консультанта</li>
                <li>Компания не несёт ответственности за решения, принятые на основе ответов AI</li>
                <li>Максимальная ответственность Компании ограничена суммой оплаченных услуг</li>
                <li>Компания не несёт ответственности за перебои в работе по независящим причинам</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                7. SLA (Service Level Agreement)
              </h2>
              <ul className="text-text-secondary space-y-2">
                <li><strong>Доступность:</strong> 99.9% uptime (кроме планового обслуживания)</li>
                <li><strong>Поддержка:</strong> ответ в течение 24 часов (Starter), 4 часов (Scale+)</li>
                <li><strong>Резервное копирование:</strong> ежедневное автоматическое</li>
                <li><strong>Уведомления:</strong> за 48 часов до планового обслуживания</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                8. Расторжение
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Пользователь может удалить аккаунт в любое время через настройки профиля. При удалении:
              </p>
              <ul className="text-text-secondary space-y-2">
                <li>Все данные удаляются в течение 30 дней</li>
                <li>Неиспользованный остаток подписки не возвращается</li>
                <li>Доступ к API прекращается немедленно</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                9. Применимое право
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Настоящее Соглашение регулируется законодательством Российской Федерации. Все споры разрешаются путём переговоров, а при недостижении согласия — в Арбитражном суде г. Москвы.
              </p>
            </Card>

            <Card variant="bordered" className="p-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                10. Контакты
              </h2>
              <p className="text-text-secondary leading-relaxed">
                По вопросам, связанным с настоящим Соглашением:
              </p>
              <ul className="text-text-secondary space-y-2 mt-4">
                <li>Email: <a href="mailto:legal@parmenid.tech" className="text-brand-primary hover:text-brand-primary-hover">legal@parmenid.tech</a></li>
                <li>Telegram: <a href="https://t.me/parmenid_support" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-primary-hover">@parmenid_support</a></li>
                <li>Адрес: г. Москва, ул. Примерная, д. 1, офис 100</li>
              </ul>
            </Card>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

