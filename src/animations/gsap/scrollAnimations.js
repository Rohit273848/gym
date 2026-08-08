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

export function initPinnedFacilities(containerRef, updateActiveIndex) {
  if (!containerRef.current) return;

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // Desktop Pinned Scroll Showcase
    mm.add("(min-width: 1024px)", () => {
      const totalItems = 10;
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalItems * 350}`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * totalItems),
            totalItems - 1
          );
          if (updateActiveIndex) {
            updateActiveIndex(index);
          }
        }
      });
    });
  }, containerRef);

  return ctx;
}
