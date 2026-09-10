import React from 'react';

interface MinorProject {
  year: string;
  title: string;
  description: string;
  link: string;
}

interface MinorProjectsProps {
  sectionTitle: string;
  projects: MinorProject[];
}

export default function MinorProjects({ sectionTitle, projects }: MinorProjectsProps) {
  return (
    <section className="space-y-6">
      
      <div className="border-b border-white/5 pb-4">
        <h3 className="text-xs font-bold tracking-widest text-brand-muted uppercase font-sans">
          {sectionTitle}
        </h3>
      </div>

      <div className="divide-y divide-white/5">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row md:items-center justify-between py-4 transition-all duration-300 hover:px-2 hover:bg-white/[0.01]"
          >
            <div className="flex items-baseline space-x-4">
              <span className="font-mono text-xs text-brand-muted/60">{project.year}</span>
              <span className="font-sans font-bold text-base text-brand-text group-hover:text-brand-cyan transition-colors">
                {project.title}
              </span>
            </div>
            
            <div className="flex items-center justify-between md:justify-end flex-1 md:pl-8 mt-1 md:mt-0 gap-4">
              <p className="text-sm text-brand-muted/80 font-sans font-normal line-clamp-1 flex-1 md:text-right">
                {project.description}
              </p>
              <span className="text-brand-muted group-hover:text-brand-cyan group-hover:translate-x-1 transition-all text-sm font-bold">
                →
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
