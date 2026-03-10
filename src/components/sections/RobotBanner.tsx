import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function RobotBanner() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.06)] bg-[#0d0d1a] items-center text-center py-20 px-10 shadow-[0_0_80px_rgba(147,51,234,0.1)]"
        >
          {/* Radial Glow Blob */}
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-glow blur-[100px] pointer-events-none opacity-40"></div>

          {/* Centered Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-5xl leading-tight">
              Ready to automate your operations?
            </h2>
            <p className="mb-10 font-sans text-lg text-muted">
              Stop bleeding margin to inefficiencies. Let our AI agents and scalable systems handle the heavy lifting while you focus on strategic growth.
            </p>
            <a href="#services" className="group inline-flex w-fit items-center gap-2 border-b border-purple pb-1 font-sans font-semibold text-white transition-colors hover:text-purple-light">
              Explore Our Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
