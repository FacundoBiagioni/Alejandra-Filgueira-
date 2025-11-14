// app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import "../globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp";

export const locales = ["es", "en"] as const;
type Locale = (typeof locales)[number];

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  title: "Alejandra Filgueira | Abstract Art",
  description: "Portfolio de Alejandra Filgueira, artista de arte abstracto.",
  icons: {
    icon: "/LogoUrlcuadro7.ico",
  },
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  const isLocale = (l: string): l is Locale =>
    locales.includes(l as Locale);

  if (!isLocale(locale)) return notFound();

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main>{children}</main>
      <Footer />
      <ButtonUp />
    </NextIntlClientProvider>
  );
}
