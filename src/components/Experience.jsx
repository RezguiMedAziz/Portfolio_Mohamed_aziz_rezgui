// src/components/Experience.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, Words } from './Motion';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const { t } = useTranslation();

  const itemsRaw = t('experience.exp1.items', { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];
  const featured = experiences[0];
  const others = experiences.slice(1);

  return (
    <section id="experience" className="surface-ink grain relative px-6 py-20 md:py-28">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <span className="pill mb-5">{t('experience.label')}</span>
        </Reveal>
        <h2 className="font-display text-3xl md:text-5xl leading-[1.1] max-w-3xl">
          <Words text={t('experience.title')} />
        </h2>

        {/* Featured: end of studies project */}
        <Reveal delay={150} className="mt-12 md:mt-16 card p-6 sm:p-8 md:p-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4">
              <span className="pill">{t('experience.featured')}</span>
              <h3 className="font-display text-2xl md:text-3xl mt-6 leading-tight">
                {featured.company}
              </h3>
              <p className="mt-2 text-sm">{t('experience.exp1.role')}</p>
              <p className="eyebrow mt-3">{t('experience.exp1.period')}</p>
              <p className="t-muted text-sm mt-6 leading-relaxed">{t('experience.exp1.summary')}</p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {items.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={(i % 2) * 120}
                  className="card card-hover p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--fg)] text-[color:var(--inv)] text-[0.7rem] font-semibold shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-display text-base md:text-lg">{item.title}</h4>
                  </div>
                  <p className="text-xs t-muted mt-4 leading-relaxed">{item.need}</p>
                  <p className="text-sm mt-2 leading-relaxed">{item.solution}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t b-line">
            {featured.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Internships */}
        <div className="mt-6 space-y-3">
          {others.map((exp, i) => {
            const n = i + 2;
            return (
              <Reveal
                key={exp.company}
                className="card card-hover p-6 grid md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-3">
                  <span className="pill">{t(`experience.exp${n}.period`)}</span>
                </div>

                <div className="md:col-span-3">
                  <h3 className="font-display text-lg md:text-xl">{exp.company}</h3>
                  <p className="t-muted mt-1 text-xs">{t(`experience.exp${n}.role`)}</p>
                </div>

                <div className="md:col-span-6">
                  <p className="text-sm leading-relaxed t-muted">
                    {t(`experience.exp${n}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}