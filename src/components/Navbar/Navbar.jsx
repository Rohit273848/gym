import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
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

  // Disable background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

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
          ? 'py-3 bg-[#09090b]/92 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo (Original Colors) */}
        <a href="#hero" className="flex items-center gap-3.5 group focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1">
          <div className="relative h-12 p-1 bg-white rounded-xl shadow-md flex items-center justify-center transition-transform group-hover:scale-105 border border-zinc-200">
            <img
              src="/images/logo.png"
              alt="Fitness Heaven Gym Logo"
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
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-heading font-bold tracking-widest text-zinc-300 hover:text-red-500 transition-colors relative py-1 group focus-visible:ring-2 focus-visible:ring-red-500 rounded"
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
            className="btn-base btn-primary text-xs tracking-wider uppercase"
          >
            JOIN NOW <Zap className="w-3.5 h-3.5 fill-current" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-200 hover:text-white focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
        >
          {mobileMenuOpen ? <X className="w-7 h-7 text-red-500" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 top-[60px] z-40 bg-[#070709]/98 backdrop-blur-xl border-t border-zinc-800 flex flex-col justify-between p-6 lg:hidden"
          >
            <div className="flex flex-col gap-5 mt-4">
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
                className="w-full py-4 bg-red-600 active:scale-[0.98] text-white font-heading font-black text-center tracking-widest text-sm rounded-xl shadow-lg shadow-red-900/40 uppercase flex items-center justify-center gap-2"
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
