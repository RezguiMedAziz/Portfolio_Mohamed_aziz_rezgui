// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Download, MapPin, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Words, Reveal } from './Motion';
import { profileLinks } from '../data/portfolioData';

export default function Hero() {
  const { t } = useTranslation();
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  const rolesRaw = t('hero.roles', { returnObjects: true });
  const roles = Array.isArray(rolesRaw) ? rolesRaw : [];
  const [roleIndex, setRoleIndex] = useState(0);

  const fullName = `${t('hero.firstName')} ${t('hero.lastName')}`;

  // Rotating role line
  useEffect(() => {
    if (roles.length < 2) return undefined;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, [roles.length]);

  // Parallax and fade on scroll
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y > vh * 1.2) return;
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
        contentRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.9)));
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="surface-ink grain relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Atmosphere */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grid-lines" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10 pt-28 pb-20"
      >
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <span className="pill">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--fg)] animate-pulse-dot" />
                {t('contact.availabilityStatus')}
              </span>
            </Reveal>

            <p className="mt-8 text-base md:text-lg t-muted">
              <Words text={t('hero.greeting')} delay={100} />
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mt-2">
              <Words text={fullName} delay={200} step={90} />
            </h1>

            <Reveal delay={500}>
              <p className="font-display text-xl md:text-2xl mt-5">
                <span>{t('hero.subtitle')}</span>
                {roles.length > 0 && (
                  <>
                    <span className="t-muted"> · </span>
                    <span key={roleIndex} className="inline-block animate-role t-muted">
                      {roles[roleIndex]}
                    </span>
                  </>
                )}
              </p>
            </Reveal>

            <Reveal delay={650}>
              <p className="t-muted text-sm md:text-base leading-relaxed max-w-lg mt-6">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-9">
                <a href="#contact" className="btn btn-solid">
                  {t('hero.ctaContact')}
                </a>
                <a href="#projects" className="btn btn-outline">
                  {t('hero.ctaProjects')}
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}cv.pdf`}
                  download
                  className="btn btn-outline"
                >
                  <Download size={15} />
                  <span>{t('hero.ctaCV')}</span>
                </a>
                <a
                  href={profileLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Photo */}
          <Reveal
            variant="scale"
            delay={300}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="flex flex-col items-center w-60 sm:w-72 lg:w-full max-w-sm">
              <div className="photo-frame w-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.9rem] bg-[var(--ink-2)]">
                  {!imageError ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile.png`}
                      alt={fullName}
                      className="w-full h-full object-cover object-top"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center t-muted">
                      <User size={64} strokeWidth={1} />
                    </div>
                  )}
                </div>
              </div>

              <span className="pill mt-5">
                <MapPin size={13} />
                {t('hero.location')}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}