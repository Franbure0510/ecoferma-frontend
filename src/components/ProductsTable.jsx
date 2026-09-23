import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
export default function ProductsTable({ productos: propProductos }) {
  const [data, setData] = useState(propProductos);
  useEffect(() => {
    if (!data || data.length === 0) {
      axios.get(API_URL + '/productos').then(res => {
        setData(res.data.data);
      }).catch(() => {});
    }
  }, []);
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-poppins">Nuestros Productos</h2>
          <p className="text-gray-600 text-lg font-open">Descubre nuestra selección de productos orgánicos frescos</p>
        </div>
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full bg-white border border-green-200">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-bold font-poppins">ID</th>
                <th className="py-4 px-6 text-left font-bold font-poppins">Producto</th>
                <th className="py-4 px-6 text-left font-bold font-poppins">Categoría</th>
                <th className="py-4 px-6 text-left font-bold font-poppins">Precio</th>
                <th className="py-4 px-6 text-left font-bold font-poppins">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-100">
              {data.map((producto) => (
                <tr key={producto.id} className="hover:bg-green-50 transition-colors duration-200">
                  <td className="py-3 px-6 font-bold text-green-800">{producto.id}</td>
                  <td className="py-3 px-6">
                    <div className="flex items-center">
                      <img src={producto.imagen_url} alt={producto.nombre} className="w-12 h-12 rounded-lg object-cover mr-3 shadow-md" />
                      <span className="font-medium text-gray-800">{producto.nombre}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-gray-600">{producto.categoria_nombre}</td>
                  <td className="py-3 px-6 font-bold text-green-700">${producto.precio.toFixed(2)}</td>
                  <td className="py-3 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${producto.stock > 100 ? 'bg-green-100 text-green-800' : producto.stock > 50 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {producto.stock}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}