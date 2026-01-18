import React from 'react';
import { RESUME_DATA } from '../data/resume';
import { Linkedin, Mail, Github, Twitter } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Hero = () => {
  return (
    <section id="about" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-white flex flex-col justify-center min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <FadeIn className="max-w-5xl mx-auto text-center flex flex-col items-center">
            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-black mb-8">
              Hello I'm {RESUME_DATA.name}.
            </h1>
            
            {/* Title */}
            <div className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-10 leading-[1.1]">
               <span className="text-black">Data & AI</span> <span className="text-outline">Engineer</span>
            </div>

            {/* Location */}
            <p className="text-2xl md:text-3xl text-black font-semibold mb-12">
               Based In {RESUME_DATA.location.split(',')[1] || 'Netherlands'}.
            </p>
            
            {/* Summary */}
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mb-16 text-pretty">
              {RESUME_DATA.summary}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a 
                href={RESUME_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} className="stroke-2" />
              </a>
              <a 
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="w-16 h-16 flex items-center justify-center border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                aria-label="Email"
              >
                <Mail size={28} className="stroke-2" />
              </a>
              <button 
                className="w-16 h-16 flex items-center justify-center border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                aria-label="GitHub"
              >
                <Github size={28} className="stroke-2" />
              </button>
               <button 
                className="w-16 h-16 flex items-center justify-center border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                aria-label="Twitter"
              >
                <Twitter size={28} className="stroke-2" />
              </button>
            </div>
        </FadeIn>
        
        {/* Horizontal Line separator */}
        <div className="w-full h-0.5 bg-black mt-32"></div>
      </div>
    </section>
  );
};