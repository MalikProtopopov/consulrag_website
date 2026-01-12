export const ROUTES = {
  HOME: "/",
  DOCS: "/docs",
  REQUEST: "/request",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.HOME, label: "Главная" },
  { href: ROUTES.DOCS, label: "Документация" },
  { href: ROUTES.REQUEST, label: "Оставить заявку" },
] as const;

