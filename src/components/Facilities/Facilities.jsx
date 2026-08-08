import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, Dumbbell, ShieldAlert, HeartPulse, Flame } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { initPinnedFacilities } from '../../animations/gsap/scrollAnimations';

export default function Facilities() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const pinnedCtx = initPinnedFacilities(containerRef, (newIndex) => {
      setActiveIndex(newIndex);
    });

    return () => {
      pinnedCtx && pinnedCtx.revert();
    };
  }, { scope: containerRef });

  const currentFacility = GYM_DATA.facilities[activeIndex] || GYM_DATA.facilities[0];

  return (
    <section
      ref={containerRef}
      id="facilities"
      className="py-20 lg:py-28 bg-[#070709] border-t border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              OUR FACILITIES &amp; OFFERINGS
            </div>
            <h2 className="gsap-reveal-title font-heading font-black text-4xl sm:text-6xl tracking-tight leading-[0.95] uppercase text-white">
              EVERYTHING YOU NEED <br />
              <span className="text-red-500">TO LEVEL UP.</span>
            </h2>
          </div>
          <div className="text-sm font-semibold text-zinc-400 tracking-widest uppercase">
            10 WORLD-CLASS ZONES &amp; SERVICES
          </div>
        </div>

        {/* Desktop Experience: Pinned Large Interactive Showcase */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[560px]">
          {/* Left Column: Number Index & Navigation List */}
          <div className="col-span-4 flex flex-col justify-center space-y-2 pr-4 border-r border-zinc-800/80">
            {GYM_DATA.facilities.map((fac, idx) => (
              <button
                key={fac.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                  idx === activeIndex
                    ? 'bg-red-950/40 border border-red-800/50 text-white font-bold'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-heading font-extrabold text-sm tracking-wider ${
                      idx === activeIndex ? 'text-red-500' : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                  >
                    {fac.id}
                  </span>
                  <span className="font-heading font-bold text-sm tracking-wider uppercase">
                    {fac.title}
                  </span>
                </div>
                {idx === activeIndex && <ChevronRight className="w-4 h-4 text-red-500" />}
              </button>
            ))}
          </div>

          {/* Right Column: Featured Image & Information Display */}
          <div className="col-span-8 relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/60 shadow-2xl h-[540px]">
            {/* Background Image with Fade Animation */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentFacility.id}
                src={currentFacility.image}
                alt={currentFacility.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover filter brightness-90"
              />
            </AnimatePresence>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent" />

            {/* Info Card Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold tracking-widest uppercase rounded-full">
                  {currentFacility.category}
                </span>
                <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                  {currentFacility.tag}
                </span>
              </div>

              <motion.h3
                key={`title-${currentFacility.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-3"
              >
                {currentFacility.id} / {currentFacility.title}
              </motion.h3>

              <motion.p
                key={`desc-${currentFacility.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-base text-zinc-300 font-normal leading-relaxed max-w-2xl"
              >
                {currentFacility.description}
              </motion.p>

              {/* Progress Indicator Bar */}
              <div className="w-full bg-zinc-800/80 h-1.5 rounded-full mt-6 overflow-hidden">
                <div
                  className="bg-red-600 h-full transition-all duration-300"
                  style={{ width: `${((activeIndex + 1) / GYM_DATA.facilities.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Experience: Clean Vertical Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {GYM_DATA.facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-zinc-900/70 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                <span className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full">
                  {facility.category}
                </span>
                <span className="absolute bottom-3 left-4 font-heading font-black text-xl text-white">
                  {facility.id} / {facility.title}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-4">
                  {facility.description}
                </p>
                <div className="text-xs font-bold text-red-500 tracking-wider uppercase">
                  ✓ {facility.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
