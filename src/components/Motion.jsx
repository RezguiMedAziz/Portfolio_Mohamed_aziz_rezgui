// src/components/Motion.jsx
// Small motion toolkit: scroll reveal, word by word headlines, counters,
// scroll progress bar and the shaded bridge between two sections.
import React, { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px', ...options }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

// variant: up | left | right | scale | mask
export function Reveal({ children, delay = 0, variant = 'up', className = '', as: Tag = 'div', ...rest }) {
  const [ref, inView] = useInView();
  const [settled, setSettled] = useState(false);

  // Once the entrance is over, drop the delay so hover effects stay snappy
  useEffect(() => {
    if (!inView) return undefined;
    const id = setTimeout(() => setSettled(true), delay + 1600);
    return () => clearTimeout(id);
  }, [inView, delay]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: settled ? '0ms' : `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Words({ text, className = '', delay = 0, step = 70, as: Tag = 'span' }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const words = String(text || '').split(' ');

  return (
    <Tag ref={ref} className={`${inView ? 'is-in' : ''} ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span className="word-mask" aria-hidden="true">
            <span className="word-inner" style={{ transitionDelay: `${delay + i * step}ms` }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Tag>
  );
}

export function Counter({ to, duration = 1600, suffix = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 h-[2px] z-[70] pointer-events-none" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left bg-white mix-blend-difference"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

// Soft shaded gradient between two section surfaces.
// from / to are token names: ink, ink-2, paper, paper-2, paper-3
export function Bridge({ from, to, height = 160 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height,
        background: `linear-gradient(to bottom, var(--${from}) 0%, var(--${to}) 100%)`,
      }}
    />
  );
}
