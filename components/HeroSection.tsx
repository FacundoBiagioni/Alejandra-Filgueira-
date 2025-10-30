import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";


export default function HeroSection() {
    return (
        <div className="bg-opacity-60 bg-zinc-100 overflow-hidden relative">
            <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
                <div className="lg:w-1/2 xl:py-14 lg:py-8">
                    <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
                        Empresas & Colaboraciones
                    </h1>
                    <p className="pb-6 text-gray-500 xl:pb-10">
                        Proyectos realizados para instituciones, marcas y empresas. <br/>
                        trabajos por encargo, intervenciones y colaboraciones que muestran la<br/>
                        experiencia profesional de Alejandra con organismos y marcas.
                    </p>
                    <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                        Empezar <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </button>
                </div>

                <div className="w-1/2">
                    <Image
                        src="/image/exposiciones/expo4.jpeg"
                        width={800}
                        height={500}
                        alt="Hero background"
                        className="absolute right-0 xl:h-[620px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
                    />
                </div>
            </div>
        </div>
    );
}