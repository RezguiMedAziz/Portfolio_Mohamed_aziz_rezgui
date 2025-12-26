// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Download } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-black dark:to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" />
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Bonjour, je suis
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Mohamed Aziz REZGUI
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light">
                  Élève Ingénieur en Génie Logiciel
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionné par le développement d'applications innovantes et l'optimisation de solutions techniques. 
              Je transforme des idées en expériences numériques exceptionnelles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10">Me Contacter</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#projects" 
                className="px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                Voir Mes Projets
              </a>
              
              <a 
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
                className="flex items-center gap-2 px-6 py-4 border border-blue-500/50 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Download size={20} />
                <span>CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/RezguiMedAziz" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <Github className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-aziz-rezgui-9bb603239/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm">
                  {/* Replace this div with your actual image */}
                  <img 
                    src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                    alt="Mohamed Aziz REZGUI"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Placeholder if image doesn't load */}
                  <div className="hidden w-full h-full items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        MAR
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Photo de profil</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-500" size={32} />
        </div>
      </div>
    </section>
  );
}