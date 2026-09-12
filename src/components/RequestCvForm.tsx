import React, { useState } from 'react';

interface RequestCvFormProps {
  
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
}

export default function RequestCvForm({
  
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  submitLabel,
  successMessage,
  errorMessage,
}: RequestCvFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus('idle');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/request-cv', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 max-w-2xl">
      

      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label
            htmlFor="cv-name"
            className="block text-sm font-mono uppercase tracking-wider text-brand-cyan mb-2"
          >
            {nameLabel}
          </label>

          <input
            id="cv-name"
            name="name"
            type="text"
            placeholder={namePlaceholder}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-white/10 text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-cyan transition-colors disabled:opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="cv-email"
            className="block text-sm font-mono uppercase tracking-wider text-brand-cyan mb-2"
          >
            {emailLabel}
          </label>

          <input
            id="cv-email"
            name="email"
            type="email"
            placeholder={emailPlaceholder}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-white/10 text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-cyan transition-colors disabled:opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="cv-message"
            className="block text-sm font-mono uppercase tracking-wider text-brand-cyan mb-2"
          >
            {messageLabel}
          </label>

          <textarea
            id="cv-message"
            name="message"
            rows={5}
            placeholder={messagePlaceholder}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-white/10 text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-cyan transition-colors resize-y disabled:opacity-50"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex px-5 py-3 rounded-lg bg-brand-cyan text-brand-bg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : submitLabel}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-sm text-brand-cyan leading-relaxed">
            {successMessage}
          </p>
        )}

        {status === 'error' && (
          <p className="text-sm text-red-400 leading-relaxed">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}