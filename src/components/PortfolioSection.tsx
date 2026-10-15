import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_DRIVE_URL, PortfolioCategory } from '../data/portfolioData';

interface PortfolioSectionProps {
  onSelectCategory: (category: PortfolioCategory) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="portfolio" className="py-20 bg-[#141414] border-b border-[#2b2b2b]" aria-labelledby="portfolio-title">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-head font-bold uppercase tracking-[0.16em] text-[#ff4a51] mb-2">
            Selected Work
          </p>
          <h2 id="portfolio-title" className="text-3xl sm:text-4xl md:text-5xl font-head font-extrabold text-[#f4f4f2] tracking-tight">
            My Portfolio
          </h2>
          <p className="text-[#a9a9a5] text-base sm:text-lg mt-3 leading-relaxed">
            My graphic design work is collected in one portfolio document covering these categories. Choose any category to open the full portfolio.
          </p>
        </div>

        {/* Typographic Tiles Grid (Exact Kelvsdesign Editorial Layout - Zero Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col justify-between min-h-[210px] p-6 bg-[#141414] border border-[#2b2b2b] rounded transition-all duration-300 hover:bg-[#e11d26] hover:border-[#e11d26] hover:-translate-y-1"
            >
              {/* Top row: Number, Scope info trigger, and Arrow */}
              <div className="flex items-center justify-between">
                <span className="font-head font-bold text-sm text-[#ff4a51] group-hover:text-white transition-colors">
                  {category.id}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onSelectCategory(category);
                    }}
                    className="p-1 text-[#a9a9a5] hover:text-white group-hover:text-white/90 rounded transition-colors"
                    title={`View ${category.name} deliverables & tools`}
                    aria-label={`View ${category.name} details`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  <a
                    href={category.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[#a9a9a5] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    aria-label={`Open ${category.name} in Google Drive`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Main Category Name & Link to Drive */}
              <a
                href={category.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block focus:outline-none"
              >
                <h3 className="font-head font-extrabold text-2xl sm:text-[1.75rem] text-[#f4f4f2] group-hover:text-white transition-colors leading-[1.1] tracking-[-0.02em]">
                  {category.name}
                </h3>
                <span className="sr-only">(opens portfolio in a new tab)</span>
              </a>

              {/* Bottom tag & preview link */}
              <div className="mt-4 pt-3 border-t border-[#2b2b2b] group-hover:border-white/20 flex items-center justify-between text-xs text-[#a9a9a5] group-hover:text-white/80 transition-colors">
                <span className="font-mono text-[11px] uppercase tracking-wider">{category.tag}</span>
                <button
                  type="button"
                  onClick={() => onSelectCategory(category)}
                  className="hover:underline cursor-pointer"
                >
                  Deliverables &amp; Tools
                </button>
              </div>
            </div>
          ))}

          {/* 06: View Full Portfolio CTA Tile */}
          <a
            href={PORTFOLIO_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between min-h-[210px] p-6 bg-[#e11d26] hover:bg-[#c4131c] border border-[#e11d26] rounded text-white transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-head font-bold text-sm text-white">
                →
              </span>
              <span className="text-xl text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>

            <div className="mt-6">
              <h3 className="font-head font-extrabold text-2xl sm:text-[1.75rem] text-white leading-[1.1] tracking-[-0.02em]">
                View Full Portfolio
              </h3>
              <span className="sr-only">(opens in a new tab)</span>
            </div>

            <div className="mt-4 pt-3 border-t border-white/25 flex items-center justify-between text-xs text-white/90 font-medium">
              <span>Drive Presentation</span>
              <span className="font-mono text-[11px] bg-black/20 px-2 py-0.5 rounded">All Projects</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
