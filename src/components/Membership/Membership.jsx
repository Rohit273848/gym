import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Trophy } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Membership({ onSelectPlan }) {
  const handlePlanClick = (plan) => {
    if (onSelectPlan) {
      onSelectPlan(plan.price, plan.name);
    }
    const paymentSection = document.getElementById('payment');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="membership" className="py-24 sm:py-32 bg-[#09090c] relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            TRANSPARENT PRICING
          </div>
          <h2 className="gsap-reveal-title font-heading font-black text-4xl sm:text-6xl tracking-tight leading-[0.95] uppercase text-white mb-4">
            CHOOSE YOUR <span className="text-red-500">MEMBERSHIP.</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 font-normal">
            "Simple plans. Serious results."
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch membership-cards-grid">
          {GYM_DATA.memberships.map((plan) => {
            const isPopular = plan.popular;
            const isBestValue = plan.bestValue;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`gsap-membership-card relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-red-950/40 border-2 border-red-600 shadow-2xl shadow-red-900/20'
                    : isBestValue
                    ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-500/50 shadow-2xl'
                    : 'bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {/* Popular / Best Value Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-[11px] font-heading font-black tracking-widest uppercase rounded-full shadow-lg shadow-red-600/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" /> {plan.badge}
                  </div>
                )}
                {isBestValue && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-[11px] font-heading font-black tracking-widest uppercase rounded-full shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 fill-current" /> {plan.badge}
                  </div>
                )}

                <div>
                  {/* Card Title & Price */}
                  <div className="text-center pt-2 pb-6 border-b border-zinc-800/80 mb-6">
                    <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-2">
                      {plan.name}
                    </h3>
                    <div className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-1">
                      {plan.priceFormatted}
                    </div>
                    <div className="text-xs text-zinc-400 font-medium">
                      {plan.period}
                    </div>
                    {plan.savings && (
                      <div className="text-xs font-bold text-red-400 mt-2">
                        {plan.savings}
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
                        <div className="w-5 h-5 rounded-full bg-red-950/80 border border-red-800/60 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-red-500" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanClick(plan)}
                  className={`w-full py-4 rounded-full font-heading font-extrabold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-600/30 hover:shadow-red-600/50'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white hover:text-red-400 border border-zinc-700'
                  }`}
                >
                  {plan.ctaText} <Zap className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
