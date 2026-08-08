import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollReveals() {
  const ctx = gsap.context(() => {
    // Reveal text headers with clip-path or y-offset
    const headings = document.querySelectorAll('.gsap-reveal-title');
    headings.forEach(heading => {
      gsap.fromTo(heading,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // About Features Stagger
    const featureCards = document.querySelectorAll('.gsap-feature-card');
    if (featureCards.length) {
      gsap.fromTo(featureCards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-features-container',
            start: 'top 80%',
          }
        }
      );
    }

    // Membership Cards Stagger
    const membershipCards = document.querySelectorAll('.gsap-membership-card');
    if (membershipCards.length) {
      gsap.fromTo(membershipCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.membership-cards-grid',
            start: 'top 80%',
          }
        }
      );
    }

    // Image Clip Path Reveals
    const clipImages = document.querySelectorAll('.gsap-clip-reveal');
    clipImages.forEach(img => {
      gsap.fromTo(img,
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%'
          }
        }
      );
    });
  });

  return ctx;
}

export function initFacilitiesEntrance(containerRef) {
  if (!containerRef.current) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });

    // 1. Heading reveals upward
    tl.fromTo('.gsap-fac-heading',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    // 2. Subheading fades in
    tl.fromTo('.gsap-fac-subheading',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      "-=0.4"
    );

    // 3. Stats row
    tl.fromTo('.gsap-fac-stat',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
      "-=0.3"
    );

    // 4. Facility items stagger into view
    tl.fromTo('.gsap-fac-item',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' },
      "-=0.2"
    );

    // 5. Numbers reveal with subtle movement
    tl.fromTo('.gsap-fac-num',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.06 },
      "-=0.6"
    );

    // 6. Accent lines animate horizontally
    tl.fromTo('.gsap-fac-line',
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.8, stagger: 0.06, ease: 'power2.inOut' },
      "-=0.5"
    );
  }, containerRef);

  return ctx;
}
