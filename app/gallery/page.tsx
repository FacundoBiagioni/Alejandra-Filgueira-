import { GalleryImage } from "@/types";
import Image from "next/image";

export default function Gallery() {
  const images: GalleryImage[] = [
    { src: "/image/cuadros/cuadro3.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro4.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro5.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro6.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro7.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro9.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro10.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro11.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro12.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro13.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro15.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro16.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro17.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro18.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro19.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro20.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro21.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro22.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro23.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro24.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro25.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro26.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro27.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro28.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro29.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro30.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro32.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro33.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro34.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro35.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro37.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro38.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro39.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro40.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro8.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro2.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro1.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro41.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro42.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro43.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro44.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro45.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro46.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro47.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro48.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro49.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro50.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro51.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro52.jpg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro53.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro54.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro55.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro56.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro57.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro58.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro59.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro60.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro61.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro62.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro63.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro64.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro65.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro66.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro67.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro68.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro69.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro70.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro71.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro72.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro73.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro74.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro75.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro76.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro77.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro78.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro79.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro80.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro81.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro82.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro83.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro84.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro85.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro86.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro88.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro89.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro90.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro91.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro92.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro93.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro94.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro95.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro96.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro97.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro98.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro99.jpeg", alt: "cuadro" },
    { src: "/image/cuadros/cuadro100.webp", alt: "cuadro" },
  ];

  return (
    <section className="container py-16">
      {/* ENCABEZADO */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-4xl font-semibold mb-2 text-gray-900">
          Galería de Obras
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          Un recorrido visual a través de mis etapas creativas.  
          Cada obra es una fusión entre color, textura y emoción.
        </p>
      </header>

      {/* GALERÍA */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-[1/1] overflow-hidden rounded-xl bg-white p-1 transition-all duration-300 hover:scale-[1.03]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
