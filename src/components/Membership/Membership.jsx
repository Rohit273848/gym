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
    <section id="membership" className="py-28 sm:py-36 bg-[#0B0B09] relative">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="section-label mb-8 mx-auto w-fit">Transparent Pricing</div>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,6vw,6rem)] uppercase leading-[0.88] text-[#F5F3E8]">
            AFFORDABLE PLANS.
          </h2>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,6vw,6rem)] uppercase leading-[0.88] text-[#F2D500]">
            BUILT FOR YOU
          </h2>
          <p className="text-sm text-[#A7A79D] mt-6 max-w-xs mx-auto">
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
                plan.popular ? 'featured border-[#F2D500] shadow-[#F2D500]/10' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F2D500] text-[#0B0B09] text-[10px] font-heading font-extrabold tracking-widest uppercase rounded-full shadow-lg shadow-[#F2D500]/25">
                  MOST POPULAR
                </div>
              )}
              {plan.bestValue && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 border border-[#292923] bg-[#1A1A17] text-[#F5F3E8] text-[10px] font-heading font-extrabold tracking-widest uppercase rounded-full">
                  BEST VALUE
                </div>
              )}

              {/* Card top: name + price */}
              <div className="pb-6 mb-6 border-b border-[#292923]">
                <div className="text-[10px] font-bold tracking-[0.18em] text-[#A7A79D] uppercase mb-4">
                  {plan.period}
                </div>
                <h3 className="font-display text-3xl text-[#F5F3E8] uppercase leading-none mb-5">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none ${plan.popular ? 'text-[#F2D500]' : 'text-[#F5F3E8]'}`}>
                    {plan.priceFormatted}
                  </span>
                </div>
                {plan.savings && (
                  <div className={`text-[10px] mt-2 font-medium ${plan.popular ? 'text-[#F2D500] font-bold' : 'text-[#A7A79D]'}`}>
                    {plan.savings}
                  </div>
                )}
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#A7A79D]">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'border-[#F2D500]/40 bg-[#F2D500]/10' : 'border-[#292923]'}`}>
                      <Check className={`w-2.5 h-2.5 ${plan.popular ? 'text-[#F2D500]' : 'text-[#F5F3E8]/60'}`} />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() => handlePlanClick(plan)}
                className={`w-full py-3.5 rounded-full font-heading font-extrabold text-[11px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-[#F2D500] hover:bg-[#D9BE00] text-[#0B0B09] shadow-lg shadow-[#F2D500]/25'
                    : 'bg-transparent border border-[#292923] text-[#F5F3E8]/70 hover:border-[#F2D500] hover:text-[#F2D500] hover:bg-[#F2D500]/5'
                }`}
              >
                {plan.ctaText}
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
