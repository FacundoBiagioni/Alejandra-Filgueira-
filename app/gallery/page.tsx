import { GalleryImage } from "@/types";
import Image from "next/image";

export default function Gallery() {
  const images: GalleryImage[] = [
    { src: "/image/ambientaciones/amb1.jpg", alt: "ambientacion" },  
    { src: "/image/ambientaciones/amb2.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb3.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb4.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb5.jpg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb6.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb7.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb8.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb9.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb10.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb11.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb12.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb13.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb15.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb16.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb17.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb18.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb19.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb20.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb21.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb22.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb23.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb24.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb25.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb26.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb27.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb28.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb29.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb30.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb32.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb33.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb34.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb35.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb37.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb38.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb39.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb40.jpeg", alt: "ambientacion" },
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

