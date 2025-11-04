"use client";
import Image from "next/image";

export default function CatalogueSection() {
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

  return (
    <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden group rounded-lg shadow-md"
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
            <div className="absolute inset-0 bg-gray-500 bg-opacity-80 transition-opacity duration-500 group-hover:opacity-0"></div>
          </div>

          {/* Tarjeta descriptiva flotante */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-white bg-opacity-80 backdrop-blur rounded-lg p-6 sm:p-8 max-w-[85%] transform translate-y-0 group-hover:translate-y-96 transition-transform duration-500">
              <p className="text-base sm:text-lg font-semibold mt-1">
                {item.title}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
