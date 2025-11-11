"use client";

import InstagramGrid from "@/components/InstagramGrid";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function About() {
  return (
    <div className="bg-white text-gray-800">

{/* HERO */}
<section
  className="relative w-full h-[75vh] bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: "url('/image/procesos/proceso9.jpeg')",
    backgroundSize: "cover",
    imageRendering: "auto",
  }}
>
  {/* Capa oscura sobre la imagen */}
  <div className="absolute inset-0 bg-black/55"></div>

  <div className="relative z-4 animate-fadeInScale">
    <div className="relative inline-block">
      {/* ✅ Fondo blanco translúcido detrás del logo */}
      <div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-white/50
          w-[420px] h-[230px] md:w-[440px] md:h-[250px]
          max-w-[90vw]
        "
      ></div>

      {/* Logo principal (sin modificaciones) */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={480}
        height={480}
        className="relative z-10 object-contain"
        priority
      />
    </div>
  </div>
</section>


      {/* BIO */}
      <section className="container py-20 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-md h-[500px]">
            <Image
              src="/image/procesos/proceso21.jpeg"
              alt="Retrato"
              width={500}
              height={700}
              className="w-full h-full object-cover object-[70%_40%] rounded-lg shadow-md"
            />
            <p className="text-gray-700 mt-2 text-center">
              Artista plástica y diseñadora visual
            </p>
          </div>

          <div className="lg:w-2/3 space-y-6 text-gray-700">
            <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-6">
              Sobre mí
            </h2>
            <p>
              Nací en La Plata, Argentina, y me especializo en arte abstracto. 
              Me gradué como Diseñadora en Comunicación Visual en la Facultad de Bellas Artes de la Universidad Nacional de La Plata. 
              También realicé estudios secundarios en Alemania, donde comenzó mi vínculo con el arte. 
              Desde 1998 continúo mi formación en pintura, dibujo y grabado junto a reconocidos artistas y docentes universitarios.
            </p>
            <p>
              Mi trabajo explora la relación entre color, textura y emoción, en un proceso donde la materia se convierte en lenguaje. 
              A través del expresionismo abstracto, busco generar diálogo con el espectador, invitándolo a interpretar libremente cada obra.
            </p>
          </div>
        </div>
      </section>

{/* CURRÍCULUM VITAE - VARIANTE 2 */}
<section className="py-20 bg-gray-50 border-t border-gray-200 text-center">
  <h2 className="font-titulo text-3xl font-semibold mb-4">Currículum Vitae</h2>
  <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
    Descargá mi currículum y conocé mi formación, exposiciones y proyectos artísticos.  
    Es un resumen de mi recorrido y mi pasión por el arte.
  </p>

  <a
    href="/pdf/CV-Alejandra.pdf"
    download
    className="font-titulo inline-flex items-center gap-2 px-7 py-4 text-base text-white rounded-full shadow-lg bg-gray-950 transition-all hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
  >
    <FileText className="w-8 h-8" />
    Descargar CV
  </a>
</section>



      {/* INSTAGRAM GRID */}
      <InstagramGrid />

      {/* FORMACIÓN
      <section className="container py-16 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
        <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-8">
          Formación Artística
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <ul className="space-y-3">
            <li>• Lic. Mora Sofía Garese — Dibujo, pintura y grabado (2011)</li>
            <li>• Prof. Kitty Di Bartolo — Técnicas pictóricas (2016-2017)</li>
            <li>• Lic. Martín La Spina — Óleo y dibujo tradicional (2009-2014)</li>
            <li>• Lic. Laura Bereciartua — Pintura sobre soportes alternativos (2015)</li>
            <li>• Lic. Fernanda Piamonti — Figura humana, modelo vivo (2019-2021)</li>
          </ul>
          <ul className="space-y-3">
            <li>• Croquis arquitectónico — Edificios fundacionales de La Plata (2022-2025)</li>
            <li>• Seminario de posgrado — Diana Aisemberg (2023)</li>
            <li>• Clínicas de arte — Luis Altieri y Nieves Legaspi (2021-2025)</li>
            <li>• Cursos de cerámica — Aragón, Sunseri y Arnau (2021-2025)</li>
          </ul>
        </div>
      </section>*/}

      {/* EXPOSICIONES 
      <section className="container py-16 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
        <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-8">
          Exposiciones Destacadas
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700">
          <div>
            <ul className="space-y-3">
              <li>• “Cicatrices” — MUMART La Plata (2025)</li>
              <li>• “FusiónARTE” — REINVENTARSE City Bell (2025)</li>
              <li>• “Proyectos Gráficos” — Casa Taller La Plata (2024)</li>
              <li>• Salón de los Pasos Perdidos — Facultad de Derecho UBA (2024)</li>
              <li>• ARTTIME — Mercado de los Carruajes, Buenos Aires (2023)</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li>• “Esencia” — Club Alemán de Buenos Aires (2023)</li>
              <li>• “EXTRANJERÍA” — Espacio Cultural Abierto, Madrid (2023)</li>
              <li>• “Artweek Chile” — Stand individual (2021-2022)</li>
              <li>• “Semana del Arte y Diseño” — Distrito Arenales (2021-2024)</li>
              <li>• “ArteView” — Cariló y Pinamar (2021-2022)</li>
            </ul>
          </div>
        </div>
      </section>*/}
       

      {/* COLABORACIONES / MARCAS */}
      <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-12 md:py-16 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full lg:w-3/4 -translate-y-2">
            <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-6">
              Colaboraciones y Participaciones
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A lo largo de mi trayectoria, he colaborado con instituciones, fundaciones y marcas de gran reconocimiento, como la Fundación Avon Argentina, Century 21 y el Hotel Hilton de Puerto Madero.  
              Mi trabajo ha estado presente en exposiciones vinculadas a causas sociales, empresariales y culturales, donde el arte se convierte en un puente de comunicación.
            </p>

            <Link
              href="/projects"
              className="font-titulo inline-flex items-center gap-2 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 transition-all hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
            >
              Ver proyectos completos
              <TbArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="w-full lg:w-1/4 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/image/artes para empresas/empresa5.jpg"
              alt="Taller"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-[250px] sm:h-[280px] md:h-[300px] shadow-md"
            />
          </div>
        </div>
      </section>

      {/* TALLER / PROCESO */}
      <section className="container py-16 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-md h-[400px]">
            <Image
              src="/image/procesos/proceso12.jpeg"
              alt="Taller y proceso"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
          </div>

          <div className="lg:w-1/2 space-y-4 text-gray-700">
            <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-6">
              Taller y Proceso Creativo
            </h2>
            <p>
              En mi taller ubicado en City Bell, trabajo rodeada de materiales diversos, papeles, telas y pigmentos. 
              Mi proceso comienza con la observación del entorno y continúa con la experimentación constante. 
              Cada obra surge del diálogo entre la intuición y la técnica, donde la materia cobra vida propia.
            </p>
            <p>
              A partir del reciclado y la reutilización, transformo objetos y soportes en obras cargadas de energía visual. 
              Las transparencias, superposiciones y relieves son una constante en mi búsqueda estética.
            </p>
          </div>
        </div>
      </section>

      {/* CERÁMICA */}
      <section className="container py-16 border-t border-gray-200 text-base sm:text-base md:text-lg lg:text-lg">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-4 text-gray-700 text-left">
            <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-4">
              Cerámica y Creatividad
            </h2>
            <p>
              Además de la pintura y el arte abstracto, exploro el mundo de la cerámica, creando piezas únicas y llenas de detalle. 
              Mis tazas, platos y cuadros con elementos cerámicos combinan funcionalidad y expresión artística.
            </p>
            <p>
              Cada pieza refleja dedicación, paciencia y amor por el material, convirtiendo la cerámica en un lenguaje propio.
            </p>

            <Link
              href="/ceramic"
              className="font-titulo inline-flex items-center gap-2 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 transition"
            >
              Ver más sobre cerámica
              <TbArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <Image
              src="/image/ceramica/ceramica15.jpeg"
              alt="Proceso de cerámica"
              width={600}
              height={400}
              className="w-full h-[320px] object-cover rounded-lg shadow-md"
            />
            <Image
              src="/image/ceramica/ceramica17.jpeg"
              alt="Producto terminado"
              width={600}
              height={400}
              className="w-full h-[320px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* INVITACIÓN A GALERÍA */}
      <section className="container mx-auto px-20 py-20 border-t border-gray-200 text-center text-base sm:text-base md:text-lg lg:text-lg">
        <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-6">
          Explorá mi universo pictórico
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Cada obra es una invitación a detenerse, observar y dejarse llevar por el color, la materia y la emoción.  
          Entrá a la galería y descubrí las pinturas originales que dieron vida a cada proyecto.
        </p>

        <Link
          href="/gallery"
          className="group relative inline-block rounded-xl overflow-hidden shadow-xl border hover:scale-105 transform transition duration-500"
        >
          <Image
            src="/image/cuadros/cuadro24.jpg"
            alt="Ver galería de obras"
            width={400}
            height={300}
            className="object-cover object-center rounded-xl"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
            <span className="text-white text-lg font-medium tracking-wide">
              Ver galería de obras
            </span>
          </div>
          <div className="absolute inset-0 border-[10px] border-white rounded-xl pointer-events-none" />
        </Link>
      </section>

    </div>
  );
}
