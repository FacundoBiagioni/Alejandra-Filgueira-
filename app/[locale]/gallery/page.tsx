"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types";
import { useTranslations } from "next-intl";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);
  const t = useTranslations("Gallery");

  const images: GalleryImage[] = [
{ src: "/image/cuadros/cuadro3.jpg", alt: "fluyendo - 2025 - 100x100cm" },
{ src: "/image/cuadros/cuadro6.jpg", alt: "Díptico Metallic 1 - 2023 - 50x50cm" },
{ src: "/image/cuadros/cuadro5.jpg", alt: "Díptico Metallic 2 - 2023 - 50x50cm" },
{ src: "/image/cuadros/cuadro16.jpg", alt: "Díptico Edificio Antón 1 - 2022 - 100x100cm" },
{ src: "/image/cuadros/cuadro9.jpg", alt: "Texturas Metalizadas - 2022 - 100x100cm" },
{ src: "/image/cuadros/cuadro11.jpg", alt: "Díptico Cobre 1 - 2022 - 80x80cm" },
{ src: "/image/cuadros/cuadro10.jpg", alt: "Díptico Cobre 2 - 2022 - 80x80cm" },
{ src: "/image/cuadros/cuadro12.jpg", alt: "Díptico Edificio Antón 2 - 2022 - 100x100cm" },
{ src: "/image/cuadros/cuadro15.jpg", alt: "Black Sands Hawaii - 2023 - 70x90cm" },
{ src: "/image/cuadros/cuadro18.jpg", alt: "Díptico Antón 1 - 2025 - 80x80cm" },
{ src: "/image/cuadros/cuadro17.jpg", alt: "Díptico Antón 2 - 2025 - 80x80cm" },
{ src: "/image/cuadros/cuadro19.jpg", alt: "Contrapuntos - 2021 - 100x120cm" },
{ src: "/image/cuadros/cuadro20.jpg", alt: "Juego Simétrico - 2025 - 100x180cm" },
{ src: "/image/cuadros/cuadro21.jpg", alt: "Díptico Antón" },
{ src: "/image/cuadros/cuadro22.jpg", alt: "Díptico - 2023 - 100x120cm c/u" },
{ src: "/image/cuadros/cuadro7.jpg", alt: "Texturado - 2021 - 50x50cm" },
{ src: "/image/cuadros/cuadro23.jpg", alt: "Evanescence - 2021 - 100x120cm" },
{ src: "/image/cuadros/cuadro24.jpg", alt: "Ave Fenix - 2021 - 100x160cm" },
{ src: "/image/cuadros/cuadro25.jpg", alt: "Forest - 2024 - 90x160cm" },
{ src: "/image/cuadros/cuadro26.jpg", alt: "Black Gold - 2023 - 100x150cm" },
{ src: "/image/cuadros/cuadro27.jpg", alt: "Grietas - 2023 - 100x100cm" },
{ src: "/image/cuadros/cuadro30.jpg", alt: "Composicion Natural - 2025 - 100x100cm" },
{ src: "/image/cuadros/cuadro33.jpg", alt: "Confortly Numb 2 - 2025 -50x50cm" },
{ src: "/image/cuadros/cuadro32.jpg", alt: "Confortly Numb 1 - 2025 - 50x50cm" },
{ src: "/image/cuadros/cuadro35.jpg", alt: "White Waves - 2025 - 100x100cm" },
{ src: "/image/cuadros/cuadro37.jpg", alt: "Díptico Ocres 1 - 2022 - 70x70cm" },
{ src: "/image/cuadros/cuadro38.jpg", alt: "Díptico Ocres 2 - 2022 - 70x70cm" },
{ src: "/image/cuadros/cuadro39.jpg", alt: "Díptico Organic 1 - 2021 - 70x90cm" },
{ src: "/image/cuadros/cuadro40.jpg", alt: "Díptico Organic 2 - 2021 - 70x90cm" },
{ src: "/image/cuadros/cuadro8.jpg", alt: "Horizonte Lejano - 2023 - 70x160cm" },
{ src: "/image/cuadros/cuadro2.jpg", alt: "Lule - 2023 - 70x160cm" },
{ src: "/image/cuadros/cuadro1.jpg", alt: "Diagonales - 2022 - 70x160cm" },
{ src: "/image/cuadros/cuadro41.jpg", alt: "Díptico Philly 1 - 2022 - 50x50cm" },
{ src: "/image/cuadros/cuadro42.jpg", alt: "Díptico Philly 2 - 2022 - 50x50cm" },
{ src: "/image/cuadros/cuadro43.jpg", alt: "PAchamama - 2022 - 60x170cm" },
{ src: "/image/cuadros/cuadro44.jpg", alt: "Killing Me Sofylt - 2024 - 50x50cm" },
{ src: "/image/cuadros/cuadro45.jpg", alt: "Constelacion 1 - 2024 - 50x50cm" },
{ src: "/image/cuadros/cuadro46.jpg", alt: "Constelacion 2 - 2024 - 50x50cm" },
{ src: "/image/cuadros/cuadro97.jpeg", alt: "Black Spot - 2023 - 120x120cm" },
{ src: "/image/cuadros/cuadro47.jpg", alt: "Relieves - 2025 - 60x170cm" },
{ src: "/image/cuadros/cuadro34.jpg", alt: "Print - 2024 - 40x50cm" },
{ src: "/image/cuadros/cuadro48.jpg", alt: "Retrato Sofi - 2023 - 50x70cm" },
{ src: "/image/cuadros/cuadro49.jpg", alt: "Retrato Vic - 2023 - 50x70cm" },
{ src: "/image/cuadros/cuadro52.jpg", alt: "Retrato VG - 2024 - 50x70cm" },
{ src: "/image/cuadros/cuadro50.jpg", alt: "Díptico Trazos - 2022 - 90x100 c/u" },
{ src: "/image/cuadros/cuadro51.jpg", alt: "Gestos BN - 2022 - 50x50cm" },
{ src: "/image/cuadros/cuadro56.jpeg", alt: "Díptico Vertigo 1 - 2022 - 100x100cm" },
{ src: "/image/cuadros/cuadro58.jpeg", alt: "Díptico Vertigo 2 - 2022 - 100x100cm" },
{ src: "/image/cuadros/cuadro57.jpeg", alt: "Marea Baja - 2022 - 100x120cm" },
{ src: "/image/cuadros/cuadro59.jpeg", alt: "Díptico Pietra 1 - 2023 - 50x70cm" },
{ src: "/image/cuadros/cuadro60.jpeg", alt: "Díptico Pietra 2 - 2023 - 50x70cm" },
{ src: "/image/cuadros/cuadro61.jpeg", alt: "Calcaterra - 2025 - 50x50cm" },
{ src: "/image/cuadros/cuadro62.jpeg", alt: "Kupper - 2025 - 50x50cm" },
{ src: "/image/cuadros/cuadro63.jpeg", alt: "Resiliencia - 2023 - 60x90cm" },
{ src: "/image/cuadros/cuadro64.jpeg", alt: "Díptico Nocturnidad 1 - 2024 - 50x50cm" },
{ src: "/image/cuadros/cuadro65.jpeg", alt: "Díptico Nocturnidad 2 - 2024 - 50x50cm" },
{ src: "/image/cuadros/cuadro66.jpeg", alt: "Metallic Blue - 2022 - 100x120cm" },
{ src: "/image/cuadros/cuadro67.jpeg", alt: "Bruma - 2022 - 100x100cm" },
{ src: "/image/cuadros/cuadro68.jpeg", alt: "Díptico Mistery 1 - 2024 - 80x100cm" },
{ src: "/image/cuadros/cuadro74.jpeg", alt: "Díptico Mistery 2 - 2024 - 80x100cm" },
{ src: "/image/cuadros/cuadro69.jpeg", alt: "Contrapunto Geometrico - 2025 - 80x170cm" },
{ src: "/image/cuadros/cuadro70.jpeg", alt: "White Noise - 2025 - 100x120cm" },
{ src: "/image/cuadros/cuadro71.jpeg", alt: "Deep Green - 2024 - 100x100cm" },
{ src: "/image/cuadros/cuadro72.jpeg", alt: "Díptico Red Passion - 2024 - 70x90cm" },
{ src: "/image/cuadros/cuadro73.jpeg", alt: "Díptico Blue Passion - 2024 - 70x90cm" },
{ src: "/image/cuadros/cuadro14.jpg", alt: "Abstract Blue - 2024 - 100x100cm" },
{ src: "/image/cuadros/cuadro13.jpg", alt: "Deep Blue - 2024 - 100x100cm" },
{ src: "/image/cuadros/cuadro75.jpeg", alt: "Earthquake - 2022 - 100x100cm" },
{ src: "/image/cuadros/cuadro76.jpeg", alt: "Contrast - 2021 - 100x100cm" },
{ src: "/image/cuadros/cuadro4.jpg", alt: "Caminos - 2025 - 100x100cm" },
{ src: "/image/cuadros/cuadro53.jpeg", alt: "Quiebres - 2023 - 100x120cm" },
{ src: "/image/cuadros/cuadro54.jpeg", alt: "Nuevos Caminos - 2023 - 100x100cm" },
{ src: "/image/cuadros/cuadro55.jpeg", alt: "Flying - 2022 - 80x80cm" },
{ src: "/image/cuadros/cuadro77.jpeg", alt: "Round - 2021 - 50cm Diam" },
{ src: "/image/cuadros/cuadro78.jpeg", alt: "Díptico Noir 1 - 2024 - 50x50cm" },
{ src: "/image/cuadros/cuadro79.jpeg", alt: "Díptico Noir 2 - 2024 - 50x50cm" },
{ src: "/image/cuadros/cuadro80.jpeg", alt: "Sands - 2024 - 50x50cm" },
{ src: "/image/cuadros/cuadro81.jpeg", alt: "Quebradas - 2025 - 100x100cm" },
{ src: "/image/cuadros/cuadro83.jpeg", alt: "Díptico Neutros 1 -2021 - 50x50cm" },
{ src: "/image/cuadros/cuadro82.jpeg", alt: "Díptico Neutros 2 -2021 - 50x50cm" },
{ src: "/image/cuadros/cuadro29.jpg", alt: "Composicion ByN - 2024 - 100x140cm" },
{ src: "/image/cuadros/cuadro84.jpeg", alt: "Black & Metal 1 - 2021 - 100x100cm" },
{ src: "/image/cuadros/cuadro85.jpeg", alt: "Black & Metal 2 - 2021 - 100x100cm" },
{ src: "/image/cuadros/cuadro28.jpg", alt: "Metal Gray - 2022 - 100x100cm" },
{ src: "/image/cuadros/cuadro86.jpeg", alt: "Equilibrium - 2023 - 60x170cm" },
{ src: "/image/cuadros/cuadro88.jpeg", alt: "Geology - 2025 - 100x100cm" },
{ src: "/image/cuadros/cuadro89.jpeg", alt: "Díptico Deutschland 1 - 2023 - 100x150cm" },
{ src: "/image/cuadros/cuadro90.jpeg", alt: "Díptico Deutschland 2 - 2023 - 100x150cm" },
{ src: "/image/cuadros/cuadro91.jpeg", alt: "Serenidad - 2023 - 80x120cm" },
{ src: "/image/cuadros/cuadro92.jpeg", alt: "Trptico Lifting 1 - 2023 - 100x120cm" },
{ src: "/image/cuadros/cuadro93.jpeg", alt: "Trptico Lifting 2 - 2023 - 100x120cm" },
{ src: "/image/cuadros/cuadro94.jpeg", alt: "Transition - 2023 - 100x140cm" },
{ src: "/image/cuadros/cuadro96.jpeg", alt: "Taormina - 2021 - 100x120cm" },
{ src: "/image/cuadros/cuadro98.jpeg", alt: "Cobre Oxidado - 2022 - 100x150cm" },
{ src: "/image/cuadros/cuadro99.jpeg", alt: "Reflejos Del Agua - 2021 - 90x140cm" },
{ src: "/image/cuadros/cuadro100.webp", alt: "Emerald - 2021 - 100x100cm" }

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
