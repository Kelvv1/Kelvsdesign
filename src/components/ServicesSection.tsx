import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-[#141414] border-b border-[#2b2b2b]" aria-labelledby="services-title">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-head font-bold uppercase tracking-[0.16em] text-[#ff4a51] mb-2">
            What I Design
          </p>
          <h2 id="services-title" className="text-3xl sm:text-4xl md:text-5xl font-head font-extrabold text-[#f4f4f2] tracking-tight">
            Design Services
          </h2>
          <p className="text-[#a9a9a5] text-base mt-3 leading-relaxed">
            Tailored visual solutions focused on commercial results, aesthetic prestige, and strategic clarity for brands of all scales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#0a0a0a] border border-[#2b2b2b] hover:border-[#e11d26] p-7 rounded flex flex-col justify-between transition-colors group"
            >
              <div>
                <span className="font-head font-extrabold text-sm text-[#ff4a51] block mb-4">
                  {service.id}
                </span>

                <h3 className="font-head font-extrabold text-xl text-[#f4f4f2] group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#a9a9a5] mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Key deliverables */}
                <div className="mt-5 space-y-2 pt-4 border-t border-[#1c1c1c]">
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#a9a9a5]">
                      <Check className="w-3.5 h-3.5 text-[#ff4a51] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#1c1c1c]">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#f4f4f2] hover:text-[#ff4a51] transition-colors py-1"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff4a51]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
