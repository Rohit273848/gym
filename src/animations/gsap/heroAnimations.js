import gsap from 'gsap';

export function animateHero(containerRef, refs) {
  if (!containerRef.current) return;

  const { bgRef, overlayRef, headingLinesRef, descRef, buttonsRef, statsRef, scrollIndicatorRef } = refs;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    // 1. Background image scale 1.12 -> 1
    if (bgRef.current) {
      tl.fromTo(bgRef.current, 
        { scale: 1.15 }, 
        { scale: 1, duration: 1.8, ease: 'power2.out' }, 
        0
      );
    }

    // 2. Dark overlay fade in
    if (overlayRef.current) {
      tl.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 },
        0
      );
    }

    // 3. Heading lines reveal line by line
    if (headingLinesRef.current && headingLinesRef.current.length > 0) {
      tl.fromTo(headingLinesRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power4.out' },
        0.3
      );
    }

    // 4. Supporting text
    if (descRef.current) {
      tl.fromTo(descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      );
    }

    // 5. CTA buttons
    if (buttonsRef.current) {
      tl.fromTo(buttonsRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4"
      );
    }

    // 6. Stats appear sequentially
    if (statsRef.current && statsRef.current.length > 0) {
      tl.fromTo(statsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.3"
      );
    }

    // 7. Scroll indicator
    if (scrollIndicatorRef.current) {
      tl.fromTo(scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );
    }
  }, containerRef);

  return ctx;
}
