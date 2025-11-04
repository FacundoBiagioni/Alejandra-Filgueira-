"use client";

import React, { useRef, useState } from "react";

const InstagramGrid = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight] = useState(100);

  return (
    <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-12 md:py-16 border-t border-gray-200">
      <h3 className="font-titulo text-2xl sm:text-3xl font-semibold mb-3">
        Conocé más sobre mi mundo artístico
      </h3>

      <p className="text-gray-700 text-sm sm:text-base lg:w-2/3 mb-10">
        En este espacio comparto mi recorrido profesional y personal,
        los procesos detrás de cada obra y momentos que inspiran mi arte.
        Podés descubrir más y conectar conmigo a través de Instagram.
      </p>

      <div className="w-full flex justify-center">
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

      <p className="my-4 max-w-2xl text-xs sm:text-sm italic text-gray-500 mx-auto text-center">
        Descubrí las últimas publicaciones y obras directamente desde su perfil.
      </p>
    </section>
  );
};

export default InstagramGrid;
