import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Maximize, Dumbbell, Zap, Sparkles, Bath, CheckCircle2 } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function About() {
  const containerRef = useRef(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Maximize': return <Maximize className="w-6 h-6 text-red-500" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-red-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-red-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-red-500" />;
      case 'Bath': return <Bath className="w-6 h-6 text-red-500" />;
      default: return <CheckCircle2 className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section ref={containerRef} id="about" className="py-24 sm:py-32 bg-[#09090c] relative overflow-hidden">
      {/* Background Subtle Red Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            WHO WE ARE
          </div>
          <h2 className="gsap-reveal-title font-heading font-black text-4xl sm:text-6xl tracking-tight leading-[0.95] uppercase text-white mb-6">
            MORE THAN A GYM. <br />
            <span className="text-red-500">IT'S YOUR FITNESS HOME.</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
            {GYM_DATA.about.description}
          </p>
        </div>

        {/* Feature Grid & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Image Reveal Showcase */}
          <div className="lg:col-span-5 relative group min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl">
            <img
              src="/images/strength.png"
              alt="Steel City Strength Equipment Zone"
              className="gsap-clip-reveal absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-950/80 backdrop-blur-md rounded-2xl border border-zinc-800">
              <span className="text-xs font-bold text-red-500 tracking-wider uppercase block mb-1">
                EQUIPMENT STANDARD
              </span>
              <h3 className="font-heading font-black text-xl text-white uppercase">
                100% Original Jerai &amp; Steel City Iron
              </h3>
            </div>
          </div>

          {/* Right Column: Features Stagger Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 about-features-container">
            {GYM_DATA.about.features.map((feature, idx) => (
              <div
                key={feature.id}
                className={`gsap-feature-card bg-zinc-900/60 border border-zinc-800/80 hover:border-red-600/50 p-6 sm:p-7 rounded-3xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  idx === 4 ? 'sm:col-span-2 bg-gradient-to-r from-zinc-900/90 to-red-950/30 border-red-900/30' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-red-950/60 border border-red-800/40 flex items-center justify-center mb-5">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="font-heading font-extrabold text-lg text-white uppercase tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
