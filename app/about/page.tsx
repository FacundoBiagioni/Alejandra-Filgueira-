"use client";

import Image from "next/image";

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
                width={480} // ← Tamaño aumentado del logo
                height={480}
                className="object-contain" // Más sombra y leve oscuridad al logo
                priority
            />
        </div>
        </section>


        {/* BIO */}
        <section className="container py-20 space-y-10">
          <div className="lg:flex items-start gap-12">
            {/* Imagen lateral */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-md h-[500px]">
          <Image
            src="/image/procesos/proceso21.jpeg"
            alt="Retrato de Alejandra Filgueira"
            width={500}
            height={700}
            className="w-full h-full object-cover object-[70%_40%]"
          />
          <p className="text-sm text-gray-400 mt-2 text-center">
            Alejandra Filgueira — Artista plástica y diseñadora visual
          </p>
        </div>


          {/* Texto BIO */}
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-3xl font-semibold">Sobre mí</h2>
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

      {/* FORMACIÓN */}
      <section className="container py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-8">Formación Artística</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <ul className="space-y-3">
            <li>• Lic. Mora Sofía Garese — Dibujo, pintura y grabado (2011)</li>
            <li>• Prof. Kitty Di Bartolo — Técnicas pictóricas (2016–2017)</li>
            <li>• Lic. Martín La Spina — Óleo y dibujo tradicional (2009–2014)</li>
            <li>• Lic. Laura Bereciartua — Pintura sobre soportes alternativos (2015)</li>
            <li>• Lic. Fernanda Piamonti — Figura humana, modelo vivo (2019–2021)</li>
          </ul>
          <ul className="space-y-3">
            <li>• Croquis arquitectónico — Edificios fundacionales de La Plata (2022–2025)</li>
            <li>• Seminario de posgrado — Diana Aisemberg (2023)</li>
            <li>• Clínicas de arte — Luis Altieri y Nieves Legaspi (2021–2025)</li>
            <li>• Cursos de cerámica — Aragón, Sunseri y Arnau (2021–2025)</li>
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
    <section className="container py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-8">Colaboraciones y Participaciones</h2>
            <p className="max-w-4xl mb-8 text-gray-700">
                A lo largo de su trayectoria, Alejandra ha colaborado con instituciones,
                fundaciones y marcas de gran reconocimiento, como la Fundación Avon
                Argentina, Century 21 y el Hotel Hilton de Puerto Madero. Su trabajo
                ha estado presente en exposiciones vinculadas a causas sociales,
                empresariales y culturales, donde el arte se convierte en un puente de comunicación.
            </p>

    {/* Contenedor con dos imágenes juntas */}
    <div className="w-full h-[400px] flex gap-2 rounded-lg overflow-hidden">
        <div className="relative w-1/2 h-full">
            <Image
                src="/image/artes para empresas/empresa2.jpg"
                alt="Exposición con Century 21 - parte 1"
                fill
                className="object-cover"
            />
        </div>
        <div className="relative w-1/2 h-full">
            <Image
                src="/image/artes para empresas/empresa25.jpeg" // segunda imagen
                alt="Exposición con Century 21 - parte 2"
                fill
                className="object-cover"
            />
        </div>
    </div>
    </section>


      {/* TALLER / PROCESO */}
      <section className="container py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-6">Taller y Proceso Creativo</h2>
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 space-y-4 text-gray-700">
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
          <div className="lg:w-1/3 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-md h-[400px]">
            <Image
              src="/image/procesos/proceso12.jpeg"
              alt="Alejandra Filgueira en su taller"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
