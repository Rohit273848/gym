import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GYM_IMAGES } from '../../data/gymImages';

const galleryItems = [
  {
    id: 'g1',
    title: 'Strength Zone',
    category: 'Equipment & Weights',
    image: GYM_IMAGES.gallery.strengthZone,
    size: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 'g2',
    title: 'Cardio Zone',
    category: 'Treadmills & Endurance',
    image: GYM_IMAGES.gallery.cardioZone,
    size: 'lg:col-span-1 lg:row-span-1',
  },
  {
    id: 'g3',
    title: 'Gym Interior',
    category: 'Air Conditioned Floor',
    image: GYM_IMAGES.gallery.interior,
    size: 'lg:col-span-1 lg:row-span-1',
  },
  {
    id: 'g4',
    title: '1-on-1 Personal Training',
    category: 'Guided Workouts',
    image: GYM_IMAGES.gallery.personalTraining,
    size: 'lg:col-span-1 lg:row-span-1',
  },
  {
    id: 'g5',
    title: 'Jerai Fitness Setup',
    category: 'World Class Machines',
    image: GYM_IMAGES.gallery.equipment,
    size: 'lg:col-span-1 lg:row-span-1',
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  // Lock scroll when lightbox is active
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const activeItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-[#070709] relative overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="section-label mb-6">Inside Fitness Heaven</div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] uppercase leading-[0.88] text-white">
              EXPLORE OUR <br />
              <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)', color: 'transparent' }}>
                5000 SQ. FT. ARENA
              </span>
            </h2>
          </div>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            Take a look inside our premium unisex fitness center featuring 100% Jerai equipment, spacious workout zones, and state-of-the-art facilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedIndex(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-white/30 transition-all duration-300 ${item.size}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover icon */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-red-500 uppercase block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-2xl text-white uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Enhanced Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 overflow-hidden select-none"
          >
            {/* Top Bar inside Modal */}
            <div
              className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                  {selectedIndex + 1} / {galleryItems.length}
                </span>
                <div className="h-3 w-px bg-white/20" />
                <span className="text-xs font-heading font-bold text-white/80 uppercase tracking-wide">
                  {activeItem.category}
                </span>
              </div>

              <button
                onClick={handleClose}
                className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Close full preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Stage */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 w-full max-w-6xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3.5 bg-black/60 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-md transition-all focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image Container with smooth transitions */}
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-h-[72vh] max-w-full flex items-center justify-center rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#09090c]"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[72vh] max-w-full w-auto h-auto object-contain block mx-auto rounded-2xl"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3.5 bg-black/60 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-md transition-all focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details Bar */}
            <div
              className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="font-display text-2xl uppercase tracking-wide text-white">
                  {activeItem.title}
                </h4>
                <p className="text-xs text-white/40 mt-0.5">
                  Fitness Heaven Gym &amp; Sports Arena
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs text-white/40">
                <span>Use ← → keys to navigate</span>
                <span>•</span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

