"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarruselExpos() {

    return (
        <div className="py-8 lg:py-28">
            {/* Texto introductorio */}
            <div className="container grid pb-8 lg:grid-cols-2 gap-y-8">
                <div className="text-left">
                    <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Exposiciones Destacadas</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-bold tracking-wider">Algunas de las exposiciones más importantes de mi trayectoria</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-x-6 gap-y-4">
                        <div>
                            <p>
                                A lo largo de mi carrera, he participado en múltiples exposiciones individuales y colectivas, tanto en Argentina como en el exterior. Cada obra refleja mi exploración de técnicas abstractas y experimentación con materiales.
                            </p>
                        </div>
                        <div>
                            <p>
                                Mi trabajo ha sido presentado en museos, galerías y ferias de arte, donde busco transmitir emociones y conectar con el espectador a través de texturas, colores y composición.
                            </p>
                            <a href="/projects" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">
                                Ver más proyectos <TbArrowUpRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Swiper de imágenes */}
            <Swiper
                slidesPerView={1}
                loop={true}
                rewind={false}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 16 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                {/* Cada SwiperSlide con imagen ajustada */}
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo27.jpeg"
                        alt="Exposición Cicatrices MUMART La Plata"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo12.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo2.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo10.jpeg"
                        alt="ArteView Cariló y Pinamar"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo11.jpeg"
                        alt="Artweek Chile"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo6.jpeg"
                        alt="Exposición Cicatrices MUMART La Plata"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo13.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo14.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo15.jpeg"
                        alt="ArteView Cariló y Pinamar"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo16.jpeg"
                        alt="Artweek Chile"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo18.jpeg"
                        alt="Exposición Cicatrices MUMART La Plata"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo19.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo20.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo21.jpeg"
                        alt="ArteView Cariló y Pinamar"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo1.jpeg"
                        alt="Artweek Chile"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo30.jpeg"
                        alt="Exposición Cicatrices MUMART La Plata"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo35.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo36.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo38.jpeg"
                        alt="ArteView Cariló y Pinamar"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo42.jpeg"
                        alt="Artweek Chile"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo43.jpeg"
                        alt="Exposición Cicatrices MUMART La Plata"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo44.jpeg"
                        alt="Exposición FusiónARTE City Bell"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/image/exposiciones/expo52.jpeg"
                        alt="Muestra colectiva Facultad de Derecho UBA"
                        width={520}
                        height={700}
                        className="w-full max-h-[500px] object-fill rounded-md"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
