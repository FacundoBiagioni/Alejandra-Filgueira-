"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types";
import { useTranslations } from "next-intl";

export default function Ceramic() {
  // Estado para manejar la imagen seleccionada (modal)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Estado para controlar cuando la imagen del MODAL está cargando
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);

  const t = useTranslations("Ceramics");

  // Lista de imágenes
  const images: GalleryImage[] = [
    { src: "/image/ceramica/ceramica1.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica2.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica3.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica5.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica6.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica34.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica38.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica40.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica11.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica19.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica20.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica21.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica22.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica23.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica24.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica25.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica26.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica27.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica28.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica29.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica30.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica31.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica32.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica33.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica42.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica53.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica7.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica8.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica43.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica44.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica45.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica46.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica47.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica48.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica49.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica50.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica51.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica9.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica52.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica12.jpeg", alt: "ceramica" },
  ];

  return (
    <section className="container py-16">
      {/* TÍTULO */}
     <header className="text-center mb-12 px-4">
        <h1 className="text-4xl font-semibold mb-2 text-gray-900">
          {t("title")}
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
      </header>

      {/* GRID DE IMÁGENES */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer aspect-square group"
            onClick={() => {
              // Al abrir el modal activamos el loader del modal
              setSelectedImage(image);
              setIsImageLoading(true);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-150 p-4"
          onClick={() => {
            setSelectedImage(null);
            setIsImageLoading(false); // asegurar reset al cerrar
          }}
        >
          <div
            className="relative max-w-5xl w-auto max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PLACEHOLDER DE CARGA MODAL */}
            {isImageLoading && (
              <div className="flex items-center justify-center w-[80vw] max-w-4xl h-[70vh]">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
              </div>
            )}

            {/* Imagen principal */}
            <div
              className={`relative w-auto h-auto max-h-[80vh] p-5 sm:p-8 flex items-center justify-center ${
                isImageLoading ? "pointer-events-none" : ""
              }`}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1000}
                height={1000}
                // ocultamos la imagen hasta que termine de cargar para evitar "saltos"
                className={`object-contain w-auto h-auto max-w-[calc(100%-1rem)] max-h-[calc(80vh-1rem)] sm:max-w-[calc(100%-2rem)] sm:max-h-[calc(80vh-2rem)] transition-opacity duration-300 ${
                  isImageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setIsImageLoading(false)}
              />
            </div>

            {/* Botón de cierre */}
            <button
              onClick={() => {
                setSelectedImage(null);
                setIsImageLoading(false);
              }}
              className="absolute top-3 right-4 sm:right-6 text-2xl sm:text-4xl text-black font-light hover:scale-110 transition-transform"
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}