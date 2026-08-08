import React, { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);

  const features = [
    {
      num: "01",
      title: "5000 SQ. FT. SPACE",
      description: "Fully air-conditioned floor offering maximum comfort and motivation."
    },
    {
      num: "02",
      title: "100% JERAI FITNESS EQUIPMENT",
      description: "World-class professional-grade machines."
    },
    {
      num: "03",
      title: "ADVANCED STRENGTH TRAINING",
      description: "Original Steel City Strength dumbbells and weight plates."
    },
    {
      num: "04",
      title: "HEALTH & NUTRITION",
      description: "Premium pre-workout supplements, protein powder and creatine."
    },
    {
      num: "05",
      title: "YOUR CONVENIENCE",
      description: "Separate changing rooms, shower facilities and steam room."
    }
  ];

  return (
    <section ref={containerRef} id="about" className="py-24 sm:py-32 bg-[#09090c] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-heading font-extrabold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            OUR PHILOSOPHY
          </div>
          <h2 className="gsap-reveal-title font-heading font-black text-4xl sm:text-6xl tracking-tight leading-[0.95] uppercase text-white mb-6">
            MORE THAN A GYM. <br />
            <span className="text-red-500">IT'S YOUR FITNESS HOME.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-prose">
            Fitness Heaven Gym &amp; Sports is a premium unisex fitness center designed for both men and women, offering a comfortable and motivating environment to transform your body and mind.
          </p>
        </div>

        {/* Editorial Layout: Left Image + Right Numbered List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Premium Photography */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img
              src="/images/strength.png"
              alt="Steel City Strength dumbbells and Jerai equipment floor"
              loading="lazy"
              className="gsap-clip-reveal absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-950/85 backdrop-blur-md rounded-2xl border border-zinc-800">
              <div className="text-xs font-heading font-extrabold text-red-500 tracking-widest uppercase mb-1">
                EQUIPMENT STANDARD
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase">
                100% Original Jerai &amp; Steel City Iron
              </h3>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Items */}
          <div className="lg:col-span-7 space-y-4 about-features-container">
            {features.map((item, idx) => (
              <div
                key={item.num}
                className={`gsap-feature-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex items-start gap-6 ${
                  idx === 4
                    ? 'bg-gradient-to-r from-zinc-900/90 to-red-950/40 border-red-900/40'
                    : 'bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="font-heading font-black text-2xl sm:text-3xl text-red-500 tracking-tight shrink-0 pt-0.5">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-white uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
