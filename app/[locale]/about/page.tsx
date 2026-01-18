"use client";

import InstagramGrid from "@/components/InstagramGrid";
import { ChevronDown, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("About");
  const pathname = usePathname();

// 🌐 Detectamos idioma actual igual que en Navigation/Header
const currentLocale =
  pathname?.split("/")[1] || Cookies.get("locale") || "es";

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section
        className="relative w-full h-[75vh] bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/image/procesos/proceso9.jpeg')",
          backgroundSize: "cover",
          imageRendering: "auto",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-4 animate-fadeInScale">
          <div className="relative inline-block">
            <div
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-white/50
                w-[420px] h-[230px] md:w-[440px] md:h-[250px]
                max-w-[90vw]
              "
            ></div>

            <Image
              src="/logo.png"
              alt="Logo"
              width={480}
              height={480}
              className="relative z-10 object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="container py-20 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-md h-[500px]">
            <Image
              src="/image/procesos/proceso37.jpeg"
              alt={t("portraitAlt")}
              width={500}
              height={700}
              className="w-full h-full object-cover object-[70%_40%] rounded-lg shadow-md"
            />

            <p className="text-gray-700 mt-2 text-center">
              {t("subtitle")}
            </p>
          </div>

          <div className="lg:w-2/3 space-y-6 text-gray-700">
            <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-6">
              {t("title")}
            </h2>

            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
          </div>
        </div>
      </section>

{/* CURRÍCULUM VITAE */}
<section className="py-20 border-t border-gray-200 text-center relative">
  <h2 className="font-titulo text-3xl font-semibold mb-4">
    {t("cv.title")}
  </h2>

  <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
    {t("cv.description")}
  </p>

  {/* Botón principal */}
  <div className="relative inline-block">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="font-titulo inline-flex items-center gap-2 px-7 py-4 text-base text-white rounded-full shadow-lg bg-gray-950 transition-all hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
    >
      <FileText className="w-8 h-8" />
      {t("cv.button")}
      <ChevronDown
        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>

    {/* ▼ Menú desplegable */}
    {isOpen && (
      <div className="absolute left-1/2 -translate-x-1/2 mt-3 z-20">
        <div className="bg-gray-100 rounded-xl shadow-lg p-4 w-60">
          <style jsx>{`
            .link-hover {
              position: relative;
              display: inline-block;
            }
            .link-hover::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0%;
              height: 2px;
              background: black;
              transition: width 0.3s ease;
            }
            .link-hover:hover::after {
              width: 100%;
            }
          `}</style>

          <a
            href="/pdf/CV_Alejandra_ES.pdf"
            download
            className="block py-2 text-gray-800 hover:text-black font-medium transition link-hover"
          >
            {t("cv.downloadEs")}
          </a>

          <a
            href="/pdf/CV_Alejandra_EN.pdf"
            download
            className="block py-2 text-gray-800 hover:text-black font-medium transition link-hover"
          >
            {t("cv.downloadEn")}
          </a>
        </div>
      </div>
    )}
  </div>
</section>

      {/* INSTAGRAM GRID */}
      <InstagramGrid />

{/* COLABORACIONES / MARCAS */}
<section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-12 md:py-16 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-10 md:gap-12">
    
    <div className="w-full lg:w-3/4 -translate-y-2">
      <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-6">
        {t("collab.title")}
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        {t("collab.description")}
      </p>

  <Link
    href={`/${currentLocale}/projects`} // 🔵 Mantiene idioma actual
    className="font-titulo inline-flex items-center gap-2 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 transition-all hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
    prefetch
  >
    {t("collab.button")}
    <TbArrowUpRight className="w-5 h-5" />
  </Link>
    </div>

    <div className="w-full lg:w-1/4 overflow-hidden rounded-lg shadow-md">
      <Image
        src="/image/artes para empresas/empresa5.jpg"
        alt={t("collab.imageAlt")}
        width={400}
        height={400}
        className="rounded-lg object-cover w-full h-[250px] sm:h-[280px] md:h-[300px] shadow-md"
      />
    </div>
  </div>
</section>

{/* TALLER / PROCESO */}
<section className="container py-16 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
  <div className="lg:flex items-center gap-12">

    <div className="lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-md h-[500px]">
      <Image
        src="/image/procesos/proceso12.jpeg"
        alt={t("workshop.imageAlt")}
        width={700}
        height={500}
        className="rounded-lg object-cover object-[center_50%] w-full h-full shadow-md"
      />
    </div>

    <div className="lg:w-1/2 space-y-4 text-gray-700">
      <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-6">
        {t("workshop.title")}
      </h2>

      <p>{t("workshop.p1")}</p>
      <p>{t("workshop.p2")}</p>
    </div>

  </div>
</section>

{/* CERÁMICA */}
<section className="container py-16 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
  <div className="lg:flex items-center gap-12">
    <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-4 text-gray-700 text-left">
      <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-4">
        {t("Ceramic.title")}
      </h2>

      <p>{t("Ceramic.p1")}</p>
      <p>{t("Ceramic.p2")}</p>

      <Link
        href={`/${currentLocale}/ceramic`}
        className="font-titulo inline-flex items-center gap-2 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 transition"
      >
        {t("Ceramic.button")}
        <TbArrowUpRight className="w-5 h-5" />
      </Link>
    </div>

    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
      <Image
        src="/image/ceramica/ceramica15.jpeg"
        alt={t("Ceramic.alt1")}
        width={600}
        height={400}
        className="w-full h-[320px] object-cover rounded-lg shadow-md"
      />

      <Image
        src="/image/ceramica/ceramica17.jpeg"
        alt={t("Ceramic.alt2")}
        width={600}
        height={400}
        className="w-full h-[320px] object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

{/* INVITACIÓN A GALERÍA */}
<section className="container mx-auto px-20 py-20 border-t border-gray-200 text-center text-base sm:text-base md:text-lg lg:text-lg">
  <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-6">
    {t("Gallery.title")}
  </h2>

  <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
    {t("Gallery.p")}
  </p>

  <Link
    href={`/${currentLocale}/gallery`}
    className="group relative inline-block rounded-xl overflow-hidden shadow-xl border hover:scale-105 transform transition duration-500"
  >
    <Image
      src="/image/cuadros/cuadro24.jpg"
      alt={t("Gallery.alt")}
      width={400}
      height={300}
      className="object-cover object-center rounded-xl"
    />

    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
      <span className="text-white text-lg font-medium tracking-wide">
        {t("Gallery.button")}
      </span>
    </div>

    <div className="absolute inset-0 border-[10px] border-white rounded-xl pointer-events-none" />
  </Link>
</section>


    </div>
  );
}
