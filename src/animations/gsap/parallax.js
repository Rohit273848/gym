import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroParallax(heroContainerRef, bgRef, contentRef) {
  if (!heroContainerRef.current) return;

  const ctx = gsap.context(() => {
    // Only apply on non-reduced motion and desktop/tablet
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: heroContainerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: -15,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: heroContainerRef.current,
            start: 'top top',
            end: '80% top',
            scrub: true
          }
        });
      }
    });
  }, heroContainerRef);

  return ctx;
}
