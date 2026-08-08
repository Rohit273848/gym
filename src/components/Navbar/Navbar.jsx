import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { mobileMenuVariants } from '../../animations/motion/variants';

export default function Navbar({ onSelectPlan }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'FACILITIES', href: '#facilities' },
    { label: 'MEMBERSHIP', href: '#membership' },
    { label: 'TRAINING', href: '#training' },
    { label: 'PAYMENT', href: '#payment' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-900 p-0.5 shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#09090b] rounded-[7px] flex items-center justify-center">
              <img src="/images/logo.png" alt="Fitness Heaven Logo" className="w-7 h-7 object-contain" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg tracking-wider text-white leading-none">
              FITNESS <span className="text-red-500">HEAVEN</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-400 leading-tight uppercase">
              GYM &amp; SPORTS
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-widest text-zinc-300 hover:text-red-500 transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#membership"
            className="relative group overflow-hidden rounded-full bg-red-600 px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-700 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              JOIN NOW <Zap className="w-3.5 h-3.5 fill-current" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-200 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7 text-red-500" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 top-[60px] z-40 bg-[#070709]/98 backdrop-blur-xl border-t border-zinc-800 flex flex-col justify-between p-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-heading font-bold tracking-wider text-zinc-200 hover:text-red-500 py-2 border-b border-zinc-800/60"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-red-500" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <a
                href="#payment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-center tracking-widest text-sm rounded-xl shadow-lg shadow-red-900/40 uppercase flex items-center justify-center gap-2"
              >
                PAY VIA UPI NOW <Zap className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
