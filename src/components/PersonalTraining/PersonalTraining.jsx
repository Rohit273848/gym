import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Dumbbell, Award, ArrowRight } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function PersonalTraining({ onSelectPlan }) {
  const containerRef = useRef(null);

  const handleSelectPt = (plan) => {
    if (onSelectPlan) {
      onSelectPlan(plan.price, plan.name);
    }
    const paymentSection = document.getElementById('payment');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} id="training" className="py-24 sm:py-32 bg-[#070709] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Heading & Plans */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              1-ON-1 PT SESSIONS
            </div>
            <h2 className="gsap-reveal-title font-heading font-black text-4xl sm:text-6xl tracking-tight leading-[0.95] uppercase text-white mb-6">
              TRAIN SMARTER. <br />
              <span className="text-red-500">GET RESULTS FASTER.</span>
            </h2>
            <p className="text-lg text-zinc-300 font-normal leading-relaxed mb-10 max-w-xl">
              {GYM_DATA.personalTraining.description}
            </p>

            {/* Plans List Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {GYM_DATA.personalTraining.plans.map((pt) => (
                <motion.div
                  key={pt.id}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between ${
                    pt.highlight
                      ? 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-950/50 border-red-600 shadow-xl shadow-red-950/30'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div>
                    <div className="inline-block px-3 py-0.5 rounded-full bg-red-950/80 border border-red-800/50 text-[10px] font-bold text-red-400 uppercase tracking-widest mb-3">
                      {pt.badge}
                    </div>
                    <h3 className="font-heading font-black text-xl text-white uppercase mb-1">
                      {pt.name}
                    </h3>
                    <div className="font-heading font-black text-3xl text-red-500 mb-4">
                      {pt.priceFormatted}
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {pt.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                          <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleSelectPt(pt)}
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs tracking-widest uppercase rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    {pt.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Trainer Showcase Image */}
          <div className="lg:col-span-5 relative group min-h-[460px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img
              src="/images/hero.png"
              alt="Fitness Trainer at Gym"
              className="gsap-clip-reveal absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-85" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-white text-base uppercase">EXPERT FORM CORRECTION</h4>
                  <p className="text-xs text-zinc-400">Maximize Muscle Engagement &amp; Prevent Injuries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
