import React from 'react';
import { RESUME_DATA } from '../data/resume';
import { FadeIn } from './ui/FadeIn';
import { Award, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Certifications */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                  <Award size={24} />
                </div>
                <h2 className="text-3xl font-bold text-black">Certifications</h2>
              </div>
              <div className="space-y-4">
                {RESUME_DATA.certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-5 border-2 border-black rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-black mr-4 flex-shrink-0"></div>
                    <span className="font-semibold text-lg text-black">{cert}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Education */}
          <div>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-3xl font-bold text-black">Education</h2>
              </div>
              
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-black pl-6 py-2">
                     <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
                     <p className="text-gray-600 text-lg mt-1">{edu.institution}</p>
                     <p className="text-gray-500 font-mono mt-2">{edu.year}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
};