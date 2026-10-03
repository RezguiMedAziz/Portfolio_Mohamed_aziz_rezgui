// src/components/Contact.jsx
import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal, Words } from './Motion';
import { profileLinks } from '../data/portfolioData';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="surface-ink grain relative overflow-hidden px-6 py-20 md:py-28">
      <div className="orb orb-a" style={{ opacity: 0.6 }} />
      <div className="grid-lines" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal>
          <span className="pill mb-5">{t('contact.label')}</span>
        </Reveal>

        <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
          <Words text={t('contact.heading')} step={90} />
        </h2>

        <Reveal delay={250}>
          <p className="t-muted max-w-lg mt-6 text-sm md:text-base leading-relaxed">
            {t('contact.description')}
          </p>
        </Reveal>

        <Reveal delay={350}>
          <a
            href={`mailto:${profileLinks.email}`}
            className="group btn btn-solid mt-9 !px-7 !py-4 text-sm md:text-base break-all"
          >
            <span>{t('contact.emailAddress')}</span>
            <ArrowUpRight
              size={18}
              className="shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        {/* Details */}
        <div className="grid md:grid-cols-3 gap-3 mt-14 md:mt-20">
          <Reveal className="card p-6">
            <p className="eyebrow mb-3">{t('contact.phone')}</p>
            <a href={`tel:${profileLinks.phone}`} className="link-u font-display text-lg" dir="ltr">
              {profileLinks.phoneDisplay}
            </a>
          </Reveal>
          <Reveal delay={100} className="card p-6">
            <p className="eyebrow mb-3">{t('contact.location')}</p>
            <p className="font-display text-lg">{t('contact.locationText')}</p>
          </Reveal>
          <Reveal delay={200} className="card p-6">
            <p className="eyebrow mb-3">{t('contact.availability')}</p>
            <p className="font-display text-lg flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--fg)] animate-pulse-dot" />
              {t('contact.availabilityStatus')}
            </p>
          </Reveal>
        </div>

        {/* Socials */}
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          <Reveal>
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group card card-hover flex items-center justify-between p-6"
            >
              <span className="flex items-center gap-3">
                <Github size={20} />
                <span className="font-display text-lg">GitHub</span>
              </span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group card card-hover flex items-center justify-between p-6"
            >
              <span className="flex items-center gap-3">
                <Linkedin size={20} />
                <span className="font-display text-lg">LinkedIn</span>
              </span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}