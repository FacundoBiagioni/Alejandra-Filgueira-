import ContactSection from "./ContactSection";

export default function Footer() {
  return (
    <div>
      {/* Contact Section */}
      <ContactSection />

      {/* Línea divisoria entre ContactSection y Footer */}
      <div className="w-full flex justify-center bg-zinc-100">
        <div className="w-11/12 border-t border-gray-300 opacity-70" /> 
      </div>

      {/* Footer principal */}
      <div className="bg-zinc-100">
        <div className="py-10 bg-zinc-100">
          <div className="container text-center text-gray-500">
            <div className="pb-4 lg:pb-0">
              <p>&copy;2025 Alejandra Filgueira — Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
