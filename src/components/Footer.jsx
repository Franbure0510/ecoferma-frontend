import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-poppins text-gold-400">EcoFerma</h3>
            <p className="text-green-300 font-open">Agricultura orgánica sostenible para un futuro más verde.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3 font-poppins text-gold-400">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-green-300 hover:text-white transition-colors font-open">Inicio</a>
              <a href="#productos" className="block text-green-300 hover:text-white transition-colors font-open">Productos</a>
              <a href="#contacto" className="block text-green-300 hover:text-white transition-colors font-open">Contacto</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3 font-poppins text-gold-400">Redes Sociales</h4>
            <div className="space-y-2">
              <a href="#" className="block text-green-300 hover:text-white transition-colors font-open">Facebook</a>
              <a href="#" className="block text-green-300 hover:text-white transition-colors font-open">Instagram</a>
              <a href="#" className="block text-green-300 hover:text-white transition-colors font-open">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-800 pt-8 text-center">
          <p className="text-green-500 font-open">© 2026 EcoFerma. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}