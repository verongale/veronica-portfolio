import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-[95vw] min-h-[90vh] mx-auto rounded-3xl overflow-hidden flex items-center p-8 md:p-16 selection:bg-brand-cyan selection:text-brand-bg bg-brand-bg">
      
      {/* Sfondo: Immagine a colori con effetto blur e overlay scuro integrati */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img 
          src="/hero-portrait.jpg" 
          alt="Creative Background" 
          className="w-full h-full object-cover object-center scale-105 blur-md brightness-50"
          /* scale-105 serve a nascondere i bordi bianchi causati dall'effetto blur */
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenuto in primo piano: Fluttua direttamente sullo sfondo senza alcun riquadro */}
      <div className="relative z-10 max-w-3xl w-full space-y-6">
        
        <div className="inline-flex items-center space-x-2 px-2 py-1.5 ">
          <span className="w-2 h-2 bg-brand-yellow"></span>
          <span className="text-[12px] font-regular text-brand-text tracking-wide uppercase font-sans">
            Available for EU Remote Contracting (VIES VAT)
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-text font-display leading-[1.1]">
          Hi, I'm <br className="md:hidden" />
          <span className="bg-gradient-to-r from-brand-yellow to-brand-cyan bg-clip-text text-transparent">
            Veronica Galeazzo
          </span>
        </h1>

        <h2 className="text-sm md:text-base font-semibold text-brand-text uppercase tracking-widest font-sans">
          Design Engineer & Front-End Developer
        </h2>

        <p className="text-base text-brand-text/90 leading-relaxed font-sans font-normal max-w-2xl drop-shadow-md">
          I bridge the gap between creative composition and type-safe systems. I find the exact same adrenaline rush in crafting a pixel-perfect, conversion-driven user interface and in debugging a complex state management error in TypeScript.
        </p>

        <div className="flex space-x-4 pt-2">
          <a 
            href="#projects" 
            className="bg-brand-text text-brand-bg font-bold font-display px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-yellow hover:to-brand-cyan text-center text-sm tracking-wide shadow-lg"
          >
            View Work
          </a>
          <a 
            href="mailto:galeazzo.ve@gmail.com" 
            className="bg-white/5 border border-white/10 hover:bg-white/10 text-brand-text font-medium font-display px-6 py-3 rounded-xl transition-all duration-200 text-center text-sm"
          >
            Get In Touch
          </a>
        </div>

      </div>

    </section>
  );
}
