import React from 'react';
import { MapPin, PhoneCall, Clock, Navigation, Phone } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Contact() {
  const embedUrl = "https://maps.google.com/maps?q=19.850031,75.340602&z=15&output=embed";

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#070709] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-heading font-extrabold tracking-widest uppercase mb-4">
            <MapPin className="w-4 h-4 text-red-500" />
            VISIT OUR LOCATION
          </div>
          <h2 className="gsap-reveal-title font-heading font-black text-4xl sm:text-6xl tracking-tight leading-[0.95] uppercase text-white mb-4">
            COME TRAIN <span className="text-red-500">WITH US.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal">
            Visit us and feel the energy in person.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {/* Card 1: Address */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 text-center flex flex-col justify-between hover:border-red-600/40 transition-colors">
            <div>
              <div className="w-14 h-14 mx-auto rounded-2xl bg-red-950/80 border border-red-800/60 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-4">
                GYM ADDRESS
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed font-normal whitespace-pre-line mb-6">
                {GYM_DATA.contact.address}
              </p>
            </div>
            <a
              href={GYM_DATA.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-zinc-800 hover:bg-red-600 text-white font-heading font-extrabold text-xs tracking-widest uppercase rounded-full border border-zinc-700 hover:border-red-600 transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" /> GET DIRECTIONS
            </a>
          </div>

          {/* Card 2: Contact Phone Buttons */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 text-center flex flex-col justify-between hover:border-red-600/40 transition-colors">
            <div>
              <div className="w-14 h-14 mx-auto rounded-2xl bg-red-950/80 border border-red-800/60 flex items-center justify-center mb-6">
                <PhoneCall className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-4">
                PHONE NUMBERS
              </h3>
              <p className="text-xs text-zinc-400 mb-6">Tap below to call reception directly</p>
            </div>
            <div className="flex flex-col gap-3">
              {GYM_DATA.contact.phones.map((ph) => (
                <a
                  key={ph}
                  href={`tel:${ph}`}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-heading font-extrabold text-xs tracking-widest uppercase rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> CALL {ph}
                </a>
              ))}
            </div>
          </div>

          {/* Card 3: Gym Timings */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 text-center flex flex-col justify-between hover:border-red-600/40 transition-colors">
            <div>
              <div className="w-14 h-14 mx-auto rounded-2xl bg-red-950/80 border border-red-800/60 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-4">
                GYM TIMINGS
              </h3>
              <div className="bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800/80 mb-6">
                <div className="text-xs font-bold text-red-500 tracking-wider uppercase mb-1">
                  {GYM_DATA.contact.timings.days}
                </div>
                <div className="font-heading font-black text-xl text-white">
                  {GYM_DATA.contact.timings.hours}
                </div>
              </div>
            </div>
            <div className="py-3 px-4 bg-emerald-950/40 border border-emerald-800/40 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider">
              ✓ Open 7 Days a Week
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <iframe
            title="Fitness Heaven Gym Location Map"
            src={embedUrl}
            className="w-full h-full border-0 filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
