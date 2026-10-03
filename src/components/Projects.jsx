// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal, Words } from './Motion';
import { projects } from '../data/portfolioData';

const FALLBACK_IMG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e5e5" width="400" height="300"/%3E%3Ctext fill="%23888" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage not available%3C/text%3E%3C/svg%3E';

// Stable reference so the preload effect doesn't re-run for video projects
const NO_IMAGES = [];

function ProjectCard({ project, number, onImageClick }) {
  const { t } = useTranslation();
  const { media } = project;
  const isVideo = media.type === 'video';
  const images = media.images ?? NO_IMAGES;
  const hasImages = images.length > 0;
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload this project's images
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => setImagesLoaded((prev) => ({ ...prev, [index]: true }));
      img.src = src;
    });
  }, [images]);

  const changeImage = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    changeImage((currentImage + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    changeImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const key = `projects.project${number}`;

  return (
    <div className="group card card-hover p-3 md:p-4 h-full">
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-[var(--paper-3)]">
        {isVideo ? (
          <video
            src={media.src}
            poster={media.poster}
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-contain bg-black"
          />
        ) : hasImages ? (
          <>
            {!imagesLoaded[currentImage] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 border-2 border-[color:var(--line-strong)] border-t-[color:var(--fg)] rounded-full animate-spin" />
              </div>
            )}
            <img
              src={images[currentImage]}
              alt={`${project.title} ${currentImage + 1}`}
              className={`w-full h-full object-cover cursor-zoom-in grayscale contrast-105 transition-all duration-[900ms] ease-out group-hover:grayscale-0 group-hover:scale-105 ${
                imagesLoaded[currentImage] ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => onImageClick(images, currentImage)}
              loading="lazy"
              onError={(e) => {
                e.target.src = FALLBACK_IMG;
              }}
            />

            <div className="absolute top-3 start-3 bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <ZoomIn className="w-4 h-4" />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  disabled={isTransitioning}
                  className="absolute start-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-white hover:text-black text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 disabled:opacity-50 rtl:rotate-180"
                  aria-label={t('projects.prevImage')}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  disabled={isTransitioning}
                  className="absolute end-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-white hover:text-black text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 disabled:opacity-50 rtl:rotate-180"
                  aria-label={t('projects.nextImage')}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 px-2.5 py-1.5 rounded-full bg-black/50 backdrop-blur">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        changeImage(idx);
                      }}
                      disabled={isTransitioning}
                      className={`h-1.5 rounded-full transition-all duration-500 disabled:opacity-50 ${
                        idx === currentImage ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/70 w-1.5'
                      }`}
                      aria-label={`${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          /* Typographic placeholder when a project has no screenshots yet */
          <div className="absolute inset-0 flex items-center justify-center surface-ink overflow-hidden">
            <div className="grid-lines" />
            <span className="relative font-display text-[6rem] md:text-[8rem] leading-none text-outline transition-transform duration-[900ms] group-hover:scale-110">
              {String(number).padStart(2, '0')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-2 pt-5 pb-2">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow">{String(number).padStart(2, '0')}</span>
          <span className="pill">{t(`projects.categories.${project.category}`)}</span>
        </div>

        <h3 className="font-display text-xl md:text-2xl mt-4">{t(`${key}.title`)}</h3>
        <p className="t-muted mt-3 leading-relaxed text-sm">{t(`${key}.description`)}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageLightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [currentIndex]);

  if (!images) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 end-5 icon-btn text-white z-50"
        style={{ '--fg': '#fff', '--inv': '#000', '--line-strong': 'rgba(255,255,255,.4)' }}
        aria-label={t('footer.backToTop')}
      >
        <X className="w-4 h-4" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute start-5 top-1/2 -translate-y-1/2 icon-btn text-white z-50 rtl:rotate-180"
            style={{ '--fg': '#fff', '--inv': '#000', '--line-strong': 'rgba(255,255,255,.4)' }}
            aria-label={t('projects.prevImage')}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute end-5 top-1/2 -translate-y-1/2 icon-btn text-white z-50 rtl:rotate-180"
            style={{ '--fg': '#fff', '--inv': '#000', '--line-strong': 'rgba(255,255,255,.4)' }}
            aria-label={t('projects.nextImage')}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      <img
        src={images[currentIndex]}
        alt={`${currentIndex + 1}`}
        className={`max-w-full max-h-full object-contain rounded-2xl transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        onLoad={() => setLoading(false)}
      />

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-xs px-3 py-1.5 rounded-full bg-white/10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ images: null, currentIndex: 0 });

  const categories = ['all', ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const openLightbox = (images, startIndex) => {
    setLightbox({ images, currentIndex: startIndex });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ images: null, currentIndex: 0 });
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
    }));
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox.images) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox.images]);

  return (
    <section id="projects" className="surface-paper px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <span className="pill mb-5">{t('projects.label')}</span>
        </Reveal>
        <h2 className="font-display text-3xl md:text-5xl leading-[1.1] max-w-3xl">
          <Words text={t('projects.title')} />
        </h2>

        {/* Filters */}
        <Reveal delay={200} className="flex flex-wrap gap-2 mt-10 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-[0.8rem] font-medium border transition-all duration-300 ${
                filter === category
                  ? 'bg-[var(--fg)] text-[color:var(--inv)] border-[var(--fg)]'
                  : 'b-line opacity-70 hover:opacity-100 hover:bg-[var(--card-hover)]'
              }`}
            >
              {category === 'all' ? t('projects.filterAll') : t(`projects.categories.${category}`)}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal key={`${filter}-${project.title}`} delay={(index % 2) * 120}>
              <ProjectCard
                project={project}
                number={projects.indexOf(project) + 1}
                onImageClick={openLightbox}
              />
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="t-muted text-lg">{t('projects.noProjects')}</p>
          </div>
        )}
      </div>

      {lightbox.images && (
        <ImageLightbox
          images={lightbox.images}
          currentIndex={lightbox.currentIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}