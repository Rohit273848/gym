import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import {
  Music, Wind, Shield, Target, Apple,
  ClipboardCheck, HeartPulse, Dumbbell, Users, Cloud, ArrowRight
} from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';
import { initFacilitiesEntrance } from '../../animations/gsap/scrollAnimations';

// Three featured facilities shown as alternating full-width rows
const FEATURED_IDS = ['08', '01', '03']; // Strength Training, Zumba, MMA
const FEATURE_IMAGES = {
  '08': { src: GYM_IMAGES.classes.strength, alt: 'Strength training floor with Jerai & Steel City equipment' },
  '01': { src: GYM_IMAGES.classes.zumba, alt: 'Zumba & yoga group fitness class in session' },
  '03': { src: GYM_IMAGES.classes.functional, alt: 'MMA & functional training zone' },
};

const ICON_MAP = {
  Music: Music, Wind: Wind, Shield: Shield, Target: Target, Apple: Apple,
  ClipboardCheck: ClipboardCheck, HeartPulse: HeartPulse, Dumbbell: Dumbbell,
  Users: Users, Cloud: Cloud,
};

export default function Facilities() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const entranceCtx = initFacilitiesEntrance(containerRef);
    return () => { entranceCtx && entranceCtx.revert(); };
  }, { scope: containerRef });

  const featuredFacilities = FEATURED_IDS.map(id =>
    GYM_DATA.facilities.find(f => f.id === id)
  ).filter(Boolean);

  const otherFacilities = GYM_DATA.facilities.filter(
    f => !FEATURED_IDS.includes(f.id)
  );

  const getIcon = (iconName) => {
    const IconComponent = ICON_MAP[iconName] || Dumbbell;
    return <IconComponent className="w-5 h-5 text-white/40" />;
  };

  return (
    <section
      ref={containerRef}
      id="facilities"
      className="py-28 sm:py-36 bg-[#0a0a0d] relative"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Section header ── */}
        <div className="text-center mb-20 sm:mb-28">
          <div className="section-label mb-8 mx-auto w-fit gsap-fac-heading">
            Train · Recover · Transform
          </div>
          <h2 className="gsap-fac-heading font-display text-[clamp(2.2rem,6vw,6.5rem)] uppercase leading-[0.88] text-white">
            NO DISTRACTIONS. NO GIMMICKS.
          </h2>
          <h2 className="gsap-fac-heading font-display text-[clamp(2.2rem,6vw,6.5rem)] uppercase leading-[0.88]"
            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}>
            JUST STRENGTH
          </h2>
          <p className="gsap-fac-subheading text-sm text-white/35 max-w-sm mx-auto mt-8 leading-relaxed">
            Everything you need to train harder, recover better, and stay consistent.
          </p>
        </div>

        {/* ── Alternating Feature Rows ── */}
        <div>
          {featuredFacilities.map((fac, idx) => {
            const imgData = FEATURE_IMAGES[fac.id];
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={fac.id}
                className="feature-row"
              >
                {/* Image side */}
                <div
                  className={`feature-img relative overflow-hidden rounded-2xl ${isReversed ? 'order-last lg:order-last' : 'order-first'}`}
                >
                  <img
                    src={imgData.src}
                    alt={imgData.alt}
                    loading="lazy"
                    className="gsap-clip-reveal w-full h-[420px] sm:h-[480px] object-cover img-mono rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl pointer-events-none" />
                  {/* Index number watermark */}
                  <div className="absolute top-5 right-6 font-display text-6xl text-white/[0.06] leading-none pointer-events-none select-none">
                    0{idx + 1}
                  </div>
                </div>

                {/* Text side */}
                <div className={`feature-text ${isReversed ? 'order-first lg:order-first' : 'order-last'}`}>
                  <div className="text-[9px] font-bold tracking-[0.2em] text-white/25 uppercase mb-5">
                    {fac.id} / Facility
                  </div>
                  <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.9] text-white mb-6">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-sm">
                    {fac.description}
                  </p>
                  <a
                    href="#membership"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-widest text-white/60 hover:text-white uppercase transition-colors group"
                  >
                    See Plan
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Remaining Facilities – Compact Grid ── */}
        <div className="mt-20 pt-16 border-t border-white/[0.06]">
          <h3 className="font-heading font-black text-sm text-white/30 tracking-[0.2em] uppercase mb-10">
            More Offerings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {otherFacilities.map((fac) => {
              return (
                <motion.div
                  key={fac.id}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="gsap-fac-item group flex items-start gap-4 py-5 border-b border-white/[0.05] cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0">
                    {getIcon(fac.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-white/70 group-hover:text-white transition-colors mb-1">
                      {fac.title}
                    </h4>
                    <p className="text-xs text-white/25 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
