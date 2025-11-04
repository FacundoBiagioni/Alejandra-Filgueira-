"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <>
      {/* ---------- Desktop nav (visible en lg) ---------- */}
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
        className="relative z-[60] flex flex-col justify-between w-6 h-4 sm:w-7 sm:h-5 lg:hidden"
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

      {/* ---------- Mobile panel (desplegable desde arriba) ---------- */}
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: open ? 0 : "-100%" }}
        transition={{ duration: 0.36, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[55] flex flex-col items-center justify-center gap-6 bg-white py-20 shadow-lg lg:hidden"
        // Si preferís que tenga padding distinto en móviles, lo ajustamos acá.
      >
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg font-titulo transition ${
              pathname === link.href ? "font-semibold text-black" : "text-gray-700 hover:text-black"
            }`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </motion.nav>

      {/* ---------- Overlay global (cubre toda la página y cierra el menu al clickear) ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-[50] bg-opacity-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ---------- Contact button (no tocar) ---------- */}
      <Link
        href="/contact"
        className="font-titulo items-center hidden px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow lg:inline-flex hover:bg-gray-100"
      >
        Contáctame <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </>
  );
}
