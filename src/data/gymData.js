export const GYM_DATA = {
  brand: {
    name: "FITNESS HEAVEN",
    subtitle: "GYM & SPORTS",
    fullName: "FITNESS HEAVEN GYM & SPORTS",
    tagline: "Build Your Strength. Transform Your Life.",
    category: "Premium Unisex Fitness Centre",
  },
  hero: {
    titleLines: ["BUILD", "YOUR", "DREAM", "PHYSIQUE."],
    description: "Premium equipment, expert trainers, and an electrifying atmosphere designed to help you become stronger, healthier, and more confident.",
    stats: [
      { num: "5000+", label: "SQ. FT. SPACE", desc: "Air-Conditioned Floor" },
      { num: "100%", label: "JERAI FITNESS", desc: "World-Class Setup" },
      { num: "EXPERT", label: "TRAINERS", desc: "Custom Guidance" },
      { num: "UNISEX", label: "FITNESS", desc: "Men & Women" },
    ]
  },
  about: {
    heading: "MORE THAN A GYM. IT'S YOUR FITNESS HOME.",
    description: "Fitness Heaven Gym & Sports is a premium unisex fitness center designed for both men and women, offering a comfortable and motivating environment to transform your body and mind.",
    features: [
      {
        id: "space",
        title: "5000 SQ. FT. SPACE",
        description: "Fully air-conditioned floor offering maximum comfort and motivation.",
        icon: "Maximize"
      },
      {
        id: "jerai",
        title: "100% JERAI FITNESS EQUIPMENT",
        description: "World-class professional-grade machines.",
        icon: "Dumbbell"
      },
      {
        id: "strength",
        title: "ADVANCED STRENGTH TRAINING",
        description: "Original Steel City Strength dumbbells and weight plates.",
        icon: "Zap"
      },
      {
        id: "nutrition",
        title: "HEALTH & NUTRITION",
        description: "Premium pre-workout supplements, protein powder and creatine.",
        icon: "Sparkles"
      },
      {
        id: "convenience",
        title: "YOUR CONVENIENCE",
        description: "Separate changing rooms, shower facilities and steam room.",
        icon: "Bath"
      }
    ]
  },
  facilities: [
    {
      id: "01",
      title: "Zumba Fitness",
      description: "Fun and energetic dance workouts that help burn calories, improve coordination, and boost mood.",
      icon: "Music"
    },
    {
      id: "02",
      title: "Yoga Sessions",
      description: "Guided yoga sessions focused on flexibility, posture, balance, and mental relaxation.",
      icon: "Wind"
    },
    {
      id: "03",
      title: "MMA Training",
      description: "Mixed Martial Arts training designed to improve self-defense skills, stamina, coordination, and full-body strength.",
      icon: "Shield"
    },
    {
      id: "04",
      title: "Kickboxing",
      description: "High-energy kickboxing workouts focused on endurance, agility, strength, and stress relief.",
      icon: "Target"
    },
    {
      id: "05",
      title: "Nutrition & Diet Plan",
      description: "Personalized nutrition guidance based on individual fitness goals, training requirements, and lifestyle.",
      icon: "Apple"
    },
    {
      id: "06",
      title: "Workout Plans",
      description: "Customized workout routines designed for weight loss, muscle gain, strength development, and general fitness.",
      icon: "ClipboardCheck"
    },
    {
      id: "07",
      title: "Cardio Training",
      description: "Treadmill, cycling, and other cardio exercises designed to improve cardiovascular fitness, stamina, and calorie expenditure.",
      icon: "HeartPulse"
    },
    {
      id: "08",
      title: "Strength Training",
      description: "Professional-grade equipment and expert guidance for beginners, intermediate members, and advanced lifters.",
      icon: "Dumbbell"
    },
    {
      id: "09",
      title: "Group Activities",
      description: "Motivating group workouts that encourage consistency, accountability, teamwork, and a positive fitness environment.",
      icon: "Users"
    },
    {
      id: "10",
      title: "Steam Bath",
      description: "A dedicated recovery experience designed for relaxation after training.",
      icon: "Cloud"
    }
  ],
  memberships: [
    {
      id: "1-month",
      name: "1 MONTH",
      price: 2100,
      priceFormatted: "₹2,100",
      period: "per month",
      popular: false,
      bestValue: false,
      features: [
        "Full access to all equipment",
        "Locker & changing room access",
        "Basic workout guidance",
        "Steam room access"
      ],
      ctaText: "Pay for Monthly"
    },
    {
      id: "3-month",
      name: "3 MONTH",
      price: 5200,
      priceFormatted: "₹5,200",
      period: "for 3 months",
      popular: true,
      bestValue: false,
      badge: "POPULAR",
      savings: "Save ₹1,100 vs Monthly",
      features: [
        "Everything in 1 Month",
        "Free body assessment",
        "Customised workout chart",
        "Priority locker access"
      ],
      ctaText: "Pay for Quarterly"
    },
    {
      id: "6-month",
      name: "6 MONTH",
      price: 7300,
      priceFormatted: "₹7,300",
      period: "for 6 months",
      popular: false,
      bestValue: false,
      savings: "Only ₹1,216 / month",
      features: [
        "Full gym access for 6 months",
        "Priority trainer support",
        "Discounts on personal training",
        "Dietary assessment"
      ],
      ctaText: "Pay for Half-Yearly"
    },
    {
      id: "12-month",
      name: "12 MONTH",
      price: 12400,
      priceFormatted: "₹12,400",
      period: "for 1 year",
      popular: false,
      bestValue: true,
      badge: "BEST VALUE",
      savings: "Best Value (₹1,033 / mo)",
      features: [
        "Full gym access for 1 year",
        "Priority trainer support",
        "Best value membership",
        "Complimentary steam & diet consultation"
      ],
      ctaText: "Pay for Yearly"
    }
  ],
  personalTraining: {
    heading: "TRAIN SMARTER. GET RESULTS FASTER.",
    description: "Get personalized guidance with expert trainers, proper form correction, customized workouts and nutrition support.",
    plans: [
      {
        id: "pt-12days",
        name: "12 DAYS SESSION",
        price: 8000,
        priceFormatted: "₹8,000",
        badge: "Starter Boost",
        features: [
          "Personal trainer support",
          "Custom workout routine",
          "Diet & nutrition advice",
          "Form correction & safety"
        ],
        ctaText: "Enquire / Pay"
      },
      {
        id: "pt-1month",
        name: "1 MONTH SESSION",
        price: 10000,
        priceFormatted: "₹10,000",
        badge: "Full Transformation",
        highlight: true,
        features: [
          "Full personal training",
          "Advanced workout plan",
          "Diet & nutrition guidance",
          "Daily form & goal tracking"
        ],
        ctaText: "Enquire / Pay"
      }
    ]
  },
  payment: {
    upiId: "9145033400@kotak",
    merchant: "Fitness Heaven Gym & Sports",
    desktopNotice: "On desktop, Pay Now may not open UPI apps. Use QR scan from phone for payment.",
    receptionNotice: "Please show your payment screenshot at reception.",
    steps: [
      { step: "01", text: "Select your plan" },
      { step: "02", text: "Amount fills automatically" },
      { step: "03", text: "Scan QR or tap Pay Now" },
      { step: "04", text: "Complete payment" },
      { step: "05", text: "Show payment screenshot at reception" }
    ],
    supportedApps: ["GPay", "PhonePe", "Paytm", "BHIM"]
  },
  contact: {
    heading: "COME TRAIN WITH US.",
    address: "Fitness Heaven Gym &\nHiwale Patil Lawns, Beed By Pass Road – 431001",
    phones: ["9145033400", "8857885746"],
    timings: {
      days: "Everyday",
      hours: "6:00 AM – 10:00 PM"
    },
    googleMapsUrl: "https://www.google.com/maps?ll=19.850031,75.340602&z=15&t=m&hl=en-GB&gl=US&mapclient=embed&cid=16848995828249256121"
  }
};
