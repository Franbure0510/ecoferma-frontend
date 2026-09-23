import React from 'react';
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-800 font-poppins">EcoFerma</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Inicio</a>
            <a href="#nosotros" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Nosotros</a>
            <a href="#servicios" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Servicios</a>
            <a href="#productos" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Productos</a>
            <a href="#galeria" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Galería</a>
            <a href="#contacto" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Contacto</a>
          </div>
          <div className="md:hidden">
            <button className="text-green-800 text-2xl">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}