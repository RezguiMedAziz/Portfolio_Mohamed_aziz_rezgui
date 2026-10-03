// src/components/Intro.jsx
// Centered statement section right after the hero, with the key facts.
import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal, Words, Counter } from './Motion';

export default function Intro() {
  const { t } = useTranslation();

  const stats = [
    { key: 'internships', value: 5 },
    { key: 'pfe', value: 6 },
    { key: 'curious', icon: Sparkles },
    { key: 'learner', icon: Zap },
  ];

  return (
    <section id="intro" className="surface-paper px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="pill mb-8">{t('intro.label')}</span>
        </Reveal>

        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15]">
          <Words text={t('intro.quote')} step={55} />
        </h2>

        <Reveal delay={250}>
          <p className="t-muted mt-8 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            {t('intro.text')}
          </p>
        </Reveal>

        <Reveal delay={350}>
          <a href="#projects" className="btn btn-solid mt-9">
            {t('intro.cta')}
          </a>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.key}
              delay={i * 100}
              className="card px-4 py-7 text-center flex flex-col items-center"
            >
              <div className="h-12 flex items-center justify-center font-display text-4xl md:text-5xl">
                {Icon ? (
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border b-line bg-[var(--card)]">
                    <Icon size={20} />
                  </span>
                ) : (
                  <Counter to={s.value} />
                )}
              </div>
              <p className="eyebrow mt-4 leading-relaxed">{t(`intro.stats.${s.key}`)}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}