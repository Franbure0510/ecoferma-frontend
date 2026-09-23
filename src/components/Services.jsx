import React from 'react';
export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-poppins">Nuestros Servicios</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-open">Ofrecemos una gama completa de soluciones para tu finca orgánica</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '🍅', title: 'Cosecha Fresca', desc: 'Productos de temporada cosechados en su punto óptimo de maduración' },
            { icon: '📦', title: 'Envío a Domicilio', desc: 'Llevamos nuestros productos frescos directamente a tu puerta' },
            { icon: '🌿', title: 'Asesoría Agrícola', desc: 'Consultoría experta para mejorar la producción de tu finca' },
            { icon: '🏪', title: 'Venta al Mayoreo', desc: 'Precios especiales para negocios y restaurantes que buscan calidad' }
          ].map((servicio, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100 text-center">
              <div className="text-5xl mb-4">{servicio.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-3 font-poppins">{servicio.title}</h3>
              <p className="text-gray-600 font-open">{servicio.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}