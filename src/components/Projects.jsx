// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, onImageClick }) {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload all images for this project
  useEffect(() => {
    project.media.images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
      };
      img.src = src;
    });
  }, [project.media.images]);

  const changeImage = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImage(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImage + 1) % project.media.images.length;
    changeImage(newIndex);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = currentImage === 0 ? project.media.images.length - 1 : currentImage - 1;
    changeImage(newIndex);
  };

  return (
    <div className="group bg-white dark:bg-gray-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 dark:border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] shadow-lg">
      {/* Media Section - Carousel */}
      <div className="relative h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {/* Loading Placeholder */}
        {!imagesLoaded[currentImage] && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}
        
        <img
          src={project.media.images[currentImage]}
          alt={`${project.title} - Image ${currentImage + 1}`}
          className={`w-full h-full object-cover cursor-zoom-in transition-opacity duration-300 ${
            imagesLoaded[currentImage] ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => onImageClick(project.media.images, currentImage)}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage non disponible%3C/text%3E%3C/svg%3E';
          }}
        />
        
        {/* Zoom Icon Indicator */}
        <div className="absolute top-2 left-2 bg-gray-900/80 dark:bg-gray-800/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <ZoomIn className="w-4 h-4" />
        </div>
        
        {/* Carousel Controls */}
        {project.media.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              disabled={isTransitioning}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 dark:bg-gray-800/80 dark:hover:bg-gray-700 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 disabled:opacity-50"
              aria-label={t('projects.prevImage')}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              disabled={isTransitioning}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 dark:bg-gray-800/80 dark:hover:bg-gray-700 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 disabled:opacity-50"
              aria-label={t('projects.nextImage')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.media.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeImage(idx);
                  }}
                  disabled={isTransitioning}
                  className={`rounded-full transition-all disabled:opacity-50 ${
                    idx === currentImage 
                      ? 'bg-blue-400 w-6 h-2' 
                      : 'bg-gray-500 hover:bg-gray-400 w-2 h-2'
                  }`}
                  aria-label={`Aller à l'image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
          {project.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-500 mb-3 group-hover:text-blue-400 transition-colors">
          {t(`projects.project${projects.indexOf(project) + 1}.title`)}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {t(`projects.project${projects.indexOf(project) + 1}.description`)}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-600 dark:text-blue-400"
            >
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
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all z-50"
        aria-label={t('footer.backToTop')}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all z-50"
            aria-label={t('projects.prevImage')}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all z-50"
            aria-label={t('projects.nextImage')}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        onLoad={() => setLoading(false)}
      />

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ images: null, currentIndex: 0 });
  
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openLightbox = (images, startIndex) => {
    setLightbox({ images, currentIndex: startIndex });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ images: null, currentIndex: 0 });
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 
        ? prev.images.length - 1 
        : prev.currentIndex - 1
    }));
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightbox.images) {
        closeLightbox();
      }
    };
    
    const handleArrowKeys = (e) => {
      if (!lightbox.images) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('keydown', handleArrowKeys);
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('keydown', handleArrowKeys);
    };
  }, [lightbox.images]);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-black dark:via-blue-900/10 dark:to-black pointer-events-none" />
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('projects.title')} <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{t('projects.titleSuffix')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 text-gray-700 dark:text-gray-300 hover:bg-blue-500/20 dark:hover:bg-blue-500/30 hover:border-blue-500/50'
              }`}
            >
              {category === 'all' ? t('projects.filterAll') : t(`projects.categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onImageClick={openLightbox}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t('projects.noProjects')}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
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