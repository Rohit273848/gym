import React, { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, QrCode, Copy, CheckCircle, Smartphone, Send, Info, ShieldCheck, AlertCircle } from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Payment({ selectedAmount, selectedPlanName }) {
  const nameErrorId = useId();
  const mobileErrorId = useId();

  // Centralized plan options derived from single source of truth in GYM_DATA
  const planOptions = [
    ...GYM_DATA.memberships.map((m) => ({
      value: m.price.toString(),
      name: `${m.name} Membership`,
      label: `${m.name} Membership — ${m.priceFormatted}${m.badge ? ` (${m.badge})` : ''}`
    })),
    ...GYM_DATA.personalTraining.plans.map((pt) => ({
      value: pt.price.toString(),
      name: `${pt.name} Personal Training`,
      label: `Personal Training – ${pt.name} — ${pt.priceFormatted}`
    }))
  ];

  const defaultOption = planOptions[0];

  const [fullName, setFullName] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [planVal, setPlanVal] = useState(defaultOption.value);
  const [planName, setPlanName] = useState(defaultOption.name);
  const [amount, setAmount] = useState(defaultOption.value);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [desktopHintVisible, setDesktopHintVisible] = useState(false);

  // Sync external plan selection when user clicks a plan CTA elsewhere on the page
  useEffect(() => {
    if (selectedAmount) {
      const amountStr = selectedAmount.toString();
      setAmount(amountStr);
      setPlanVal(amountStr);
      if (selectedPlanName) {
        setPlanName(selectedPlanName);
      } else {
        const found = planOptions.find((p) => p.value === amountStr);
        if (found) setPlanName(found.name);
      }
    }
  }, [selectedAmount, selectedPlanName]);

  const handlePlanSelectChange = (e) => {
    const val = e.target.value;
    setPlanVal(val);
    setAmount(val);
    const found = planOptions.find((p) => p.value === val);
    if (found) {
      setPlanName(found.name);
    }
  };

  // Dynamic UPI Payment Link & QR URL
  const upiUri = `upi://pay?pa=${encodeURIComponent(GYM_DATA.payment.upiId)}&pn=${encodeURIComponent(GYM_DATA.payment.merchant)}&am=${amount}&cu=INR&tn=${encodeURIComponent(planName + (fullName ? ' - ' + fullName : ''))}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiUri)}`;

  const handleCopyUpi = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(GYM_DATA.payment.upiId);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!mobileNum.trim()) {
      newErrors.mobileNum = 'Mobile Number is required.';
    } else if (!indianMobileRegex.test(mobileNum.trim())) {
      newErrors.mobileNum = 'Please enter a valid 10-digit Indian mobile number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNowSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = upiUri;
    } else {
      setDesktopHintVisible(true);
    }
  };

  const whatsappMsg = `Hi Fitness Heaven Gym, I have completed the UPI payment of ₹${amount} for ${planName}. Member: ${fullName || 'New Member'} (${mobileNum || 'Phone'}). Here is my payment screenshot.`;
  const whatsappUrl = `https://wa.me/919145033400?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="payment" className="py-24 sm:py-32 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/30 text-red-500 text-xs font-heading font-extrabold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            INSTANT CHECKOUT
          </div>
          <h2 className="gsap-reveal-title font-heading font-black text-4xl sm:text-6xl tracking-tight leading-[0.95] uppercase text-white mb-4">
            SECURE <span className="text-red-500">UPI PAYMENT</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal">
            Select your plan and pay using UPI. You can scan the QR code with any UPI app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Accessible Form */}
          <div className="lg:col-span-7 bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-8 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-red-500" /> Payment Details
            </h3>

            <form onSubmit={handlePayNowSubmit} noValidate className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="full-name-input" className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="full-name-input"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={fullName}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? nameErrorId : undefined}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: null });
                  }}
                  className={`w-full px-4 py-3.5 bg-zinc-950/80 border rounded-xl text-white text-sm outline-none transition-all ${
                    errors.fullName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-800 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                  }`}
                />
                {errors.fullName && (
                  <p id={nameErrorId} role="alert" className="mt-1.5 text-xs font-semibold text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobile-num-input" className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="mobile-num-input"
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={mobileNum}
                  aria-invalid={!!errors.mobileNum}
                  aria-describedby={errors.mobileNum ? mobileErrorId : undefined}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setMobileNum(val);
                    if (errors.mobileNum) setErrors({ ...errors, mobileNum: null });
                  }}
                  className={`w-full px-4 py-3.5 bg-zinc-950/80 border rounded-xl text-white text-sm outline-none transition-all ${
                    errors.mobileNum ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-800 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                  }`}
                />
                {errors.mobileNum && (
                  <p id={mobileErrorId} role="alert" className="mt-1.5 text-xs font-semibold text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.mobileNum}
                  </p>
                )}
              </div>

              {/* Select Plan */}
              <div>
                <label htmlFor="plan-select-input" className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Select Plan <span className="text-red-500">*</span>
                </label>
                <select
                  id="plan-select-input"
                  value={planVal}
                  onChange={handlePlanSelectChange}
                  className="w-full px-4 py-3.5 bg-zinc-950/80 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-all focus:ring-1 focus:ring-red-600 cursor-pointer"
                >
                  {planOptions.map((opt, i) => (
                    <option key={opt.value + i} value={opt.value} className="bg-zinc-900 text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div>
                <label htmlFor="amount-input" className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Amount (₹)
                </label>
                <input
                  id="amount-input"
                  type="text"
                  readOnly
                  aria-readonly="true"
                  value={`₹${Number(amount).toLocaleString('en-IN')}`}
                  className="w-full px-4 py-3.5 bg-zinc-950/90 border border-zinc-800 font-heading font-black text-xl text-red-500 rounded-xl outline-none"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes-input" className="block text-xs font-heading font-extrabold tracking-wider text-zinc-300 uppercase mb-2">
                  Notes (optional)
                </label>
                <input
                  id="notes-input"
                  type="text"
                  placeholder="Any specific fitness goal or query?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3.5 bg-zinc-950/80 border border-zinc-800 focus:border-red-600 rounded-xl text-white text-sm outline-none transition-all"
                />
              </div>

              {/* Desktop Inline Hint */}
              <AnimatePresence>
                {desktopHintVisible && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-red-950/60 border border-red-800/50 rounded-2xl text-xs text-red-200 flex items-start gap-2.5"
                  >
                    <Info className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong>Desktop User Note:</strong> UPI apps cannot be opened directly from a desktop browser. Please scan the QR code on the right with your phone (GPay / PhonePe / Paytm / BHIM) to complete payment.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-heading font-black text-sm tracking-widest uppercase rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-3"
              >
                <Smartphone className="w-5 h-5" /> PAY NOW VIA UPI
              </button>
            </form>
          </div>

          {/* Right Column: Dynamic QR Code & Instructions */}
          <div className="lg:col-span-5 space-y-6">
            {/* UPI ID Box */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 backdrop-blur-md">
              <div className="text-[11px] font-heading font-extrabold text-zinc-400 uppercase tracking-widest mb-1">
                UPI ID (COPYABLE)
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-heading font-black text-xl text-red-500 tracking-wider">
                  {GYM_DATA.payment.upiId}
                </span>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white text-xs font-bold rounded-xl border border-zinc-700 flex items-center gap-2 transition-all shrink-0"
                >
                  {copied ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" /> ✓ Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <Copy className="w-4 h-4" /> COPY UPI ID
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
                  <img src={qrUrl} alt={`UPI QR Code for ₹${amount}`} loading="lazy" className="w-full h-full object-contain" />
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-2 text-[11px] font-extrabold text-zinc-400 flex-wrap">
                {GYM_DATA.payment.supportedApps.map((app) => (
                  <span key={app} className="px-2.5 py-1 bg-zinc-800 rounded-md border border-zinc-700/80">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Steps & Screenshot Notice */}
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
                className="w-full py-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30"
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
