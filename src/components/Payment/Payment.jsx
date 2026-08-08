import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, QrCode, Copy, CheckCircle, Smartphone, Send, Info, ShieldCheck } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Payment({ selectedAmount, selectedPlanName }) {
  const [fullName, setFullName] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [planVal, setPlanVal] = useState('2100');
  const [planName, setPlanName] = useState('1 Month Membership');
  const [amount, setAmount] = useState('2100');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync external plan selection if passed from prop
  useEffect(() => {
    if (selectedAmount) {
      setAmount(selectedAmount.toString());
      setPlanVal(selectedAmount.toString());
      if (selectedPlanName) {
        setPlanName(selectedPlanName);
      }
    }
  }, [selectedAmount, selectedPlanName]);

  const planOptions = [
    { value: '2100', name: '1 Month Membership', label: '1 Month Membership — ₹2,100' },
    { value: '5200', name: '3 Month Membership', label: '3 Month Membership — ₹5,200 (Popular)' },
    { value: '7300', name: '6 Month Membership', label: '6 Month Membership — ₹7,300' },
    { value: '12400', name: '12 Month Membership', label: '12 Month Membership — ₹12,400 (Best Value)' },
    { value: '8000', name: '12 Days Personal Training', label: 'Personal Training – 12 Days — ₹8,000' },
    { value: '10000', name: '1 Month Personal Training', label: 'Personal Training – 1 Month — ₹10,000' },
  ];

  const handlePlanSelectChange = (e) => {
    const val = e.target.value;
    setPlanVal(val);
    setAmount(val);
    const found = planOptions.find((p) => p.value === val);
    if (found) {
      setPlanName(found.name);
    }
  };

  // Generate UPI URI
  const upiUri = `upi://pay?pa=${encodeURIComponent(GYM_DATA.payment.upiId)}&pn=${encodeURIComponent(GYM_DATA.payment.merchant)}&am=${amount}&cu=INR&tn=${encodeURIComponent(planName + (fullName ? ' - ' + fullName : ''))}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiUri)}`;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(GYM_DATA.payment.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePayNowSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !mobileNum || !amount) {
      alert('Please fill out your name, 10-digit mobile number, and select a plan.');
      return;
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = upiUri;
    } else {
      alert('On desktop, please scan the QR code using your phone UPI app (GPay / PhonePe / Paytm / BHIM).');
    }
  };

  const whatsappMsg = `Hi Fitness Heaven Gym, I have completed the UPI payment of ₹${amount} for ${planName}. Member: ${fullName || 'New Member'} (${mobileNum || 'Phone'}). Here is my payment screenshot.`;
  const whatsappUrl = `https://wa.me/919145033400?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="payment" className="py-24 sm:py-32 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            INSTANT &amp; SECURE CHECKOUT
          </div>
          <h2 className="gsap-reveal-title font-heading font-black text-4xl sm:text-6xl tracking-tight leading-[0.95] uppercase text-white mb-4">
            SECURE <span className="text-red-500">UPI PAYMENT</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 font-normal">
            Select your plan and pay using UPI. You can scan the QR code with any UPI app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-8 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-red-500" /> Payment Details
            </h3>

            <form onSubmit={handlePayNowSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3.5 bg-zinc-950/80 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-all focus:ring-1 focus:ring-red-600"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={mobileNum}
                  onChange={(e) => setMobileNum(e.target.value)}
                  className="w-full px-4 py-3.5 bg-zinc-950/80 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-all focus:ring-1 focus:ring-red-600"
                />
              </div>

              {/* Select Plan */}
              <div>
                <label className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Select Plan <span className="text-red-500">*</span>
                </label>
                <select
                  value={planVal}
                  onChange={handlePlanSelectChange}
                  className="w-full px-4 py-3.5 bg-zinc-950/80 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-all focus:ring-1 focus:ring-red-600 cursor-pointer"
                >
                  {planOptions.map((opt) => (
                    <option key={opt.value + opt.name} value={opt.value} className="bg-zinc-900 text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Amount (₹)
                </label>
                <input
                  type="text"
                  readOnly
                  value={`₹${Number(amount).toLocaleString('en-IN')}`}
                  className="w-full px-4 py-3.5 bg-zinc-950/90 border border-zinc-800 font-heading font-extrabold text-xl text-red-500 rounded-xl outline-none"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Notes (optional)
                </label>
                <input
                  type="text"
                  placeholder="Any specific fitness goal or query?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3.5 bg-zinc-950/80 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-all"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-heading font-black text-sm tracking-widest uppercase rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-3"
              >
                <Smartphone className="w-5 h-5" /> PAY NOW VIA UPI
              </button>

              <p className="text-xs text-zinc-400 text-center flex items-center justify-center gap-1.5 leading-relaxed">
                <Info className="w-4 h-4 text-red-400 shrink-0" />
                {GYM_DATA.payment.desktopNotice}
              </p>
            </form>
          </div>

          {/* Right Column: Dynamic QR & Steps */}
          <div className="lg:col-span-5 space-y-6">
            {/* UPI ID Box */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 backdrop-blur-md">
              <div className="text-[11px] font-heading font-bold text-zinc-400 uppercase tracking-widest mb-1">
                UPI ID (COPYABLE)
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-heading font-black text-xl text-red-500 tracking-wider">
                  {GYM_DATA.payment.upiId}
                </span>
                <button
                  onClick={handleCopyUpi}
                  className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl border border-zinc-700 flex items-center gap-2 transition-colors shrink-0"
                >
                  {copied ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-4 h-4" /> Copy UPI ID
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Dynamic QR Code Container */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 text-center backdrop-blur-md">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                <QrCode className="w-4 h-4 text-red-500" /> SCAN TO PAY ₹{Number(amount).toLocaleString('en-IN')}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={amount}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="w-56 h-56 mx-auto p-3 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-4"
                >
                  <img src={qrUrl} alt="UPI QR Code" className="w-full h-full object-contain" />
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-3 text-xs font-bold text-zinc-400">
                {GYM_DATA.payment.supportedApps.map((app) => (
                  <span key={app} className="px-2.5 py-1 bg-zinc-800 rounded-md border border-zinc-700/80">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Steps & Screenshot Instruction */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 backdrop-blur-md">
              <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider mb-4">
                HOW IT WORKS
              </h4>
              <ol className="space-y-3 mb-6">
                {GYM_DATA.payment.steps.map((st) => (
                  <li key={st.step} className="flex items-center gap-3 text-xs text-zinc-300">
                    <span className="w-6 h-6 rounded-full bg-red-950 border border-red-800/60 text-red-500 font-heading font-black text-[11px] flex items-center justify-center shrink-0">
                      {st.step}
                    </span>
                    <span>{st.text}</span>
                  </li>
                ))}
              </ol>

              <div className="p-4 bg-red-950/40 border border-red-800/40 rounded-2xl text-xs text-red-300 font-medium mb-4">
                ⚠️ {GYM_DATA.payment.receptionNotice}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#25d366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30"
              >
                <Send className="w-4 h-4" /> Send Payment Screenshot on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
