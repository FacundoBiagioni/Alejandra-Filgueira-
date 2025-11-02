import Image from "next/image";
import Link from "next/link";
import CarruselExpos from "@/components/CarruselExpos";
import HeroSection from "@/components/HeroSection";
import { TbArrowUpRight } from "react-icons/tb";

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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* TARJETA 1 */}
          <article className="group relative overflow-hidden rounded-lg border bg-white shadow hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <Image
                src="/image/exposiciones/expo30.jpeg"
                alt="Exposición MUMART"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="font-titulo text-lg font-medium">Museo Municipal de Arte MUMART</h4>
              <p className="mt-2 text-sm text-gray-600">
                Exposición individual “Cicatrices” (2025). Una reflexión sobre las huellas,
                la memoria y la reconstrucción desde la materia.
              </p>
            </div>
          </article>

          {/* TARJETA 2 */}
          <article className="group relative overflow-hidden rounded-lg border bg-white shadow hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <Image
                src="/image/exposiciones/expo4.jpeg"
                alt="FusiónARTE City Bell"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="font-titulo text-lg font-medium">FusiónARTE — City Bell</h4>
              <p className="mt-2 text-sm text-gray-600">
                Muestra curada por Sebastián Guerrini (2025).  
                Obras en diálogo con la noción de reinvención y transformación artística.
              </p>
            </div>
          </article>

          {/* TARJETA 3 */}
          <article className="group relative overflow-hidden rounded-lg border bg-white shadow hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <Image
                src="/image/exposiciones/expo4.jpeg"
                alt="ArtWeek Chile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="font-titulo text-lg font-medium">Artweek Chile</h4>
              <p className="mt-2 text-sm text-gray-600">
                Participación internacional en Santiago de Chile (2021-2022).  
                Stand individual con obras abstractas de gran formato.
              </p>
            </div>
          </article>

          {/* TARJETA 4 */}
          <article className="group relative overflow-hidden rounded-lg border bg-white shadow hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <Image
                src="/image/exposiciones/expo4.jpeg"
                alt="K Gallery Philadelphia"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="font-titulo text-lg font-medium">K Gallery — Philadelphia, USA</h4>
              <p className="mt-2 text-sm text-gray-600">
                Exhibición permanente (2022). Selección de obras abstractas en diálogo 
                con el diseño interior contemporáneo.
              </p>
            </div>
          </article>

          {/* TARJETA 5 */}
          <article className="group relative overflow-hidden rounded-lg border bg-white shadow hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <Image
                src="/image/exposiciones/expo4.jpeg"
                alt="Club Alemán de Buenos Aires"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="font-titulo text-lg font-medium">Club Alemán de Buenos Aires</h4>
              <p className="mt-2 text-sm text-gray-600">
                Exposición colectiva “Esencia” (2023).  
                Obras que abordan la sensibilidad y el vínculo entre forma y emoción.
              </p>
            </div>
          </article>

          {/* TARJETA 6 */}
          <article className="group relative overflow-hidden rounded-lg border bg-white shadow hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <Image
                src="/image/exposiciones/expo4.jpeg"
                alt="Hotel Hilton Puerto Madero"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="font-titulo text-lg font-medium">Hotel Hilton — Puerto Madero</h4>
              <p className="mt-2 text-sm text-gray-600">
                Muestra colectiva (2022). Integración de arte contemporáneo en espacios corporativos premium.
              </p>
            </div>
          </article>
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


      {/* CARRUSEL EXPOSICIONES */}
      <section className="container mx-auto px-2 border-t border-gray-200">
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
