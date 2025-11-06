"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MousePointerClick } from "lucide-react"; // 👈 icono

export default function CatalogueSection() {
  const [isTouch, setIsTouch] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Detectar si el dispositivo es táctil
  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    setIsTouch(hasTouch);
  }, []);

  const items = [
    {
      id: "01",
      title: "Museo Municipal de Arte MUMART",
      image: "/image/exposiciones/expo30.jpeg",
      description:
        "Exposición individual “Cicatrices” (2025). Reflexión sobre huellas, memoria y reconstrucción a través de la materia.",
    },
    {
      id: "02",
      title: "FusiónARTE — City Bell",
      image: "/image/exposiciones/expo27.jpeg",
      description:
        "Muestra curada por Sebastián Guerrini (2025). Obras en diálogo con la noción de reinvención y transformación artística.",
    },
    {
      id: "03",
      title: "Artweek Chile",
      image: "/image/exposiciones/expo33(recortada).jpg",
      description:
        "Participación internacional en Santiago de Chile (2021-2022). Stand individual con obras abstractas de gran formato.",
    },
    {
      id: "04",
      title: "Art & Deco — Palermo",
      image: "/image/exposiciones/expo1.jpeg",
      description:
        "Muestra individual (2023). Obras presentadas en Art & Deco, un espacio de diseño y arte en Palermo Soho.",
    },
  ];

  // Manejar click/touch en una tarjeta
  const handleCardClick = (id: string) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative flex flex-col items-end">
      {/* 🖱️ ÍCONO indicativo justo ARRIBA del grid */}
      <div className="mb-2 sm:mb-4 mr-2 sm:mr-4 hover:opacity-80 transition-opacity">
        <MousePointerClick
          size={22}
          className="text-gray-600"
          style={{ transform: "rotate(260deg)" }}
        />

      </div>

      {/* 🔳 GRID PRINCIPAL */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4 w-full">
        {items.map((item) => {
          const isActive = activeCard === item.id;

          return (
            <div
              key={item.id}
              className="relative overflow-hidden group rounded-lg shadow-md cursor-pointer"
              onClick={() => isTouch && handleCardClick(item.id)}
            >
              {/* Imagen */}
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gray-100 flex items-center justify-center">
                <Image
                  src={item.image}
                  width={380}
                  height={450}
                  alt={item.title}
                  className="object-fill w-full h-full"
                />

                {/* Overlay gris */}
                <div
                  className={`absolute inset-0 bg-gray-500 bg-opacity-80 transition-opacity duration-500 
                    ${isTouch ? (isActive ? "opacity-0" : "opacity-80") : "group-hover:opacity-0"}
                  `}
                ></div>
              </div>

              {/* Tarjeta descriptiva */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`text-center bg-white bg-opacity-80 backdrop-blur rounded-lg p-6 sm:p-8 max-w-[85%] transform transition-transform duration-500 
                    ${
                      isTouch
                        ? isActive
                          ? "translate-y-96"
                          : "translate-y-0"
                        : "group-hover:translate-y-96"
                    }
                  `}
                >
                  <p className="text-base sm:text-lg font-semibold mt-1">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
