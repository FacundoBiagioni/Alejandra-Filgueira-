import { GalleryImage } from "@/types";
import Image from "next/image";

export default function Ambient() {
  const images: GalleryImage[] = [
    { src: "/image/ambientaciones/amb2.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb1.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb3.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb63.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb26.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb27.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb28.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb29.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb30.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb32.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb33.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb35.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb37.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb38.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb39.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb10.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb6.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb5.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb7.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb4.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb21.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb22.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb23.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb24.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb8.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb9.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb12.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb13.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb15.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb16.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb18.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb20.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb40.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb41.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb43.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb46.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb47.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb48.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb50.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb54.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb55.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb56.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb58.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb59.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb60.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb62.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb64.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb65.jpeg", alt: "ambientacion" },
  ];

  return (
    <section className="container py-16">
      {/* ENCABEZADO */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-4xl font-semibold mb-2 text-gray-900">
          Ambientaciones
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          Inspiraciones para espacios donde el arte y la decoración se integran.  
          Cada ambiente refleja una atmósfera única creada a partir de las obras.
        </p>
      </header>

      {/* GALERÍA */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4.3/5] overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md p-1 transition-all duration-300 hover:scale-[1.03]"
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
