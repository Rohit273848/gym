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
          className="fixed inset-0 z-[9999] bg-[#0B0B09] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle background ambient yellow glow */}
          <div className="absolute w-[450px] h-[450px] bg-[#F2D500]/10 rounded-full blur-[160px] pointer-events-none" />

          {/* Center Brand Logo & Text */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center gap-3"
            >
              <img
                src="/images/logo.png"
                alt="Reshape Fitness Club"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </motion.div>

            {/* Minimal Progress Bar */}
            <div className="w-48 h-[2px] bg-[#292923] rounded-full overflow-hidden mt-6 relative">
              <motion.div
                className="h-full bg-[#F2D500] rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Progress Percentage Display */}
            <div className="font-mono text-[11px] font-bold text-[#A7A79D] tracking-widest mt-2">
              {Math.min(progress, 100)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
