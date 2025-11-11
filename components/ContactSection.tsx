"use client";
import { CommonProps } from "@/types";
import Link from "next/link";

export default function ContactSection({ className }: CommonProps) {
  return (
    <section className={`bg-zinc-100 py-12 px-6 sm:px-10 lg:px-20 ${className || ""}`}>
      <div className="container mx-auto flex flex-col items-center justify-center gap-6">
        
        {/* 🔹 Título sutil */}
        <p className="text-gray-600 text-base sm:text-lg">Conectemos</p>

        {/* 🔹 Íconos de redes sociales */}
        <ul className="flex justify-center items-center gap-5 sm:gap-6 flex-wrap">
          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/alejandrafilgueira/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-md cursor-pointer transition-transform hover:scale-110 group"
            >
              <span className="absolute left-1/2 -translate-x-1/2 -top-10 text-white bg-black text-xs sm:text-sm py-1 px-2 rounded opacity-0 pointer-events-none transition-all group-hover:opacity-100">
                Instagram
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 text-gray-800"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm4.75-.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z" />
              </svg>
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/alejandra-filgueira-2a53512b/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-md cursor-pointer transition-transform hover:scale-110 group"
            >
              <span className="absolute left-1/2 -translate-x-1/2 -top-10 text-white bg-black text-xs sm:text-sm py-1 px-2 rounded opacity-0 pointer-events-none transition-all group-hover:opacity-100">
                LinkedIn
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-5 text-gray-800"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
          </li>

          {/* Facebook */}
          <li>
            <a
              href="https://www.facebook.com/alejandra.filgueira.39?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-md cursor-pointer transition-transform hover:scale-110 group"
            >
              <span className="absolute left-1/2 -translate-x-1/2 -top-10 text-white bg-black text-xs sm:text-sm py-1 px-2 rounded opacity-0 pointer-events-none transition-all group-hover:opacity-100">
                Facebook
              </span>
              <svg
                viewBox="0 0 320 512"
                height="1.2em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
          </li>

          {/* ✉️ Mail (nuevo) */}
          <li>
            <Link
              href="/contact"
              className="relative bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-md cursor-pointer transition-transform hover:scale-110 group"
            >
              <span className="absolute left-1/2 -translate-x-1/2 -top-10 text-white bg-black text-xs sm:text-sm py-1 px-2 rounded opacity-0 pointer-events-none transition-all group-hover:opacity-100">
                Mail
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-7 h-7 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5l9 6 9-6M4.5 6h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
