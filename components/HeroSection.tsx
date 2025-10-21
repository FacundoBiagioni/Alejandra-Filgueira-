import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { HeroSection as HeroSectionType } from "@/types";

const heroData: HeroSectionType = {
    title: "A una habitación estética se le da armonía",
    subtitle: "Cambia tu visión con el mejor diseño interior.",
    backgroundImage: "/image/kitchen.png",
};

export default function HeroSection() {
    return (
        <div className="bg-zinc-50">
            <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
                <div className="lg:w-1/2 xl:py-14 lg:py-8">
                    <p className="tracking-widest">OFERTA PARA EL MEJOR INTERIOR</p>
                    <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
                        {heroData.title}
                    </h1>
                    <p className="pb-6 text-gray-500 xl:pb-10">
                        {heroData.subtitle} <br /> Ofrecemos el mejor diseño interior para su hogar. <br />Haz que cada momento sea hermoso con el mejor diseño de interiores.
                    </p>
                    <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                        Empezar <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </button>
                </div>

                <div className="w-1/2">
                    <Image
                        src={heroData.backgroundImage}
                        width={800}
                        height={500}
                        alt="Hero background"
                        className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
                    />
                </div>
            </div>
        </div>
    );
}