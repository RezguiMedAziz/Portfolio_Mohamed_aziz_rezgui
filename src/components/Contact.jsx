// src/components/Contact.jsx
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-purple-900/5 to-black" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Restons en <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos idées.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <a 
              href="mailto:rezguiaziz32@gmail.com"
              className="relative flex items-center gap-4 p-6 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all backdrop-blur-sm group-hover:scale-[1.02] h-full"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
                <Mail className="text-blue-400" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="text-gray-200 font-medium">rezguiaziz32@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Phone */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <a 
              href="tel:+21658846263"
              className="relative flex items-center gap-4 p-6 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all backdrop-blur-sm group-hover:scale-[1.02] h-full"
            >
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <Phone className="text-purple-400" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                <p className="text-gray-200 font-medium">+216 58 846 263</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            <div className="relative flex items-center gap-4 p-6 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl border border-blue-500/20 backdrop-blur-sm h-full">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
                <MapPin className="text-blue-400" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Localisation</p>
                <p className="text-gray-200 font-medium">Tunis, Tunisie</p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            <div className="relative flex items-center gap-4 p-6 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl border border-purple-500/20 backdrop-blur-sm h-full">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <div className="w-7 h-7 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Disponibilité</p>
                <p className="text-gray-200 font-medium">Disponible pour de nouveaux projets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Retrouvez-moi sur
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* GitHub */}
            <a 
              href="https://github.com/RezguiMedAziz" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all backdrop-blur-sm group-hover:scale-[1.02]">
                <Github className="text-blue-400 group-hover:scale-110 transition-transform" size={28} />
                <div className="text-left">
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-semibold text-gray-200">@RezguiMedAziz</p>
                </div>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/mohamed-aziz-rezgui-9bb603239/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all backdrop-blur-sm group-hover:scale-[1.02]">
                <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" size={28} />
                <div className="text-left">
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-semibold text-gray-200">Mohamed Aziz Rezgui</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        
          
        
      </div>
    </section>
  );
}