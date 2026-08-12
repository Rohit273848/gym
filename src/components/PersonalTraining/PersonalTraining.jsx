import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';

export default function PersonalTraining({ onSelectPlan }) {
  const containerRef = useRef(null);

  const handleSelectPt = (plan) => {
    if (onSelectPlan) onSelectPlan(plan.price, plan.name);
    const el = document.getElementById('payment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="training"
      className="py-28 sm:py-36 bg-[#0B0B09] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── Left: Heading & Plans ── */}
          <div className="lg:col-span-7">
            <div className="section-label mb-8">1-on-1 PT Sessions</div>
            <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,5.5vw,5.5rem)] uppercase leading-[0.88] text-[#F5F3E8] mb-8">
              TRAIN SMARTER.<br />
              <span
                className="font-display"
                style={{ WebkitTextStroke: '1.5px rgba(245,243,232,0.2)', color: 'transparent' }}
              >
                GET RESULTS FASTER.
              </span>
            </h2>
            <p className="text-sm text-[#A7A79D] leading-relaxed mb-12 max-w-md">
              {GYM_DATA.personalTraining.description}
            </p>

            {/* Plans */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {GYM_DATA.personalTraining.plans.map((pt) => (
                <motion.div
                  key={pt.id}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`pricing-card ${pt.highlight ? 'featured' : ''}`}
                >
                  <div className="text-[9px] font-bold tracking-[0.18em] text-[#A7A79D] uppercase mb-3">
                    {pt.badge}
                  </div>
                  <h3 className="font-display text-2xl text-[#F5F3E8] uppercase leading-none mb-3">
                    {pt.name}
                  </h3>
                  <div className="font-display text-4xl text-[#F2D500] leading-none mb-6">
                    {pt.priceFormatted}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pt.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-[#A7A79D]">
                        <div className="w-4 h-4 rounded-full border border-[#F2D500]/30 bg-[#F2D500]/10 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#F2D500]" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleSelectPt(pt)}
                    className={`w-full py-3.5 rounded-full font-heading font-extrabold text-[11px] tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${pt.highlight
                        ? 'bg-[#F2D500] hover:bg-[#D9BE00] text-[#0B0B09] shadow-lg shadow-[#F2D500]/25'
                        : 'border border-[#292923] text-[#F5F3E8]/70 hover:border-[#F2D500] hover:text-[#F2D500] hover:bg-[#F2D500]/5'
                      }`}
                  >
                    {pt.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Large Image ── */}
          <div className="lg:col-span-5 relative group min-h-[480px] rounded-2xl overflow-hidden border border-[#292923] shadow-2xl">
            <img
              src={GYM_IMAGES.gallery.personalTraining}
              alt="Personal training session at Reshape Fitness Club"
              className="gsap-clip-reveal absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B09] via-transparent to-transparent opacity-90 pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-5 border border-[#292923]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F2D500]/10 border border-[#F2D500]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#F2D500]" />
                </div>
                <div>
                  <div className="text-xs font-heading font-black text-[#F5F3E8] uppercase tracking-wide">Expert Form Correction</div>
                  <div className="text-[10px] text-[#A7A79D] mt-0.5">Maximize results &amp; prevent injuries</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
