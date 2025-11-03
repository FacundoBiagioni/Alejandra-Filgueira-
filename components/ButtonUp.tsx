"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 700) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-gray-900 text-white p-2.5
      border-2 border-transparent transition-all ease-out
      hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2
      ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Subir arriba"
    >
      <ArrowUp size={22} />
    </button>
  );
}
