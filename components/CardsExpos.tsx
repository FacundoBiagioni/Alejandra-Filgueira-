"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MousePointerClick } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CardsExpos() {
  const t = useTranslations("CardsExpos"); // ✅ Namespace

  const [isTouch, setIsTouch] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(hasTouch);
  }, []);

  const items = [
    {
      id: "01",
      title: t("item1.title"),
      image: "/image/exposiciones/expo30.jpeg",
      description: t("item1.description"),
    },
    {
      id: "02",
      title: t("item2.title"),
      image: "/image/exposiciones/expo27.jpeg",
      description: t("item2.description"),
    },
    {
      id: "03",
      title: t("item3.title"),
      image: "/image/exposiciones/expo33(recortada).jpg",
      description: t("item3.description"),
    },
    {
      id: "04",
      title: t("item4.title"),
      image: "/image/exposiciones/expo1.jpeg",
      description: t("item4.description"),
    },
  ];

  const handleCardClick = (id: string) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative flex flex-col items-end">
      <div className="mb-2 sm:mb-4 mr-2 sm:mr-4 hover:opacity-80 transition-opacity">
        <MousePointerClick
          size={22}
          className="text-gray-600"
          style={{ transform: "rotate(260deg)" }}
        />
      </div>

      <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4 w-full">
        {items.map((item) => {
          const isActive = activeCard === item.id;

          return (
            <div
              key={item.id}
              className="relative overflow-hidden group rounded-lg shadow-md cursor-pointer"
              onClick={() => isTouch && handleCardClick(item.id)}
            >
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gray-100 flex items-center justify-center">
                <Image
                  src={item.image}
                  width={380}
                  height={450}
                  alt={item.title}
                  className="object-fill w-full h-full"
                />
                <div
                  className={`absolute inset-0 bg-gray-500 bg-opacity-80 transition-opacity duration-500 
                    ${isTouch ? (isActive ? "opacity-0" : "opacity-80") : "group-hover:opacity-0"}
                  `}
                ></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`text-center bg-white bg-opacity-80 backdrop-blur rounded-lg p-6 sm:p-8 max-w-[85%] transform transition-transform duration-500 
                    ${
                      isTouch
                        ? isActive
                          ? "translate-y-96"
                          : "translate-y-0"
                        : "group-hover:translate-y-96"
                    }
                  `}
                >
                  <p className="text-base sm:text-lg font-semibold mt-1">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
