"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Estado para controlar la carga de la imagen del modal
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);

  const images: GalleryImage[] = [
    { src: "/image/cuadros/cuadro3.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro4.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro5.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro6.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro7.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro9.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro10.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro11.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro12.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro13.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro15.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro16.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro17.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro18.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro19.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro20.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro21.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro22.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro23.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro24.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro25.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro26.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro27.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro28.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro29.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro30.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro32.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro33.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro34.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro35.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro37.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro38.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro39.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro40.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro8.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro2.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro1.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro41.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro42.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro43.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro44.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro45.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro46.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro47.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro48.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro49.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro50.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro51.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro52.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro53.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro54.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro55.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro56.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro57.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro58.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro59.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro60.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro61.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro62.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro63.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro64.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro65.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro66.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro67.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro68.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro69.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro70.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro71.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro72.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro73.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro74.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro75.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro76.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro77.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro78.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro79.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro80.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro81.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro82.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro83.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro84.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro85.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro86.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro88.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro89.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro90.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro91.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro92.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro93.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro94.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro95.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro96.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro97.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro98.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro99.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro100.webp", alt: "cuadro" },
  ];

  return (
    <section className="container py-16">
      {/* TÍTULO */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-4xl font-semibold mb-2 text-gray-900">
          Obras
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          Un recorrido visual a través de mis etapas creativas.
        </p>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer aspect-square group"
            onClick={() => {
              setSelectedImage(image);
              setIsImageLoading(true); // activamos loader solo para el modal
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
            setIsImageLoading(false); // reset al cerrar
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

            {/* Imagen principal con opacidad hasta que termine de cargar */}
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
                className={`object-contain w-auto h-auto max-w-[calc(100%-1rem)] max-h-[calc(80vh-1rem)] sm:max-w-[calc(100%-2rem)] sm:max-h-[calc(80vh-2rem)] transition-opacity duration-300 ${
                  isImageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setIsImageLoading(false)}
              />
            </div>

            {/* Descripción */}
            <div className="text-center p-3 border-t border-gray-200 text-gray-700 text-sm mx-24 w-full">
              {selectedImage.alt}
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
