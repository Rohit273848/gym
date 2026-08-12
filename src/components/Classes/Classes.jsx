import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Dumbbell, HeartPulse, Apple, Activity, Users, Check } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';
import { GYM_IMAGES } from '../../data/gymImages';

const servicesList = [
  {
    id: 'guidance',
    title: 'Expert Guidance',
    tag: 'Primary Service',
    desc: 'Fully certified and friendly trainers providing personalized support, proper form correction, goal-oriented training, and tailored workout & diet guidance.',
    image: GYM_IMAGES.gallery.personalTraining,
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: 'equipment',
    title: 'Top-Notch Machinery',
    tag: 'Quality Equipment',
    desc: 'Sufficient, high-quality, and well-maintained machinery suitable for beginners, intermediates, and advanced lifters.',
    image: GYM_IMAGES.classes.strength,
    icon: Dumbbell,
    featured: false,
  },
  {
    id: 'nutrition',
    title: 'Diet & Nutrition Guidance',
    tag: 'Goal-Oriented',
    desc: 'Personalized diet planning and nutrition support designed to help members achieve weight loss, muscle gain, and overall health.',
    image: GYM_IMAGES.classes.hiit,
    icon: Apple,
    featured: false,
  },
  {
    id: 'cardio',
    title: 'Cardio & Stamina',
    tag: 'Endurance',
    desc: 'Treadmills and cardiovascular setups to improve aerobic fitness, stamina, and efficient calorie burn.',
    image: GYM_IMAGES.classes.cardio,
    icon: HeartPulse,
    featured: false,
  },
  {
    id: 'functional',
    title: 'Functional & Strength',
    tag: 'All Workout Needs',
    desc: 'Dynamic workouts built to enhance mobility, balance, core stability, and athletic performance.',
    image: GYM_IMAGES.classes.functional,
    icon: Activity,
    featured: false,
  },
  {
    id: 'group',
    title: 'Motivating Atmosphere',
    tag: 'Positive Environment',
    desc: 'A clean, supportive atmosphere that keeps you disciplined, accountable, and focused on your goals.',
    image: GYM_IMAGES.gallery.interior,
    icon: Users,
    featured: false,
  },
];

export default function Classes() {
  return (
    <section id="services" className="py-28 sm:py-36 bg-[#0B0B09] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F2D500]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="section-label mb-6">Our Core Offerings</div>
            <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,5.5vw,5.5rem)] uppercase leading-[0.88] text-[#F5F3E8]">
              SERVICES &amp; <br />
              <span style={{ WebkitTextStroke: '1.5px rgba(245,243,232,0.25)', color: 'transparent' }}>
                PROFESSIONAL COACHING
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#A7A79D] max-w-md leading-relaxed">
            {GYM_DATA.coaching.description}
          </p>
        </div>

        {/* Featured Guidance Banner */}
        <div className="mb-12 bg-[#1A1A17] border border-[#292923] hover:border-[#F2D500]/40 transition-all rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="px-3 py-1 bg-[#F2D500] text-[#0B0B09] rounded-full text-[10px] font-heading font-extrabold tracking-widest uppercase mb-4 inline-block">
              PRIMARY SERVICE
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-[#F5F3E8] uppercase mb-4">
              EXPERT GUIDANCE &amp; CERTIFIED TRAINERS
            </h3>
            <p className="text-sm text-[#A7A79D] leading-relaxed mb-6">
              Our fully certified trainers genuinely support your fitness journey with personalized form correction, goal-oriented training programs, and comprehensive diet guidance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {GYM_DATA.coaching.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#F5F3E8]/90 font-medium">
                  <Check className="w-4 h-4 text-[#F2D500] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
            <a
              href="#membership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2D500] hover:bg-[#D9BE00] text-[#0B0B09] font-heading font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#F2D500]/25"
            >
              Get Started with Expert Guidance
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#292923] relative">
            <img
              src={GYM_IMAGES.gallery.personalTraining}
              alt="Certified trainer offering expert guidance at Reshape Fitness Club"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-[#F5F3E8] font-bold uppercase tracking-wider">
              Goal-Oriented Member Mentorship
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.slice(1).map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#1A1A17] rounded-2xl overflow-hidden border border-[#292923] hover:border-[#F2D500]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A17] via-[#1A1A17]/30 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-[#F5F3E8]/80 uppercase border border-white/10">
                      {item.tag}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-[#F2D500]">
                      <IconComp className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl text-[#F5F3E8] uppercase tracking-tight mb-2 group-hover:text-[#F2D500] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A7A79D] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href="#membership"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#F5F3E8]/70 group-hover:text-[#F2D500] transition-colors"
                  >
                    <span>Explore Memberships</span>
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
