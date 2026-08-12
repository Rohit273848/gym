import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Check, Sparkles, Award } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';

export default function Trainers() {
  const coach = GYM_DATA.featuredCoach;

  return (
    <section id="trainers" className="py-28 sm:py-36 bg-[#0B0B09] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F2D500]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mb-6 mx-auto w-fit">Featured Coach</div>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,5.5vw,5.5rem)] uppercase leading-[0.88] text-[#F5F3E8] mb-6">
            EXPERT COACHING &amp; <br />
            <span style={{ WebkitTextStroke: '1.5px rgba(245,243,232,0.25)', color: 'transparent' }}>
              PERSONALIZED GUIDANCE
            </span>
          </h2>
          <p className="text-sm text-[#A7A79D] leading-relaxed max-w-xl mx-auto">
            At Reshape Fitness Club, our mentors provide dedicated support in effective workout techniques, custom diet planning, and goal-oriented fitness progression.
          </p>
        </div>

        {/* Featured Coach Highlight Card */}
        <div className="bg-[#1A1A17] border border-[#292923] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Top: Coach Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-[#292923] shadow-2xl group bg-[#0B0B09]">
              <img
                src={GYM_IMAGES.trainers.coachMukesh}
                alt="Coach Mukesh Admane - Head Coach & Fitness Mentor at Reshape Fitness Club"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B09] via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3.5 border border-[#292923]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F2D500]/10 border border-[#F2D500]/30 flex items-center justify-center shrink-0 text-[#F2D500]">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-black text-[#F5F3E8] uppercase tracking-wide">
                      {coach.name}
                    </div>
                    <div className="text-[10px] text-[#F2D500] font-bold uppercase tracking-wider mt-0.5">
                      {coach.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Bottom: Coach Information & Selling Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2D500]/10 border border-[#F2D500]/30 rounded-full text-[10px] font-bold text-[#F2D500] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Featured Mentor
            </div>

            <h3 className="font-display text-4xl sm:text-5xl uppercase text-[#F5F3E8] leading-none">
              {coach.name}
            </h3>

            <p className="font-display text-lg sm:text-xl text-[#F2D500] uppercase tracking-wide font-bold italic">
              "{coach.tagline}"
            </p>

            <p className="text-sm text-[#A7A79D] leading-relaxed">
              {coach.description}
            </p>

            {/* Core Competencies / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {coach.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#0B0B09] border border-[#292923] rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#F2D500]/10 border border-[#F2D500]/30 flex items-center justify-center text-[#F2D500] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-heading font-bold text-[#F5F3E8]/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#membership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F2D500] hover:bg-[#D9BE00] text-[#0B0B09] font-heading font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#F2D500]/25"
              >
                Join &amp; Train with Guidance
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#F5F3E8]/25 hover:border-[#F2D500] text-[#F5F3E8] hover:text-[#F2D500] hover:bg-[#F2D500]/5 font-heading font-bold text-xs uppercase tracking-widest rounded-full transition-colors"
              >
                Inquire at Reception
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
