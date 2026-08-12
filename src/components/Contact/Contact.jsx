import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Clock, Navigation, Phone, ShieldCheck } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Contact() {
  const embedUrl = "https://maps.google.com/maps?q=Gut+no.+103,+plot+no.15,+Prithviraj+Nagar,+Satara+Deolai+Parisar,+Chhatrapati+Sambhajinagar,+Maharashtra+431009&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#0B0B09] relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="section-label mb-8">Visit Our Location</div>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.6rem,6vw,6rem)] uppercase leading-[0.88] text-[#F5F3E8] max-w-2xl">
            COME TRAIN<br />
            <span
              style={{ WebkitTextStroke: '1.5px rgba(245,243,232,0.2)', color: 'transparent' }}
            >
              WITH US.
            </span>
          </h2>
          <p className="text-sm text-[#A7A79D] mt-6 max-w-sm leading-relaxed">
            Visit Reshape Fitness Club in Chhatrapati Sambhajinagar and feel the energy in person.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -6 }}
            className="pricing-card group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F2D500]/10 border border-[#F2D500]/30 flex items-center justify-center mb-6 text-[#F2D500]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-lg text-[#F5F3E8] uppercase tracking-tight mb-3">
                Gym Location
              </h3>
              <p className="text-xs text-[#A7A79D] leading-relaxed mb-6 break-words">
                {GYM_DATA.contact.fullAddress}
              </p>
            </div>
            <a
              href={GYM_DATA.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-widest text-[#F2D500] hover:text-[#D9BE00] uppercase transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ y: -6 }}
            className="pricing-card group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F2D500]/10 border border-[#F2D500]/30 flex items-center justify-center mb-6 text-[#F2D500]">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-lg text-[#F5F3E8] uppercase tracking-tight mb-3">
                Direct Contact
              </h3>
              <p className="text-xs text-[#A7A79D] mb-6">Tap to call reception directly</p>
              <a
                href={`tel:${GYM_DATA.contact.phoneRaw}`}
                className="inline-flex items-center gap-3 p-4 bg-[#0B0B09] border border-[#292923] rounded-2xl text-base font-heading font-bold text-[#F5F3E8] hover:border-[#F2D500] hover:bg-[#F2D500]/5 transition-all"
              >
                <Phone className="w-5 h-5 text-[#F2D500] shrink-0" />
                <span>{GYM_DATA.contact.phone}</span>
              </a>
            </div>
            <div className="mt-6 text-[11px] text-[#A7A79D] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Reshape Phone Support</span>
            </div>
          </motion.div>

          {/* Operating Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            whileHover={{ y: -6 }}
            className="pricing-card group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F2D500]/10 border border-[#F2D500]/30 flex items-center justify-center mb-6 text-[#F2D500]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-lg text-[#F5F3E8] uppercase tracking-tight mb-4">
                Operating Schedule
              </h3>
              <div className="space-y-2.5">
                {GYM_DATA.contact.operatingHours.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-[#292923]">
                    <span className="text-[#A7A79D] font-medium">{item.days}</span>
                    <span className={`font-bold ${item.hours === 'Closed' ? 'text-[#F2D500]' : 'text-[#F5F3E8]'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#A7A79D] border border-[#292923] rounded-full px-3 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Monday Early Open at 6:00 AM
            </div>
          </motion.div>
        </div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden border border-[#292923] shadow-2xl"
        >
          <iframe
            title="Reshape Fitness Club Google Maps Location"
            src={embedUrl}
            className="w-full h-full border-0 filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </section>
  );
}
