import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GYM_DATA } from '../../data/gymData';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast progress increment up to 100% within ~900ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 150);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 12;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle background ambient red glow */}
          <div className="absolute w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

          {/* Center Brand Logo & Text */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center p-2 shadow-2xl backdrop-blur-md">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2 3 14h7l-1 8 11-14h-8l1-6z" fill="white" />
                </svg>
              </div>
              <div className="text-left">
                <span className="font-display text-2xl font-black uppercase tracking-tight text-white block leading-none">
                  {GYM_DATA.brand.name}
                </span>
                <span className="text-[9px] font-bold tracking-[0.25em] text-red-500 uppercase block mt-1">
                  FITNESS &amp; SPORTS ARENA
                </span>
              </div>
            </motion.div>

            {/* Minimal Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Progress Percentage Display */}
            <div className="font-mono text-[11px] font-bold text-white/40 tracking-widest mt-2">
              {Math.min(progress, 100)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
