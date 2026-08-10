import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Flame, HeartPulse, Dumbbell, Activity, Shield, Sparkles, Wind, Music } from 'lucide-react';
import { GYM_IMAGES } from '../../data/gymImages';

const classesList = [
  {
    id: 'cardio',
    title: 'Cardio Training',
    tag: 'Stamina & Endurance',
    desc: 'High-energy cardiovascular training on top-tier equipment designed to boost heart health and burn fat.',
    image: GYM_IMAGES.classes.cardio,
    icon: HeartPulse,
    level: 'All Levels',
  },
  {
    id: 'crossfit',
    title: 'CrossFit Power',
    tag: 'Full Body Conditioning',
    desc: 'Dynamic compound movements that challenge strength, speed, and mental toughness in every workout.',
    image: GYM_IMAGES.classes.crossfit,
    icon: Flame,
    level: 'Advanced',
  },
  {
    id: 'functional',
    title: 'Functional Training',
    tag: 'Agility & Power',
    desc: 'Real-world motion workouts built to enhance mobility, balance, core stability, and athletic performance.',
    image: GYM_IMAGES.classes.functional,
    icon: Activity,
    level: 'All Levels',
  },
  {
    id: 'hiit',
    title: 'HIIT Extreme',
    tag: 'Maximum Calorie Burn',
    desc: 'Short, intense bursts of exertion paired with quick recovery periods to maximize metabolic burn.',
    image: GYM_IMAGES.classes.hiit,
    icon: Shield,
    level: 'Intermediate',
  },
  {
    id: 'pilates',
    title: 'Pilates Core',
    tag: 'Flexibility & Posture',
    desc: 'Low-impact muscle strengthening and posture alignment focused on deep core stabilization.',
    image: GYM_IMAGES.classes.pilates,
    icon: Sparkles,
    level: 'Beginner / Inter',
  },
  {
    id: 'strength',
    title: 'Heavy Strength',
    tag: 'Jerai & Steel City',
    desc: 'Professional free weight & machine training using original Jerai & Steel City Strength equipment.',
    image: GYM_IMAGES.classes.strength,
    icon: Dumbbell,
    level: 'All Levels',
  },
  {
    id: 'yoga',
    title: 'Guided Yoga',
    tag: 'Mind & Flexibility',
    desc: 'Mindful breathing, deep stretching, and posture balance sessions for body recovery and mental clarity.',
    image: GYM_IMAGES.classes.yoga,
    icon: Wind,
    level: 'All Levels',
  },
  {
    id: 'zumba',
    title: 'Zumba Fitness',
    tag: 'Dance Workout',
    desc: 'Exhilarating group dance sessions that combine fun music rhythms with high-energy calorie burning.',
    image: GYM_IMAGES.classes.zumba,
    icon: Music,
    level: 'All Levels',
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-28 sm:py-36 bg-[#070709] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="section-label mb-6">World-Class Programs</div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] uppercase leading-[0.88] text-white">
              ELEVATE YOUR <br />
              <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)', color: 'transparent' }}>
                FITNESS CLASSES
              </span>
            </h2>
          </div>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            From high-intensity functional training to mindful yoga, explore expertly coached programs designed for all fitness levels.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classesList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#0d0d12] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Class Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/30 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-white/80 uppercase border border-white/10">
                      {item.tag}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white/80">
                      <IconComp className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-2">
                      Level: {item.level}
                    </div>
                    <h3 className="font-display text-xl text-white uppercase tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed line-clamp-3 mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href="#membership"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors"
                  >
                    <span>View Membership</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
