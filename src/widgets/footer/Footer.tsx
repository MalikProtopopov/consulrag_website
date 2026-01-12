import Link from "next/link";
import { Mail, Send } from "lucide-react";

import { Container } from "@/shared/ui";
import { ROUTES } from "@/shared/config";

const productLinks = [
  { href: "/#features", label: "Возможности" },
  { href: "/#pricing", label: "Тарифы" },
  { href: ROUTES.DOCS, label: "Документация" },
];

const resourceLinks = [
  { href: ROUTES.DOCS, label: "Гайды" },
  { href: "/#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/terms", label: "Условия использования" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg-primary py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={ROUTES.HOME} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary">
                <span className="text-lg font-bold text-accent-contrast">P</span>
              </div>
              <span className="text-lg font-semibold text-text-primary">
                Parmenid
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-secondary">
              Создавайте AI-консультантов на документах вашей компании за 5 минут,
              без кода. RAG, Telegram, аналитика.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              Продукт
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              Ресурсы
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              Контакты
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:work@parmenid.tech"
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"
                >
                  <Mail className="h-4 w-4" />
                  work@parmenid.tech
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/parmenid_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-primary"
                >
                  <Send className="h-4 w-4" />
                  @parmenid_support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Parmenid. Все права защищены.
          </p>
          <ul className="flex gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

