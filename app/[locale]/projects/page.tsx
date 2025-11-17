"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { TbArrowUpRight } from "react-icons/tb";
import CatalogueSection from "@/components/CardsExpos";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import CarruselExpos from "@/components/CarruselExpos";

export default function Empresas() {
  const t = useTranslations("Projects");

  // 👉 Slides desktop (8 imágenes en pares)
  const slides = [
    ["/image/prensa/prensa10.jpg", "/image/prensa/prensa9.jpg"],
    ["/image/prensa/prensa1.jpg", "/image/prensa/prensa4.jpg"],
    ["/image/prensa/prensa2.jpg", "/image/prensa/prensa6.jpg"],
    ["/image/prensa/prensa7.jpg", "/image/prensa/prensa8.jpg"],
  ];

  // 👉 Slides mobile (8 imágenes sueltas)
  const mobileSlides = slides.flat();

  // Desktop Index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mobile Index
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop controls
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Mobile controls
  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % mobileSlides.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) =>
      prev === 0 ? mobileSlides.length - 1 : prev - 1
    );
  };

  // 👉 AUTOPLAY (para desktop y mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setMobileIndex((prev) => (prev + 1) % mobileSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, mobileSlides.length]);

  // 👉 SWIPE MOBILE
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;

    const delta = touchEndX.current - touchStartX.current;

    if (delta < -50) nextMobile();
    if (delta > 50) prevMobile();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <HeroSection />

      {/* COLABORACIONES Y PROYECTOS */}
      <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-12 md:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="font-titulo text-2xl sm:text-3xl font-semibold tracking-tight">
            {t("collabsTitle")}
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg lg:text-lg">
            {t("collabsText")}
          </p>
        </div>

        <CatalogueSection />
      </section>

      {/* COLABORACIÓN DESTACADA */}
      {/* ... (NO TOCADO) ... */}

      {/* --- PRENSA & APARICIONES --- */}
      <section className="container px-6 sm:px-10 md:px-16 lg:px-20 py-16 border-t border-gray-200">

        <div className="grid gap-10 lg:grid-cols-2 items-start">

          {/* TEXTOS */}
          <div className="space-y-6 flex flex-col justify-center h-full lg:pl-6">
            <h2 className="font-titulo text-4xl font-semibold text-gray-900">
              {t("pressTitle")}
            </h2>

            <p className="text-gray-700 leading-relaxed max-w-md">
              {t("pressDescription")}
            </p>
          </div>

          {/* DESKTOP CARRUSEL (2 imágenes por slide) */}
          <div className="relative w-full h-[550px] overflow-hidden rounded-xl hidden lg:block">

            {/* Flechas */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-3 z-20
                        h-10 w-10 flex items-center justify-center rounded-full
                        bg-white/70 backdrop-blur-md shadow-lg hover:bg-white transition-all"
            >
              <span className="text-xl text-gray-800">‹</span>
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-3 z-20
                        h-10 w-10 flex items-center justify-center rounded-full
                        bg-white/70 backdrop-blur-md shadow-lg hover:bg-white transition-all"
            >
              <span className="text-xl text-gray-800">›</span>
            </button>

            {/* Slides */}
            <div
              className="flex h-full transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((pair, index) => (
                <div key={index} className="min-w-full grid grid-cols-2 gap-4 p-2">
                  {pair.map((img, i) => (
                    <div key={i} className="relative w-full h-[500px] overflow-hidden rounded-xl">
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image src={img} alt="" fill className="object-cover blur-xl scale-110 opacity-40" />
                        <Image src={img} alt="" fill className="object-contain z-10" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE CARRUSEL (1 imagen por vez) */}
          <div
            className="relative w-full h-[400px] overflow-hidden rounded-xl block lg:hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex h-full transition-transform duration-500"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {mobileSlides.map((img, i) => (
                <div key={i} className="min-w-full flex justify-center items-center p-2">
                  <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`mobile-${i}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WORKSHOP & EVENTOS */}
<section className="container px-6 sm:px-10 md:px-16 lg:px-20 py-20 border-t border-gray-200">

  <div className="grid lg:grid-cols-2 gap-10 items-center">

    {/* IMAGEN GRANDE */}
    <div className="relative w-full h-[550px] rounded-xl overflow-hidden">
      <Image
        src="/image/artes para empresas/empresa12.jpeg"
        alt="Workshop empresarial"
        fill
        className="object-cover"
      />
    </div>

    {/* TEXTOS */}
    <div className="space-y-10 max-w-xl">
      
      {/* WORKSHOP */}
      <div className="space-y-4">
        <h3 className="font-titulo text-3xl font-semibold text-gray-900">
          {t("workshopTitle")}
        </h3>

        <p className="text-gray-700 leading-relaxed">
          {t("workshopDescription")}
        </p>
      </div>

      {/* ARTE EN EVENTOS */}
      <div className="space-y-4">
        <h3 className="font-titulo text-3xl font-semibold text-gray-900">
          {t("eventsArtTitle")}
        </h3>

        <p className="text-gray-700 leading-relaxed">
          {t("eventsArtDescription")}
        </p>
      </div>

    </div>

  </div>

</section>
        
      
      {/* CARRUSEL FINAL */}
      <section>
        <CarruselExpos />
      </section>


      {/* Invitación */}
      <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-20 border-t border-gray-200 text-center">
        <h3 className="font-titulo text-2xl sm:text-3xl font-semibold mb-4">
          {t("inviteTitle")}
        </h3>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-base sm:text-base md:text-lg lg:text-lg leading-relaxed">
          {t("inviteText")}
        </p>

        <Link
          href="/ambient"
          className="font-titulo inline-flex items-center gap-1 px-6 py-3 text-sm sm:text-base text-white rounded-full shadow-lg bg-gray-950 transition-all hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
        >
          {t("inviteButton")}
          <TbArrowUpRight className="text-xl" />
        </Link>
      </section>
    </main>
  );
}
