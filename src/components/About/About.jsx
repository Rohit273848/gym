import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';
import AnimatedCounter from '../animations/AnimatedCounter';

const welcomeFeatures = [
  { id: 'space', title: '5000 Sq. Ft. Space', desc: 'Fully air-conditioned floor offering maximum comfort.' },
  { id: 'jerai', title: '100% Jerai Fitness Equipment', desc: 'World-class professional-grade machines.' },
  { id: 'strength', title: 'Advanced Strength Training', desc: 'Original Steel City Strength dumbbells & weight plates.' },
  { id: 'convenience', title: '24-Hour Access Ready Facility', desc: 'Separate changing rooms, steam room & showers.' },
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#070709] relative overflow-hidden">
      {/* Subtle noise */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            <div className="section-label mb-8">Our Philosophy</div>

            <h2 className="gsap-reveal-title font-display text-[clamp(2.6rem,5.5vw,5.5rem)] uppercase leading-[0.9] text-white mb-8">
              WELCOME TO<br />
              <span className="font-display">{GYM_DATA.brand.name}</span>
            </h2>

            <p className="text-sm sm:text-base text-white/40 font-normal leading-relaxed max-w-md mb-12">
              {GYM_DATA.about.description}
            </p>

            {/* Feature list */}
            <ul className="space-y-5">
              {welcomeFeatures.map((feat, idx) => (
                <motion.li
                  key={feat.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-white/70" />
                  </div>
                  <div>
                    <div className="text-sm font-heading font-bold text-white tracking-wide">
                      {feat.title}
                    </div>
                    <div className="text-xs text-white/35 mt-0.5 leading-relaxed">
                      {feat.desc}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: Editorial Overlapping Image Composition ── */}
          <div className="img-composition relative pb-16 lg:pb-0 mt-8 lg:mt-0">
            {/* Main large image */}
            <img
              src={GYM_IMAGES.gallery.strengthZone}
              alt="Premium gym equipment – Steel City & Jerai fitness floor"
              loading="lazy"
              className="gsap-clip-reveal img-main rounded-2xl shadow-2xl object-cover h-[400px] w-full"
            />
            {/* Overlapping secondary image */}
            <img
              src={GYM_IMAGES.gallery.interior}
              alt="Gym interior and functional training zone"
              loading="lazy"
              className="gsap-clip-reveal img-secondary rounded-xl shadow-2xl border-[5px] border-[#070709] object-cover h-[220px] w-[260px]"
            />

            {/* Decorative stat badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-5 left-[10%] z-20"
            >
              <div className="glass-panel rounded-xl px-4 py-3 text-center shadow-2xl">
                <div className="font-display text-3xl text-white leading-none">
                  <AnimatedCounter value={5000} duration={1.8} />
                </div>
                <div className="text-[9px] font-bold text-white/40 tracking-[0.15em] uppercase mt-1">Sq. Ft.</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

