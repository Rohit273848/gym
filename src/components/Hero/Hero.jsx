import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ChevronRight } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';
import { animateHero } from '../../animations/gsap/heroAnimations';
import { initHeroParallax } from '../../animations/gsap/parallax';

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const headingLinesRef = useRef([]);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const circleRef = useRef(null);

  headingLinesRef.current = [];

  const addToHeadingLines = (el) => {
    if (el && !headingLinesRef.current.includes(el)) headingLinesRef.current.push(el);
  };

  useGSAP(() => {
    const heroCtx = animateHero(containerRef, {
      bgRef,
      overlayRef,
      headingLinesRef,
      descRef,
      buttonsRef,
      circleRef,
    });
    const parallaxCtx = initHeroParallax(containerRef, bgRef, descRef);

    return () => {
      heroCtx && heroCtx.revert();
      parallaxCtx && parallaxCtx.revert();
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen lg:h-screen lg:max-h-screen bg-[#0a0a0c] overflow-hidden text-white flex flex-col pt-20 lg:pt-24"
    >
      {/* ── FULL SCREEN BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter brightness-[0.82] contrast-[1.1] transition-all duration-700"
          style={{ backgroundImage: `url(${GYM_IMAGES.hero.gym})` }}
          aria-hidden="true"
        />
        <div ref={overlayRef} className="absolute inset-0 z-10 pointer-events-none">
          {/* Fullscreen gradient overlay: heavier on left for text contrast, subtle on right for full image view */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/75 via-45% to-black/30" />
          {/* Vertical top & bottom subtle fades */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#070709]/95 via-[#070709]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent" />
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Headline */}
          <h1 className="font-display text-[clamp(3rem,7vw,6.2rem)] font-black uppercase leading-[0.86] tracking-[-0.01em] text-white select-none">
            {GYM_DATA.hero.titleLines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden py-0.5">
                <span
                  ref={addToHeadingLines}
                  className="inline-block"
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Floating scroll circle + description */}
        <div className="mt-10 lg:mt-12 flex items-start gap-6 max-w-md lg:ml-[26%]">
          <motion.a
            ref={circleRef}
            href="#about"
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to About section"
            className="group shrink-0 w-16 h-16 rounded-full border border-white/25 flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            <ArrowDownRight className="w-6 h-6 text-white/80 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>
          <p ref={descRef} className="text-sm text-white/55 leading-relaxed pt-2">
            {GYM_DATA.hero.description}
          </p>
        </div>
      </div>

      {/* ── BOTTOM CTA ROW ── */}
      <div
        ref={buttonsRef}
        className="relative z-20 max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 pb-10 lg:pb-14 flex items-center gap-4"
      >
        <motion.a
          href="#membership"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="group inline-flex items-center gap-1 bg-white text-black text-[13px] font-semibold tracking-wide pl-6 pr-4 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300"
        >
          Join Now
          <span className="flex items-center -space-x-2 ml-1 opacity-70">
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 delay-75" />
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 delay-150" />
          </span>
        </motion.a>

        <motion.a
          href="#trial"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center bg-transparent border border-white/25 text-white text-[13px] font-semibold tracking-wide px-6 py-3.5 rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300"
        >
          Free Trial
        </motion.a>
      </div>
    </section>
  );
}