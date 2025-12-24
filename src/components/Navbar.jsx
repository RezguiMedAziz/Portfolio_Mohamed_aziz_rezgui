// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-blue-500/30 shadow-lg shadow-blue-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="group flex items-center space-x-2 focus:outline-none"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent px-4 py-2">
                MAR
              </div>
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none ${
                  activeSection === item.id
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 text-blue-400 hover:text-blue-300 transition-colors p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-semibold transition-all duration-300 hover:text-blue-400 focus:outline-none ${
                activeSection === item.id ? 'text-blue-400 scale-110' : 'text-gray-300'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}