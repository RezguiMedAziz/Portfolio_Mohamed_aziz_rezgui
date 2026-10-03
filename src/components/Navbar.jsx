// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { id: 'home', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'experience', label: 'nav.experience' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'contact', label: 'nav.contact' },
];

export default function Navbar({ activeSection, setActiveSection }) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is on screen
  useEffect(() => {
    const els = navItems.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [setActiveSection]);

  // RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const solid = scrolled && !isMenuOpen;

  return (
    <>
      <nav className="fixed top-3 md:top-4 inset-x-0 z-50 px-3 md:px-6">
        <div
          className={`max-w-5xl mx-auto h-14 rounded-full px-2.5 flex items-center justify-between ${
            solid ? 'nav-solid' : 'nav-clear'
          }`}
        >
          {/* Avatar */}
          <button
            onClick={() => scrollToSection('home')}
            className="relative z-[60] w-9 h-9 rounded-full overflow-hidden border border-[var(--line-strong)] shrink-0"
            aria-label="Home"
          >
            {!imageError ? (
              <img
                src={`${import.meta.env.BASE_URL}images/profile.png`}
                alt=""
                className="w-full h-full object-cover object-top"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="block w-full h-full bg-[var(--paper-3)]" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-[0.8rem] font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[var(--fg)] text-[color:var(--inv)]'
                    : 'opacity-70 hover:opacity-100 hover:bg-[var(--card-hover)]'
                }`}
              >
                {t(item.label)}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2 relative z-[60]">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              className="icon-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 surface-ink transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-start justify-center gap-3 px-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-display text-4xl text-[#f4f4f6] px-6 py-2 rounded-full transition-all duration-700 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } ${activeSection === item.id ? 'bg-white/10' : 'opacity-70'}`}
              style={{ transitionDelay: isMenuOpen ? `${150 + index * 70}ms` : '0ms' }}
            >
              {t(item.label)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}