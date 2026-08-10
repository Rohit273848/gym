import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone, Clock, ArrowRight } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

const drawerVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
      ease: [0.32, 0, 0.67, 0]
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.04,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0 }
};

const menuContainerVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  }
};

export default function Navbar({ onSelectPlan }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable background scrolling when mobile menu drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home',       href: '#hero' },
    { label: 'About',      href: '#about' },
    { label: 'Classes',    href: '#classes' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Trainers',   href: '#trainers' },
    { label: 'Gallery',    href: '#gallery' },
    { label: 'Pricing',    href: '#membership' },
    { label: 'Training',   href: '#training' },
    { label: 'Contact',    href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        mobileMenuOpen || isScrolled
          ? 'py-4 bg-[#070709]/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/60'
          : 'pt-7 pb-4 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 select-none"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M13 2 3 14h7l-1 8 11-14h-8l1-6z" fill="white" />
          </svg>
          <span className="font-display font-black text-lg tracking-tight uppercase text-white">
            {GYM_DATA.brand.name}
          </span>
        </motion.a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-9" aria-label="Main navigation">
          {navItems.map((item, i) => (
            <li
              key={item.label}
              className="relative py-1"
              onMouseEnter={() => setHoveredNav(item.label)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <a
                href={item.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  i === 0 || hoveredNav === item.label ? 'text-white' : 'text-white/50'
                }`}
              >
                {item.label}
              </a>
              {/* Subtle hover underline indicator animation */}
              {hoveredNav === item.label && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 rounded-full"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center bg-white text-black text-[12px] font-semibold tracking-wide px-5 py-2.5 rounded-full hover:bg-white/90 transition-all duration-300 shadow-sm shadow-white/10"
          >
            Contact Us
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2.5 rounded-xl border transition-all focus-visible:outline-none ${
            mobileMenuOpen
              ? 'bg-white/10 border-white/20 text-white'
              : 'bg-white/5 border-white/10 text-white/80 hover:text-white'
          }`}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Drawer Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-50 bg-[#070709] h-screen h-[100dvh] w-screen flex flex-col md:hidden overflow-hidden"
          >
            {/* Ambient Red Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Mobile Top Bar inside Overlay */}
            <div className="relative z-10 px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0 bg-[#070709]">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 select-none">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M13 2 3 14h7l-1 8 11-14h-8l1-6z" fill="white" />
                </svg>
                <span className="font-display font-black text-lg tracking-tight uppercase text-white">
                  {GYM_DATA.brand.name}
                </span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus-visible:outline-none"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="relative z-10 flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col justify-between">
              <motion.div variants={menuContainerVariants} className="flex flex-col gap-1 my-2">
                <div className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-3 px-3">
                  Navigation
                </div>
                
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    variants={itemVariants}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between text-base font-display uppercase tracking-wider text-white/70 hover:text-white px-3 py-3 rounded-xl border-b border-white/[0.05] hover:bg-white/[0.04] transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-white/25 group-hover:text-red-500 transition-colors">
                        0{idx + 1}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </motion.div>

              {/* CTAs & Contact Strip */}
              <div className="flex flex-col gap-5 pt-6 mt-6 border-t border-white/10 shrink-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#membership"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3.5 bg-white text-black hover:bg-white/90 font-heading font-extrabold text-xs tracking-widest text-center rounded-full uppercase transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#payment"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3.5 bg-white/[0.04] border border-white/20 hover:border-white/40 text-white font-heading font-bold text-xs tracking-widest text-center rounded-full uppercase transition-colors"
                  >
                    Pay via UPI
                  </a>
                </div>

                {/* Bottom Quick Contact Info */}
                <div className="flex items-center justify-between pt-3 text-[11px] text-white/40 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-white/30" />
                    <span>+91 {GYM_DATA.contact.phones[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-white/30" />
                    <span>6 AM – 10 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


