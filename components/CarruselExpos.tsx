"use client";
import Image from "next/image";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarruselExpos() {

    return (
<div className="container py-16 border-t">
  {/* Texto introductorio */}
  <div className="container grid pb-8 lg:grid-cols-2 gap-y-8">
    <div className="text-left">
      <h1 className="font-titulo py-4 text-4xl font-medium lg:text-4xl lg:py-0">
        Exposiciones y Apariciones
      </h1>
    </div>
    <div>
      <p className="pb-4 text-gray-500">
        A lo largo de mi carrera, he tenido la oportunidad de mostrar mi obra en diversas exposiciones y ferias de arte, compartiendo espacios con otros artistas y conectando con públicos variados.
      </p>
      <p className="text-gray-500">
        Esta selección reúne otras exposiciones destacadas, complementando las colaboraciones institucionales y proyectos individuales que ya presenté. Cada muestra refleja momentos importantes de mi trayectoria y mi evolución artística.
      </p>
    </div>
  </div>

            {/* Swiper de imágenes */}
            <div>
            <Swiper
                slidesPerView={4}
                loop={true}
                rewind={false}
                breakpoints={{
                    640: { slidesPerView: 3, spaceBetween: 16 },
                    1024: { slidesPerView: 4, spaceBetween: 24 },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                {/* Cada SwiperSlide con imagen ajustada */}
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo12.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo2.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo10.jpeg"
                        alt="ArteView Cariló y Pinamar"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo11.jpeg"
                        alt="Artweek Chile"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo6.jpeg"
                        alt="Exposición Cicatrices MUMART La Plata"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo14.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo15.jpeg"
                        alt="ArteView Cariló y Pinamar"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo16.jpeg"
                        alt="Artweek Chile"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo18.jpeg"
                        alt="Exposición Cicatrices MUMART La Plata"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo19.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo20.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo21.jpeg"
                        alt="ArteView Cariló y Pinamar"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo35.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo36.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo38.jpeg"
                        alt="ArteView Cariló y Pinamar"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo42.jpeg"
                        alt="Artweek Chile"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo43.jpeg"
                        alt="Exposición Cicatrices MUMART La Plata"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo44.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo52.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full h-[320px] object-fill rounded-lg border-2 border-gray-200"
                    />
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}
