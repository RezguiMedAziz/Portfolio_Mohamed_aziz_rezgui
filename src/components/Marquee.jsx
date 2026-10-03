// src/components/Marquee.jsx
// Scrolling ticker used as a transition band between About and Experience.
import React from 'react';
import { marqueeItems } from '../data/portfolioData';

export default function Marquee() {
  const row = (suffix) =>
    marqueeItems.map((item, i) => (
      <span
        key={`${suffix}-${i}`}
        className="shrink-0 mx-2 px-6 py-2.5 rounded-full border b-line bg-[var(--card)] font-display text-base md:text-lg whitespace-nowrap"
      >
        {item}
      </span>
    ));

  return (
    <div
      className="surface-ink marquee overflow-hidden py-6 md:py-8 select-none"
      dir="ltr"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
}