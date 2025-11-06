"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types";

export default function Ambient() {
  // Estado para manejar la imagen seleccionada en el modal
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Estado para manejar la carga de la imagen en el modal
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);

  // Lista de imágenes
  const images: GalleryImage[] = [
    { src: "/image/ambientaciones/amb2.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb1.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb3.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb63.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb26.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb27.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb28.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb29.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb30.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb32.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb33.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb35.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb37.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb38.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb39.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb10.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb6.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb5.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb7.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb4.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb21.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb22.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb23.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb24.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb8.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb9.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb12.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb13.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb15.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb16.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb18.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb20.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb40.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb41.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb43.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb46.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb47.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb48.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb50.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb54.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb55.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb56.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb58.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb59.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb60.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb62.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb64.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb65.jpeg", alt: "ambientacion" },
  ];

  return (
    <section className="container py-16">
      {/* TÍTULO */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-4xl font-semibold mb-2 text-gray-900">
          Ambientaciones
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          Inspiraciones para espacios donde el arte y la decoración se integran.  
          Cada ambiente refleja una atmósfera única creada a partir de las obras.
        </p>
      </header>

      {/* GRID DE IMÁGENES */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer aspect-[4.3/5] group"
            onClick={() => {
              setSelectedImage(image);
              setIsImageLoading(true); // activa el placeholder antes de cargar la imagen
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
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-auto max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PLACEHOLDER DE CARGA */}
            {isImageLoading && (
              <div className="flex items-center justify-center w-[80vw] max-w-4xl h-[70vh]">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
            )}

            {/* Imagen principal */}
            <div className="relative w-auto h-auto max-h-[80vh] p-5 sm:p-8 flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1000}
                height={1000}
                className={`object-contain w-auto h-auto max-w-[calc(100%-1rem)] max-h-[calc(80vh-1rem)] sm:max-w-[calc(100%-2rem)] sm:max-h-[calc(80vh-2rem)] transition-opacity duration-300 ${
                  isImageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setIsImageLoading(false)} // desactiva el placeholder al cargar
              />
            </div>

            {/* Botón de cierre */}
            <button
              onClick={() => setSelectedImage(null)}
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
