"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  // Usamos useRef para acceder al formulario directamente
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false); // 🔹 Oculta el mensaje después de 10 segundos
      }, 5000);

      return () => clearTimeout(timer); // 🔹 Limpia el temporizador si se desmonta
    }
  }, [sent]);

  // Función para enviar el mail
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.current) return;


    // 🔹 Eliminar cualquier input "time" existente antes de crear uno nuevo
    const existingTimeInput = form.current.querySelector('input[name="time"]');
    if (existingTimeInput) {
      existingTimeInput.remove();
    }

    // 🔹 Generar la fecha y hora actual
    const now = new Date();
    const time = now.toLocaleString("es-AR", {
      dateStyle: "short",
      timeStyle: "short",
    });

    // 🔹 Crear y agregar el campo oculto con la hora actual
    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = time;
    form.current.appendChild(timeInput);

    emailjs
      .sendForm(
        "service_pq8ulon", // 🔹 Reemplazá con tu Service ID
        "template_01gl9xr", // 🔹 Reemplazá con tu Template ID
        form.current,
        "GjnF9bTNIPTVaAGGF" // 🔹 Reemplazá con tu Public Key
      )
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
    <section className="flex flex-col items-center justify-center px-4 py-16 bg-white">
      <h2 className="text-3xl font-semibold mb-2 text-gray-800">Contáctame</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Si querés hacer una consulta o solicitar un trabajo, completá el
        siguiente formulario. Te responderemos lo antes posible.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8 flex flex-col gap-5 border border-gray-100"
      >
        {/* Campo de nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Campo de email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Campo de asunto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Asunto
          </label>
          <input
            type="text"
            name="subject"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Campo de mensaje */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
        >
          {isLoading ? "Enviando..." : "Enviar mensaje"}
        </button>

        {sent && (
          <p
            className={`text-green-600 text-center font-medium mt-3 transition-opacity duration-[4000ms] ${
              sent ? "opacity-100" : "opacity-0"
          }`}
          >
            ✅ ¡Mensaje enviado correctamente!
          </p>
        )}
      </form>
    </section>
  );
}
