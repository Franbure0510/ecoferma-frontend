import React from 'react';
export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-poppins">Contáctanos</h2>
          <p className="text-green-200 text-lg font-open">Estamos listos para ayudarte con tus necesidades agrícolas</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-green-900 rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 font-poppins">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center text-green-200">
                <span className="text-2xl mr-3">📍</span>
                <span className="font-open">Finca La Esperanza, Carretera Nacional Km 45</span>
              </div>
              <div className="flex items-center text-green-200">
                <span className="text-2xl mr-3">📞</span>
                <span className="font-open">+502 5512 3456</span>
              </div>
              <div className="flex items-center text-green-200">
                <span className="text-2xl mr-3">✉️</span>
                <span className="font-open">info@ecoferma.com</span>
              </div>
              <div className="flex items-center text-green-200">
                <span className="text-2xl mr-3">🕐</span>
                <span className="font-open">Lunes a Sábado: 8:00 - 18:00</span>
              </div>
            </div>
          </div>
          <form className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-green-800 mb-6 font-poppins">Envíanos un Mensaje</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent font-open text-gray-800" />
              <input type="email" placeholder="Tu correo" className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent font-open text-gray-800" />
              <textarea rows="4" placeholder="Tu mensaje" className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent font-open text-gray-800"></textarea>
              <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg font-poppins text-lg">Enviar Mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}