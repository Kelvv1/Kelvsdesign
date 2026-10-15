import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DRIVE_URL } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'brands', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2b2b2b] transition-all">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px] gap-8">
          {/* Zone 1: Wordmark */}
          <a
            href="#home"
            className="font-head font-extrabold text-2xl tracking-tight text-[#f4f4f2] whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4a51]"
            aria-label="Kelvsdesign – home"
          >
            Kelvsdesign<span className="text-[#ff4a51] inline-block transition-transform group-hover:scale-125">.</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            <a
              href="#home"
              className={`px-3 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                activeSection === 'home'
                  ? 'text-white border-b-2 border-[#e11d26]'
                  : 'text-[#a9a9a5] hover:text-white hover:bg-[#1c1c1c]'
              }`}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className={`px-3 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                activeSection === 'portfolio'
                  ? 'text-white border-b-2 border-[#e11d26]'
                  : 'text-[#a9a9a5] hover:text-white hover:bg-[#1c1c1c]'
              }`}
            >
              Portfolio
            </a>
            <a
              href="#brands"
              className={`px-3 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                activeSection === 'brands'
                  ? 'text-white border-b-2 border-[#e11d26]'
                  : 'text-[#a9a9a5] hover:text-white hover:bg-[#1c1c1c]'
              }`}
            >
              Brands
            </a>
            <a
              href="#services"
              className={`px-3 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                activeSection === 'services'
                  ? 'text-white border-b-2 border-[#e11d26]'
                  : 'text-[#a9a9a5] hover:text-white hover:bg-[#1c1c1c]'
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`px-3 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                activeSection === 'about'
                  ? 'text-white border-b-2 border-[#e11d26]'
                  : 'text-[#a9a9a5] hover:text-white hover:bg-[#1c1c1c]'
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`px-3 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                activeSection === 'contact'
                  ? 'text-white border-b-2 border-[#e11d26]'
                  : 'text-[#a9a9a5] hover:text-white hover:bg-[#1c1c1c]'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PORTFOLIO_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#e11d26] hover:bg-[#c4131c] transition-colors rounded whitespace-nowrap shrink-0"
              title="Open full portfolio on Google Drive"
            >
              <span>Drive Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#f4f4f2] hover:bg-[#1c1c1c] rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4a51]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-[#2b2b2b] px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              <a
                href="#home"
                onClick={closeMenu}
                className="py-2.5 text-base font-medium text-white border-b border-[#1c1c1c]"
              >
                Home
              </a>
              <a
                href="#portfolio"
                onClick={closeMenu}
                className="py-2.5 text-base font-medium text-white border-b border-[#1c1c1c]"
              >
                Portfolio
              </a>
              <a
                href="#brands"
                onClick={closeMenu}
                className="py-2.5 text-base font-medium text-white border-b border-[#1c1c1c]"
              >
                Brands
              </a>
              <a
                href="#services"
                onClick={closeMenu}
                className="py-2.5 text-base font-medium text-white border-b border-[#1c1c1c]"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="py-2.5 text-base font-medium text-white border-b border-[#1c1c1c]"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="py-2.5 text-base font-medium text-white"
              >
                Contact
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full text-center py-3 text-sm font-semibold text-white bg-[#e11d26] hover:bg-[#c4131c] rounded flex items-center justify-center gap-2"
              >
                <span>Open Drive Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
