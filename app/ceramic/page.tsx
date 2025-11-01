import { GalleryImage } from "@/types";
import Image from "next/image";

export default function Ceramic() {
  const images: GalleryImage[] = [
  { src: "/image/ceramica/ceramica1.jpg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica2.jpg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica3.jpg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica4.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica5.jpg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica6.jpg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica7.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica8.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica9.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica10.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica11.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica12.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica13.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica14.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica15.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica16.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica17.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica18.jpeg", alt: "ceramica" },
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
  { src: "/image/ceramica/ceramica34.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica35.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica36.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica37.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica38.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica39.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica40.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica41.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica42.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica43.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica44.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica45.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica46.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica47.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica48.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica49.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica50.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica51.jpeg", alt: "ceramica" },
  { src: "/image/ceramica/ceramica52.jpeg", alt: "ceramica" },

  ];
  
  return (
    <div className="container py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );

}