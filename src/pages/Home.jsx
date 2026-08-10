import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Classes from '../components/Classes/Classes';
import Facilities from '../components/Facilities/Facilities';
import Trainers from '../components/Trainers/Trainers';
import Gallery from '../components/Gallery/Gallery';
import Membership from '../components/Membership/Membership';
import PersonalTraining from '../components/PersonalTraining/PersonalTraining';
import Payment from '../components/Payment/Payment';
import Contact from '../components/Contact/Contact';
import CTABanner from '../components/CTABanner/CTABanner';
import Footer from '../components/Footer/Footer';
import FloatingMobileCta from '../components/FloatingMobileCta/FloatingMobileCta';
import Preloader from '../components/Preloader/Preloader';
import { initScrollReveals } from '../animations/gsap/scrollAnimations';

export default function Home() {
  const [selectedPlanAmount, setSelectedPlanAmount] = useState(null);
  const [selectedPlanName, setSelectedPlanName] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let scrollCtx;
    if (isLoaded) {
      scrollCtx = initScrollReveals();
    }
    return () => {
      scrollCtx && scrollCtx.revert();
    };
  }, [isLoaded]);

  const handleSelectPlan = (amount, name) => {
    setSelectedPlanAmount(amount);
    setSelectedPlanName(name);
  };

  return (
    <div className="bg-[#070709] min-h-screen text-white relative">
      <Preloader onComplete={handlePreloaderComplete} />
      <Navbar onSelectPlan={handleSelectPlan} />
      <main>
        <Hero />
        <About />
        <Classes />
        <Facilities />
        <Trainers />
        <Gallery />
        <Membership onSelectPlan={handleSelectPlan} />
        <PersonalTraining onSelectPlan={handleSelectPlan} />
        <Payment selectedAmount={selectedPlanAmount} selectedPlanName={selectedPlanName} />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
      <FloatingMobileCta />
    </div>
  );
}

