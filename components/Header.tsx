"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function Header() {
  const pathname = usePathname();

  // 🔵 Detectamos el idioma actual igual que en Navigation
  const currentLocale =
    pathname?.split("/")[1] || Cookies.get("locale") || "es";

  // 🔵 Home localizado (ejemplo: /es o /en)
  const localizedHomeHref = `/${currentLocale}`;

  const [showLogo, setShowLogo] = useState(pathname !== localizedHomeHref);

  useEffect(() => {
    // 🔹 Reiniciar visibilidad del logo cuando cambia la ruta
    if (pathname === localizedHomeHref) {
      setShowLogo(false);
    } else {
      setShowLogo(true);
      return; // No escuchamos el scroll si no estamos en home
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, localizedHomeHref]);

  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg transition-all duration-500">
      <div className="container flex items-center justify-between py-8">

        {/* 🔵 LOGO que respeta el idioma */}
        <Link
          href={localizedHomeHref}
          className={`flex-shrink-0 transition-opacity duration-700 ease-in-out ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
          prefetch
        >
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer object-contain
                       w-40 h-24
                       sm:w-44 sm:h-26
                       md:w-52 md:h-32
                       lg:w-60 lg:h-36
                       -my-6 sm:-my-8 md:-my-10"
          />
        </Link>

        <Navigation />
      </div>
    </div>
  );
}
