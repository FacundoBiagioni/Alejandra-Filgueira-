import { GalleryImage } from "@/types";
import Image from "next/image";

export default function Gallery() {
  const images: GalleryImage[] = [
    { src: "/image/badroom.jpg", alt: "Bedroom interior" },
    { src: "/image/gallery2.jpg", alt: "Modern living room" },
    { src: "/image/gallery.jpg", alt: "Minimalist gallery space" },
    { src: "/image/swiper1.jpg", alt: "Contemporary kitchen" },
    { src: "/image/gallery11.jpg", alt: "Stylish dining room" },
    { src: "/image/living.jpg", alt: "Cozy living area" },
    { src: "/image/gallery14.jpg", alt: "Elegant workspace" },
    { src: "/image/gallery15.jpg", alt: "Classic interior design" },
    { src: "/image/gallery12.jpg", alt: "Modern bathroom" },
    { src: "/image/gallery7.jpg", alt: "Industrial style loft" },
    { src: "/image/gallery3.jpg", alt: "Chic bedroom decor" },
  ];

  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[0, 1, 2, 3].map((columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4">
          {images
            .slice(columnIndex * 3, (columnIndex + 1) * 3)
            .map((image, index) => (
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
      ))}
    </div>
  );
}

