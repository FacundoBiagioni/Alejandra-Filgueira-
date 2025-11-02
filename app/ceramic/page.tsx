import { GalleryImage } from "@/types";
import Image from "next/image";

export default function Ceramic() {
  const images: GalleryImage[] = [
    { src: "/image/ceramica/ceramica1.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica2.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica3.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica5.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica6.jpg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica34.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica38.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica40.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica11.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica19.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica20.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica21.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica22.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica23.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica24.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica25.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica26.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica27.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica28.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica29.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica30.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica31.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica32.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica33.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica41.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica42.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica7.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica8.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica43.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica44.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica45.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica46.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica47.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica48.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica49.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica50.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica51.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica9.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica52.jpeg", alt: "ceramica" },
    { src: "/image/ceramica/ceramica12.jpeg", alt: "ceramica" },
  ];

  return (
    <div className="container py-16">
      {/* HEADER */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-2">Colección de Cerámica</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Una selección artesanal de piezas únicas en cerámica.  
          Cada forma, textura y color cuenta una historia.
        </p>
      </header>

      {/* GALERÍA */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4.3/5] overflow-hidden rounded-xl bg-white p-1 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
