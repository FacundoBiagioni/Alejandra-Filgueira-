"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { Menu, X } from "lucide-react"; // ✅ reemplazo de Framer Motion
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

  // 🚫 Bloquea el scroll del body cuando el menú está abierto (clave en móviles)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <>
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

      {/* ---------- BOTÓN HAMBURGUESA (solo en mobile) ---------- */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="relative z-[70] flex items-center justify-center w-8 h-8 lg:hidden text-gray-800"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ---------- PANEL MOBILE DESPLEGABLE ---------- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[65] flex flex-col items-center justify-center gap-6 bg-white py-20 shadow-lg transform transition-transform duration-300 lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-lg font-titulo transition ${
              pathname === link.href
                ? "font-semibold text-black"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* ---------- OVERLAY (fondo clickeable) ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black bg-opacity-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ---------- BOTÓN CONTACTO (solo desktop) ---------- */}
      <Link
        href="/contact"
        className="font-titulo items-center hidden px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow lg:inline-flex hover:bg-gray-100"
      >
        Contáctame <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </>
  );
}
