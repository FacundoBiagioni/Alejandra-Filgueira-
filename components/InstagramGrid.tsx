"use client";

import React, { useEffect } from "react";

const InstagramGrid = () => {
  useEffect(() => {
    // Esto carga el script de LightWidget una sola vez
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="container mx-auto px-16 py-16 border-t text-center border-gray-200">
      {/* Acá va el código del iframe de LightWidget */}
      <div className="w-full flex justify-center">
        <iframe src="//lightwidget.com/widgets/22d6506711125c8eb81be148d61da29b.html" scrolling="no" allowTransparency={true} className="lightwidget-widget" style={{width: '100%', border: 0, overflow: 'hidden'}}></iframe>
      </div>
      {/* Título de la sección */}
      <p className="my-2 max-w-2xl text-sm italic text-gray-500 mx-auto ">
        Descubrí las últimas publicaciones y obras directamente desde su perfil.
      </p>

    </section>
  );
};

export default InstagramGrid;


