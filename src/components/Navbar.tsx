import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 selection:bg-brand-cyan selection:text-brand-bg ${
      isScrolled 
        ? 'bg-brand-bg/75 backdrop-blur-lg py-3 shadow-lg' 
        : 'bg-transparent pt-5 py-3'
    }`}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
        
        <a href="#" className="flex items-center transition-transform hover:scale-102 duration-200">
          <img 
            src="/vg-logo.png" 
            alt="Veronica Galeazzo Logo" 
            className="h-8 w-auto object-contain" 
          />
        </a>

        <div className="flex space-x-6 text-lg font-medium text-brand-muted font-display">
          <a href="#projects" className="hover:text-brand-text transition-colors">
            Projects
          </a>
          <a href="#philosophy" className="hover:text-brand-text transition-colors">
            Philosophy
          </a>
          <a href="https://www.linkedin.com/in/veronica-galeazzo-82299323a/?locale=en" className="text-brand-text hover:text-brand-cyan transition-colors font-bold">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}
