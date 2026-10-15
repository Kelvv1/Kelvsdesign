import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_URL } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp contact">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-40 w-14 h-14 bg-[#e11d26] hover:bg-[#c4131c] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group"
        aria-label="Chat directly with Kelvsdesign on WhatsApp"
        title="Chat with Destiny on WhatsApp"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <MessageSquare className="w-6 h-6 fill-current" />
        
        {/* Tooltip on desktop */}
        <span className="hidden md:group-hover:inline-block absolute right-16 px-3 py-1.5 bg-[#141414] border border-[#2b2b2b] text-white text-xs font-semibold rounded whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
