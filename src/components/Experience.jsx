// src/components/Experience.jsx
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-purple-50/30 to-gray-50 dark:from-black dark:via-purple-900/5 dark:to-black" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/30">
              <Briefcase className="text-purple-500" size={32} />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
              Expériences <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">Professionnelles</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white dark:border-black z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md" />
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-white dark:bg-gradient-to-br dark:from-purple-500/5 dark:to-blue-500/5 p-6 rounded-3xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                      {/* Company Logo Placeholder */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
                            <Briefcase className="text-purple-500" size={24} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                              {exp.company}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.role}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/40 rounded-full text-xs font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}