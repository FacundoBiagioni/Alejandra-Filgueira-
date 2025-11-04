"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [showLogo, setShowLogo] = useState(pathname !== "/");

  useEffect(() => {
    // 🔹 Reiniciar el estado cada vez que cambie la ruta
    if (pathname === "/") {
      setShowLogo(false); // ocultar al entrar al home
    } else {
      setShowLogo(true); // mostrar en otras páginas
      return; // no ejecutar el scroll listener si no estamos en home
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
  }, [pathname]); // <-- se vuelve a ejecutar al cambiar de ruta

  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg transition-all duration-500">
      <div className="container flex items-center justify-between py-8">
        {/* Logo clickeable (responsive) */}
        <Link
          href="/"
          className={`flex-shrink-0 transition-opacity duration-700 ease-in-out ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
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
