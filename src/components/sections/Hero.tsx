import React, { lazy, Suspense, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { GlowOrbs } from '../ui/GlowOrbs';
import { PillButton } from '../ui/PillButton';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

const SplineRobot = lazy(() => import('./SplineRobot'));

export function Hero() {
  const blurInVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)" },
    show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } }
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInRightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg px-8 pt-28 pb-16">
      <GlowOrbs />
      
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-center relative z-10">

        {/* LEFT: Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full text-left lg:w-1/2"
        >
          <motion.h1 
            variants={blurInVariants}
            className="font-serif text-[64px] font-bold leading-[1.05] tracking-tight text-white md:text-[86px]"
          >
            Build Faster.
          </motion.h1>
          <motion.h2 
            variants={blurInVariants}
            className="mt-2 font-serif text-[48px] leading-[1.05] text-white/40 md:text-[64px]"
          >
            Sleep Better.
          </motion.h2>
          
          <motion.p 
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-[520px] font-sans text-lg leading-relaxed text-white/65"
          >
            AI Voice agents that handle the grind 24/7 + MVP/Micro-SaaS that validates your market
            before you burn budget. Led by Raghav — we turn "we should" into "we shipped."
          </motion.p>
          
          <motion.p 
            variants={fadeUpVariants}
            transition={{ delay: 0.3 }}
            className="mt-5 font-serif text-lg italic text-purple-400"
          >
            Worst case: you leave with an action plan. Best case: you add a 24/7 closer to your team.
          </motion.p>
          
          <motion.div 
            variants={fadeUpVariants}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <PillButton 
              glow 
              className="px-10 py-5 text-base"
              onClick={() => openCalendly(CALENDLY_URLS.discovery)}
            >
              Book Your Discovery Call →
            </PillButton>
            <button 
              onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
              className="rounded-full border border-white/20 bg-transparent px-8 py-4 font-sans font-medium text-white transition-all hover:bg-white/5"
            >
              &lt;&gt; $250 Deep-Dive
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Spline Robot */}
        <motion.div
          variants={slideInRightVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative min-h-[500px] max-h-[580px] w-full lg:h-[560px] lg:w-1/2"
        >
          {/* Purple glow behind robot */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.2)_0%,transparent_68%)] blur-[50px]" />

          {/* Spline Robot Embed with Suspense */}
          <Suspense fallback={
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-[400px] w-[260px] animate-pulse rounded-2xl bg-purple-900/20" />
            </div>
          }>
            <SplineRobot />
          </Suspense>
        </motion.div>

      </div>
    </section>
  );
}