import React from 'react';

export default function MatrixSection() {
  const points = [
    {
      title: "The Hybrid Advantage",
      description: "Most developers hate design, and most designers fear the terminal. I love both in equal measure. I find the exact same adrenaline rush in perfecting a UI layout and in resolving a complex compile-time error in TypeScript.",
      bgClass: "bg-brand-yellow text-brand-bg",
      numberClass: "text-brand-bg/60"
    },
    {
      title: "Vanilla Engineering Foundations",
      description: "I didn't just learn framework shortcuts. My software engineering training at En.A.I.P. focused on pure, native Vanilla JavaScript (ES6+), Object-Oriented PHP, and relational SQL database design.",
      bgClass: "bg-brand-cyan text-brand-bg",
      numberClass: "text-brand-bg/60"
    },
    {
      title: "International & Agile Culture",
      description: "With a C2 level in English, multimedia visual arts training, and an adaptable remote mindset, I am structurally ready to integrate into cross-border product teams from day one.",
      bgClass: "bg-brand-yellow text-brand-bg",
      numberClass: "text-brand-bg/60"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs font-bold tracking-widest text-brand-muted uppercase font-sans">Philosophy</h2>
        <p className="text-3xl font-extrabold tracking-tight text-brand-text font-sans">Why I Build Differently</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {points.map((point, index) => (
          <div 
            key={index} 
            className={`rounded-2xl p-6 space-y-3 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${point.bgClass}`}
          >
            <h3 className="text-lg font-black flex items-center space-x-2 font-sans tracking-tight">
              <span className={`font-mono text-sm font-bold ${point.numberClass}`}>0{index + 1}.</span>
              <span>{point.title}</span>
            </h3>
            <p className="text-sm font-sans font-medium leading-relaxed opacity-95">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
