import Image from "next/image";
import Link from "next/link";
import CarruselExpos from "@/components/CarruselExpos";
import { Project } from "@/types";
import HeroSection from "@/components/HeroSection";

export default function Empresas() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Proyecto demo 1",
      description: "Descripción corta del proyecto relacionado a empresa X.",
      image: "/image/holders/company-placeholder-1.jpg",
      link: "",
    },
    {
      id: 2,
      name: "Proyecto demo 2",
      description: "Descripción corta del proyecto relacionado a empresa Y.",
      image: "/image/holders/company-placeholder-2.jpg",
      link: "",
    },
    {
      id: 3,
      name: "Proyecto demo 3",
      description: "Descripción corta del proyecto relacionado a empresa Z.",
      image: "/image/holders/company-placeholder-3.jpg",
      link: "",
    },
    {
      id: 4,
      name: "Proyecto demo 4",
      description: "Descripción corta del proyecto relacionado a empresa W.",
      image: "/image/holders/company-placeholder-4.jpg",
      link: "",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <div>
        <HeroSection />
      </div>

      {/* INTRO / CTA */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Por qué trabajar con Alejandra</h2>
            <p className="mt-3 text-gray-700">
              Alejandra combina técnicas mixtas, texturas y materiales reciclados
              para crear piezas que conectan con el público y agregan valor de marca.
              Su experiencia incluye exhibiciones en espacios institucionales,
              ferias internacionales y proyectos para empresas privadas.
            </p>
          </div>

          <div className="flex items-center">
            <Link
              href="/contact"
              className="ml-auto inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm text-white shadow hover:opacity-95"
            >
              Contactar para proyecto
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN DEDICADA: CENTURY21 (Ejemplo destacado) */}
      <section className="container mx-auto px-6 py-12 border-t">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Colaboración destacada — Century21</h3>
            <p className="mt-3 text-gray-700">
              Proyecto realizado para Century21: intervenciones y piezas especialmente
              diseñadas para espacios comerciales y vitrinas. Esta colaboración representa
              la capacidad de Alejandra para adaptar su lenguaje abstracto a objetivos
              de marca y comunicación comercial.
            </p>

            <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Diseño y producción de material artístico para campañas.</li>
              <li>Intervenciones para oficinas y puntos de venta.</li>
              <li>Proyectos con tiempos de entrega y coordinación con equipos de marketing.</li>
            </ul>

            <p className="mt-4 text-xs text-gray-500">
              * Aquí podés agregar testimonios o un PDF con el case study (si lo tenés).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Dos placeholders juntos (casi pegados) — reemplazá por fotos reales */}
            <div className="relative h-40 w-full overflow-hidden rounded">
              <Image
                src="/image/holders/century21-1.jpg"
                alt="Century21 - placeholder 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full overflow-hidden rounded">
              <Image
                src="/image/holders/century21-2.jpg"
                alt="Century21 - placeholder 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GRID PROYECTOS / PORTFOLIO EMPRESAS */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6">Trabajos para empresas</h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-lg border bg-white shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h4 className="text-lg font-medium">{p.name}</h4>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4">
                  <Link
                    href={p.link || "#"}
                    className="text-sm font-medium text-black underline"
                  >
                    Ver proyecto
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CARRUSEL EXPOSICIONES (colaboraciones / muestras) */}
      <section className="container mx-auto px-6 py-12 border-t">
        <h3 className="text-2xl font-semibold mb-6">Exposiciones & muestras</h3>
        <CarruselExpos />
      </section>
    </main>
  );
}
