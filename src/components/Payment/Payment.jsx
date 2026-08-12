import React, { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard, QrCode, Copy, CheckCircle2, Smartphone, Send,
  ShieldCheck, AlertCircle, Sparkles, ArrowRight, Zap, Lock
} from 'lucide-react';
import { GYM_DATA } from '../../data/gymData';

export default function Payment({ selectedAmount, selectedPlanName }) {
  const nameErrorId = useId();
  const mobileErrorId = useId();

  // Combine memberships & personal training into selectable plan cards
  const allPlans = [
    ...GYM_DATA.memberships.map((m) => ({
      id: m.id,
      name: `${m.name} Membership`,
      shortName: m.name,
      price: m.price,
      priceFormatted: m.priceFormatted,
      badge: m.badge || null,
      category: 'Membership',
    })),
    ...GYM_DATA.personalTraining.plans.map((pt) => ({
      id: pt.id,
      name: `PT - ${pt.name}`,
      shortName: pt.name,
      price: pt.price,
      priceFormatted: pt.priceFormatted,
      badge: pt.badge || null,
      category: '1-on-1 Training',
    })),
  ];

  const [activePlan, setActivePlan] = useState(allPlans[0]);
  const [fullName, setFullName] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('qr'); // 'qr' or 'upi'
  const [desktopNotice, setDesktopNotice] = useState(false);

  // Sync external plan selections from pricing cards
  useEffect(() => {
    if (selectedAmount) {
      const match = allPlans.find((p) => p.price.toString() === selectedAmount.toString());
      if (match) {
        setActivePlan(match);
      } else if (selectedPlanName) {
        const nameMatch = allPlans.find((p) => p.name.toLowerCase().includes(selectedPlanName.toLowerCase()));
        if (nameMatch) setActivePlan(nameMatch);
      }
    }
  }, [selectedAmount, selectedPlanName]);

  const amount = activePlan.price;
  const planName = activePlan.name;

  // Dynamic UPI Link & QR Code
  const upiUri = `upi://pay?pa=${encodeURIComponent(GYM_DATA.payment.upiId)}&pn=${encodeURIComponent(GYM_DATA.payment.merchant)}&am=${amount}&cu=INR&tn=${encodeURIComponent(planName + (fullName ? ' - ' + fullName : ''))}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUri)}`;

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
      newErrors.fullName = 'Full Name is required';
    }
    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!mobileNum.trim()) {
      newErrors.mobileNum = 'Mobile Number is required';
    } else if (!indianMobileRegex.test(mobileNum.trim())) {
      newErrors.mobileNum = 'Enter a valid 10-digit Indian mobile number';
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
      setDesktopNotice(true);
      setActiveTab('qr');
    }
  };

  const whatsappMsg = `Hi Reshape Fitness Club! I completed the UPI payment of ₹${amount.toLocaleString('en-IN')} for ${planName}.\nName: ${fullName || 'Member'}\nPhone: ${mobileNum || 'N/A'}\nAttached is my payment screenshot.`;
  const whatsappUrl = `https://wa.me/919158539152?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="payment" className="py-28 sm:py-36 bg-[#0B0B09] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F2D500]/10 via-transparent to-[#F2D500]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2D500]/10 border border-[#F2D500]/30 text-[11px] font-bold text-[#F2D500] uppercase tracking-widest mb-6">
            <Lock className="w-3.5 h-3.5" /> Instant UPI Checkout
          </div>
          <h2 className="gsap-reveal-title font-display text-[clamp(2.4rem,6vw,5.5rem)] uppercase leading-[0.88] text-[#F5F3E8] mb-6">
            SECURE UPI <span style={{ WebkitTextStroke: '1.5px rgba(245,243,232,0.25)', color: 'transparent' }}>PAYMENT</span>
          </h2>
          <p className="text-sm text-[#A7A79D] leading-relaxed max-w-lg mx-auto">
            Choose your membership plan, scan the dynamic QR code with GPay, PhonePe, or Paytm, and activate your gym membership immediately.
          </p>
        </div>

        {/* ── MAIN UNIFIED TERMINAL CARD ── */}
        <div className="bg-[#1A1A17] border border-[#292923] rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* ── LEFT PANEL: Plan Selection & Member Form (7 cols) ── */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#292923] flex flex-col justify-between">
            <div>
              
              {/* Step 1: Select Plan Grid */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-xs font-heading font-black tracking-widest text-[#F5F3E8] uppercase flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#F2D500] text-[#0B0B09] text-[10px] flex items-center justify-center font-bold">1</span>
                    Select Membership Plan
                  </label>
                  <span className="text-[11px] text-[#A7A79D] font-mono">
                    {activePlan.category}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allPlans.map((plan) => {
                    const isSelected = activePlan.id === plan.id;
                    return (
                      <motion.button
                        key={plan.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActivePlan(plan)}
                        className={`relative p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#F2D500]/10 border-[#F2D500] shadow-lg shadow-[#F2D500]/10 text-[#F5F3E8]'
                            : 'bg-[#0B0B09] border-[#292923] hover:border-[#F2D500]/30 text-[#A7A79D] hover:text-[#F5F3E8]'
                        }`}
                      >
                        {plan.badge && (
                          <span className={`absolute -top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase border ${
                            isSelected ? 'bg-[#F2D500] text-[#0B0B09] border-[#F2D500]' : 'bg-[#1A1A17] text-[#F5F3E8]/80 border-[#292923]'
                          }`}>
                            {plan.badge}
                          </span>
                        )}
                        <div className="text-[11px] font-heading font-extrabold uppercase tracking-wide truncate mb-1">
                          {plan.shortName}
                        </div>
                        <div className={`font-display text-lg font-bold ${isSelected ? 'text-[#F2D500]' : 'text-[#F5F3E8]'}`}>
                          {plan.priceFormatted}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Member Details Form */}
              <form onSubmit={handlePayNowSubmit} noValidate className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#F2D500] text-[#0B0B09] text-[10px] flex items-center justify-center font-bold">2</span>
                  <span className="text-xs font-heading font-black tracking-widest text-[#F5F3E8] uppercase">Member Details</span>
                </div>

                {/* Full Name */}
                <div>
                  <input
                    id="full-name-input"
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={fullName}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? nameErrorId : undefined}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    className={`w-full px-4 py-3.5 bg-[#0B0B09] border rounded-xl text-[#F5F3E8] text-sm outline-none transition-all placeholder:text-[#77776F] ${
                      errors.fullName ? 'border-[#F2D500] focus:ring-1 focus:ring-[#F2D500]' : 'border-[#292923] focus:border-[#F2D500]'
                    }`}
                  />
                  {errors.fullName && (
                    <p id={nameErrorId} role="alert" className="mt-1.5 text-xs text-[#F2D500] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <input
                    id="mobile-num-input"
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit Mobile Number *"
                    value={mobileNum}
                    aria-invalid={!!errors.mobileNum}
                    aria-describedby={errors.mobileNum ? mobileErrorId : undefined}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setMobileNum(val);
                      if (errors.mobileNum) setErrors({ ...errors, mobileNum: null });
                    }}
                    className={`w-full px-4 py-3.5 bg-[#0B0B09] border rounded-xl text-[#F5F3E8] text-sm outline-none transition-all placeholder:text-[#77776F] ${
                      errors.mobileNum ? 'border-[#F2D500] focus:ring-1 focus:ring-[#F2D500]' : 'border-[#292923] focus:border-[#F2D500]'
                    }`}
                  />
                  {errors.mobileNum && (
                    <p id={mobileErrorId} role="alert" className="mt-1.5 text-xs text-[#F2D500] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.mobileNum}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <input
                    id="notes-input"
                    type="text"
                    placeholder="Notes or fitness goal (Optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#0B0B09] border border-[#292923] focus:border-[#F2D500] rounded-xl text-[#F5F3E8] text-sm outline-none transition-all placeholder:text-[#77776F]"
                  />
                </div>

                {/* Desktop hint */}
                {desktopNotice && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-[#F2D500]/10 border border-[#F2D500]/30 rounded-xl text-xs text-[#F5F3E8] flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-[#F2D500] shrink-0 mt-0.5" />
                    <span>
                      On desktop, UPI apps cannot open directly. Please scan the QR code on the right with GPay, PhonePe, or Paytm on your smartphone.
                    </span>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 py-4 bg-[#F2D500] hover:bg-[#D9BE00] active:scale-[0.99] text-[#0B0B09] font-heading font-extrabold text-xs tracking-widest uppercase rounded-xl shadow-xl shadow-[#F2D500]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" /> Pay via UPI App
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                      if (validateForm()) {
                        setActiveTab('qr');
                        const qrElem = document.getElementById('qr-section');
                        if (qrElem) qrElem.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="py-4 px-6 bg-[#0B0B09] hover:bg-[#1A1A17] border border-[#292923] text-[#F5F3E8] hover:border-[#F2D500] hover:text-[#F2D500] font-heading font-extrabold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <QrCode className="w-4 h-4 text-[#F2D500]" /> View QR Code
                  </motion.button>
                </div>
              </form>

            </div>

            {/* Total Payable Summary Bar */}
            <div className="mt-8 pt-6 border-t border-[#292923] flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-[#A7A79D] uppercase tracking-widest">Total Payable</div>
                <div className="text-xs text-[#A7A79D]">{activePlan.name}</div>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl font-black text-[#F5F3E8]">
                  ₹{amount.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-emerald-400 font-bold">✓ Zero Extra Processing Fee</div>
              </div>
            </div>

          </div>

          {/* ── RIGHT PANEL: QR Code & UPI Details (5 cols) ── */}
          <div id="qr-section" className="lg:col-span-5 bg-[#1A1A17] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            
            <div>
              {/* Tab Switcher */}
              <div className="flex items-center bg-[#0B0B09] p-1 rounded-xl border border-[#292923] mb-8">
                <button
                  type="button"
                  onClick={() => setActiveTab('qr')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-heading font-black tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'qr' ? 'bg-[#F2D500] text-[#0B0B09] shadow-md' : 'text-[#A7A79D] hover:text-[#F5F3E8]'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" /> Scan QR
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('upi')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-heading font-black tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'upi' ? 'bg-[#F2D500] text-[#0B0B09] shadow-md' : 'text-[#A7A79D] hover:text-[#F5F3E8]'
                  }`}
                >
                  <Copy className="w-3.5 h-3.5" /> Copy UPI ID
                </button>
              </div>

              {/* Dynamic QR Code Display */}
              {activeTab === 'qr' && (
                <div className="text-center">
                  <div className="relative group mx-auto w-64 h-64 p-4 bg-white rounded-2xl shadow-2xl flex items-center justify-center border border-white/20">
                    {/* Corner accent overlays */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#F2D500]" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#F2D500]" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#F2D500]" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#F2D500]" />

                    <img
                      src={qrUrl}
                      alt={`UPI QR Code for ₹${amount}`}
                      className="w-full h-full object-contain filter brightness-95"
                    />
                  </div>

                  <div className="mt-4 text-xs font-heading font-bold text-[#F5F3E8] uppercase tracking-wider">
                    Scan ₹{amount.toLocaleString('en-IN')} with Any App
                  </div>

                  {/* Supported App Pills */}
                  <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                    {GYM_DATA.payment.supportedApps.map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1 bg-[#0B0B09] border border-[#292923] rounded-full text-[10px] font-bold text-[#A7A79D]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Copy UPI ID Display */}
              {activeTab === 'upi' && (
                <div className="space-y-6">
                  <div className="p-5 bg-[#0B0B09] border border-[#292923] rounded-2xl text-center">
                    <div className="text-[10px] font-bold text-[#A7A79D] uppercase tracking-widest mb-2">
                      Merchant UPI ID
                    </div>
                    <div className="font-display text-2xl font-black text-[#F2D500] tracking-wide mb-4">
                      {GYM_DATA.payment.upiId}
                    </div>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCopyUpi}
                      className="w-full py-3 bg-[#1A1A17] hover:bg-[#292923] active:scale-[0.98] border border-[#292923] text-[#F5F3E8] text-xs font-heading font-extrabold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> Copied to Clipboard
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <Copy className="w-4 h-4 text-[#F2D500]" /> Copy UPI ID
                        </span>
                      )}
                    </motion.button>
                  </div>

                  <div className="p-4 bg-[#0B0B09] border border-[#292923] rounded-xl text-xs text-[#A7A79D] space-y-2">
                    <div className="font-bold text-[#F5F3E8] uppercase text-[10px] tracking-wider">How to pay manually:</div>
                    <ol className="list-decimal list-inside space-y-1 text-[#A7A79D]">
                      <li>Open GPay / PhonePe / Paytm / BHIM</li>
                      <li>Select "Pay to UPI ID"</li>
                      <li>Paste <code className="text-[#F2D500] font-mono">{GYM_DATA.payment.upiId}</code></li>
                      <li>Enter amount: <strong>₹{amount.toLocaleString('en-IN')}</strong></li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Reception Verification & WhatsApp Confirmation */}
            <div className="mt-8 pt-6 border-t border-[#292923] space-y-4">
              <div className="p-3.5 bg-[#F2D500]/10 border border-[#F2D500]/30 rounded-xl text-xs text-[#F5F3E8] font-medium flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#F2D500] shrink-0" />
                <span>Show your payment screenshot at reception for instant entry.</span>
              </div>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-[#25d366] hover:bg-[#20ba5a] active:scale-[0.99] text-white font-heading font-extrabold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <Send className="w-4 h-4" /> Send Payment Proof on WhatsApp
              </motion.a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
