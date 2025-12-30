// src/components/About.jsx
import React from 'react';
import { GraduationCap, Award, Code2, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { skills, education, associations } from '../data/portfolioData';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 md:py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-black dark:via-blue-900/10 dark:to-black" />
      <div className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('about.title')} <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{t('about.titleSuffix')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Education & Associations */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Education Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl border border-blue-500/20 dark:border-blue-500/30 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-6">
                <div className="p-2.5 md:p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl border border-blue-500/30">
                  <GraduationCap className="text-blue-500 w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t('about.education')}</h3>
              </div>
              
              <div className="space-y-5 md:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-5 md:pl-6 border-l-2 border-blue-500/30 hover:border-blue-500/60 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                    <h4 className="font-bold text-blue-500 text-base md:text-lg mb-1">{t(`education.edu${index + 1}.institution`)}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">{t(`education.edu${index + 1}.degree`)}</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">{t(`education.edu${index + 1}.period`)}</p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{t(`education.edu${index + 1}.description`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Associations Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl border border-purple-500/20 dark:border-purple-500/30 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-6">
                <div className="p-2.5 md:p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl border border-purple-500/30">
                  <Award className="text-purple-500 w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t('about.associations')}</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {associations.map((assoc, index) => (
                  <div key={index} className="p-3.5 md:p-4 bg-purple-500/5 dark:bg-purple-500/10 rounded-xl border border-purple-500/20 dark:border-purple-500/30 hover:bg-purple-500/10 dark:hover:bg-purple-500/20 hover:border-purple-500/40 transition-all">
                    <h4 className="font-bold text-purple-500 text-sm md:text-base">{t(`associations.assoc${index + 1}.name`)}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">{t(`associations.assoc${index + 1}.role`)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t(`associations.assoc${index + 1}.period`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl" />
          <div className="relative bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl border border-blue-500/20 dark:border-blue-500/30 backdrop-blur-sm shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="p-2.5 md:p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl border border-blue-500/30">
                <Code2 className="text-blue-500 w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white">{t('about.skills')}</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {Object.entries(t('skills', { returnObjects: true })).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="text-blue-500 w-4 h-4 md:w-5 md:h-5" />
                    <h4 className="font-bold text-blue-500 text-base md:text-lg">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="group/skill px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 rounded-full text-xs md:text-sm font-medium hover:from-blue-500/20 hover:to-purple-500/20 dark:hover:from-blue-500/30 dark:hover:to-purple-500/30 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 cursor-default text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}