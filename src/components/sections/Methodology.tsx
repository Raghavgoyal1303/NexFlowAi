import React from 'react';
import { motion } from 'framer-motion';
import { Target, Star, Code2, Rocket, Code, Zap } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { PillButton } from '../ui/PillButton';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

const STEPS = [
  {
    num: "01",
    title: "Discover",
    icon: <Target className="h-6 w-6 text-white" />,
    desc: "We analyze your operations and identify the highest leverage automation opportunities."
  },
  {
    num: "02",
    title: "Design",
    icon: <Star className="h-6 w-6 text-purple" />,
    desc: "Architecture blueprints, conversational flows, and robust UI mockups created."
  },
  {
    num: "03",
    title: "Build",
    icon: <Code2 className="h-6 w-6 text-purple-light" />,
    desc: "Iterative engineering sprints using modern stacks, LLMs, and proprietary tooling."
  },
  {
    num: "04",
    title: "Deploy & Learn",
    icon: <Rocket className="h-6 w-6 text-white" />,
    desc: "Production release, continuous analytics tuning, and relentless optimization."
  }
];

export function Methodology() {
  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <SectionLabel>OUR METHODOLOGY</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-8">
            How We <span className="italic text-purple text-glow">Work</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl font-sans text-lg text-muted">
            We operate like an elite internal product team: ship fast, measure honestly, iterate to traction.
          </p>
        </motion.div>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="glass-card relative flex flex-col items-start p-8 transition-colors hover:border-purple/30 group"
            >
              <div className="absolute right-6 top-6 font-mono text-2xl font-bold text-white/[0.05] transition-colors group-hover:text-purple/[0.1]">
                {step.num}
              </div>
              <div className="mb-6 rounded-full border border-border bg-surface-2 p-3 group-hover:bg-purple/10 group-hover:border-purple/30 transition-colors">
                {step.icon}
              </div>
              <h3 className="mb-3 font-sans text-xl font-bold text-white">{step.title}</h3>
              <p className="font-sans text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <PillButton 
              glow 
              onClick={() => openCalendly(CALENDLY_URLS.discovery)}
            >
              Book Your Discovery Call &rarr;
            </PillButton>
            <PillButton 
              icon={<Code className="h-4 w-4" />}
              onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
            >
              $250 Deep-Dive with Raghav
            </PillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
