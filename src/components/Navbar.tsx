import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
              A
            </div>
            <span className="font-extrabold text-2xl text-blue-900 tracking-widest uppercase">Aksamitka</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#o-nas" className="text-blue-900 hover:text-orange-500 transition-colors font-bold text-sm uppercase tracking-wider">O nas</a>
            <a href="#studia" className="text-blue-900 hover:text-orange-500 transition-colors font-bold text-sm uppercase tracking-wider">Studia</a>
            <a href="#udogodnienia" className="text-blue-900 hover:text-orange-500 transition-colors font-bold text-sm uppercase tracking-wider">Udogodnienia</a>
            <a href="#galeria" className="text-blue-900 hover:text-orange-500 transition-colors font-bold text-sm uppercase tracking-wider">Galeria</a>
            <a href="#faq" className="text-blue-900 hover:text-orange-500 transition-colors font-bold text-sm uppercase tracking-wider">FAQ</a>
            <a href="#kontakt" className="text-blue-900 hover:text-orange-500 transition-colors font-bold text-sm uppercase tracking-wider">Kontakt</a>
            <a href="#studia" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-extrabold hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-wide text-sm">
              Rezerwuj
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 hover:text-orange-500">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#o-nas" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-blue-900 hover:bg-orange-50 font-extrabold text-lg rounded-xl">O nas</a>
            <a href="#studia" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-blue-900 hover:bg-orange-50 font-extrabold text-lg rounded-xl">Studia</a>
            <a href="#udogodnienia" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-blue-900 hover:bg-orange-50 font-extrabold text-lg rounded-xl">Udogodnienia</a>
            <a href="#galeria" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-blue-900 hover:bg-orange-50 font-extrabold text-lg rounded-xl">Galeria</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-blue-900 hover:bg-orange-50 font-extrabold text-lg rounded-xl">FAQ</a>
            <a href="#kontakt" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-blue-900 hover:bg-orange-50 font-extrabold text-lg rounded-xl">Kontakt</a>
          </div>
        </div>
      )}
    </nav>
  );
}
