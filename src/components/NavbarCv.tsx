import React, { useState, useEffect } from 'react';

interface NavbarCvProps {
  linkHome: string;
  navProjects: string;
  navCv: string;
  navContact: string;
}

export default function Navbar({
  linkHome,
  navProjects,
  navCv,
  navContact,
}: NavbarCvProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isIt = currentPath.includes('/it');
  const isCv = currentPath.includes('/cv');
  const isItCv = currentPath.includes('/it-cv');

  const languageLink = isCv
    ? (isIt ? '/cv' : '/it-cv')
    : isItCv
      ? '/cv'
      : (isIt ? '/' : '/it');

  const languageLabel = isIt ? 'en' : 'it';

  const linkedinUrl =
    'https://www.linkedin.com/in/veronica-galeazzo-82299323a/?locale=en';

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 selection:bg-brand-cyan selection:text-brand-bg ${
        isScrolled
          ? 'bg-brand-bg/75 backdrop-blur-lg py-3 shadow-lg'
          : 'bg-transparent pt-5 py-3'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* Logo */}
        <a
          href={isIt ? '/it' : '/'}
          onClick={closeMenu}
          className="flex items-center transition-transform hover:scale-102 duration-200"
        >
          <img
            src="/vg-logo.png"
            alt="Veronica Galeazzo Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6 text-lg text-brand-muted font-display items-center font-bold">

          <a
            href={isIt ? '/it-cv' : '/cv'}
            className="hover:text-brand-text transition-colors"
          >
            {navCv}
          </a>

          <a
            href="/#projects"
            className="hover:text-brand-text transition-colors"
          >
            {navProjects}
          </a>

          <a
            href={isIt ? '/it-cv/#request-cv' : '/cv/#request-cv'}
            className="text-brand-text hover:text-brand-cyan transition-colors font-bold"
          >
            {navContact}
          </a>

          <div className="w-[1px] h-4 bg-white/10 mx-1"></div>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-brand-muted hover:text-brand-cyan transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V9H3.54v11.45Z" />
            </svg>
          </a>

          {/* Language switch */}
          <a
            href={languageLink}
            className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-brand-text hover:bg-white/10 hover:border-brand-cyan transition-all uppercase tracking-wider font-bold"
          >
            {languageLabel}
          </a>

        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-brand-muted hover:text-brand-cyan transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V9H3.54v11.45Z" />
            </svg>
          </a>

          {/* Language switch */}
          <a
            href={languageLink}
            className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-brand-text hover:bg-white/10 hover:border-brand-cyan transition-all uppercase tracking-wider font-bold"
          >
            {languageLabel}
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex items-center justify-center w-10 h-10 text-brand-text"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`absolute block w-6 h-[2px] bg-current transition-transform duration-300 ${
                isMenuOpen
                  ? 'rotate-45'
                  : '-translate-y-[4px]'
              }`}
            />

            <span
              className={`absolute block w-6 h-[2px] bg-current transition-opacity duration-300 ${
                isMenuOpen
                  ? 'opacity-0'
                  : 'opacity-100'
              }`}
            />

            <span
              className={`absolute block w-6 h-[2px] bg-current transition-transform duration-300 ${
                isMenuOpen
                  ? '-rotate-45'
                  : 'translate-y-[4px]'
              }`}
            />
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-4 flex flex-col gap-5 text-lg text-brand-muted font-display font-bold bg-brand-bg/95 backdrop-blur-lg border-t border-white/10">

          <a
            href={isIt ? '/it-cv' : '/cv'}
            onClick={closeMenu}
            className="hover:text-brand-text transition-colors"
          >
            {navCv}
          </a>

          <a
            href="/#projects"
            onClick={closeMenu}
            className="hover:text-brand-text transition-colors"
          >
            {navProjects}
          </a>

          <a
            href={isIt ? '/it-cv/#request-cv' : '/cv/#request-cv'}
            onClick={closeMenu}
            className="text-brand-text hover:text-brand-cyan transition-colors"
          >
            {navContact}
          </a>

        </div>
      </div>
    </nav>
  );
}