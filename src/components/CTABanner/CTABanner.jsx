import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    const el = document.getElementById('membership');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="cta-banner" className="py-10 sm:py-16 bg-[#0B0B09] px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden noise-overlay border border-[#292923]"
          style={{ background: 'linear-gradient(135deg, #1A1A17 0%, #151512 50%, #0B0B09 100%)' }}
        >
          {/* Subtle ambient yellow background light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F2D500]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Decorative large text watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-display text-[16vw] text-[#F5F3E8]/[0.02] whitespace-nowrap uppercase">
              RESHAPE FITNESS
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 sm:py-28">
            <div className="section-label mb-8">Limited Time Offer</div>

            <h2 className="gsap-reveal-title font-display text-[clamp(2.8rem,7vw,7rem)] uppercase leading-[0.88] text-[#F5F3E8] mb-4">
              START TRAINING TODAY
            </h2>
            <p
              className="font-display text-[clamp(1.6rem,4vw,3.5rem)] uppercase leading-[0.9] text-[#F2D500]"
            >
              Get 35% Discount &amp; Join Now
            </p>

            <p className="text-sm text-[#A7A79D] mt-8 mb-12 max-w-xs leading-relaxed">
              Get your free fitness assessment and take the first step towards your transformation.
            </p>

            {/* Email CTA */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 px-6 py-4 bg-[#F2D500]/10 border border-[#F2D500]/30 rounded-full text-[#F5F3E8] text-sm font-heading font-bold tracking-widest"
              >
                ✓ &nbsp; We'll be in touch soon!
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
              >
                <label htmlFor="cta-email" className="sr-only">Your email address</label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 w-full px-5 py-3.5 bg-[#0B0B09] border border-[#292923] focus:border-[#F2D500] rounded-full text-[#F5F3E8] text-sm placeholder:text-[#77776F] outline-none transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="btn-base shrink-0 px-7 py-3.5 bg-[#F2D500] hover:bg-[#D9BE00] text-[#0B0B09] rounded-full font-heading font-extrabold text-[11px] tracking-widest uppercase flex items-center gap-2 shadow-xl shadow-[#F2D500]/25 transition-all"
                >
                  Join Now <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
