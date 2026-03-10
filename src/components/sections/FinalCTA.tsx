import React from 'react';
import { motion } from 'framer-motion';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';
import { Sparkles, Code } from 'lucide-react';
import { PillButton } from '../ui/PillButton';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-[#050508]">
      {/* Top Radial Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-purple-glow blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-white"
        >
          Let's build systems that <span className="italic text-purple text-glow">make you money</span> while you sleep.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-8 max-w-2xl font-sans text-xl text-white/50 font-medium"
        >
          Your competitors are adopting AI. Don't be the one left paying humans for robotic work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button 
              onClick={() => openCalendly(CALENDLY_URLS.discovery)}
              className="rounded-full bg-purple px-10 py-5 font-sans font-bold text-white shadow-lg shadow-purple/20 transition-all hover:scale-105 hover:bg-purple-mid"
            >
              Book Your Discovery Call &rarr;
            </button>
            <button 
              onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
              className="rounded-full border border-white/20 px-10 py-5 font-sans font-bold text-white transition-all hover:bg-white/5"
            >
              $250 Deep-Dive with Raghav
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
