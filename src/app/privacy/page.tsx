import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Header, Footer } from "@/widgets";
import { Container, Card } from "@/shared/ui";
import { ROUTES } from "@/shared/config";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — parmenid ai",
  description: "Политика обработки персональных данных parmenid ai",
};

export default function PrivacyPage() {
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
              Политика конфиденциальности
            </h1>
            
            <p className="text-text-muted text-sm mb-8">
              Последнее обновление: 14 января 2026 г.
            </p>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                1. Общие положения
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сервиса parmenid ai (далее — «Сервис»), расположенного по адресу parmenid.tech.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Использование Сервиса означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки персональных данных.
              </p>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                2. Собираемые данные
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Мы собираем следующие категории персональных данных:
              </p>
              <ul className="text-text-secondary space-y-2">
                <li><strong>Контактные данные:</strong> email, номер телефона, Telegram username</li>
                <li><strong>Данные аккаунта:</strong> имя, название компании, роль</li>
                <li><strong>Технические данные:</strong> IP-адрес, тип браузера, cookies</li>
                <li><strong>Данные использования:</strong> статистика запросов, аналитика диалогов</li>
                <li><strong>Загружаемые документы:</strong> файлы, которые вы загружаете для обучения AI</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                3. Цели обработки данных
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="text-text-secondary space-y-2">
                <li>Предоставление доступа к функциям Сервиса</li>
                <li>Создание и обучение AI-консультантов на ваших документах</li>
                <li>Техническая поддержка и коммуникация</li>
                <li>Улучшение качества Сервиса</li>
                <li>Выполнение договорных обязательств</li>
                <li>Соблюдение требований законодательства РФ</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                4. Защита данных
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Мы применяем следующие меры защиты:
              </p>
              <ul className="text-text-secondary space-y-2">
                <li><strong>Шифрование:</strong> AES-256 для данных at-rest, TLS 1.3 для данных in-transit</li>
                <li><strong>Серверы:</strong> защищённые дата-центры на территории РФ</li>
                <li><strong>Доступ:</strong> строгая ролевая модель доступа к данным</li>
                <li><strong>Аудит:</strong> логирование всех операций с персональными данными</li>
                <li><strong>Резервное копирование:</strong> регулярное шифрованное резервное копирование</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                5. Соответствие 152-ФЗ
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных». Мы гарантируем соблюдение всех требований законодательства Российской Федерации в области защиты персональных данных.
              </p>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                6. Права пользователей
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Вы имеете право:
              </p>
              <ul className="text-text-secondary space-y-2">
                <li>Получить информацию об обрабатываемых персональных данных</li>
                <li>Потребовать уточнения, блокирования или уничтожения данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие оператора в Роскомнадзор</li>
              </ul>
            </Card>

            <Card variant="bordered" className="p-8 mb-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                7. Хранение данных
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Персональные данные хранятся в течение срока действия договора и 3 лет после его прекращения, если иное не предусмотрено законодательством РФ. Загруженные документы удаляются в течение 30 дней после удаления аккаунта или по запросу пользователя.
              </p>
            </Card>

            <Card variant="bordered" className="p-8">
              <h2 className="font-heading text-2xl tracking-tight text-text-primary mt-0 mb-4">
                8. Контакты
              </h2>
              <p className="text-text-secondary leading-relaxed">
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <ul className="text-text-secondary space-y-2 mt-4">
                <li>Email: <a href="mailto:privacy@parmenid.tech" className="text-brand-primary hover:text-brand-primary-hover">privacy@parmenid.tech</a></li>
                <li>Telegram: <a href="https://t.me/parmenid_support" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-primary-hover">@parmenid_support</a></li>
              </ul>
            </Card>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

