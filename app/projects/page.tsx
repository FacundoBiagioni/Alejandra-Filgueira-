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
      <section className="container mx-auto px-20 py-16">
        <div className="mb-10">
          <h2 className="font-titulo text-3xl font-semibold tracking-tight">
            Colaboraciones y proyectos institucionales
          </h2>
          <p className="mt-3 text-gray-600">
            Alejandra Silveira ha trabajado junto a diversas instituciones, galerías
            y espacios privados, llevando su obra a entornos corporativos y culturales
            donde el arte cumple un rol integrador y expresivo.
          </p>
        </div>

      {/* CARRUSEL EXPOSICIONES */}
      <div>
        <CatalogueSection />
      </div>

      </section>

{/* COLABORACIÓN DESTACADA - CENTURY 21 */}
<section className="container mx-auto px-20 py-20 border-t border-gray-200">
  <div className="grid lg:grid-cols-2 gap-10 items-start">
    {/* Columna izquierda: texto + imágenes */}
    <div className="flex flex-col justify-between">
      {/* Texto */}
      <div>
        <h3 className="font-titulo text-3xl font-semibold mb-4">
          Colaboración destacada  <span className="text-4xl">- Century 21 </span> 
        </h3>
        <p className="text-gray-700 leading-relaxed mt-9">
          En 2023, Alejandra fue convocada por la firma{" "}
          <span className="font-medium">Century 21</span> para desarrollar piezas
          exclusivas destinadas a sus espacios corporativos y vitrinas.  
          Este proyecto combinó la identidad visual de la marca con la estética
          artística de Alejandra, explorando la textura, el color y el movimiento
          en composiciones únicas que reflejan profesionalismo y creatividad.
        </p>

        <ul className="mt-10 text-sm text-gray-600 list-disc pl-5 space-y-1">
          <li>Diseño de obras adaptadas a la arquitectura del espacio.</li>
          <li>Colaboración con equipos de diseño y comunicación de marca.</li>
          <li>Integración de arte contemporáneo en entornos corporativos.</li>
        </ul>

      </div>

      {/* Imágenes debajo del texto */}
      <div className="grid grid-cols-3 gap-4 mt-20">
        <div className="relative h-52 overflow-hidden rounded-lg">
          <Image
            src="/image/artes para empresas/empresa25.jpeg"
            alt="Century 21 obra 1"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="relative h-52 overflow-hidden rounded-lg">
          <Image
            src="/image/artes para empresas/empresa2.jpg"
            alt="Century 21 obra 2"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="relative h-52 overflow-hidden rounded-lg">
          <Image
            src="/image/artes para empresas/empresa29.jpeg"
            alt="Century 21 obra 3"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      {/* quiero centrar el texto de abajo de las imagenes */}
        <p className="mt-10 text-sm italic text-gray-500 text-center ">
          “Cada obra se concibió como un puente entre la emoción del arte y la
          narrativa visual corporativa.”
        </p>
    </div>

    {/* Columna derecha: video */}
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[400px] lg:max-w-[500px] overflow-hidden rounded-xl shadow-lg">
        <video
          src="/videos/empresa8.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-[600px] object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<div className="container py-20 border-t">
  <div className="grid lg:grid-cols-3 gap-10">
    <div className="lg:col-span-1">
      <h1 className="font-titulo text-4xl font-medium">Empresas y Espacios Culturales</h1>
      <h2 className="font-titulo text-lg font-semibold text-gray-600 mt-4">
        Colaboraciones que impulsan la difusión del arte contemporáneo
      </h2>
    </div>
    <div className="lg:col-span-2 text-gray-500 leading-relaxed space-y-6">
      <p>
        En los últimos años, participé en diversos proyectos junto a entidades culturales, marcas y galerías interesadas en integrar el arte en nuevas experiencias. 
        Cada colaboración representó una oportunidad de acercar mi trabajo a públicos diferentes y generar diálogos entre la estética y la identidad de cada organización.
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
<section className="container mx-auto px-20 py-20 border-t border-gray-200 text-center">
  <h3 className="font-titulo text-2xl font-semibold mb-4">
    Descubrí sus ambientaciones más destacadas
  </h3>
  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
    Explorá cómo las obras de Alejandra Silveira transforman cada espacio,
    integrándose armónicamente con la arquitectura, la luz y el estilo de cada ambiente.
  </p>
  <Link
    href="/ambient"
    className="font-titulo inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
  >
    Ver ambientaciones
    <TbArrowUpRight className="text-xl" />
  </Link>
</section>


    </main>
  );
}
