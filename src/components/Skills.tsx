import React from 'react';

interface SkillsProps {
  skills: string[];
}

export default function SkillsMarquee({ skills }: SkillsProps) {
  const doubleSkills = [...skills, ...skills, ...skills];

  return (
    <div className="w-[95vw] mx-auto overflow-hidden relative py-4 bg-white/[0.01] border-y border-white/5 selection:bg-brand-cyan selection:text-brand-bg">
      
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"></div>

      <div className="marquee animate-marquee flex space-x-4">
        {doubleSkills.map((skill, index) => (
          <span 
            key={index} 
            className="text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 rounded-full text-brand-muted hover:text-brand-text transition-all duration-300 cursor-default shadow-md whitespace-nowrap border border-transparent bg-gradient-to-r from-brand-bg to-brand-bg primary-gradient-border"
            style={{
              backgroundImage: 'linear-gradient(var(--color-brand-bg), var(--color-brand-bg)), linear-gradient(to right, var(--color-brand-yellow), var(--color-brand-cyan))',
              backgroundClip: 'padding-box, border-box',
              backgroundOrigin: 'padding-box, border-box'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
      
    </div>
  );
}
