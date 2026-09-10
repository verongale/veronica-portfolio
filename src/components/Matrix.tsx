import React from 'react';

interface MatrixPoint {
  title: string;
  description: string;
  bgClass: string;
  numberClass: string;
}

interface MatrixSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  points: MatrixPoint[];
}

export default function MatrixSection({ sectionTitle, sectionSubtitle, points }: MatrixSectionProps) {
  return (
    <section className="space-y-8">
      
      <div className="space-y-2">
        <h2 className="text-xs font-bold tracking-widest text-brand-muted uppercase font-sans">
          {sectionSubtitle}
        </h2>
        <p className="text-3xl font-bold tracking-tight text-brand-text font-display">
          {sectionTitle}
        </p>
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
