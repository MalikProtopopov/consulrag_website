import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { QueryProvider } from "@/providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parmenid — AI-консультант на документах компании",
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
    title: "Parmenid — AI-консультант на документах компании",
    description:
      "Создавайте AI-консультантов без кода, работающих на ваших документах.",
    url: "https://parmenid.tech",
    siteName: "Parmenid",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
