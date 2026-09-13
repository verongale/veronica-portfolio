import React, { useState } from 'react';

interface CodeModalProps {
  isIt: boolean;
  githubUrl: string;
}

export default function CodeModal({
  isIt,
  githubUrl,
}: CodeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const content = isIt
    ? {
        message: (
          <>
            Sì, avrei potuto usare un'app già esistente.
            <br />
            Ma dov'è il divertimento?
          </>
        ),
        viewCode: 'Vedi Codice →',
        later: 'Magari dopo',
      }
    : {
        message: (
          <>
            Yes, I could have used an existing app.
            <br />
            But where's the fun in that?
          </>
        ),
        viewCode: 'View Code →',
        later: 'Maybe later',
      };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-xs font-bold text-brand-text hover:text-brand-cyan hover:cursor-pointer transition-colors flex items-center space-x-1"
      >
        {content.viewCode}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-brand-cyan/20 bg-brand-bg p-8 shadow-2xl"
          >
            <p className="text-lg md:text-xl text-brand-text leading-relaxed">
              {content.message}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-brand-cyan text-brand-bg font-semibold hover:opacity-90 transition-opacity"
              >
                {content.viewCode}
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-white/10 text-brand-text hover:bg-white/5 transition-colors"
              >
                {content.later}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}