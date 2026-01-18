import React from 'react';
import { RESUME_DATA } from '../data/resume';
import { FadeIn } from './ui/FadeIn';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
               My <span className="text-gray-400">Experience</span>
             </h2>
             <p className="text-gray-400 max-w-md text-right md:text-left">
                A journey through data engineering, cloud architecture, and AI solutions.
             </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {RESUME_DATA.experience.map((job, index) => (
            <FadeIn key={`${job.company}-${index}`} delay={index * 0.1}>
              <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:bg-zinc-800 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-white/90">{job.role}</h3>
                    <p className="text-xl text-gray-400 font-medium mt-1">
                        {job.company}
                        {job.client && <span className="text-gray-500 text-base"> via {job.client}</span>}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-white font-mono">{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl">
                    {job.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {job.achievements.slice(0, 4).map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-gray-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                            <span>{achievement}</span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                    <ArrowUpRight className="text-white" size={24} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};