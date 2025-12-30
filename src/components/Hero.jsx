// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Preload the hero image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = `${import.meta.env.BASE_URL}images/profile.jpg`;
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-black dark:to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-400/5 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] dark:bg-[linear-gradient(rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.07)_1px,transparent_1px)]" />
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                {t('hero.title')}
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  {t('hero.name')}
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 text-sm md:text-base"
              >
                <span className="relative z-10">{t('hero.ctaContact')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#projects" 
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 dark:hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
              >
                {t('hero.ctaProjects')}
              </a>
              
              <a 
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
                className="flex items-center gap-2 px-5 md:px-6 py-3 md:py-4 border border-blue-500/50 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 dark:hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
              >
                <Download size={18} className="md:w-5 md:h-5" />
                <span>{t('hero.ctaCV')}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/RezguiMedAziz" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 rounded-xl hover:bg-blue-500/20 dark:hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <Github className="text-blue-500 group-hover:scale-110 transition-transform w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-aziz-rezgui-9bb603239/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 rounded-xl hover:bg-blue-500/20 dark:hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-500/30 dark:to-purple-600/30 border border-blue-500/30 backdrop-blur-sm">
                  
                  {/* Loading Skeleton */}
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                      <div className="text-center space-y-4">
                        {/* Animated Spinner */}
                        <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto" />
                        <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                          MAR
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actual Image */}
                  {!imageError && (
                    <img 
                      src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                      alt="Mohamed Aziz REZGUI"
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                    />
                  )}
                  
                  {/* Fallback if image fails to load */}
                  {imageError && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                      <div className="text-center">
                        <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                          MAR
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">Photo de profil</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-20 h-20 md:w-24 md:h-24 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-24 h-24 md:w-32 md:h-32 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-500 w-7 h-7 md:w-8 md:h-8" />
        </div>
      </div>
    </section>
  );
}