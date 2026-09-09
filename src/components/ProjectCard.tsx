import React from 'react';
import type { Project } from '../data/project.ts'; 

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
      
      
      <div className="relative w-full h-68 overflow-hidden border-b border-white/5 bg-neutral-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent opacity-60"></div>
      </div>

      
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          
          <div className="flex justify-between items-start">
            <div>
            <span className="text-[10px] -ml-1 tracking-wider uppercase px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-brand-text font-bold">
              {project.isCommercial ? 'Commercial' : 'R&D'}
            </span>
              <h3 className="text-2xl font-bold text-brand-text tracking-tight pt-2">
                {project.title}
              </h3>
              <p className="text-xs text-brand-muted font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
            
          </div>

          <div className="pt-2">
            <span className="text-xs font-semibold text-brand-muted block uppercase tracking-wider text-[10px]">
              Key Result
            </span>
            <span className="text-4xl font-bold bg-gradient-to-r from-brand-yellow to-brand-cyan bg-clip-text text-transparent font-display">
              {project.metric}
            </span>
          </div>

          <p className="text-sm text-brand-muted/90 leading-relaxed pt-2">
            {project.description}
          </p>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <span className="text-xs font-mono text-brand-muted bg-white/[0.05] px-2 py-1 rounded-full">
            {project.badge}
          </span>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-bold text-brand-text hover:text-brand-cyan transition-colors flex items-center space-x-1"
          >
            <span>{project.isCommercial ? 'Visit Site' : 'View Code'}</span>
            <span>→</span>
          </a>
        </div>
      </div>
      
    </div>
  );
}
