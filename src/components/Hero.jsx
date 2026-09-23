import React from 'react';
export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80)' }}>
      <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins leading-tight">Agricultura Orgánica Sostenible</h1>
        <p className="text-xl md:text-2xl mb-8 text-green-100 font-open">Cultivamos salud, alimentamos el futuro con productos 100% naturales</p>
        <a href="#productos" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg font-poppins">Explorar Productos</a>
      </div>
    </section>
  );
}