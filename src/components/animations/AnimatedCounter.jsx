import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ value, duration = 2, suffix = '', prefix = '', className = '' }) {
  const countRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!countRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration: duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: countRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          setDisplayValue(Math.floor(obj.val));
        },
      });
    }, countRef);

    return () => ctx.revert();
  }, [value, duration]);

  return (
    <span ref={countRef} className={className}>
      {prefix}{displayValue.toLocaleString('en-IN')}{suffix}
    </span>
  );
}
