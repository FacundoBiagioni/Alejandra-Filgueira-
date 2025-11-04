"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { motion } from "framer-motion";
import { NavLink } from "@/types";

const nav: NavLink[] = [
  { href: "/", label: "BIOGRAFÍA", isActive: false },
  { href: "/projects", label: "COLABORACIONES", isActive: false },
  { href: "/ambient", label: "AMBIENTACIONES", isActive: false },
  { href: "/gallery", label: "GALERÍA", isActive: false },
  { href: "/ceramic", label: "CERÁMICA", isActive: false },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 🧠 Bloquea el scroll del body cuando el menú está abierto (en móviles es clave)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <>
      {/* ---------- Desktop nav (visible solo en pantallas grandes) ---------- */}
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

      {/* ---------- Hamburger button (solo en mobile) ---------- */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="relative z-[70] flex flex-col justify-between w-6 h-4 sm:w-7 sm:h-5 lg:hidden"
      >
        <motion.span
          className="block h-0.5 bg-gray-700 rounded"
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 6 : 0,
          }}
          transition={{ duration: 0.28 }}
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
          transition={{ duration: 0.28 }}
        />
      </button>

      {/* ---------- Mobile panel (cae desde arriba) ---------- */}
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: open ? 0 : "-100%" }}
        transition={{ duration: 0.36, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[65] flex flex-col items-center justify-center gap-6 bg-white py-20 shadow-lg lg:hidden"
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

      {/* ---------- Overlay (fondo oscuro clickeable, cubre toda la pantalla) ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black bg-opacity-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ---------- Botón de contacto (solo desktop) ---------- */}
      <Link
        href="/contact"
        className="font-titulo items-center hidden px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow lg:inline-flex hover:bg-gray-100"
      >
        Contáctame <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </>
  );
}
