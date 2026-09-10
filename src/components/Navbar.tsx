import React, { useState, useEffect } from 'react';

interface NavbarProps {
  linkHome: string;
  navProjects: string;
  navPhilosophy: string;
  navContact: string;
}

export default function Navbar({ linkHome, navProjects, navPhilosophy, navContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isIt = currentPath.includes('/it');

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 selection:bg-brand-cyan selection:text-brand-bg ${
      isScrolled 
        ? 'bg-brand-bg/75 backdrop-blur-lg py-3 shadow-lg' 
        : 'bg-transparent pt-5 py-3'
    }`}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
        
        <a href={linkHome} className="flex items-center transition-transform hover:scale-102 duration-200">
          <img 
            src="/vg-logo.png" 
            alt="Veronica Galeazzo Logo" 
            className="h-8 w-auto object-contain" 
          />
        </a>

        <div className="flex space-x-6 text-lg font-medium text-brand-muted font-display items-center">
          <a href="#projects" className="hover:text-brand-text transition-colors">
            {navProjects}
          </a>
          <a href="#philosophy" className="hover:text-brand-text transition-colors">
            {navPhilosophy}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-cyan transition-colors font-bold">
            {navContact}
          </a>

          <div className="w-[1px] h-4 bg-white/10 mx-1"></div>

          <a 
            href={isIt ? '/' : '/it'} 
            className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-brand-text hover:bg-white/10 hover:border-brand-cyan transition-all uppercase tracking-wider font-bold"
          >
            {isIt ? 'en' : 'it'}
          </a>
        </div>

      </div>
    </nav>
  );
}
