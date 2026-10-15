import React from 'react';
import { CLIENT_BRANDS } from '../data/portfolioData';
import { Building2 } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className="py-20 bg-[#0a0a0a] border-b border-[#2b2b2b]" aria-labelledby="brands-title">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-head font-bold uppercase tracking-[0.16em] text-[#ff4a51] mb-2 flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-[#e11d26]" />
            <span>Trusted By</span>
          </p>
          <h2 id="brands-title" className="text-3xl sm:text-4xl md:text-5xl font-head font-extrabold text-[#f4f4f2] tracking-tight">
            Brands I've Worked With
          </h2>
          <p className="text-[#a9a9a5] text-base mt-3 leading-relaxed">
            Collaborating with dynamic startups, growing businesses, and established ventures to build visual identities, promotional campaigns, and brand equity.
          </p>
        </div>

        {/* Brands Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" aria-label="Client brands list">
          {CLIENT_BRANDS.map((brand, i) => (
            <li
              key={i}
              className="bg-[#141414] border border-[#2b2b2b] border-t-4 border-t-[#e11d26] p-6 rounded-b transition-transform hover:-translate-y-1 hover:border-[#3b3b3b] hover:border-t-[#ff4a51] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#a9a9a5] block mb-2">
                  {brand.category}
                </span>
                <h3 className="font-head font-extrabold text-xl text-[#f4f4f2]">
                  {brand.name}
                </h3>
                <p className="text-xs text-[#a9a9a5] mt-2.5 leading-relaxed">
                  {brand.intro}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1c1c1c] flex items-center justify-between text-[11px] text-[#a9a9a5]">
                <span className="font-medium text-[#f4f4f2]">Graphic Assets</span>
                <span className="font-mono text-[#ff4a51]">Delivered</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
