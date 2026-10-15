import React, { useEffect } from 'react';
import { X, Check, Layers, ExternalLink } from 'lucide-react';
import { PortfolioCategory, PORTFOLIO_DRIVE_URL } from '../data/portfolioData';

interface CategoryModalProps {
  category: PortfolioCategory | null;
  onClose: () => void;
  onInquire: (categoryName: string) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#141414] border border-[#2b2b2b] rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2b2b2b] bg-[#1c1c1c]">
          <div className="flex items-center gap-3">
            <span className="font-head font-extrabold text-base text-[#ff4a51]">{category.id}</span>
            <span className="text-xs uppercase tracking-wider text-[#a9a9a5] font-semibold">
              Category Scope &amp; Deliverables
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a9a9a5] hover:text-white hover:bg-[#2b2b2b] rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4a51]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Typographic Title block (Zero Images) */}
          <div className="p-6 bg-[#0a0a0a] border border-[#2b2b2b] border-l-4 border-l-[#e11d26] rounded">
            <span className="text-xs uppercase tracking-wider text-[#ff4a51] font-mono block mb-1">
              {category.tag}
            </span>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-head font-extrabold text-white">
              {category.name}
            </h3>
            <p className="text-sm text-[#a9a9a5] mt-3 leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Highlights & Scope */}
          <div>
            <h4 className="text-xs uppercase font-head font-bold tracking-wider text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#ff4a51]" />
              <span>Deliverables &amp; Design Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 bg-[#1c1c1c] border border-[#2b2b2b] rounded text-sm text-[#f4f4f2]"
                >
                  <Check className="w-4 h-4 text-[#ff4a51] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs uppercase font-head font-bold tracking-wider text-[#a9a9a5] mb-2.5">
              Software Used
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-head font-semibold text-[#f4f4f2]">
              {category.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#0a0a0a] border border-[#2b2b2b] rounded flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e11d26]" />
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="p-6 border-t border-[#2b2b2b] bg-[#1c1c1c] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onInquire(category.name);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-white bg-transparent border border-[#2b2b2b] hover:border-white rounded transition-colors"
          >
            Inquire About {category.name}
          </button>

          <a
            href={PORTFOLIO_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#e11d26] hover:bg-[#c4131c] transition-colors rounded flex items-center justify-center gap-2"
          >
            <span>Open in Google Drive</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
