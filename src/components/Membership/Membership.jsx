import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Membership({ onSelectPlan }) {
  const handlePlanClick = (plan) => {
    if (onSelectPlan) onSelectPlan(plan.price, plan.name);
    const el = document.getElementById('payment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="membership" className="py-28 sm:py-36 bg-[#070709] relative">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="section-label mb-8 mx-auto w-fit">Transparent Pricing</div>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,6vw,6rem)] uppercase leading-[0.88] text-white">
            AFFORDABLE PLANS.
          </h2>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,6vw,6rem)] uppercase leading-[0.88] text-red-500">
            BUILT FOR YOU
          </h2>
          <p className="text-sm text-white/40 mt-6 max-w-xs mx-auto">
            Simple plans. Serious results.
          </p>
        </div>

        {/* ── Pricing Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-end membership-cards-grid">
          {GYM_DATA.memberships.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: plan.popular ? -18 : -6, transition: { duration: 0.25 } }}
              className={`gsap-membership-card pricing-card relative ${
                plan.popular ? 'featured border-red-600/80 shadow-red-950/40' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-[10px] font-heading font-black tracking-widest uppercase rounded-full shadow-lg shadow-red-600/40">
                  MOST POPULAR
                </div>
              )}
              {plan.bestValue && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 border border-white/20 text-white text-[10px] font-heading font-black tracking-widest uppercase rounded-full">
                  BEST VALUE
                </div>
              )}

              {/* Card top: name + price */}
              <div className="pb-6 mb-6 border-b border-white/[0.07]">
                <div className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase mb-4">
                  {plan.period}
                </div>
                <h3 className="font-display text-3xl text-white uppercase leading-none mb-5">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none ${plan.popular ? 'text-red-500' : 'text-white'}`}>
                    {plan.priceFormatted}
                  </span>
                </div>
                {plan.savings && (
                  <div className={`text-[10px] mt-2 font-medium ${plan.popular ? 'text-red-400 font-bold' : 'text-white/30'}`}>
                    {plan.savings}
                  </div>
                )}
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-white/50">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'border-red-500/40 bg-red-950/30' : 'border-white/15'}`}>
                      <Check className={`w-2.5 h-2.5 ${plan.popular ? 'text-red-400' : 'text-white/60'}`} />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handlePlanClick(plan)}
                className={`w-full py-3.5 rounded-full font-heading font-extrabold text-[11px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30'
                    : 'bg-transparent border border-white/15 text-white/70 hover:border-white/35 hover:text-white'
                }`}
              >
                {plan.ctaText}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
