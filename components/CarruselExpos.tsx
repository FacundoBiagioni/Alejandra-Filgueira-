"use client";

import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarruselExpos() {
  return (
    <div className="container px-6 sm:px-10 lg:px-20 py-16 border-t border-gray-200">
      {/* Texto introductorio */}
      <div className="grid lg:grid-cols-2 gap-10 pb-10">
        <div className="text-center lg:text-left">
          <h1 className="font-titulo text-3xl sm:text-4xl font-medium mb-4">
            Exposiciones y Apariciones
          </h1>
        </div>
        <div className="text-gray-600 leading-relaxed space-y-4 text-justify sm:text-left">
          <p>
            A lo largo de mi carrera, he tenido la oportunidad de mostrar mi
            obra en diversas exposiciones y ferias de arte, compartiendo espacios
            con otros artistas y conectando con públicos variados.
          </p>
          <p>
            Esta selección reúne otras exposiciones destacadas, complementando las
            colaboraciones institucionales y proyectos individuales que ya presenté.
            Cada muestra refleja momentos importantes de mi trayectoria y mi evolución
            artística.
          </p>
        </div>
      </div>

      {/* Swiper de imágenes */}
      <div>
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
          {[
            "expo12.jpeg",
            "expo2.jpeg",
            "expo10.jpeg",
            "expo11.jpeg",
            "expo6.jpeg",
            "expo14.jpeg",
            "expo15.jpeg",
            "expo16.jpeg",
            "expo18.jpeg",
            "expo19.jpeg",
            "expo20.jpeg",
            "expo21.jpeg",
            "expo35.jpeg",
            "expo36.jpeg",
            "expo38.jpeg",
            "expo42.jpeg",
            "expo43.jpeg",
            "expo44.jpeg",
            "expo52.jpeg",
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`/image/exposiciones/${img}`}
                alt={`Exposición ${index + 1}`}
                width={520}
                height={700}
                className="w-full h-[280px] sm:h-[320px] object-fill rounded-lg border border-gray-200 shadow-sm transition-transform duration-500 hover:scale-[1.02]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
