// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({ activeSection, setActiveSection }) {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set document direction for RTL languages
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'nav.home' },
    { id: 'about', label: 'nav.about' },
    { id: 'experience', label: 'nav.experience' },
    { id: 'projects', label: 'nav.projects' },
    { id: 'contact', label: 'nav.contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-blue-500/30 shadow-lg shadow-blue-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="group flex items-center space-x-2 relative z-[60]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent px-3 md:px-4 py-2">
                  MAR
                </div>
              </div>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    item={item}
                    isActive={activeSection === item.id}
                    onClick={() => scrollToSection(item.id)}
                  />
                ))}
              </div>
              
              {/* Theme Toggle & Language Switcher */}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="md:hidden flex items-center gap-2 relative z-[60]">
              <ThemeToggle />
              <LanguageSwitcher />
              <button
                className="text-blue-500 hover:text-blue-400 transition-colors p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/98 dark:bg-black/98 backdrop-blur-2xl transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          {navItems.map((item, index) => (
            <MobileNavItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
              delay={index * 50}
              isMenuOpen={isMenuOpen}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// Helper component to handle translation for nav items
function NavItem({ item, isActive, onClick }) {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'text-blue-500'
          : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
      }`}
    >
      {t(item.label)}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
      )}
    </button>
  );
}

// Helper component for mobile nav items
function MobileNavItem({ item, isActive, onClick, delay, isMenuOpen }) {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      className={`text-2xl font-semibold transition-all duration-300 hover:text-blue-500 hover:scale-110 ${
        isActive ? 'text-blue-500 scale-110' : 'text-gray-700 dark:text-gray-300'
      }`}
      style={{
        transitionDelay: isMenuOpen ? `${delay}ms` : '0ms'
      }}
    >
      {t(item.label)}
    </button>
  );
}