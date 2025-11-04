import Image from "next/image";
import Link from "next/link";
import CarruselExpos from "@/components/CarruselExpos";
import HeroSection from "@/components/HeroSection";
import { TbArrowUpRight } from "react-icons/tb";
import CatalogueSection from "@/components/CardsExpos";

export default function Empresas() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <HeroSection />

      {/* COLABORACIONES Y PROYECTOS */}
      <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-12 md:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="font-titulo text-2xl sm:text-3xl font-semibold tracking-tight">
            Colaboraciones y proyectos institucionales
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-base md:text-lg lg:text-lg">
            He trabajado junto a diversas instituciones, galerías y espacios privados, llevando mi obra a entornos corporativos y culturales donde el arte cumple un rol integrador y expresivo.
          </p>
        </div>

        {/* CARRUSEL EXPOSICIONES */}
        <div>
          <CatalogueSection />
        </div>
      </section>

      {/* COLABORACIÓN DESTACADA - CENTURY 21 */}
      <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-14 md:py-20 border-t border-gray-200">
        <div className="grid gap-10 lg:grid-cols-2 items-start">

          {/* Columna izquierda: texto + imágenes */}
          <div className="flex flex-col justify-between">
            {/* Texto */}
            <div>
              <h3 className="font-titulo text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
                Colaboración destacada <span className="text-2xl sm:text-3xl font-semibold">- Century 21</span>
              </h3>
              <p className="text-gray-700 text-base sm:text-base md:text-lg lg:text-lg leading-relaxed mt-6 sm:mt-9">
                En 2023, fui convocada por la firma <span className="font-medium">Century 21</span> para desarrollar piezas exclusivas destinadas a sus espacios corporativos y vitrinas. Este proyecto combinó la identidad visual de la marca con mi estética artística, explorando la textura, el color y el movimiento en composiciones únicas que reflejan profesionalismo y creatividad.
              </p>

              <ul className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-600 list-disc pl-5 space-y-2">
                <li>Diseño de obras adaptadas a la arquitectura del espacio.</li>
                <li>Colaboración con equipos de diseño y comunicación de marca.</li>
                <li>Integración de arte contemporáneo en entornos corporativos.</li>
              </ul>
            </div>

            {/* Imágenes debajo del texto */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-14 sm:mt-20">
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

            {/* Texto debajo de las imágenes */}
            <p className="mt-8 sm:mt-10 text-sm sm:text-base italic text-gray-500 text-center">
              “Cada obra se concibió como un puente entre la emoción del arte y la narrativa visual corporativa.”
            </p>
          </div>

          {/* Columna derecha: video */}
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

      {/* EMPRESAS Y ESPACIOS CULTURALES */}
      <div className="container px-6 sm:px-10 lg:px-20 py-20 border-t border-gray-200">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Columna izquierda - Títulos */}
          <div className="lg:col-span-1 text-left lg:text-left">
            <h1 className="font-titulo text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              Empresas y Espacios Culturales
            </h1>
            <h2 className="font-titulo text-base sm:text-lg md:text-xl font-semibold text-gray-600">
              Colaboraciones que impulsan la difusión del arte contemporáneo
            </h2>
          </div>

          {/* Columna derecha - Texto */}
          <div className="lg:col-span-2 text-gray-600 leading-relaxed space-y-6 text-justify sm:text-left text-base sm:text-base md:text-lg lg:text-lg">
            <p>
              En los últimos años, participé en diversos proyectos junto a entidades culturales, marcas y galerías interesadas en integrar el arte en nuevas experiencias. Cada colaboración representó una oportunidad de acercar mi trabajo a públicos diferentes y generar diálogos entre la estética y la identidad de cada organización.
            </p>
            <p>
              Desde intervenciones en espacios comerciales hasta exposiciones conjuntas con otras artistas, cada alianza reafirma la importancia del arte como medio de conexión y transformación.
            </p>
            <p>
              Estas experiencias me permitieron compartir mi visión en contextos variados, fortaleciendo la relación entre el arte contemporáneo y el ámbito institucional.
            </p>
          </div>
        </div>
      </div>

      {/* CARRUSEL EXPOSICIONES */}
      <section className="container mx-auto px-0 border-t border-gray-200">
        <CarruselExpos />
      </section>

      {/* SECCIÓN INVITACIÓN A AMBIENTACIONES */}
      <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-20 border-t border-gray-200 text-center">
        <h3 className="font-titulo text-2xl sm:text-3xl font-semibold mb-4">
          Descubrí mis ambientaciones más destacadas
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-base sm:text-base md:text-lg lg:text-lg leading-relaxed">
          Explorá cómo las obras transforman cada espacio, integrándose armónicamente con la arquitectura, la luz y el estilo de cada ambiente.
        </p>
        <Link
          href="/ambient"
          className="font-titulo inline-flex items-center gap-1 px-6 py-3 text-sm sm:text-base text-white rounded-full shadow-lg bg-gray-950 transition-all hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
        >
          Ver ambientaciones
          <TbArrowUpRight className="text-xl" />
        </Link>
      </section>

    </main>
  );
}
