import React, { useState } from 'react';
import { TOOLS } from '../data/portfolioData';
import { Sparkles, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Adobe Creative Suite', 'Vector & Publishing', 'UI & Digital'];

  const filteredTools = selectedCategory === 'All'
    ? TOOLS
    : TOOLS.filter(t => t.category === selectedCategory);

  return (
    <section id="about" className="py-20 bg-[#0a0a0a] border-b border-[#2b2b2b]" aria-labelledby="about-title">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-head font-bold uppercase tracking-[0.16em] text-[#ff4a51]">
              Hello
            </p>
            <h2 id="about-title" className="text-3xl sm:text-4xl md:text-5xl font-head font-extrabold text-[#f4f4f2] tracking-tight">
              About Kelvsdesign
            </h2>

            <div className="space-y-4 text-base text-[#a9a9a5] leading-relaxed">
              <p>
                My name is <strong className="text-[#f4f4f2] font-semibold">Destiny Ebaluegbefo</strong>, and I am a Graphics Designer and Website Developer with over four years of experience creating professional and engaging visual content for businesses and brands.
              </p>
              <p>
                I specialize primarily in graphic design, creating clean, modern, and visually appealing designs that help businesses communicate effectively and maintain a strong visual identity. My experience spans social media graphics, promotional flyers, marketing collateral, branding assets, banners, presentations, and other digital content.
              </p>
              <p>
                Throughout my journey, I have completed numerous branding and marketing projects, creating over 100 design assets including logos, flyers, social media content, brand kits, and promotional materials. I use industry-standard creative software to design high-quality graphics tailored precisely to each brand’s identity, audience, and goals.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#141414] border border-[#2b2b2b] rounded">
                <div className="flex items-center gap-2 text-white font-head font-bold text-sm mb-1">
                  <Award className="w-4 h-4 text-[#ff4a51]" />
                  <span>4+ Years Craft</span>
                </div>
                <p className="text-xs text-[#a9a9a5]">
                  Consistent, battle-tested execution across diverse brand categories.
                </p>
              </div>

              <div className="p-4 bg-[#141414] border border-[#2b2b2b] rounded">
                <div className="flex items-center gap-2 text-white font-head font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-[#ff4a51]" />
                  <span>100+ Assets</span>
                </div>
                <p className="text-xs text-[#a9a9a5]">
                  Comprehensive suite of logos, flyers, decks, and social campaigns.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tools of My Craft */}
          <div className="lg:col-span-6 bg-[#141414] border border-[#2b2b2b] p-6 sm:p-8 rounded">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#2b2b2b]">
              <div>
                <h3 className="font-head font-extrabold text-2xl text-[#f4f4f2]">
                  Tools of My Craft
                </h3>
                <p className="text-xs text-[#a9a9a5] mt-0.5">
                  Production-grade creative software used across client workflows
                </p>
              </div>
              <span className="font-mono text-xs text-[#ff4a51] px-2.5 py-1 bg-[#1c1c1c] border border-[#2b2b2b] rounded self-start sm:self-auto">
                {TOOLS.length} Software Tools
              </span>
            </div>

            {/* Filter tags for tools */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#e11d26] text-white'
                      : 'bg-[#1c1c1c] text-[#a9a9a5] hover:text-white border border-[#2b2b2b]'
                  }`}
                >
                  {cat === 'All' ? 'All Tools' : cat}
                </button>
              ))}
            </div>

            {/* Tool items list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredTools.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-[#0a0a0a] border border-[#2b2b2b] hover:border-[#e11d26] hover:bg-[#1c1c1c] rounded transition-colors group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#e11d26] group-hover:scale-125 transition-transform shrink-0" aria-hidden="true" />
                  <span className="font-head font-bold text-sm text-[#f4f4f2] truncate">
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
