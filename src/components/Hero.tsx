import React, { useState } from 'react';
import { Mail, MessageSquare, ArrowUpRight, CheckCircle2, Copy } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, WHATSAPP_URL, STATS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="pt-16 sm:pt-20 md:pt-28 pb-16 border-b border-[#2b2b2b]" aria-labelledby="hero-title">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs font-head font-bold uppercase tracking-[0.16em] text-[#ff4a51]">
            Graphic Designer · Over 4 Years of Experience
          </p>

          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl md:text-7xl font-head font-extrabold tracking-[-0.045em] leading-[1.03] text-[#f4f4f2]"
          >
            Designing Visuals That Make Brands <span className="text-[#ff4a51]">Stand Out.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#a9a9a5] leading-relaxed max-w-[58ch]">
            Hi, I'm <strong className="text-white font-medium">Ebaluegbefo Destiny</strong>, the designer behind Kelvsdesign. I create thoughtful, visually compelling designs that help brands communicate their identity, capture attention, and connect with their audiences.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#e11d26] hover:bg-[#c4131c] transition-colors rounded shadow-sm"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[#f4f4f2] bg-transparent border-2 border-[#f4f4f2] hover:bg-[#f4f4f2] hover:text-[#0a0a0a] transition-all rounded"
            >
              Let's Work Together
            </a>
          </div>

          {/* Quick contact channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 max-w-[780px]" aria-label="Quick contact channels">
            {/* Email */}
            <div className="relative group">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex flex-col p-4 bg-[#141414] border border-[#2b2b2b] hover:border-[#e11d26] hover:bg-[#1c1c1c] rounded transition-all"
              >
                <span className="text-[11px] uppercase font-semibold tracking-wider text-[#a9a9a5]">
                  Email
                </span>
                <strong className="font-head text-base text-white mt-1 truncate">
                  Send a message
                </strong>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="absolute top-3 right-3 p-1.5 text-[#a9a9a5] hover:text-white hover:bg-[#2b2b2b] rounded transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-4 bg-[#141414] border border-[#2b2b2b] hover:border-[#e11d26] hover:bg-[#1c1c1c] rounded transition-all group"
            >
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#a9a9a5]">
                WhatsApp
              </span>
              <strong className="font-head text-base text-white mt-1 flex items-center justify-between">
                <span>Chat now</span>
                <ArrowUpRight className="w-4 h-4 text-[#a9a9a5] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </strong>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex flex-col p-4 bg-[#141414] border border-[#2b2b2b] hover:border-[#e11d26] hover:bg-[#1c1c1c] rounded transition-all group"
            >
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#a9a9a5]">
                Phone
              </span>
              <strong className="font-head text-base text-white mt-1 tabular-nums">
                {CONTACT_PHONE_DISPLAY}
              </strong>
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-[#2b2b2b]/60">
          {STATS.map((stat, i) => (
            <div key={i} className="p-5 bg-[#141414] border border-[#2b2b2b] rounded">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-[#f4f4f2] tabular-nums block">
                {stat.value}
              </span>
              <strong className="font-head text-sm font-bold text-[#ff4a51] block mt-1">
                {stat.label}
              </strong>
              <span className="text-xs text-[#a9a9a5] block mt-1 leading-snug">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
