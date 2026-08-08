import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowDown, CreditCard, ChevronRight } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { animateHero } from '../../animations/gsap/heroAnimations';
import { initHeroParallax } from '../../animations/gsap/parallax';

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const headingLinesRef = useRef([]);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef([]);
  const scrollIndicatorRef = useRef(null);

  headingLinesRef.current = [];
  statsRef.current = [];

  const addToHeadingLines = (el) => {
    if (el && !headingLinesRef.current.includes(el)) {
      headingLinesRef.current.push(el);
    }
  };

  const addToStats = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const heroCtx = animateHero(containerRef, {
      bgRef,
      overlayRef,
      headingLinesRef,
      descRef,
      buttonsRef,
      statsRef,
      scrollIndicatorRef
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
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#070709] pt-28 pb-12"
    >
      {/* Background Image in Original Colors */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero.png')` }}
      />

      {/* Dark Gradient Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-gradient-to-t from-[#070709] via-[#070709]/75 to-[#070709]/50"
      />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Eyebrow Badge with Official Logo Emblem (True Colors) */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-800/40 text-red-400 text-xs font-heading font-extrabold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg shadow-red-950/40">
            <div className="p-0.5 bg-white rounded-md flex items-center justify-center">
              <img src="/images/logo.png" alt="Fitness Heaven Logo Emblem" className="h-5 w-auto object-contain rounded" />
            </div>
            <span>Fitness Heaven Gym &amp; Sports</span>
          </div>

          {/* Main Line-by-Line Editorial Heading */}
          <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl xl:text-[9rem] tracking-tight leading-[0.88] uppercase mb-8 text-white">
            {GYM_DATA.hero.titleLines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden">
                <span
                  ref={addToHeadingLines}
                  className={`inline-block ${
                    idx === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-red-600' : ''
                  }`}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Supporting Text */}
          <p
            ref={descRef}
            className="text-lg sm:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed mb-10 text-balance"
          >
            {GYM_DATA.hero.description}
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
            <a
              href="#membership"
              className="btn-base btn-primary text-sm tracking-widest uppercase shadow-xl shadow-red-600/30"
            >
              VIEW MEMBERSHIPS <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#payment"
              className="btn-base btn-secondary text-sm tracking-widest uppercase"
            >
              PAY VIA UPI <CreditCard className="w-5 h-5 text-red-500" />
            </a>
          </div>
        </div>

        {/* Hero Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-zinc-800/80 pt-8">
          {GYM_DATA.hero.stats.map((stat, i) => (
            <div
              key={i}
              ref={addToStats}
              className="bg-zinc-950/60 border border-zinc-800/60 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-red-600/40 transition-colors"
            >
              <div className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-none mb-1">
                {stat.num}
              </div>
              <div className="text-xs font-bold text-red-500 tracking-wider uppercase mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 font-medium">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center pt-4"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors group"
          aria-label="Scroll to About Section"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">SCROLL DOWN</span>
          <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-500 animate-bounce">
            <ArrowDown className="w-4 h-4 text-red-500" />
          </div>
        </a>
      </div>
    </section>
  );
}
