"use client";

import { useState } from "react";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function CarruselExpos() {
  const t = useTranslations("CarruselExpos");

  // Estado para el modal
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);

  const images: GalleryImage[] = [
    "expo12.jpeg","expo10.jpeg","expo11.jpeg","expo6.jpeg",
    "expo14.jpeg","expo15.jpeg","expo18.jpeg","expo19.jpeg",
    "expo20.jpeg","expo21.jpeg","expo35.jpeg","expo38.jpeg",
    "expo42.jpeg","expo43.jpeg","expo44.jpeg","expo52.jpeg",
  ].map((img) => ({
    src: `/image/exposiciones/${img}`,
    alt: t("expoAlt"),
  }));

  return (
    <div className="container px-6 sm:px-10 md:px-16 lg:px-20 py-16 border-t border-gray-200">

      {/* Intro */}
      <div className="grid lg:grid-cols-2 gap-10 pb-10">
        <div className="text-center lg:text-left">
          <h1 className="font-titulo text-3xl sm:text-4xl font-medium mb-4">
            {t("title")}
          </h1>
        </div>
        <div className="text-gray-600 leading-relaxed space-y-4 text-justify sm:text-left">
          <p>{t("paragraph2")}</p>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1.3}
        spaceBetween={12}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2.3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[280px] sm:h-[320px] bg-white rounded-lg shadow-sm p-2 flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
              onClick={() => {
                setSelectedImage(image);
                setIsImageLoading(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={520}
                height={700}
                className="w-full h-full object-contain rounded"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MODAL - ZOOM */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-150 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-auto max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loader */}
            {isImageLoading && (
              <div className="flex items-center justify-center w-[80vw] max-w-4xl h-[70vh]">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
            )}

            {/* Imagen expandida */}
            <div className="relative w-auto h-auto max-h-[80vh] p-5 sm:p-8 flex items-center justify-center">
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

            {/* Botón cerrar */}
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
    </div>
  );
}
