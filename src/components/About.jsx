// src/components/About.jsx
import React from 'react';
import { GraduationCap, Award, Code2, Zap } from 'lucide-react';
import { skills, education, associations } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            À Propos de <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Education & Associations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-blue-500/5 to-transparent p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/30">
                  <GraduationCap className="text-blue-400" size={32} />
                </div>
                <h3 className="text-3xl font-bold">Formation</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500/60 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                    <h4 className="font-bold text-blue-400 text-lg mb-1">{edu.institution}</h4>
                    <p className="text-gray-300 font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                    <p className="text-sm text-gray-400">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Associations Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-purple-500/5 to-transparent p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/30">
                  <Award className="text-purple-400" size={32} />
                </div>
                <h3 className="text-3xl font-bold">Vie Associative</h3>
              </div>
              
              <div className="space-y-4">
                {associations.map((assoc, index) => (
                  <div key={index} className="p-4 bg-purple-500/5 rounded-xl border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all">
                    <h4 className="font-bold text-purple-400">{assoc.name}</h4>
                    <p className="text-gray-300 text-sm">{assoc.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{assoc.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/30">
                <Code2 className="text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-center">Compétences Techniques</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="text-blue-400" size={20} />
                    <h4 className="font-bold text-blue-400 text-lg">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="group/skill px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-sm font-medium hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 cursor-default"
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