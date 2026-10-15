/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { CategoryModal } from './components/CategoryModal';
import { BrandsSection } from './components/BrandsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PortfolioCategory } from './data/portfolioData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null);
  const [inquiryProjectType, setInquiryProjectType] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setInquiryProjectType(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireFromModal = (categoryTitle: string) => {
    setInquiryProjectType(categoryTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactNavClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f2] selection:bg-[#e11d26] selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-[#e11d26] text-white font-semibold rounded text-sm"
      >
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar onContactClick={handleContactNavClick} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <PortfolioSection onSelectCategory={(cat) => setSelectedCategory(cat)} />
        <BrandsSection />
        <ServicesSection onSelectService={handleSelectService} />
        <AboutSection />
        <ContactSection initialProjectType={inquiryProjectType} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Category Lightbox Modal */}
      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onInquire={handleInquireFromModal}
      />
    </div>
  );
}
