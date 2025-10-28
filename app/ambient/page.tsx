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
    // { src: "/image/ambientaciones/amb34.jpeg", alt: "ambientacion" },
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
    // { src: "/image/ambientaciones/amb17.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb18.jpeg", alt: "ambientacion" },
    // { src: "/image/ambientaciones/amb19.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb20.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb40.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb41.jpeg", alt: "ambientacion" },
    // { src: "/image/ambientaciones/amb42.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb43.jpeg", alt: "ambientacion" },
    // { src: "/image/ambientaciones/amb44.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb46.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb47.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb48.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb50.jpeg", alt: "ambientacion" },
    // { src: "/image/ambientaciones/amb52.jpeg", alt: "ambientacion" },
    // { src: "/image/ambientaciones/amb53.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb54.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb55.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb56.jpeg", alt: "ambientacion" },
    // { src: "/image/ambientaciones/amb57.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb58.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb59.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb60.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb62.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb64.jpeg", alt: "ambientacion" },
    { src: "/image/ambientaciones/amb65.jpeg", alt: "ambientacion" },
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

//algunas fotos no funcionan, por ende algunas filas faltan en la numeracion 11, 14, 17, 19, 25, 31, 34, 36, 42, 44, 51, 52, 57
//las imagenes comentadas son en las que aparece alejandra junto con los ambientes