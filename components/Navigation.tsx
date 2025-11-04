"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import { NavLink } from "@/types";

const nav: NavLink[] = [
  { href: "/", label: "BIOGRAFÍA" },
  { href: "/projects", label: "COLABORACIONES" },
  { href: "/ambient", label: "AMBIENTACIONES" },
  { href: "/gallery", label: "GALERÍA" },
  { href: "/ceramic", label: "CERÁMICA" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="relative flex items-center">
      {/* ---------- NAV DESKTOP ---------- */}
      <nav className="hidden lg:flex items-center gap-x-6">
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-titulo transition ${
              pathname === link.href
                ? "font-semibold text-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* ---------- BOTÓN HAMBURGER (solo mobile) ---------- */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        className="relative z-[999] flex flex-col justify-between w-6 h-4 sm:w-7 sm:h-5 lg:hidden border border-red-500"
      >
        <motion.span
          className="block h-0.5 bg-gray-700 rounded"
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 6 : 0,
          }}
          transition={{ duration: 0.25 }}
        />
        <motion.span
          className="block h-0.5 bg-gray-700 rounded"
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-0.5 bg-gray-700 rounded"
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -6 : 0,
          }}
          transition={{ duration: 0.25 }}
        />
      </button>

      {/* ---------- PANEL MÓVIL ---------- */}
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: open ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 bottom-0 z-[998] flex flex-col items-center justify-center gap-6 bg-white"
      >
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg font-titulo transition ${
              pathname === link.href
                ? "font-semibold text-black"
                : "text-gray-700 hover:text-black"
            }`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </motion.nav>

      {/* ---------- OVERLAY OSCURO ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-[997] bg-gray-700 bg-opacity-50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* ---------- BOTÓN DE CONTACTO ---------- */}
      <Link
        href="/contact"
        className="hidden lg:inline-flex items-center font-titulo px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow hover:bg-gray-100"
      >
        Contáctame <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </div>
  );
}
