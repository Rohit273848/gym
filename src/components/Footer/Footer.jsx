import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Membership', href: '#membership' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B09] border-t border-[#292923] pt-20 pb-10 text-[#A7A79D]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Top: Brand + Links + Contact ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#292923]">

          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <a href="#hero" className="inline-block select-none">
              <img
                src="/images/logo.png"
                alt="Reshape Fitness Club"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            <p className="text-xs leading-relaxed max-w-sm text-[#A7A79D]">
              A professional fitness club offering quality equipment, expert guidance, and a motivating environment to help members work toward their fitness goals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-black text-xs text-[#F5F3E8] uppercase tracking-[0.18em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-medium hover:text-[#F2D500] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-black text-xs text-[#F5F3E8] uppercase tracking-[0.18em] mb-6">
              Contact &amp; Schedule
            </h4>
            <a
              href={GYM_DATA.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-xs hover:text-[#F2D500] transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#F2D500] shrink-0 mt-0.5" />
              <span className="leading-relaxed text-[#A7A79D] group-hover:text-[#F5F3E8] transition-colors">
                {GYM_DATA.contact.fullAddress}
              </span>
            </a>
            <div className="flex items-center gap-3 text-xs">
              <Phone className="w-4 h-4 text-[#F2D500] shrink-0" />
              <a href={`tel:${GYM_DATA.contact.phoneRaw}`} className="text-[#F5F3E8] hover:text-[#F2D500] font-bold transition-colors">
                {GYM_DATA.contact.phone}
              </a>
            </div>
            <div className="flex items-start gap-3 text-xs pt-1">
              <Clock className="w-4 h-4 text-[#F2D500] shrink-0 mt-0.5" />
              <div className="space-y-1 text-[#A7A79D]">
                <div>Monday: 6:00 AM - 11:00 PM</div>
                <div>Tue - Sat: 6:00 AM - 10:00 PM</div>
                <div className="text-[#F2D500] font-bold">Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A7A79D]">
          <p>© {new Date().getFullYear()} Reshape Fitness Club. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#about" className="hover:text-[#F2D500] transition-colors">About</a>
            <a href="#services" className="hover:text-[#F2D500] transition-colors">Services</a>
            <a href="#membership" className="hover:text-[#F2D500] transition-colors">Membership</a>
            <a href="#contact" className="hover:text-[#F2D500] transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
