import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonUp";

export const metadata: Metadata = {
  title: "Alejandra Filgueira | Abstract Art",
  description: "Portfolio de Alejandra Filgueira, artista de arte abstracto.",
  icons: {
    icon: "/LogoUrlcuadro7.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        {/* 🔧 Esto es clave para que el responsive funcione bien en celulares */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-texto relative">
        <Header />
        {children}
        <Footer />
        <ButtonUp />
      </body>
    </html>
  );
}
