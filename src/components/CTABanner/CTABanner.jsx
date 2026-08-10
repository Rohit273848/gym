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
    <section id="cta-banner" className="py-10 sm:py-16 bg-[#070709] px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden noise-overlay border border-red-900/30"
          style={{ background: 'linear-gradient(135deg, #111115 0%, #15090b 50%, #12121a 100%)' }}
        >
          {/* Subtle ambient red background light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Decorative large text watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-display text-[16vw] text-white/[0.02] whitespace-nowrap uppercase">
              FITNESS HEAVEN
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 sm:py-28">
            <div className="section-label mb-8">Limited Time Offer</div>

            <h2 className="gsap-reveal-title font-display text-[clamp(2.8rem,7vw,7rem)] uppercase leading-[0.88] text-white mb-4">
              START TRAINING TODAY
            </h2>
            <p
              className="font-display text-[clamp(1.6rem,4vw,3.5rem)] uppercase leading-[0.9] text-red-500"
            >
              Get 35% Discount &amp; Join Now
            </p>

            <p className="text-sm text-white/40 mt-8 mb-12 max-w-xs leading-relaxed">
              Get your free fitness assessment and take the first step towards your transformation.
            </p>

            {/* Email CTA */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 px-6 py-4 bg-red-950/40 border border-red-800/40 rounded-full text-red-300 text-sm font-heading font-bold tracking-widest"
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
                  className="flex-1 w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.15] focus:border-red-500 rounded-full text-white text-sm placeholder:text-white/25 outline-none transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="btn-base shrink-0 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-full font-heading font-black text-[11px] tracking-widest uppercase flex items-center gap-2 shadow-xl shadow-red-600/35 hover:shadow-red-600/55 transition-all"
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
