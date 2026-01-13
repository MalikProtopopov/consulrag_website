import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";

import { QueryProvider } from "@/providers";

import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "parmenid ai — AI-консультант на документах компании",
  description:
    "Создавайте AI-консультантов без кода, работающих на ваших документах. RAG, Telegram интеграция, аналитика. Начните бесплатно.",
  keywords: [
    "AI консультант",
    "RAG",
    "чатбот",
    "Telegram бот",
    "AI avatar",
    "документы",
  ],
  openGraph: {
    title: "parmenid ai — AI-консультант на документах компании",
    description:
      "Создавайте AI-консультантов без кода, работающих на ваших документах.",
    url: "https://parmenid.tech",
    siteName: "parmenid ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
