import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ChevronRight, Dumbbell, ShieldCheck, Clock, Sparkles, MapPin } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';
import { animateHero } from '../../animations/gsap/heroAnimations';
import { initHeroParallax } from '../../animations/gsap/parallax';

const FEATURE_ICONS = {
  Dumbbell,
  ShieldCheck,
  Clock,
  Sparkles,
};

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const headingLinesRef = useRef([]);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const circleRef = useRef(null);
  const statsRef = useRef([]);

  headingLinesRef.current = [];
  statsRef.current = [];

  const addToHeadingLines = (el) => {
    if (el && !headingLinesRef.current.includes(el)) headingLinesRef.current.push(el);
  };

  const addToStats = (el) => {
    if (el && !statsRef.current.includes(el)) statsRef.current.push(el);
  };

  useGSAP(() => {
    const heroCtx = animateHero(containerRef, {
      bgRef,
      overlayRef,
      headingLinesRef,
      descRef,
      buttonsRef,
      circleRef,
      statsRef,
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
      className="relative min-h-[100dvh] bg-[#0B0B09] text-[#F5F3E8] flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* ── FULL SCREEN BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div

          ref={bgRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter brightness-[0.8] contrast-[1.1] transition-all duration-700"
          style={{ backgroundImage: `url(${GYM_IMAGES.hero.gym})` }}
          aria-hidden="true"
        />
        <div ref={overlayRef} className="absolute inset-0 z-10 pointer-events-none">
          {/* Responsive gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B09]/95 via-[#0B0B09]/85 to-[#0B0B09]/95 sm:bg-gradient-to-r sm:from-[#0B0B09] sm:via-[#0B0B09]/90 sm:via-55% sm:to-black/40" />
          {/* Vertical top & bottom subtle fades */}
          <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-[#0B0B09]/95 via-[#0B0B09]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 bg-gradient-to-t from-[#0B0B09] via-[#0B0B09]/80 to-transparent" />
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center py-4 sm:py-6">
        {/* Highlights / Badges */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap mb-4 sm:mb-5">
          {GYM_DATA.hero.highlights.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-[#1A1A17]/90 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#F5F3E8] border border-[#292923]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2D500]" />
              {item.num} {item.label}
            </span>
          ))}
        </div>

        <div className="max-w-xl lg:max-w-3xl">
          {/* Headline */}
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.8rem)] font-black uppercase leading-[0.88] sm:leading-[0.86] tracking-[-0.01em] text-[#F5F3E8] select-none">
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
          <p className="mt-2.5 sm:mt-3.5 font-display text-sm xs:text-base sm:text-xl lg:text-2xl text-[#F2D500] uppercase tracking-wide font-bold leading-snug">
            "{GYM_DATA.hero.tagline}"
          </p>
        </div>

        {/* Key Features Grid (Detailed Gym Info) */}
        {GYM_DATA.hero.features && (
          <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl">
            {GYM_DATA.hero.features.map((feat, idx) => {
              const IconComp = FEATURE_ICONS[feat.icon] || Dumbbell;
              return (
                <div
                  key={idx}
                  ref={addToStats}
                  className="group bg-[#141411]/85 hover:bg-[#1C1C18] backdrop-blur-md border border-[#292923] hover:border-[#F2D500]/50 p-2.5 sm:p-3 rounded-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1.5 rounded-lg bg-[#F2D500]/10 text-[#F2D500] group-hover:bg-[#F2D500] group-hover:text-[#0B0B09] transition-colors shrink-0">
                      <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <h4 className="text-[11px] sm:text-xs font-heading font-bold text-[#F5F3E8] leading-tight">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#A7A79D] leading-tight line-clamp-2">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating scroll circle + detailed description & location */}
        <div className="mt-4 sm:mt-6 flex flex-row items-center gap-3 sm:gap-5 max-w-3xl">
          <motion.a
            ref={circleRef}
            href="#about"
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to About section"
            className="group shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#F2D500]/40 bg-[#141411]/90 backdrop-blur-md flex items-center justify-center hover:border-[#F2D500] hover:bg-[#F2D500]/20 transition-all duration-300 shadow-lg shadow-black/50"
          >
            <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#F2D500] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>

          <div className="space-y-1 min-w-0 flex-1">
            <p ref={descRef} className="text-xs sm:text-sm text-[#A7A79D] leading-relaxed">
              {GYM_DATA.hero.description}
            </p>
            {GYM_DATA.hero.quickInfo && (
              <p className="hidden sm:flex items-center gap-2 text-xs text-[#F5F3E8]/70 pt-0.5">
                <a
                  href={GYM_DATA.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#F2D500] hover:underline"
                >
                  <MapPin className="w-3 h-3" />
                  {GYM_DATA.hero.quickInfo.location}
                </a>
                <span className="text-[#292923]">•</span>
                <span>{GYM_DATA.hero.quickInfo.timing}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ROW ── */}
      <div
        ref={buttonsRef}
        className="relative z-20 max-w-[1400px] w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-12 pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4"
      >
        <motion.a
          href="#membership"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="group inline-flex items-center justify-center gap-1 bg-[#F2D500] hover:bg-[#D9BE00] text-[#0B0B09] text-xs sm:text-[13px] font-heading font-extrabold tracking-wide px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#F2D500]/20 text-center"
        >
          Join Now
          <span className="flex items-center -space-x-2 ml-1 opacity-70">
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 delay-75" />
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 delay-150" />
          </span>
        </motion.a>

        <motion.a
          href="#membership"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center justify-center bg-transparent border border-[#F5F3E8]/25 text-[#F5F3E8] text-xs sm:text-[13px] font-heading font-bold tracking-wide px-6 py-3.5 rounded-full hover:border-[#F2D500] hover:text-[#F2D500] hover:bg-[#F2D500]/5 transition-all duration-300 text-center"
        >
          Explore Membership
        </motion.a>
      </div>
    </section>
  );
}