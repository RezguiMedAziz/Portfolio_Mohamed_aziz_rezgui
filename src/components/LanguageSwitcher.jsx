// src/components/LanguageSwitcher.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setOpen(false);
  };

  const current = (i18n.language || 'en').slice(0, 2);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="icon-btn"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe size={16} />
      </button>

      <div
        className={`absolute end-0 mt-3 w-40 p-1.5 rounded-2xl border border-white/15 bg-[#0d0d14] text-[#f4f4f6] shadow-2xl z-50 transition-all duration-300 origin-top ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex w-full items-center justify-between px-4 py-2.5 rounded-xl text-sm text-start transition-colors hover:bg-white hover:text-black ${
              current === lang.code ? 'bg-white/10' : ''
            }`}
          >
            <span>{lang.name}</span>
            <span className="text-[0.65rem] tracking-widest opacity-60">{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}