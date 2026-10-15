import React from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2b2b2b] py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2b2b2b]">
          {/* Wordmark */}
          <a
            href="#home"
            className="font-head font-extrabold text-xl tracking-tight text-[#f4f4f2] hover:text-white transition-colors"
            aria-label="Kelvsdesign – back to top"
          >
            Kelvsdesign<span className="text-[#ff4a51]">.</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#a9a9a5]" aria-label="Footer navigation">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#brands" className="hover:text-white transition-colors">Brands</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-xs text-[#a9a9a5]">
            {SOCIAL_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff4a51] transition-colors"
                aria-label={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a9a9a5]">
          <p>© {currentYear} Kelvsdesign · Ebaluegbefo Destiny. All rights reserved.</p>
          <p className="text-[11px] font-mono">
            Graphic Design · Visual Identities · Marketing Collateral
          </p>
        </div>
      </div>
    </footer>
  );
};
