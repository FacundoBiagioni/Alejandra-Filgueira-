"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "@/types";

const nav: NavLink[] = [
  { href: "/", label: "BIO", isActive: false },
  { href: "/projects", label: "COLLABS", isActive: false },
  { href: "/ambient", label: "ART & SPACE", isActive: false },
  { href: "/gallery", label: "GALLERY", isActive: false },
  { href: "/ceramic", label: "CERAMICS", isActive: false },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement | null>(null);

  // Bloquea scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Cierra el menú al hacer click fuera del panel
  useEffect(() => {
    if (!open) return;

    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!panelRef.current || panelRef.current.contains(target)) return;
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
<nav
  className="
    hidden lg:flex
    absolute left-[56%] -translate-x-1/2
    items-center justify-center
    gap-x-6 xl:gap-x-7
    whitespace-nowrap
    transition-all duration-300
  "
>
  {nav.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`text-sm font-titulo tracking-wide transition-all duration-200 ${
        pathname === link.href
          ? "font-semibold text-black"
          : "text-gray-700 hover:text-black"
      }`}
    >
      {link.label}
    </Link>
  ))}

  <Link
    href="/contact"
    className={`text-sm font-titulo tracking-wide transition-all duration-200 ${
      pathname === "/contact"
        ? "font-semibold text-black"
        : "text-gray-700 hover:text-black"
    }`}
  >
    CONTACT ME
  </Link>
</nav>


      {/* BOTÓN HAMBURGUESA (mobile) */}
      {!open && (
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="relative z-[80] flex items-center justify-center w-8 h-8 lg:hidden text-gray-800"
        >
          <Menu size={28} />
        </Link>
      )}

      {/* OVERLAY */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* PANEL MOBILE */}
      <nav
        ref={panelRef}
        className={`fixed top-0 left-0 right-0 z-[75] flex flex-col items-center justify-center gap-6 bg-white py-20 shadow-lg transform transition-transform duration-300 lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {[...nav, { href: "/contact", label: "CONTACT ME" }].map((link) => (
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
    </>
  );
}
