import React from 'react';
import { MapPin, PhoneCall, Clock, Navigation, Phone } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Contact() {
  const embedUrl = "https://maps.google.com/maps?q=19.850031,75.340602&z=15&output=embed";

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#0a0a0d] relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="section-label mb-8">Visit Our Location</div>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.6rem,6vw,6rem)] uppercase leading-[0.88] text-white max-w-2xl">
            COME TRAIN<br />
            <span
              style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}
            >
              WITH US.
            </span>
          </h2>
          <p className="text-sm text-white/35 mt-6 max-w-xs leading-relaxed">
            Visit us and feel the energy in person.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">

          {/* Address */}
          <div className="pricing-card group">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center mb-6">
              <MapPin className="w-5 h-5 text-white/40" />
            </div>
            <h3 className="font-heading font-black text-base text-white uppercase tracking-tight mb-3">
              Gym Address
            </h3>
            <p className="text-sm text-white/40 leading-relaxed whitespace-pre-line mb-6 flex-1">
              {GYM_DATA.contact.address}
            </p>
            <a
              href={GYM_DATA.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-widest text-white/40 hover:text-white uppercase transition-colors group-hover:text-white/70"
            >
              <Navigation className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>

          {/* Phone */}
          <div className="pricing-card group">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center mb-6">
              <PhoneCall className="w-5 h-5 text-white/40" />
            </div>
            <h3 className="font-heading font-black text-base text-white uppercase tracking-tight mb-3">
              Phone Numbers
            </h3>
            <p className="text-xs text-white/30 mb-6">Tap to call reception directly</p>
            <div className="flex flex-col gap-3 mt-auto">
              {GYM_DATA.contact.phones.map((ph) => (
                <a
                  key={ph}
                  href={`tel:${ph}`}
                  className="flex items-center gap-2 text-sm font-heading font-bold text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-white/25" />
                  +91 {ph}
                </a>
              ))}
            </div>
          </div>

          {/* Timings */}
          <div className="pricing-card group">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center mb-6">
              <Clock className="w-5 h-5 text-white/40" />
            </div>
            <h3 className="font-heading font-black text-base text-white uppercase tracking-tight mb-3">
              Gym Timings
            </h3>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-white/25 tracking-[0.15em] uppercase mb-1">
                {GYM_DATA.contact.timings.days}
              </div>
              <div className="font-display text-3xl text-white leading-none mb-6">
                {GYM_DATA.contact.timings.hours}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-white/40 border border-white/[0.08] rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open 7 Days a Week
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/[0.07] shadow-2xl">
          <iframe
            title="Fitness Heaven Gym Location Map"
            src={embedUrl}
            className="w-full h-full border-0 filter grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-90 transition-all duration-500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
