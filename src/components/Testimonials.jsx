import React from 'react';
export default function Testimonials() {
  const testimonials = [
    { name: 'María López', text: 'Los productos de EcoFerma son los mejores que he probado. ¡Siempre frescos!', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
    { name: 'Carlos Ruiz', text: 'La calidad de sus productos orgánicos ha transformado la cocina de mi restaurante.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
    { name: 'Ana García', text: 'Confiamos en EcoFerma para abastecer nuestro mercado local desde hace años.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80' }
  ];
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-poppins">Testimonios</h2>
          <p className="text-gray-600 text-lg font-open">Lo que dicen nuestros clientes sobre nosotros</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-green-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-gold-400">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover shadow-md" />
              <p className="text-gray-700 mb-4 font-open italic">&ldquo;{t.text}&rdquo;</p>
              <h4 className="font-bold text-green-800 font-poppins">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}