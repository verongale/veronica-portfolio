import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/project';

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      
      
      <div className="space-y-2">
        <h2 className="text-xs font-bold tracking-widest text-brand-muted uppercase">
          Case Studies
        </h2>
        <p className="text-3xl font-extrabold tracking-tight text-brand-text">
          Selected Projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
}
