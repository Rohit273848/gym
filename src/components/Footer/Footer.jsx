import React from 'react';
import { MapPin, Phone, Clock, Zap } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Membership Plans', href: '#membership' },
    { label: 'Personal Training', href: '#training' },
    { label: 'UPI Payment', href: '#payment' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050507] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-zinc-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="p-1 bg-white rounded-xl shadow-md border border-zinc-200 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Fitness Heaven Gym Official Logo"
                  className="h-10 w-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg tracking-wider text-white leading-none">
                  FITNESS <span className="text-red-500">HEAVEN</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-400 leading-tight uppercase">
                  GYM &amp; SPORTS
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-sm">
              "{GYM_DATA.brand.tagline}"
            </p>
            <p className="text-xs text-zinc-400">
              Spacious 5000 sq. ft. air-conditioned unisex fitness center with 100% Jerai equipment &amp; Steam bath.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold tracking-wider">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-red-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider mb-4">
              CONTACT &amp; HOURS
            </h4>
            <div className="flex items-start gap-3 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Hiwale Patil Lawns, Beed By Pass Road – 431001</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <span>+91 9145033400 / +91 8857885746</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <Clock className="w-4 h-4 text-red-500 shrink-0" />
              <span>Everyday: 6:00 AM – 10:00 PM</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Fitness Heaven Gym &amp; Sports. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Zap className="w-3.5 h-3.5 text-red-500 fill-current" /> High-Performance Creative UI
          </p>
        </div>
      </div>
    </footer>
  );
}
