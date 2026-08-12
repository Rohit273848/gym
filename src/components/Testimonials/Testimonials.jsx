import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-[#0B0B09] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#F2D500]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mb-6 mx-auto w-fit">Member Feedback</div>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,5.5vw,5.5rem)] uppercase leading-[0.88] text-[#F5F3E8] mb-6">
            WHAT MEMBERS <br />
            <span style={{ WebkitTextStroke: '1.5px rgba(245,243,232,0.25)', color: 'transparent' }}>
              SAY ABOUT US
            </span>
          </h2>
          <p className="text-sm text-[#A7A79D] leading-relaxed max-w-lg mx-auto">
            Authentic experiences from members training at Reshape Fitness Club.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {GYM_DATA.testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#1A1A17] border border-[#292923] hover:border-[#F2D500]/40 p-8 rounded-3xl relative flex flex-col justify-between shadow-xl group transition-all duration-300"
            >
              {/* Quote mark decoration */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/[0.04] group-hover:text-[#F2D500]/10 transition-colors pointer-events-none" />

              <div>
                {/* 5-Star Rating Visual */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F2D500] text-[#F2D500]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#F5F3E8] leading-relaxed font-normal italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Card Footer: Simple Label */}
              <div className="pt-4 border-t border-[#292923] flex items-center justify-between">
                <span className="text-xs font-heading font-bold text-[#A7A79D] uppercase tracking-wider">
                  Member Testimonial
                </span>
                <span className="px-3 py-1 bg-[#F2D500]/10 border border-[#F2D500]/30 rounded-full text-[10px] font-bold text-[#F2D500] uppercase tracking-widest">
                  Reshape Member
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
