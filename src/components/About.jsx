// src/components/About.jsx
import React, { useState } from 'react';
import { Download, MapPin, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal, Words } from './Motion';
import { education, associations } from '../data/portfolioData';

export default function About() {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  const languagesRaw = t('about.languages', { returnObjects: true });
  const languages = Array.isArray(languagesRaw) ? languagesRaw : [];
  const skills = t('skills', { returnObjects: true });

  return (
    <section id="about" className="surface-paper-2 px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Portrait and bio */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-4">
            <Reveal
              variant="mask"
              className="img-reveal relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--paper-3)] max-w-xs mx-auto md:max-w-none"
            >
              {!imageError ? (
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.png`}
                  alt="Mohamed Aziz Rezgui"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center t-muted">
                  <User size={64} strokeWidth={1} />
                </div>
              )}
            </Reveal>
          </div>

          <div className="md:col-span-8 md:ps-6">
            <Reveal>
              <span className="pill mb-5">{t('about.label')}</span>
            </Reveal>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">
              <Words text={t('about.title')} />
            </h2>

            <Reveal delay={200}>
              <p className="t-muted mt-6 text-sm md:text-base leading-relaxed max-w-xl">
                {t('about.bio')}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="pill">
                  <MapPin size={13} />
                  {t('about.basedInValue')}
                </span>
                {languages.map((l) => (
                  <span key={l.name} className="pill">
                    {l.name} <span className="t-muted">· {l.level}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href={`${import.meta.env.BASE_URL}cv.pdf`}
                  download
                  className="btn btn-solid"
                >
                  <Download size={15} />
                  <span>{t('hero.ctaCV')}</span>
                </a>
                <a href="#contact" className="btn btn-outline">
                  {t('hero.ctaContact')}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Education and associations */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20 md:mt-28">
          <div>
            <Reveal>
              <h3 className="font-display text-xl md:text-2xl mb-5">{t('about.education')}</h3>
            </Reveal>
            <div className="space-y-3">
              {education.map((_, index) => (
                <Reveal
                  key={index}
                  delay={index * 100}
                  className="card card-hover p-5 md:p-6"
                >
                  <p className="eyebrow">{t(`education.edu${index + 1}.period`)}</p>
                  <h4 className="font-display text-base md:text-lg mt-2 leading-snug">
                    {t(`education.edu${index + 1}.degree`)}
                  </h4>
                  <p className="text-sm mt-1">{t(`education.edu${index + 1}.institution`)}</p>
                  <p className="text-xs t-muted mt-2 leading-relaxed">
                    {t(`education.edu${index + 1}.description`)}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="font-display text-xl md:text-2xl mb-5">{t('about.associations')}</h3>
            </Reveal>
            <div className="space-y-3">
              {associations.map((_, index) => (
                <Reveal
                  key={index}
                  delay={index * 80}
                  className="card card-hover px-5 py-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="font-display text-sm md:text-base">
                      {t(`associations.assoc${index + 1}.role`)}
                    </h4>
                    <p className="text-xs t-muted mt-1">
                      {t(`associations.assoc${index + 1}.name`)}
                    </p>
                  </div>
                  <span className="pill shrink-0">{t(`associations.assoc${index + 1}.period`)}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <h3 className="font-display text-xl md:text-2xl mb-5">{t('about.skills')}</h3>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-3">
            {skills &&
              typeof skills === 'object' &&
              Object.entries(skills).map(([category, items], i) => (
                <Reveal key={category} delay={i * 70} className="card card-hover p-5 md:p-6">
                  <p className="eyebrow mb-4">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}