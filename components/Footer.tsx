"use client";

import { useTranslations } from "next-intl";
import ContactSection from "./ContactSection";

export default function Footer() {
  const t = useTranslations("Footer"); // ✅ Namespace: Footer

  return (
    <div className="bg-zinc-100">
      {/* 🔹 Sección de contacto */}
      <ContactSection />

      {/* 🔹 Línea divisoria */}
      <div className="w-full flex justify-center bg-zinc-100">
        <div className="w-11/12 border-t border-gray-300 opacity-70" />
      </div>

      {/* 🔹 Pie de página principal */}
      <footer className="py-10 text-center text-gray-500 text-sm sm:text-base">
        <div className="container mx-auto px-6 sm:px-10 lg:px-20">
          <p className="leading-relaxed">
            {t("copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}
