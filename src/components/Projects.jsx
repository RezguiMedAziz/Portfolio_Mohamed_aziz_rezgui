// src/components/Projects.jsx
import React, { useState } from 'react';
import { Code, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, onImageClick }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.media.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? project.media.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02]">
      {/* Media Section - Carousel */}
      <div className="relative h-64 bg-slate-900/50 overflow-hidden">
        <img
          src={project.media.images[currentImage]}
          alt={`${project.title} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 cursor-zoom-in"
          onClick={() => onImageClick(project.media.images, currentImage)}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23334155" width="400" height="300"/%3E%3Ctext fill="%2364748b" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage non disponible%3C/text%3E%3C/svg%3E';
          }}
        />
        
        {/* Zoom Icon Indicator */}
        <div className="absolute top-2 left-2 bg-slate-900/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <ZoomIn className="w-4 h-4" />
        </div>
        
        {/* Carousel Controls */}
        {project.media.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.media.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImage 
                      ? 'bg-blue-400 w-6' 
                      : 'bg-gray-500 hover:bg-gray-400'
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
        <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300"
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
  if (!images) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-all z-50"
        aria-label="Fermer"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-all z-50"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-all z-50"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ images: null, currentIndex: 0 });
  
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openLightbox = (images, startIndex) => {
    setLightbox({ images, currentIndex: startIndex });
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightbox({ images: null, currentIndex: 0 });
    document.body.style.overflow = 'auto'; // Restore scrolling
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

  // Handle escape key to close lightbox
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightbox.images) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightbox.images]);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" />
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Projets Académiques
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-blue-500/10 border border-blue-500/30 text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/50'
              }`}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <p className="text-gray-400 text-lg">Aucun projet trouvé dans cette catégorie</p>
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