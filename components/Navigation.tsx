"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { Menu, X } from "lucide-react";
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
  const panelRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Bloquea scroll cuando abierto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  // Listener global: cierra si clickeás fuera del panel
  useEffect(() => {
    if (!open) return;

    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      // si no hay panelRef o el click está dentro -> no cerrar
      if (!panelRef.current || panelRef.current.contains(target)) return;
      // si clickeaste el botón del toggler, tampoco cerrar
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      setOpen(false);
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
      {/* NAV DESKTOP */}
      <nav className="hidden lg:flex items-center gap-x-6">
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-titulo transition ${
              pathname === link.href ? "font-semibold text-black" : "text-gray-700 hover:text-black"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* BOTÓN HAMBURGUESA (mobile) */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="relative z-[80] flex items-center justify-center w-8 h-8 lg:hidden text-gray-800"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* OVERLAY visible cuando open */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* PANEL MOBILE */}
      <nav
        ref={panelRef}
        className={`fixed top-0 left-0 right-0 z-[75] flex flex-col items-center justify-center gap-6 bg-white py-20 shadow-lg transform transition-transform duration-300 lg:hidden
          ${open ? "translate-y-0" : "-translate-y-full"}`}
        // stopPropagation por si se usa overlay onClick en lugar del listener global
        onClick={(e) => e.stopPropagation()}
      >
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-lg font-titulo transition ${
              pathname === link.href ? "font-semibold text-black" : "text-gray-700 hover:text-black"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* BOTÓN CONTACTO (desktop) */}
      <Link
        href="/contact"
        className="font-titulo items-center hidden px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow lg:inline-flex hover:bg-gray-100"
      >
        Contáctame <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </>
  );
}
