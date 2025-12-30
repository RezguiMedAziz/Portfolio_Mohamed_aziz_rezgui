// src/components/Contact.jsx
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-16 md:py-24 px-4 relative overflow-hidden bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-purple-50/30 to-white dark:from-blue-900/10 dark:via-purple-900/5 dark:to-black" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('contact.title')} <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{t('contact.titleSuffix')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
          {/* Email */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <a 
              href="mailto:rezguiaziz32@gmail.com"
              className="relative flex items-center gap-3 md:gap-4 p-5 md:p-6 bg-white dark:bg-gray-900 rounded-2xl border border-blue-500/20 dark:border-blue-500/30 hover:border-blue-500/40 transition-all backdrop-blur-sm group-hover:scale-[1.02] h-full shadow-lg"
            >
              <div className="p-2.5 md:p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl border border-blue-500/30 flex-shrink-0">
                <Mail className="text-blue-500 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact.email')}</p>
                <p className="text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base truncate">{t('contact.emailAddress')}</p>
              </div>
            </a>
          </div>

          {/* Phone */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <a 
              href="tel:+21658846263"
              className="relative flex items-center gap-3 md:gap-4 p-5 md:p-6 bg-white dark:bg-gray-900 rounded-2xl border border-purple-500/20 dark:border-purple-500/30 hover:border-purple-500/40 transition-all backdrop-blur-sm group-hover:scale-[1.02] h-full shadow-lg"
            >
              <div className="p-2.5 md:p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl border border-purple-500/30 flex-shrink-0">
                <Phone className="text-purple-500 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact.phone')}</p>
                <p className="text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">{t('contact.phoneNumber')}</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            <div className="relative flex items-center gap-3 md:gap-4 p-5 md:p-6 bg-white dark:bg-gray-900 rounded-2xl border border-blue-500/20 dark:border-blue-500/30 backdrop-blur-sm h-full shadow-lg">
              <div className="p-2.5 md:p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl border border-blue-500/30 flex-shrink-0">
                <MapPin className="text-blue-500 w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact.location')}</p>
                <p className="text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">{t('contact.locationText')}</p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            <div className="relative flex items-center gap-3 md:gap-4 p-5 md:p-6 bg-white dark:bg-gray-900 rounded-2xl border border-purple-500/20 dark:border-purple-500/30 backdrop-blur-sm h-full shadow-lg">
              <div className="p-2.5 md:p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl border border-purple-500/30 flex-shrink-0">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact.availability')}</p>
                <p className="text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">{t('contact.availabilityStatus')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            {t('contact.followMe')}
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {/* GitHub */}
            <a 
              href="https://github.com/RezguiMedAziz" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative flex items-center justify-center gap-3 p-5 md:p-6 bg-white dark:bg-gray-900 border border-blue-500/30 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-800 hover:border-blue-500/50 transition-all backdrop-blur-sm group-hover:scale-[1.02] shadow-lg">
                <Github className="text-blue-500 group-hover:scale-110 transition-transform w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm md:text-base">@RezguiMedAziz</p>
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
              <div className="relative flex items-center justify-center gap-3 p-5 md:p-6 bg-white dark:bg-gray-900 border border-blue-500/30 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-800 hover:border-blue-500/50 transition-all backdrop-blur-sm group-hover:scale-[1.02] shadow-lg">
                <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm md:text-base">Mohamed Aziz Rezgui</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}