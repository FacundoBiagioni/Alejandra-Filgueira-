"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function ContactMe() {
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

    emailjs.sendForm(
      "service_pq8ulon",
      "template_01gl9xr",
      form.current,
      "GjnF9bTNIPTVaAGGF"
    ).then(
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
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 py-16 bg-white gap-12 lg:gap-20 max-w-[1200px] mx-auto">
      
      {/* Formulario */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full lg:w-1/2 max-w-lg bg-white rounded-2xl shadow-md p-8 flex flex-col gap-5 border border-gray-100 mx-auto"
      >
        <h2 className="font-titulo text-3xl font-semibold mb-2 text-gray-800 text-center">Contáctame</h2>
        <p className="text-gray-500 mb-5 text-center">
          Si querés hacer una consulta o solicitar un trabajo, completá el formulario y te responderemos lo antes posible.
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input type="text" name="user_name" required className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
          <input type="email" name="user_email" required className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
          <input type="text" name="subject" required className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
          <textarea name="message" required rows={5} className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"/>
        </div>

        <button type="submit" disabled={isLoading} className="font-titulo w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50">
          {isLoading ? "Enviando..." : "Enviar mensaje"}
        </button>

        {sent && (
          <p className="text-green-600 text-center font-medium mt-3 transition-opacity duration-[4000ms] opacity-100">
            ✅ ¡Mensaje enviado correctamente!
          </p>
        )}
      </form>

      {/* Tarjeta de contacto */}
      <div className="w-full lg:w-1/3 max-w-sm bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-start gap-6 border border-gray-100 mx-auto">
        {/* Logo o imagen decorativa */}
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="font-titulo text-xl text-gray-700">A</span>
        </div>

        <h3 className="font-titulo text-2xl font-semibold text-gray-800">Información de contacto</h3>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-gray-500"/>
            <span>+54 9 11 1234 5678</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-gray-500"/>
            <span>alejandrafilgueira@email.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaInstagram className="text-gray-500"/>
            <a href="https://instagram.com/alejandra" target="_blank" className="hover:underline">Instagram</a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaLinkedin className="text-gray-500"/>
            <a href="https://linkedin.com/in/alejandra" target="_blank" className="hover:underline">LinkedIn</a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaExternalLinkAlt className="text-gray-500"/>
            <a href="https://artshale.com.ar/" target="_blank" className="hover:underline">artshale.com.ar</a>
          </div>
        </div>
      </div>

    </section>
  );
}
