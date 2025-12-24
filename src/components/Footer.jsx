// src/components/Footer.jsx
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-blue-500/20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-black" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              <span>&copy; 2025 Mohamed Aziz REZGUI</span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1">
              
              </span>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Tous droits réservés
            </p>
          </div>

          {/* Right Side - Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
            <div className="relative flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 transition-all backdrop-blur-sm">
              <span className="text-sm font-medium">Retour en haut</span>
              <ArrowUp className="text-blue-400 group-hover:-translate-y-1 transition-transform" size={18} />
            </div>
          </button>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-6 border-t border-blue-500/10 text-center">
          <p className="text-gray-600 text-sm">
            Développé Par Mohamed Aziz Rezgui • 2025
          </p>
        </div>
      </div>
    </footer>
  );
}