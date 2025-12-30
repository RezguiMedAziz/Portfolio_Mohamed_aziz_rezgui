// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="relative group">
      <button
        className="relative group p-2 rounded-xl border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/20 hover:bg-blue-500/20 dark:hover:bg-blue-500/30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Change language"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Globe Icon */}
        <Globe className="relative w-6 h-6 text-blue-500" size={24} />
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-gray-800 border border-blue-500/30 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`block w-full text-left px-4 py-2 hover:bg-blue-500/20 transition-colors ${
              i18n.language === lang.code
                ? 'bg-blue-500/20 font-semibold'
                : ''
            } ${
              lang.code === 'ar'
                ? 'text-right'
                : ''
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
