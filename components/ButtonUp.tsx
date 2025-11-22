"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false); // Si el botón debe mostrarse
  const [bottomOffset, setBottomOffset] = useState(24); // Posición desde abajo
  const [isAtBottomLimit, setIsAtBottomLimit] = useState(false); // Si está al límite del footer

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      // Mostrar botón solo después de 700px
      setIsVisible(scrollY > 700);

      // Detectar límite final (últimos 165px)
      const limit = docHeight - windowHeight - 130;
      if (scrollY >= limit) {
        setBottomOffset(scrollY - limit + 24);
        setIsAtBottomLimit(true);
      } else {
        setBottomOffset(24);
        setIsAtBottomLimit(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determinar opacidad según visibilidad y límite
  const opacity = !isVisible ? 0 : isAtBottomLimit ? 1 : 0.6;

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center justify-center rounded-full bg-gray-900 text-white p-2.5
        border-2 border-transparent transition-all duration-300
        hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2
        pointer-events-auto"
      style={{
        position: "fixed",
        bottom: `${bottomOffset}px`,
        right: "1.5rem",
        zIndex: 50,
        opacity,
        transition: "all 0.3s ease-out",
      }}
      aria-label="Subir arriba"
    >
      <ArrowUp size={22} />
    </button>
  );
}
