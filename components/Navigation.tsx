"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import Cookies from "js-cookie";
import { NavLink } from "@/types";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement | null>(null);

  // 👉 Inyección directa de la fuente SOLO para este componente
  const fontCSS = `
    @font-face {
      font-family: "Typold";
      src: url("/fonts/Typold Book.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
    }
  `;

  // 🔹 Lista de enlaces principales traducidos
  const nav: NavLink[] = [
    { href: "/bio", label: t("bio") },
    { href: "/projects", label: t("projects") },
    { href: "/ambient", label: t("ambient") },
    { href: "/gallery", label: t("gallery") },
    { href: "/ceramic", label: t("ceramic") },
    { href: "/contact", label: t("contact") },
  ];

  const currentLocale =
    pathname?.split("/")[1] || Cookies.get("locale") || "es";

  const getToggledLanguageHref = () => {
    const newLocale = currentLocale === "es" ? "en" : "es";
    Cookies.set("locale", newLocale, { expires: 365 });
    return pathname.replace(`/${currentLocale}`, `/${newLocale}`);
  };

  const localizeHref = (href: string) => `/${currentLocale}${href}`;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  return (
    <>
      {/* 🔥 Carga la fuente SOLO aquí */}
      <style jsx global>{fontCSS}</style>

      {/* ▫️ NAV DESKTOP (ahora solo visible desde 1280px → xl) */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ fontFamily: "Typold" }}
      >
        <nav className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-x-8 xl:gap-x-10 whitespace-nowrap transition-all duration-300">
          {nav.map(({ href, label }) => {
            const fullHref = localizeHref(href);
            const isActive = pathname === fullHref;
            return (
              <Link
                key={href}
                href={fullHref}
                className={`tracking-wide text-[0.95rem] md:text-base lg:text-[1rem] transition-all duration-200 ${
                  isActive
                    ? "font-semibold text-black"
                    : "text-gray-700 hover:text-black"
                }`}
                prefetch
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* 🔵 Botón de idioma DESKTOP */}
        <div className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2">
          <Link
            href={getToggledLanguageHref()}
            onClick={() =>
              Cookies.set("locale", currentLocale === "es" ? "en" : "es", {
                expires: 365,
              })
            }
            className="text-sm font-semibold border px-3 py-1 rounded-md hover:bg-gray-100 transition"
            prefetch
          >
            {currentLocale === "es" ? "🌐 EN" : "🌐 ES"}
          </Link>
        </div>
      </div>

      {/* ▫️ BOTÓN HAMBURGUESA (visible hasta 1279px → xl:hidden) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label={t("openMenu")}
          className="relative z-[80] flex items-center justify-center w-8 h-8 xl:hidden text-gray-800"
          style={{ fontFamily: "Typold" }}
        >
          <Menu size={28} />
        </button>
      )}

      {/* ▫️ OVERLAY */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ▫️ PANEL MOBILE (visible hasta xl) */}
      <nav
        ref={panelRef}
        style={{ fontFamily: "Typold" }}
        className={`fixed top-0 left-0 right-0 z-[75] flex flex-col items-center justify-center gap-6 bg-white py-20 shadow-lg transform transition-transform duration-300 xl:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {nav.map(({ href, label }) => {
          const fullHref = localizeHref(href);
          const isActive = pathname === fullHref;
          return (
            <Link
              key={href}
              href={fullHref}
              onClick={() => setOpen(false)}
              className={`text-lg transition ${
                isActive
                  ? "font-semibold text-black"
                  : "text-gray-700 hover:text-black"
              }`}
              prefetch
            >
              {label}
            </Link>
          );
        })}

        {/* 🔵 Botón idioma MOBILE */}
        <Link
          href={getToggledLanguageHref()}
          onClick={() => {
            Cookies.set("locale", currentLocale === "es" ? "en" : "es", {
              expires: 365,
            });
            setOpen(false);
          }}
          className="mt-4 text-sm font-semibold border px-3 py-1 rounded-md hover:bg-gray-100 transition"
          prefetch
        >
          {currentLocale === "es" ? "🌐 EN" : "🌐 ES"}
        </Link>
      </nav>
    </>
  );
}