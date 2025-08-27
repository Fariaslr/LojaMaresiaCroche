import { Waves } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/100 backdrop-blur-md shadow-sm border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-full flex items-center justify-center">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Maresia - Moda em Crochê
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-sky-600 transition-colors">Início</a>
            <a href="#catalogo" className="text-gray-700 hover:text-sky-600 transition-colors">Catálogo</a>
            <a href="#sobre" className="text-gray-700 hover:text-sky-600 transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-sky-600 transition-colors">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
