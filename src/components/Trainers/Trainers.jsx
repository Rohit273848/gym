import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Award, ShieldCheck } from 'lucide-react';
import { GYM_IMAGES } from '../../data/gymImages';

const trainersList = [
  {
    id: 't1',
    name: 'Vikram Singh',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting & Jerai Equipment Specialist',
    experience: '8+ Years Exp.',
    image: GYM_IMAGES.trainers.trainer1,
  },
  {
    id: 't2',
    name: 'Ananya Sharma',
    role: 'Functional & HIIT Specialist',
    specialty: 'Fat Loss & Endurance Conditioning',
    experience: '6+ Years Exp.',
    image: GYM_IMAGES.trainers.trainer2,
  },
  {
    id: 't3',
    name: 'Rahul Deshmukh',
    role: 'Senior Fitness Director',
    specialty: 'Body Recomposition & Nutrition',
    experience: '10+ Years Exp.',
    image: GYM_IMAGES.trainers.trainer3,
  },
  {
    id: 't4',
    name: 'Priya Kulkarni',
    role: 'Yoga & Pilates Master',
    specialty: 'Postural Alignment & Core Stability',
    experience: '7+ Years Exp.',
    image: GYM_IMAGES.trainers.trainer4,
  },
  {
    id: 't5',
    name: 'Arjun Verma',
    role: 'MMA & Boxing Coach',
    specialty: 'Combat Fitness & Agility Drills',
    experience: '5+ Years Exp.',
    image: GYM_IMAGES.trainers.trainer5,
  },
  {
    id: 't6',
    name: 'Neha Kapoor',
    role: 'Personal Transformation Coach',
    specialty: 'Weight Loss & Group Energetics',
    experience: '6+ Years Exp.',
    image: GYM_IMAGES.trainers.trainer6,
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-28 sm:py-36 bg-[#0a0a0d] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-label mb-6 mx-auto w-fit">Expert Guidance</div>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] uppercase leading-[0.88] text-white mb-6">
            MEET OUR ELITE <br />
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)', color: 'transparent' }}>
              TRAINING TEAM
            </span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed max-w-xl mx-auto">
            Certified fitness professionals dedicated to helping you achieve maximum results safely, efficiently, and consistently.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersList.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#0f0f14] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/25 transition-all duration-300 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-96 w-full overflow-hidden bg-neutral-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-[#0f0f14]/20 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white/90 border border-white/10 uppercase tracking-widest">
                  <Award className="w-3 h-3 text-red-500" />
                  {trainer.experience}
                </div>

                {/* Quick Social Buttons on Hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white border border-white/10 hover:border-white/30 transition-all">
                    <Instagram className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white border border-white/10 hover:border-white/30 transition-all">
                    <Linkedin className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6">
                <div className="text-[10px] font-bold tracking-[0.2em] text-red-500 uppercase mb-1">
                  {trainer.role}
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                  {trainer.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-white/40 mb-5">
                  <ShieldCheck className="w-3.5 h-3.5 text-white/30 shrink-0" />
                  <span>{trainer.specialty}</span>
                </div>

                <a
                  href="#training"
                  className="w-full py-2.5 bg-white/[0.04] border border-white/10 group-hover:border-white/30 hover:bg-white text-white/70 group-hover:text-white hover:!text-black font-heading font-extrabold text-[11px] tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  Book 1-on-1 Session
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
