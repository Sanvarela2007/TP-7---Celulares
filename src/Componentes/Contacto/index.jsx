// src/pages/Contacto.jsx
import React from "react";

const Contacto = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <p className="mb-6">¿Tenés alguna duda sobre nuestros celulares? Escribinos:</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="tucorreo@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mensaje</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
            placeholder="Escribí tu mensaje"
          ></textarea>
        </div>
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
