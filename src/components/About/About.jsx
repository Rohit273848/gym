import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';
import AnimatedCounter from '../animations/AnimatedCounter';


export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#0B0B09] relative overflow-hidden">
      {/* Subtle noise */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            <div className="section-label mb-8">Our Philosophy</div>

            <h2 className="gsap-reveal-title font-display text-[clamp(2.6rem,5.5vw,5.5rem)] uppercase leading-[0.9] text-[#F5F3E8] mb-8">
              WELCOME TO<br />
              <span className="font-display text-[#F2D500]">{GYM_DATA.brand.name}</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A7A79D] font-normal leading-relaxed max-w-md mb-12">
              {GYM_DATA.about.description}
            </p>

            {/* Feature list */}
            <ul className="space-y-5">
              {GYM_DATA.about.features.map((feat, idx) => (
                <motion.li
                  key={feat.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-5 h-5 rounded-full border border-[#F2D500]/40 bg-[#F2D500]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#F2D500]" />
                  </div>
                  <div>
                    <div className="text-sm font-heading font-bold text-[#F5F3E8] tracking-wide">
                      {feat.title}
                    </div>
                    <div className="text-xs text-[#A7A79D] mt-0.5 leading-relaxed">
                      {feat.description}
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
              src={GYM_IMAGES.gallery.yellowAccents}
              alt="Quality fitness machinery at Reshape Fitness Club"
              loading="lazy"
              className="gsap-clip-reveal img-main rounded-2xl shadow-2xl object-cover h-[400px] w-full"
            />
            {/* Overlapping secondary image */}
            <img
              src={GYM_IMAGES.gallery.mirrorReflection}
              alt="Motivating workout environment at Reshape Fitness Club"
              loading="lazy"
              className="gsap-clip-reveal img-secondary rounded-xl shadow-2xl border-[5px] border-[#0B0B09] object-cover h-[220px] w-[260px]"
            />

            {/* Decorative stat badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-5 left-[10%] z-20"
            >
              <div className="glass-panel rounded-xl px-4 py-3 text-center shadow-2xl border border-[#292923]">
                <div className="font-display text-2xl text-[#F2D500] leading-none">
                  5★ RATED
                </div>
                <div className="text-[9px] font-bold text-[#A7A79D] tracking-[0.15em] uppercase mt-1">PRIME LOCATION</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

