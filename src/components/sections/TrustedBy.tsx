import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';

const LOGOS = [
  "ACME LOGISTICS", "ZENITH HEALTH", "NEXUS FINTECH",
  "AURORA E-COMM", "VERTEX REALTY", "QUANTUM SAAS"
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionLabel>TRUSTED BY</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-6 mb-2">
            Who We've <span className="bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">Worked With</span>
          </h2>
          <p className="font-sans text-muted">Powering the next generation of automated companies.</p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg to-transparent pointer-events-none"></div>

          <div className="flex animate-marquee whitespace-nowrap gap-8 hover:[animation-play-state:paused]">
            {/* Double the logos array for seamless scrolling */}
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
              <div 
                key={idx} 
                className="flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface shadow-md border-b-2 hover:-translate-y-1 transition-transform"
              >
                <span className="font-sans font-black tracking-widest text-white/50">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
