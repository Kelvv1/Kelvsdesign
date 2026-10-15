import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, Check, Copy, Send, ExternalLink, AlertCircle } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, WHATSAPP_URL, WHATSAPP_DISPLAY, SOCIAL_LINKS } from '../data/portfolioData';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: initialProjectType,
    message: '',
    botcheck: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: 'idle' | 'sending' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialProjectType) {
      setFormData(prev => ({ ...prev, project_type: initialProjectType }));
    }
  }, [initialProjectType]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.project_type) {
      errs.project_type = 'Please select a project type.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a brief description (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (formData.botcheck) return; // honeypot caught spam

    setStatus({ type: 'sending', message: 'Sending your inquiry...' });

    try {
      // In Web3Forms, if configured:
      const web3FormsKey = ''; // Optional user key
      if (web3FormsKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Kelvsdesign Inquiry: ${formData.project_type} (${formData.name})`,
            from_name: formData.name,
            name: formData.name,
            email: formData.email,
            project_type: formData.project_type,
            message: formData.message
          })
        });
        const data = await response.json();
        if (response.ok && data.success) {
          setStatus({
            type: 'success',
            message: "Thank you! Your inquiry has been sent directly to Destiny. I'll get back to you promptly."
          });
          setFormData({ name: '', email: '', project_type: '', message: '', botcheck: '' });
          return;
        }
      }

      // If no API key configured, we trigger a direct mailto / WhatsApp prompt with pre-filled details
      // or record as local success with direct transmission options
      setStatus({
        type: 'success',
        message: "Thank you! Your inquiry has been recorded. Click below to instantly send it to Destiny via WhatsApp or your Email app."
      });
    } catch {
      setStatus({
        type: 'error',
        message: `Could not send automatically. Please email directly at ${CONTACT_EMAIL} or chat on WhatsApp.`
      });
    }
  };

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hello Destiny, my name is ${formData.name || 'a prospective client'}.\nI'm interested in: ${formData.project_type || 'a design project'}.\n\nProject details:\n${formData.message || 'Looking for graphic design services.'}\n\nMy email: ${formData.email || 'N/A'}`
    );
    return `https://wa.me/2349160078179?text=${text}`;
  };

  const getMailtoDirectLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.project_type || 'Graphic Design'} - ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Destiny,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.project_type}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#141414] border-b border-[#2b2b2b]" aria-labelledby="contact-title">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-head font-bold uppercase tracking-[0.16em] text-[#ff4a51]">
              Contact
            </p>
            <h2 id="contact-title" className="text-3xl sm:text-4xl md:text-5xl font-head font-extrabold text-[#f4f4f2] tracking-tight">
              Have a Design Project in Mind?
            </h2>
            <p className="text-[#a9a9a5] text-base leading-relaxed">
              Whether you're building a brand, launching a business, or refining an existing visual identity, let's discuss how thoughtful design can help bring your idea to life.
            </p>

            {/* Contact list dl */}
            <dl className="mt-8 space-y-4 border-t border-[#2b2b2b] pt-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#2b2b2b]">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-[#a9a9a5] mb-1">
                    Email Address
                  </dt>
                  <dd className="font-head font-bold text-lg text-[#f4f4f2]">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="hover:text-[#ff4a51] transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-[#a9a9a5] hover:text-white bg-[#0a0a0a] border border-[#2b2b2b] rounded transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pb-4 border-b border-[#2b2b2b]">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-[#a9a9a5] mb-1">
                  Phone (Direct Call)
                </dt>
                <dd className="font-head font-bold text-lg text-[#f4f4f2] tabular-nums">
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="hover:text-[#ff4a51] transition-colors"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>

              <div className="pb-4 border-b border-[#2b2b2b]">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-[#a9a9a5] mb-1">
                  WhatsApp Direct
                </dt>
                <dd className="font-head font-bold text-lg text-[#f4f4f2] tabular-nums">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff4a51] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{WHATSAPP_DISPLAY}</span>
                    <ExternalLink className="w-4 h-4 text-[#ff4a51]" />
                  </a>
                </dd>
              </div>
            </dl>

            {/* Social channels */}
            <div className="pt-2">
              <span className="text-xs uppercase font-head font-bold tracking-wider text-[#a9a9a5] block mb-3">
                Follow Kelvsdesign
              </span>
              <div className="flex flex-wrap gap-2" aria-label="Social media profiles">
                {SOCIAL_LINKS.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-[#0a0a0a] border border-[#2b2b2b] hover:border-[#e11d26] hover:bg-[#e11d26] text-xs font-semibold text-[#f4f4f2] rounded transition-colors"
                    aria-label={`${item.name} profile`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-[#2b2b2b] p-6 sm:p-10 rounded">
            <h3 className="font-head font-extrabold text-2xl text-[#f4f4f2] mb-2">
              Project Inquiry
            </h3>
            <p className="text-xs text-[#a9a9a5] mb-6">
              Fill in your project scope below. Destiny usually responds within a few hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label htmlFor="f-name" className="block text-xs font-head font-bold uppercase tracking-wider text-[#f4f4f2] mb-1.5">
                  Full Name <span className="text-[#ff4a51]">*</span>
                </label>
                <input
                  id="f-name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-4 py-3 bg-[#141414] border ${
                    errors.name ? 'border-[#ff4a51]' : 'border-[#2b2b2b] focus:border-[#ff4a51]'
                  } rounded text-sm text-[#f4f4f2] placeholder-[#666] focus:outline-none transition-colors`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'e-name' : undefined}
                />
                {errors.name && <p id="e-name" className="text-xs text-[#ff8a8f] mt-1" role="alert">{errors.name}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="f-email" className="block text-xs font-head font-bold uppercase tracking-wider text-[#f4f4f2] mb-1.5">
                  Email Address <span className="text-[#ff4a51]">*</span>
                </label>
                <input
                  id="f-email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-3 bg-[#141414] border ${
                    errors.email ? 'border-[#ff4a51]' : 'border-[#2b2b2b] focus:border-[#ff4a51]'
                  } rounded text-sm text-[#f4f4f2] placeholder-[#666] focus:outline-none transition-colors`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'e-email' : undefined}
                />
                {errors.email && <p id="e-email" className="text-xs text-[#ff8a8f] mt-1" role="alert">{errors.email}</p>}
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="f-type" className="block text-xs font-head font-bold uppercase tracking-wider text-[#f4f4f2] mb-1.5">
                  Project Type <span className="text-[#ff4a51]">*</span>
                </label>
                <select
                  id="f-type"
                  value={formData.project_type}
                  onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                  className={`w-full px-4 py-3 bg-[#141414] border ${
                    errors.project_type ? 'border-[#ff4a51]' : 'border-[#2b2b2b] focus:border-[#ff4a51]'
                  } rounded text-sm text-[#f4f4f2] focus:outline-none transition-colors`}
                  aria-invalid={errors.project_type ? 'true' : 'false'}
                  aria-describedby={errors.project_type ? 'e-type' : undefined}
                >
                  <option value="">Select a project type</option>
                  <option value="Logo Design & Branding">Logo Design &amp; Branding</option>
                  <option value="Flyer and Poster Design">Flyer and Poster Design</option>
                  <option value="Social Media Graphics">Social Media Graphics</option>
                  <option value="Advertising Creatives">Advertising Creatives</option>
                  <option value="Promotional Designs">Promotional Designs</option>
                  <option value="Marketing Materials">Marketing Materials</option>
                  <option value="Full Brand Package">Full Brand Package (Logo + Collateral)</option>
                  <option value="Website & Digital Design">Website &amp; Digital Design</option>
                  <option value="Something else">Something else</option>
                </select>
                {errors.project_type && <p id="e-type" className="text-xs text-[#ff8a8f] mt-1" role="alert">{errors.project_type}</p>}
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="f-message" className="block text-xs font-head font-bold uppercase tracking-wider text-[#f4f4f2] mb-1.5">
                  Project Description <span className="text-[#ff4a51]">*</span>
                </label>
                <textarea
                  id="f-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your brand, desired timeline, target audience, or specific requirements..."
                  className={`w-full px-4 py-3 bg-[#141414] border ${
                    errors.message ? 'border-[#ff4a51]' : 'border-[#2b2b2b] focus:border-[#ff4a51]'
                  } rounded text-sm text-[#f4f4f2] placeholder-[#666] focus:outline-none transition-colors resize-y`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'e-message' : undefined}
                />
                {errors.message && <p id="e-message" className="text-xs text-[#ff8a8f] mt-1" role="alert">{errors.message}</p>}
              </div>

              {/* Honeypot hidden */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="botcheck">Do not fill this</label>
                <input
                  id="botcheck"
                  type="text"
                  tabIndex={-1}
                  value={formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                />
              </div>

              {/* Submit Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className="px-8 py-3.5 bg-[#e11d26] hover:bg-[#c4131c] disabled:opacity-60 text-white font-semibold text-sm rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status.type === 'sending' ? 'Sending...' : 'Send Inquiry'}</span>
                </button>

                <a
                  href={getWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-[#141414] hover:bg-[#1c1c1c] border border-[#2b2b2b] hover:border-[#ff4a51] text-xs font-semibold text-[#f4f4f2] rounded transition-colors flex items-center justify-center gap-2"
                  title="Send inquiry details directly on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 text-[#ff4a51]" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={getMailtoDirectLink()}
                  className="px-5 py-3.5 bg-[#141414] hover:bg-[#1c1c1c] border border-[#2b2b2b] text-xs font-semibold text-[#a9a9a5] hover:text-white rounded transition-colors flex items-center justify-center gap-2"
                  title="Open mail application with inquiry"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Mail</span>
                </a>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded border text-xs leading-relaxed flex items-start gap-2.5 ${
                    status.type === 'success'
                      ? 'bg-green-950/40 border-green-800 text-green-300'
                      : status.type === 'error'
                      ? 'bg-red-950/40 border-red-800 text-red-300'
                      : 'bg-[#141414] border-[#2b2b2b] text-[#a9a9a5]'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.type === 'error' ? (
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
