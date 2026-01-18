import React from 'react';
import { RESUME_DATA } from '../data/resume';
import { FadeIn } from './ui/FadeIn';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
            <div className="bg-black text-white rounded-3xl p-8 md:p-16 text-center overflow-hidden relative">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 border border-white/20 rounded-full" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 border border-white/10 rounded-full" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Ready to innovate together?
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities in Data Engineering and AI. Let's discuss how I can contribute to your team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href={`mailto:${RESUME_DATA.contact.email}`}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                        >
                            <Mail size={20} />
                            Email Me
                        </a>
                        <a 
                            href={RESUME_DATA.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} {RESUME_DATA.name}</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors">GitHub</a>
                            <a href="#" className="hover:text-white transition-colors">Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};