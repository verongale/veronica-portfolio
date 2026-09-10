import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/project';

interface ProjectsSectionProps {
  projects: Project[];
  title: string;
  subtitle: string;
}

export default function ProjectsSection({ projects, title, subtitle }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-8 pt-24">
      
      <div className="space-y-2">
        <h2 className="text-xs font-bold tracking-widest text-brand-muted uppercase font-sans">
          {subtitle}
        </h2>
        <p className="text-3xl font-bold tracking-tight text-brand-text font-display">
          {title}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
}
