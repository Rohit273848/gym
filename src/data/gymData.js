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
      title: "ZUMBA FITNESS",
      category: "Group Fitness",
      description: "Enjoy fun and energetic dance workouts with our Zumba sessions. It helps in burning calories, improving coordination, and boosting mood while making exercise enjoyable.",
      image: "/images/zumba_yoga.png",
      tag: "Burn Calories & Boost Mood"
    },
    {
      id: "02",
      title: "YOGA SESSIONS",
      category: "Mind & Body",
      description: "Relax your mind and strengthen your body with guided yoga classes. Improve flexibility, posture, and mental peace through regular practice.",
      image: "/images/zumba_yoga.png",
      tag: "Flexibility & Peace"
    },
    {
      id: "03",
      title: "MMA TRAINING",
      category: "Combat Sports",
      description: "Train like a fighter with our Mixed Martial Arts sessions. Learn self-defense techniques, improve stamina, and build full-body strength.",
      image: "/images/mma.png",
      tag: "Self Defense & Stamina"
    },
    {
      id: "04",
      title: "KICKBOXING",
      category: "Combat Sports",
      description: "High-energy kickboxing workouts designed to improve endurance, agility, and strength. Great for stress relief and fat loss.",
      image: "/images/mma.png",
      tag: "High Energy Fat Loss"
    },
    {
      id: "05",
      title: "NUTRITION & DIET PLAN",
      category: "Wellness",
      description: "Get personalized diet plans based on your fitness goals. Our experts guide you on healthy eating habits for better results.",
      image: "/images/hero.png",
      tag: "Personalized Diets"
    },
    {
      id: "06",
      title: "WORKOUT PLANS",
      category: "Training",
      description: "Customized workout routines tailored to your body type and goals — whether it’s weight loss, muscle gain, or general fitness.",
      image: "/images/strength.png",
      tag: "Custom Goal Routines"
    },
    {
      id: "07",
      title: "CARDIO TRAINING",
      category: "Endurance",
      description: "Boost your heart health with cardio exercises like treadmill, cycling, and more. Helps in burning fat and increasing stamina.",
      image: "/images/hero.png",
      tag: "Heart Health & Stamina"
    },
    {
      id: "08",
      title: "STRENGTH TRAINING",
      category: "Heavy Duty",
      description: "Build muscle and improve body strength using modern equipment and expert guidance. Suitable for beginners and advanced members.",
      image: "/images/strength.png",
      tag: "Jerai & Steel City Iron"
    },
    {
      id: "09",
      title: "GROUP ACTIVITIES",
      category: "Community",
      description: "Stay motivated with fun group workouts and activities. Train together, stay consistent, and enjoy a positive fitness environment.",
      image: "/images/zumba_yoga.png",
      tag: "Positive Environment"
    },
    {
      id: "10",
      title: "STEAM BATH",
      category: "Recovery",
      description: "Relax and detox your body with our steam bath facility. Helps in muscle recovery, stress relief, and improving blood circulation.",
      image: "/images/steam.png",
      tag: "Post-Workout Detox"
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
    googleMapsUrl: "https://maps.google.com/?q=Hiwale+Patil+Lawns+Beed+By+Pass+Road"
  }
};
