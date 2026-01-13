"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

import { Button, Container } from "@/shared/ui";
import { ROUTES, NAV_LINKS } from "@/shared/config";
import { cn } from "@/shared/lib";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/95 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
<Link href={ROUTES.HOME} className="group">
              <span className="text-xl font-bold text-text-primary tracking-tight">
                parmenid ai
              </span>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link href={ROUTES.REQUEST}>
              <Button size="sm" className="group">
                Получить демо
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-bg-elevated md:hidden transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "max-h-80 pb-6" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link href={ROUTES.REQUEST} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">
                  Получить демо
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};
