import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

// Social icon SVGs (inline, no external dependency)
const SocialIcons = {
  Facebook: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
    </svg>
  ),
  YouTube: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon fill="#0a0a0d" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
  X: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Pricing', href: '#membership' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'Facebook', href: '#', Icon: SocialIcons.Facebook },
  { name: 'Instagram', href: '#', Icon: SocialIcons.Instagram },
  { name: 'YouTube', href: '#', Icon: SocialIcons.YouTube },
  { name: 'X', href: '#', Icon: SocialIcons.X },
];

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/[0.06] pt-20 pb-10 text-white/35">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Top: Brand + Social + Links + Contact ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.05]">

          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <a href="#hero" className="flex items-center gap-3">
              <div className="h-9 w-9 p-0.5 bg-white rounded-lg flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Fitness Heaven Logo"
                  className="h-full w-auto object-contain rounded-md"
                />
              </div>
              <div className="leading-none">
                <div className="font-heading font-black text-sm tracking-widest text-white uppercase">
                  FITNESS <span className="text-red-500">HEAVEN</span>
                </div>
                <div className="text-[8px] font-bold tracking-[0.22em] text-white/25 uppercase mt-0.5">
                  {GYM_DATA.brand.subtitle}
                </div>
              </div>
            </a>

            <p className="text-xs leading-relaxed max-w-xs">
              {GYM_DATA.brand.tagline}. Spacious 5000 sq. ft. air-conditioned unisex fitness center with 100% Jerai equipment & Steam bath.
            </p>

            {/* Social */}
            <div>
              <div className="text-[9px] font-bold tracking-[0.2em] text-white/20 uppercase mb-3">
                Follow Us On
              </div>
              <div className="flex items-center gap-3">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={`Follow on ${name}`}
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/35 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-black text-xs text-white/50 uppercase tracking-[0.18em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-medium hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5 space-y-5">
            <h4 className="font-heading font-black text-xs text-white/50 uppercase tracking-[0.18em] mb-6">
              Contact Us
            </h4>
            <div className="flex items-start gap-3 text-xs">
              <MapPin className="w-3.5 h-3.5 text-white/20 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Hiwale Patil Lawns, Beed By Pass Road<br />Aurangabad – 431001
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <Phone className="w-3.5 h-3.5 text-white/20 shrink-0" />
              <span>+91 {GYM_DATA.contact.phones[0]} / {GYM_DATA.contact.phones[1]}</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <Clock className="w-3.5 h-3.5 text-white/20 shrink-0" />
              <span>Everyday: {GYM_DATA.contact.timings.hours}</span>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/20">
          <p>© {new Date().getFullYear()} {GYM_DATA.brand.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#about" className="hover:text-white/40 transition-colors">About</a>
            <a href="#contact" className="hover:text-white/40 transition-colors">Contact</a>
            <a href="#membership" className="hover:text-white/40 transition-colors">Pricing</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
