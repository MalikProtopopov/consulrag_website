"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button, Container } from "@/shared/ui";
import { ROUTES, NAV_LINKS } from "@/shared/config";
import { cn } from "@/shared/lib";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary">
              <span className="text-lg font-bold text-accent-contrast">P</span>
            </div>
            <span className="text-lg font-semibold text-text-primary">
              Parmenid
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link href={ROUTES.REQUEST}>
              <Button size="sm">Получить демо</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-bg-hover md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
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
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-text-secondary transition-colors hover:bg-bg-hover hover:text-text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href={ROUTES.REQUEST} onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="mt-2 w-full">Получить демо</Button>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

