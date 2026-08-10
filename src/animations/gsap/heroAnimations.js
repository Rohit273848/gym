import gsap from 'gsap';

// GSAP timeline controls the hero entrance sequence.
export function animateHero(containerRef, refs = {}) {
  if (!containerRef?.current) return;

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const { bgRef, overlayRef, badgeRef, headingLinesRef, descRef, buttonsRef, statsRef, scrollIndicatorRef, circleRef } = refs;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    // Background image entrance reveal: subtle zoom out (1.1 -> 1)
    if (bgRef?.current) {
      tl.fromTo(bgRef.current, 
        { scale: 1.08, opacity: 0.7 }, 
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }, 
        0
      );
    }

    if (overlayRef?.current) {
      tl.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        0
      );
    }

    if (badgeRef?.current) {
      tl.fromTo(badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.1
      );
    }

    // Line-by-line heading text reveal
    if (headingLinesRef?.current && headingLinesRef.current.length > 0) {
      tl.fromTo(headingLinesRef.current,
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power4.out' },
        0.15
      );
    }

    if (descRef?.current) {
      tl.fromTo(descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.35"
      );
    }

    if (buttonsRef?.current) {
      tl.fromTo(buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      );
    }

    if (statsRef?.current && statsRef.current.length > 0) {
      tl.fromTo(statsRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06 },
        "-=0.2"
      );
    }

    const indicator = circleRef?.current || scrollIndicatorRef?.current;
    if (indicator) {
      tl.fromTo(indicator,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' },
        "-=0.2"
      );
    }
  }, containerRef);

  return ctx;
}

