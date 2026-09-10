import React from 'react';

interface FooterProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function Footer({ title, description, buttonText }: FooterProps) {
  return (
    <footer className="border-t border-white/5 pt-12 pb-24 space-y-8">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-brand-text font-display">
            {title}
          </h2>
          <p className="text-sm text-brand-muted max-w-md leading-relaxed font-sans">
            {description}
          </p>
        </div>
        <a 
          href="https://www.linkedin.com/in/veronica-galeazzo-82299323a/?locale=en" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto text-center bg-brand-text text-brand-bg font-bold px-8 py-4 rounded-xl transition-transform hover:bg-gradient-to-r hover:from-brand-yellow hover:to-brand-cyan duration-200 block shadow-lg font-sans text-sm tracking-wide"
        >
          {buttonText}
        </a>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center pt-8 border-t border-white/5 gap-4 text-xs text-brand-muted/70">
        <div className="space-y-1">
          <p>© {new Date().getFullYear()} Veronica Galeazzo. All rights reserved.</p>
          <p className="font-mono text-[10px]">Independent Contractor • Italian VAT (VIES enrolled)</p>
        </div>
        <div className="flex space-x-6 font-medium text-brand-text font-sans">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/veronica-galeazzo-82299323a/?locale=en" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">LinkedIn</a>
        </div>
      </div>

    </footer>
  );
}
