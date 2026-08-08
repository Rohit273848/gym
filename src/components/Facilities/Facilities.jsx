import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import {
  Music,
  Wind,
  Shield,
  Target,
  Apple,
  ClipboardCheck,
  HeartPulse,
  Dumbbell,
  Users,
  Cloud
} from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { initFacilitiesEntrance } from '../../animations/gsap/scrollAnimations';

export default function Facilities() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const entranceCtx = initFacilitiesEntrance(containerRef);
    return () => {
      entranceCtx && entranceCtx.revert();
    };
  }, { scope: containerRef });

  const getIcon = (iconName) => {
    const props = { className: "w-6 h-6 text-red-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-red-400" };
    switch (iconName) {
      case 'Music': return <Music {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Target': return <Target {...props} />;
      case 'Apple': return <Apple {...props} />;
      case 'ClipboardCheck': return <ClipboardCheck {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'Dumbbell': return <Dumbbell {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      default: return <Dumbbell {...props} />;
    }
  };

  const stats = [
    { num: "10+", label: "FITNESS OFFERINGS" },
    { num: "5000+", label: "SQ. FT. SPACE" },
    { num: "100%", label: "PREMIUM EQUIPMENT" }
  ];

  return (
    <section
      ref={containerRef}
      id="facilities"
      className="py-24 sm:py-32 bg-[#070709] border-t border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          {/* Eyebrow */}
          <div className="gsap-fac-heading inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-heading font-extrabold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            TRAIN • RECOVER • TRANSFORM
          </div>

          {/* Large Dominant Heading */}
          <h2 className="gsap-fac-heading font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.92] uppercase text-white mb-6">
            OUR FACILITIES <br />
            <span className="text-red-500">&amp; OFFERINGS</span>
          </h2>

          {/* Subheading */}
          <p className="gsap-fac-subheading text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-prose mb-10">
            Everything you need to train harder, recover better, and stay consistent.
          </p>

          {/* Statistics Row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-zinc-800/80 pt-6">
            {stats.map((st, i) => (
              <div key={i} className="gsap-fac-stat flex flex-col">
                <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-none mb-1">
                  {st.num}
                </span>
                <span className="text-[10px] sm:text-xs font-heading font-extrabold text-red-500 tracking-wider uppercase">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Desktop / 1-Column Mobile Editorial Grid (Zero Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          {GYM_DATA.facilities.map((fac) => (
            <motion.div
              key={fac.id}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="gsap-fac-item group relative p-6 sm:p-7 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/70 hover:border-red-900/50 transition-all duration-300 flex items-start gap-6"
            >
              {/* Number Anchor */}
              <div className="gsap-fac-num font-heading font-black text-2xl sm:text-3xl text-red-500 tracking-tight shrink-0 pt-1">
                {fac.id}
              </div>

              {/* Content Block */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center shrink-0">
                    {getIcon(fac.icon)}
                  </div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-red-400">
                    {fac.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-300 font-normal leading-relaxed pl-1">
                  {fac.description}
                </p>

                {/* Animated Accent Line */}
                <div className="mt-4 w-full bg-zinc-800/50 h-[1px] relative overflow-hidden">
                  <div className="gsap-fac-line absolute top-0 left-0 bottom-0 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-transparent transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
