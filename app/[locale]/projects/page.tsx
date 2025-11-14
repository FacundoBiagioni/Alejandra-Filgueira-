"use client";

import Image from "next/image";
import Link from "next/link";
import CarruselExpos from "@/components/CarruselExpos";
import HeroSection from "@/components/HeroSection";
import { TbArrowUpRight } from "react-icons/tb";
import CatalogueSection from "@/components/CardsExpos";
import { useTranslations } from "next-intl";

export default function Empresas() {
  const t = useTranslations("Projects"); // 👈 Namespace

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
          <p className="mt-3 text-gray-600 text-base sm:text-base md:text-lg lg:text-lg">
            {t("collabsText")}
          </p>
        </div>

        <div>
          <CatalogueSection />
        </div>
      </section>

      {/* COLABORACIÓN DESTACADA */}
      <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-14 md:py-20 border-t border-gray-200">
        <div className="grid gap-10 lg:grid-cols-2 items-start">

          {/* Texto */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-titulo text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
                {t("featuredCollab")} <span className="text-2xl sm:text-3xl font-semibold">- Century 21</span>
              </h3>

              <p className="text-gray-700 text-base sm:text-base md:text-lg lg:text-lg leading-relaxed mt-6 sm:mt-9">
                {t("featuredText")}
              </p>

              <ul className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-600 list-disc pl-5 space-y-2">
                <li>{t("feature1")}</li>
                <li>{t("feature2")}</li>
                <li>{t("feature3")}</li>
              </ul>
            </div>

            {/* Imágenes */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-14 sm:mt-20">
              {/* (las imágenes quedan intactas) */}
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden rounded-lg">
                <Image
                  src="/image/artes para empresas/empresa25.jpeg"
                  alt="Century 21 obra 1"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden rounded-lg">
                <Image
                  src="/image/artes para empresas/empresa2.jpg"
                  alt="Century 21 obra 2"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden rounded-lg">
                <Image
                  src="/image/artes para empresas/empresa29.jpeg"
                  alt="Century 21 obra 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <p className="mt-8 sm:mt-10 text-sm sm:text-base italic text-gray-500 text-center">
              {t("featuredQuote")}
            </p>
          </div>

          {/* Video */}
          <div className="flex justify-center items-center mt-10 lg:mt-0">
            <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] overflow-hidden rounded-xl shadow-lg">
              <video
                src="/videos/empresa8.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="w-full h-[380px] sm:h-[480px] md:h-[600px] object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Carrusel */}
      <section className="container mx-auto px-0 border-t border-gray-200">
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
