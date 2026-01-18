import React from 'react';
import { RESUME_DATA } from '../data/resume';
import { FadeIn } from './ui/FadeIn';
import { 
  Code2, 
  Cloud, 
  Database, 
  Server, 
  Terminal, 
  BarChart, 
  Layers, 
  Box,
  Cpu,
  Globe
} from 'lucide-react';

export const Skills = () => {
  // Mapping categories to specific icons for the grid
  const skillCategories = [
    { name: "Python", icon: Code2, category: "Languages" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Snowflake", icon: Database, category: "Database" },
    { name: "Azure", icon: Globe, category: "Cloud" },
    { name: "SQL", icon: Server, category: "Languages" },
    { name: "Airflow", icon: Layers, category: "Data Eng" },
    { name: "Docker", icon: Box, category: "DevOps" },
    { name: "Spark", icon: Cpu, category: "Data Eng" },
    { name: "Power BI", icon: BarChart, category: "Viz" },
    { name: "Terraform", icon: Terminal, category: "DevOps" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
              My <span className="font-extrabold">Skills</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillCategories.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.05}>
              <div className="group relative aspect-square bg-white border-2 border-black rounded-lg flex flex-col items-center justify-center p-6 transition-all duration-300 hover:bg-black hover:-translate-y-1 cursor-default">
                <div className="mb-4 text-black group-hover:text-white transition-colors duration-300">
                  <skill.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-xs text-gray-500 mt-2 group-hover:text-gray-400">
                    {skill.category}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Full list fallback for SEO and completeness */}
        <FadeIn delay={0.5} className="mt-16 pt-10 border-t border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-center">Comprehensive Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {Object.values(RESUME_DATA.skills).flat().map((s) => (
                    <span key={s} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                        {s}
                    </span>
                ))}
            </div>
        </FadeIn>
      </div>
    </section>
  );
};