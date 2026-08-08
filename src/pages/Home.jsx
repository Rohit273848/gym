import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Facilities from '../components/Facilities/Facilities';
import Membership from '../components/Membership/Membership';
import PersonalTraining from '../components/PersonalTraining/PersonalTraining';
import Payment from '../components/Payment/Payment';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { initScrollReveals } from '../animations/gsap/scrollAnimations';

export default function Home() {
  const [selectedPlanAmount, setSelectedPlanAmount] = useState(null);
  const [selectedPlanName, setSelectedPlanName] = useState('');

  useEffect(() => {
    const scrollCtx = initScrollReveals();
    return () => {
      scrollCtx && scrollCtx.revert();
    };
  }, []);

  const handleSelectPlan = (amount, name) => {
    setSelectedPlanAmount(amount);
    setSelectedPlanName(name);
  };

  return (
    <div className="bg-[#070709] min-h-screen text-white relative">
      <Navbar onSelectPlan={handleSelectPlan} />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Membership onSelectPlan={handleSelectPlan} />
        <PersonalTraining onSelectPlan={handleSelectPlan} />
        <Payment selectedAmount={selectedPlanAmount} selectedPlanName={selectedPlanName} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
