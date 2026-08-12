import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import {
  Car, Wifi, Bath, CreditCard, Check, ArrowRight, Dumbbell, HeartPulse, Shield, Apple, Activity, Users
} from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';
import { initFacilitiesEntrance } from '../../animations/gsap/scrollAnimations';

const FEATURED_IDS = ['01', '02', '03'];
const FEATURE_IMAGES = {
  '01': { src: GYM_IMAGES.classes.strength, alt: 'Top-notch machinery and strength training floor at Reshape Fitness Club' },
  '02': { src: GYM_IMAGES.classes.cardio, alt: 'Cardio equipment and endurance floor' },
  '03': { src: GYM_IMAGES.gallery.personalTraining, alt: 'Expert coaching and guidance zone' },
};

export default function Facilities() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const entranceCtx = initFacilitiesEntrance(containerRef);
    return () => { entranceCtx && entranceCtx.revert(); };
  }, { scope: containerRef });

  const amenityIcons = {
    parking: Car,
    wifi: Wifi,
    restrooms: Bath,
    payments: CreditCard,
  };

  return (
    <section
      ref={containerRef}
      id="facilities"
      className="py-28 sm:py-36 bg-[#0B0B09] relative"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Section header ── */}
        <div className="text-center mb-20 sm:mb-24">
          <div className="section-label mb-8 mx-auto w-fit gsap-fac-heading">
            Facilities &amp; Amenities
          </div>
          <h2 className="gsap-fac-heading font-display text-[clamp(2.2rem,6vw,6.5rem)] uppercase leading-[0.88] text-[#F5F3E8]">
            TOP-NOTCH EQUIPMENT &amp;
          </h2>
          <h2 className="gsap-fac-heading font-display text-[clamp(2.2rem,6vw,6.5rem)] uppercase leading-[0.88]"
            style={{ WebkitTextStroke: '1.5px rgba(245,243,232,0.2)', color: 'transparent' }}>
            PREMIUM AMENITIES
          </h2>
          <p className="gsap-fac-subheading text-sm text-[#A7A79D] max-w-md mx-auto mt-6 leading-relaxed">
            Everything you need for a comfortable, motivating, and goal-oriented workout experience.
          </p>
        </div>

        {/* ── Compact Amenities & Quick Facts Grid ── */}
        <div className="mb-24">
          <div className="text-xs font-heading font-black tracking-[0.2em] text-[#F2D500] uppercase mb-8">
            Gym Amenities &amp; Quick Facts
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GYM_DATA.amenities.map((amenity) => {
              const IconComp = amenityIcons[amenity.id] || Check;
              return (
                <motion.div
                  key={amenity.id}
                  whileHover={{ y: -6 }}
                  className="bg-[#1A1A17] border border-[#292923] hover:border-[#F2D500]/40 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F2D500]/10 border border-[#F2D500]/30 flex items-center justify-center text-[#F2D500] mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#F5F3E8] uppercase tracking-tight mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-xs text-[#A7A79D] mb-4 leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-[#292923]">
                    {amenity.options.map((opt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#F5F3E8]/80 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#F2D500] shrink-0" />
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Alternating Feature Rows ── */}
        <div>
          <div className="text-xs font-heading font-black tracking-[0.2em] text-[#A7A79D] uppercase mb-10">
            Workout Floor &amp; Facilities
          </div>

          {GYM_DATA.facilities.slice(0, 3).map((fac, idx) => {
            const imgData = FEATURE_IMAGES[fac.id] || { src: GYM_IMAGES.gallery.strengthZone, alt: fac.title };
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={fac.id}
                className="feature-row mb-16 last:mb-0"
              >
                {/* Image side */}
                <div
                  className={`feature-img relative overflow-hidden rounded-2xl ${isReversed ? 'order-last lg:order-last' : 'order-first'}`}
                >
                  <img
                    src={imgData.src}
                    alt={imgData.alt}
                    loading="lazy"
                    className="gsap-clip-reveal w-full h-[380px] sm:h-[440px] object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl pointer-events-none" />
                  <div className="absolute top-5 right-6 font-display text-6xl text-[#F5F3E8]/[0.06] leading-none pointer-events-none select-none">
                    0{idx + 1}
                  </div>
                </div>

                {/* Text side */}
                <div className={`feature-text ${isReversed ? 'order-first lg:order-first' : 'order-last'}`}>
                  <div className="text-[9px] font-bold tracking-[0.2em] text-[#A7A79D] uppercase mb-4">
                    Facility 0{idx + 1}
                  </div>
                  <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] uppercase leading-[0.9] text-[#F5F3E8] mb-5">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-[#A7A79D] leading-relaxed mb-8 max-w-sm">
                    {fac.description}
                  </p>
                  <a
                    href="#membership"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-widest text-[#F5F3E8]/70 hover:text-[#F2D500] uppercase transition-colors group"
                  >
                    Explore Memberships
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
