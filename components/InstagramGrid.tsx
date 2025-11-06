"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

const InstagramGrid = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight] = useState(100);

  return (
    <section className="border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-8 md:px-14 lg:px-20 py-10 sm:py-12 md:py-16">
        <h3 className="font-titulo text-2xl sm:text-3xl font-semibold mb-3 text-center lg:text-left">
          Conocé más sobre mi mundo artístico
        </h3>

        <p className="text-gray-700 text-sm sm:text-base lg:w-2/3 mb-5 text-center lg:text-left">
          En este espacio comparto mi recorrido profesional y personal,
          los procesos detrás de cada obra y momentos que inspiran mi arte.
          Podés descubrir más y conectar conmigo a través de Instagram.
        </p>

        {/* =============================
            DESKTOP / TABLET - iframe (desde lg en adelante)
        ============================== */}
        <div className="hidden lg:flex w-full justify-center">
          <iframe
            ref={iframeRef}
            src="https://widgets.commoninja.com/iframe/d1b3418c-3471-4efc-a5ab-ee7ea96310d6"
            width="100%"
            height={iframeHeight}
            frameBorder={0}
            scrolling="no"
            style={{
              maxWidth: "1400px",
              minHeight: "420px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          ></iframe>
        </div>

        {/* =============================
            MOBILE / TABLET (hasta 1023px) - Tarjeta Instagram
        ============================== */}
        <div className="lg:hidden flex flex-col items-center gap-6 w-full">
          <a
            href="https://www.instagram.com/alejandrafilgueira"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-500 to-red-900 text-white rounded-xl p-6 flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer w-full max-w-md mx-auto"
          >
            <Image
              src="/public/image/profile.jpg"
              alt="Alejandra Filgueira"
              width={64}
              height={64}
              className="rounded-full border-2 border-white"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">@Alejandra Filgueira</h3>
              <p className="text-sm opacity-90">
                Seguí su arte, procesos y publicaciones en Instagram.
              </p>
            </div>
            <Instagram size={28} className="text-white" />
          </a>
        </div>

        {/* =============================
            MENSAJE FINAL - Siempre centrado y responsive
        ============================== */}
        <p className="my-4 w-full max-w-2xl text-xs sm:text-sm italic text-gray-500 mx-auto text-center px-2 sm:px-0">
          Descubrí las últimas publicaciones y obras directamente desde su perfil.
        </p>
      </div>
    </section>
  );
};

export default InstagramGrid;
