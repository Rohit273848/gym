import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function FloatingMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const paymentEl = document.getElementById('payment');

      const scrollPos = window.scrollY;
      const heroHeight = heroEl ? heroEl.offsetHeight : 600;

      let isNearPayment = false;
      if (paymentEl) {
        const rect = paymentEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isNearPayment = true;
        }
      }

      if (scrollPos > heroHeight - 200 && !isNearPayment) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 lg:hidden pb-[env(safe-area-inset-bottom)]"
        >
          <motion.a
            href="#payment"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3.5 bg-[#F2D500] hover:bg-[#D9BE00] active:scale-[0.98] text-[#0B0B09] font-heading font-extrabold text-xs tracking-widest uppercase rounded-full shadow-2xl shadow-[#F2D500]/50 border border-[#F2D500] flex items-center justify-center gap-2"
          >
            JOIN NOW <Zap className="w-4 h-4 fill-current" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
