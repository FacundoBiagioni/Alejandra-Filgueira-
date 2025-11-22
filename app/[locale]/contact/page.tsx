"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactMeMinimalEnhanced() {
  const t = useTranslations("Contact"); // Namespace Contact
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!form.current) return;

    const existingTimeInput = form.current.querySelector('input[name="time"]');
    if (existingTimeInput) existingTimeInput.remove();

    const now = new Date();
    const time = now.toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" });
    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = time;
    form.current.appendChild(timeInput);

    emailjs
      .sendForm("service_pq8ulon", "template_01gl9xr", form.current, "GjnF9bTNIPTVaAGGF")
      .then(
        () => {
          setSent(true);
          setIsLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error("Error al enviar:", error);
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 py-16 bg-white gap-12 lg:gap-20 max-w-[1200px] mx-auto relative">

      {/* Tarjeta de contacto */}
      <div className="w-full lg:w-1/3 max-w-sm bg-gray-100 rounded-xl shadow-md shadow-gray-300 p-6 flex flex-col items-center lg:items-start gap-6 border border-gray-200 mx-auto">
        
        {/* Foto */}
        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
          <Image
            src="/image/procesos/profile.jpg"
            alt={t("profileAlt")}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>

        <h3 className="font-titulo text-2xl font-semibold text-gray-800 text-center lg:text-left">
          {t("contactInfo")}
        </h3>

        <div className="flex flex-col gap-3 text-gray-700 text-base sm:text-sm md:text-base lg:text-base w-full">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-gray-500" />
            <span>alefilgueira@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-gray-500" />
            <span>+54 9 221 524 4292</span>
          </div>
          <div className="flex items-center gap-3">
            <FaInstagram className="text-gray-500" />
            <a href="https://www.instagram.com/alejandrafilgueira/" target="_blank" className="hover:underline">
              Instagram
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-gray-500" />
            <a href="https://www.linkedin.com/in/alejandra-filgueira-2a53512b/" target="_blank" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full lg:w-1/2 max-w-lg bg-gray-100 rounded-xl shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 transition-shadow duration-300 p-6 flex flex-col gap-5 border border-gray-200 mx-auto"
      >
        <h2 className="font-titulo text-2xl sm:text-3xl font-semibold mb-2 text-gray-800 text-center">
          {t("contactMe")}
        </h2>

        <p className="text-gray-500 mb-5 text-center text-base sm:text-sm md:text-base lg:text-base leading-relaxed">
          {t("contactDescription")}
        </p>

        <div>
          <label className="block text-sm sm:text-xs font-medium text-gray-700 mb-1">
            {t("name")}
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-800 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm sm:text-xs font-medium text-gray-700 mb-1">
            {t("email")}
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-800 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm sm:text-xs font-medium text-gray-700 mb-1">
            {t("subject")}
          </label>
          <input
            type="text"
            name="subject"
            required
            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-800 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm sm:text-xs font-medium text-gray-700 mb-1">
            {t("message")}
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-800 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="font-titulo w-full inline-flex items-center justify-center gap-1 px-6 py-3 text-sm sm:text-sm md:text-base lg:text-base text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 transition disabled:opacity-50"
        >
          {isLoading ? t("sending") : t("sendMessage")}
        </button>

        {sent && (
          <p className="text-green-600 text-center text-base sm:text-sm md:text-base lg:text-base font-medium mt-3">
            {t("success")}
          </p>
        )}
      </form>
    </section>
  );
}
