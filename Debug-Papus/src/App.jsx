import { useState } from 'react'
import "./App.css";

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function App() {

  return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navbar */}
        <nav className="bg-[#4E0E1F] text-white p-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Tipos de violencia</a>
            <a href="#" className="hover:underline">ChatBot</a>
            <a href="#" className="hover:underline">Sobre nosotros</a>
          </div>
          <div className="flex space-x-3">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
        </nav>
  
        {/* Main Content */}
        <div className="flex flex-col md:flex-row p-8 bg-white shadow-lg m-6 rounded-lg">
          <div className="md:w-2/3">
            <img src="/fgr-logo.png" alt="FGR Logo" className="w-32 mb-4" />
            <h1 className="text-3xl font-bold text-blue-900">Chatbot de Denuncias de Violencia Política de Género</h1>
            <h2 className="text-lg font-bold mt-2 text-black">Tu voz importa. Denuncia de forma segura y anónima</h2>
            <p className="mt-4 text-gray-700">
              Nuestra misión es brindar un canal confidencial y seguro para que cualquier persona pueda denunciar situaciones
              de violencia política de género de manera anónima. Creemos en una sociedad equitativa y libre de violencia, y
              trabajamos para conectar cada denuncia con las autoridades y organizaciones correspondientes, garantizando
              justicia, protección y apoyo a quienes enfrentan obstáculos en su participación política por razones de género.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center items-center">
            <div className="bg-red-600 p-8 rounded-full shadow-lg">
              <img src="/megafono.png" alt="Denuncia" className="w-24" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;