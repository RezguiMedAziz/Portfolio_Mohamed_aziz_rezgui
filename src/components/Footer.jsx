// src/components/Footer.jsx
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="surface-ink-2 grain relative overflow-hidden border-t b-line py-10">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-start">
            <p className="text-sm font-medium">{t('footer.copyright')}</p>
            <p className="eyebrow mt-2">{t('footer.rights')}</p>
          </div>

          <p className="eyebrow text-center order-last md:order-none">{t('footer.developed')}</p>

          <button
            onClick={scrollToTop}
            className="icon-btn group"
            aria-label={t('footer.backToTop')}
            title={t('footer.backToTop')}
          >
            <ArrowUp
              size={16}
              className="transition-transform duration-500 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}