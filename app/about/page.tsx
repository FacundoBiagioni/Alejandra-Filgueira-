"use client";

import InstagramGrid from "@/components/InstagramGrid";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function About() {
  return (
    <div className="bg-white text-gray-800">

        {/* Hero principal */}
        <section
            className="relative w-full h-[75vh] bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('/image/procesos/proceso9.jpeg')",
                backgroundSize: "cover",
                imageRendering: "auto",
            }}
            >
        {/* Capa de oscurecimiento más fuerte */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Logo centrado con animación */}
        <div className="relative z-5 animate-fadeInScale">
            <Image
                src="/logo.png"
                alt="Logo Alejandra Filgueira"
                width={480}
                height={480}
                className="object-contain"
                priority
            />
        </div>
        </section>


{/* BIO */}
<section className="container py-20 border-t border-gray-200">
  <div className="lg:flex items-center gap-12">
    {/* Imagen lateral izquierda */}
    <div className="lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-md h-[500px]">
      <Image
        src="/image/procesos/proceso21.jpeg"
        alt="Retrato de Alejandra Filgueira"
        width={500}
        height={700}
        className="w-full h-full object-cover object-[70%_40%] rounded-lg shadow-md"
      />
      <p className="text-sm text-gray-400 mt-2 text-center">
        Alejandra Filgueira — Artista plástica y diseñadora visual
      </p>
    </div>

    {/* Texto a la derecha */}
    <div className="lg:w-2/3 space-y-6 text-gray-700">
      <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
      <p>
        Nacida en La Plata, Argentina, Alejandra Filgueira es una artista
        plástica especializada en arte abstracto. Se graduó en 1989 como
        Diseñadora en Comunicación Visual en la Facultad de Bellas Artes
        de la Universidad Nacional de La Plata. Realizó estudios
        secundarios en Gießen, Alemania, donde comenzó su vínculo con el
        arte. Desde 1998 continúa su formación en pintura, dibujo y
        grabado junto a reconocidos artistas y docentes universitarios.
      </p>
      <p>
        Su trabajo explora la relación entre color, textura y emoción, en
        un proceso donde la materia se convierte en lenguaje. A través del
        expresionismo abstracto, busca generar diálogo con el espectador,
        invitándolo a interpretar libremente la obra.
      </p>
    </div>
  </div>
</section>


      {/* STATEMENT */}
      <section className="container py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-6">Declaración artística</h2>
        <p className="max-w-4xl leading-relaxed text-gray-700">
          A través del arte, Alejandra transmite historias donde los materiales
          cobran protagonismo. Utiliza pintura asfáltica, acrílicos y metalizados
          que se fusionan generando efectos inesperados. Su obra nace desde la
          emoción y la experimentación, combinando reciclado, restauración y
          técnicas mixtas. Cada cuadro es una experiencia visual que muta con la
          luz y propone una conexión sensorial más allá de la lógica.
        </p>
      </section>

      {/* INSTAGRAM GRID */}
      <div>
      <InstagramGrid/>
      </div>

      {/* FORMACIÓN */}
      <section className="container py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-8">Formación Artística</h2>
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
      </section>

      {/* EXPOSICIONES DESTACADAS */}
      <section className="container py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-8">Exposiciones Destacadas</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <ul className="space-y-3 text-gray-700">
              <li>• “Cicatrices” — MUMART La Plata (2025)</li>
              <li>• “FusiónARTE” — REINVENTARSE City Bell (2025)</li>
              <li>• “Proyectos Gráficos” — Casa Taller La Plata (2024)</li>
              <li>• Salón de los Pasos Perdidos — Facultad de Derecho UBA (2024)</li>
              <li>• ARTTIME — Mercado de los Carruajes, Buenos Aires (2023)</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-gray-700">
              <li>• “Esencia” — Club Alemán de Buenos Aires (2023)</li>
              <li>• “EXTRANJERÍA” — Espacio Cultural Abierto, Madrid (2023)</li>
              <li>• “Artweek Chile” — Stand individual (2021-2022)</li>
              <li>• “Semana del Arte y Diseño” — Distrito Arenales (2021-2024)</li>
              <li>• “ArteView” — Cariló y Pinamar (2021-2022)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COLABORACIONES / MARCAS */}
      <section className="container mx-auto px-20 py-16 border-t border-gray-200">
        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* Bloque completo (título + texto + botón) levemente más arriba */}
          <div className="lg:w-3/4 -translate-y-2">
            <h2 className="text-3xl font-semibold mb-6">
              Colaboraciones y Participaciones
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A lo largo de su trayectoria, Alejandra ha colaborado con instituciones,
              fundaciones y marcas de gran reconocimiento, como la Fundación Avon
              Argentina, Century 21 y el Hotel Hilton de Puerto Madero.  
              Su trabajo ha estado presente en exposiciones vinculadas a causas sociales,
              empresariales y culturales, donde el arte se convierte en un puente de comunicación.
            </p>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Ver proyectos completos
              <TbArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Imagen */}
          <div className="lg:w-1/4 w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/image/artes para empresas/empresa5.jpg"
              alt="Alejandra Filgueira en su taller"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-[300px] shadow-md"
            />
          </div>
        </div>
      </section>

      {/* TALLER / PROCESO */}
      <section className="container py-16 border-t border-gray-200">
        <div className="lg:flex items-center gap-12">
          {/* Imagen a la izquierda */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-md h-[400px]">
            <Image
              src="/image/procesos/proceso12.jpeg"
              alt="Alejandra Filgueira en su taller"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="lg:w-1/2 space-y-4 text-gray-700">
            <h2 className="text-3xl font-semibold mb-6">Taller y Proceso Creativo</h2>
            <p>
              En su taller ubicado en City Bell, Alejandra trabaja rodeada de materiales
              diversos, papeles, telas y pigmentos. Su proceso comienza con la
              observación del entorno y continúa con la experimentación constante.
              Cada obra surge del diálogo entre la intuición y la técnica, donde la
              materia cobra vida propia.
            </p>
            <p>
              A partir del reciclado y la reutilización, transforma objetos y soportes
              en obras cargadas de energía visual. Las transparencias, superposiciones
              y relieves son una constante en su búsqueda estética.
            </p>
          </div>
        </div>
      </section>

{/* CERÁMICA */}
<section className="container py-16 border-t border-gray-200">
  <div className="lg:flex items-center gap-12">
    {/* Texto a la izquierda */}
    <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-4 text-gray-700 text-left">
      <h2 className="text-3xl font-semibold mb-4">Cerámica y Creatividad</h2>
      <p>
        Además de la pintura y el arte abstracto, Alejandra explora el mundo
        de la cerámica, creando piezas únicas y llenas de detalle. Sus tazas,
        platos y cuadros con elementos cerámicos combinan funcionalidad y
        expresión artística, mostrando otra faceta de su creatividad.
      </p>
      <p>
        Cada pieza refleja dedicación, paciencia y amor por el material,
        convirtiendo la cerámica en un lenguaje propio.
      </p>

      {/* Botón coherente con el resto del sitio */}
      <Link
        href="/ceramic"
        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
      >
        Ver más sobre cerámica
        <TbArrowUpRight className="w-5 h-5" />
      </Link>
    </div>

    {/* Imágenes a la derecha (mejor proporción, sin recorte excesivo) */}
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
        alt="Producto de cerámica terminado"
        width={600}
        height={400}
        className="w-full h-[320px] object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

      {/* SECCIÓN INVITACIÓN A GALERÍA (ABOUT) */}
<section className="container mx-auto px-20 py-20 border-t border-gray-200 text-center">
  <h3 className="text-2xl font-semibold mb-6">
    Explorá su universo pictórico
  </h3>
  <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
    Cada obra de Alejandra Silveira es una invitación a detenerse, observar
    y dejarse llevar por el color, la materia y la emoción.  
    Entrá a la galería y descubrí las pinturas originales que dieron vida a cada proyecto.
  </p>

  {/* BOTÓN EN FORMA DE CUADRO */}
  <Link
    href="/gallery"
    className="group relative inline-block rounded-xl overflow-hidden shadow-xl border hover:scale-105 transform transition duration-500"
  >
    {/* Imagen del cuadro */}
    <Image
      src="/image/cuadros/cuadro24.jpg"
      alt="Ver galería de obras"
      width={400}
      height={300}
      className="object-cover object-center rounded-xl"
    />

    {/* Capa de efecto al pasar el mouse */}
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
      <span className="text-white text-lg font-medium tracking-wide">
        Ver galería de obras
      </span>
    </div>

    {/* Marco decorativo (simula un cuadro enmarcado) */}
    <div className="absolute inset-0 border-[10px] border-white rounded-xl pointer-events-none" />
  </Link>
</section>

    </div>
  );
}
