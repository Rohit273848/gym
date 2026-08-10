import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollReveals() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const ctx = gsap.context(() => {
    // 1. Reveal text headers with upward translation and fade
    const headings = document.querySelectorAll('.gsap-reveal-title');
    headings.forEach(heading => {
      gsap.fromTo(heading,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 2. Generic Fade-Up Elements
    const fadeUps = document.querySelectorAll('.gsap-fade-up');
    fadeUps.forEach(el => {
      gsap.fromTo(el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 3. Feature Cards Stagger
    const featureCards = document.querySelectorAll('.gsap-feature-card');
    if (featureCards.length) {
      gsap.fromTo(featureCards,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureCards[0],
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // 4. Membership Cards Stagger
    const membershipCards = document.querySelectorAll('.gsap-membership-card');
    if (membershipCards.length) {
      gsap.fromTo(membershipCards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.membership-cards-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // 5. Image Reveals (Smooth Opacity + Scale + ClipPath)
    const clipImages = document.querySelectorAll('.gsap-clip-reveal');
    clipImages.forEach(img => {
      gsap.fromTo(img,
        { opacity: 0.3, scale: 1.05, clipPath: 'inset(6% 0% 6% 0%)' },
        {
          opacity: 1,
          scale: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  });

  // Force ScrollTrigger refresh after a short tick to accurately measure layouts
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);

  return ctx;
}

export function initFacilitiesEntrance(containerRef) {
  if (!containerRef?.current) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    const facHeadings = containerRef.current.querySelectorAll('.gsap-fac-heading');
    if (facHeadings.length) {
      tl.fromTo(facHeadings,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }

    const facSubheading = containerRef.current.querySelector('.gsap-fac-subheading');
    if (facSubheading) {
      tl.fromTo(facSubheading,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        "-=0.4"
      );
    }

    const facItems = containerRef.current.querySelectorAll('.gsap-fac-item');
    if (facItems.length) {
      tl.fromTo(facItems,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
        "-=0.2"
      );
    }
  }, containerRef);

  return ctx;
}

