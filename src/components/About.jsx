import React from 'react';
export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-poppins">Sobre Nosotros</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-open">Somos una empresa agrícola comprometida con la producción orgánica y el cuidado del medio ambiente desde el año 2015</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-green-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-600">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-green-800 mb-3 font-poppins">Agricultura Sostenible</h3>
            <p className="text-gray-600 font-open">Practicamos agricultura regenerativa que mejora la salud del suelo y preserva los ecosistemas naturales para las futuras generaciones.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-gold-500">
            <div className="text-4xl mb-4">🐝</div>
            <h3 className="text-xl font-bold text-green-800 mb-3 font-poppins">Productos Puros</h3>
            <p className="text-gray-600 font-open">Cada producto nuestro es cultivado sin químicos sintéticos, garantizando calidad y sabor auténtico en cada cosecha.</p>
          </div>
          <div className="bg-green-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-700">
            <div className="text-4xl mb-4">🏡</div>
            <h3 className="text-xl font-bold text-green-800 mb-3 font-poppins">Fincas Familiares</h3>
            <p className="text-gray-600 font-open">Nuestras fincas familiares operan con pasión y dedicación, manteniendo viva la tradición agrícola de generaciones.</p>
          </div>
        </div>
        <div className="mt-16 bg-green-800 rounded-xl p-10 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4 font-poppins">Nuestra Misión</h3>
          <p className="text-lg text-green-100 max-w-3xl mx-auto font-open">Llevar productos orgánicos de la más alta calidad a cada mesa, promoviendo un estilo de vida saludable y respetuoso con el planeta.</p>
        </div>
      </div>
    </section>
  );
}