import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Youtube,
  Instagram,
  Headset,
  Code,
  Zap,
  Target,
  Award,
  ArrowRight,
  ChevronRight,
  Phone,
  Mic
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { TalkToAI } from '../TalkToAI';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

// --- Shared Constants ---
const cardHover: any = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const GLOBAL_CARD_CLASSES = "border border-white/[0.07] bg-[#0d0d1a] rounded-[14px] transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/[0.08] cursor-default";

// --- Components ---

function CountUp({ end, duration = 1500, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// --- Section 1: Hero ---
function TeamHero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-bg flex items-center">
      <div className="mx-auto max-w-7xl w-full grid gap-16 lg:grid-cols-2 items-center">
        {/* Left Column */}
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-[72px] md:text-[86px] font-bold leading-[1.05] tracking-tight mb-8"
          >
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block">Founder-led.</span>
            <span className="text-white block">Builder-operated.</span>
            <span className="text-white block">Outcome-obsessed.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="font-sans text-xl text-white/90 mb-4 font-medium uppercase tracking-wide">Raghav — Founder & Lead Builder</h3>
            <p className="font-serif text-lg italic text-purple-light leading-relaxed max-w-lg">
              "Turns ambiguous ideas into production systems—fast. Known for ruthless scoping, clean execution, and an allergy to 'integration theater.'"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => openCalendly(CALENDLY_URLS.discovery)}
              className="rounded-full bg-white/5 border border-white/20 px-8 py-4 font-sans font-bold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Book Your Discovery Call
            </button>
            <button
              onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
              className="rounded-full border border-purple-light/40 px-8 py-4 font-sans font-bold text-purple-light transition-all hover:bg-purple/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95"
            >
              $250 Deep-Dive with Raghav
            </button>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/10 blur-[120px] opacity-50" />

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative group cursor-default"
          >
            {/* Photo Placeholder */}
            <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d1a] shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple/50">
              <img
                src="/WhatsApp Image 2026-02-09 at 4,45,43 PM-Picsart-AiImageEnhancer.jpeg"
                alt="Raghav - Founder & AI Systems Builder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 left-0 right-0 max-w-[320px] mx-auto md:mx-0 md:-left-5 md:right-auto rounded-xl border border-white/10 bg-[#0d0d1a] p-6 shadow-1xl backdrop-blur-sm"
            >
              <h6 className="font-sans text-3xl font-bold text-white mb-1">Raghav Goyal</h6>
              <p className="font-sans text-sm text-muted mb-4 font-medium">Founder & AI Systems Builder</p>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Section 2: About & Expertise ---
function AboutExpertise() {
  const expertise = [
    {
      title: "AI Voice Systems",
      desc: "24/7 agents that book meetings and qualify leads",
      tag: "50+ voice agents deployed",
      icon: <Headset className="h-6 w-6" />
    },
    {
      title: "MVP Development",
      desc: "Production-ready products in weeks, not quarters",
      tag: "30+ MVPs launched",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Growth Strategy",
      desc: "Data-driven approaches to scaling automation",
      tag: "100+ growth experiments",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#050508]">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-start">
        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="font-sans text-lg text-white/70 leading-relaxed">
            Founder & operator of NexFlowAI; public journey documented on YouTube <span className="text-white font-bold">@AIwithRaghav</span>.
          </p>
          <p className="font-sans text-lg text-white/70 leading-relaxed">
            Creator of hands-on playbooks for AI voice SDRs, receptionists, and micro-SaaS validation. Building in public and sharing real implementations that drive revenue.
          </p>
          <p className="font-sans text-lg text-white/70 leading-relaxed">
            From first demos to scaling systems across Real Estate, Automotive, Restaurants, and Clinics— focused on ROI-driven automation that pays for itself in weeks, not quarters.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn(GLOBAL_CARD_CLASSES, "p-6 flex items-center gap-6 group")}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 border border-purple/20 text-purple group-hover:bg-purple group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="font-sans text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="font-sans text-sm text-muted mb-2">{item.desc}</p>
                <span className="font-sans text-xs font-bold text-purple-light uppercase tracking-wider">{item.tag}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



// --- Section 4: Journey Milestones ---
function JourneyMilestones() {
  const milestones = [
    { year: "2023", title: "First AI outbound demos", result: "First booked meetings" },
    { year: "2024", title: "Early MVPs launched", result: "First paid pilots" },
    { year: "2024", title: "Vertical specializations", result: "RE/Auto/Restaurants/Clinics focus" },
    { year: "2025", title: "NexFlowAI founded", result: "Scaling AI automation solutions", highlight: true },
  ];

  return (
    <section className="py-20 px-6 bg-surface-2/30">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-20">Journey Milestones</h2>

        <motion.div
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-4"
        >
          {/* Vertical Line */}
          <div className="absolute left-[31px] top-8 bottom-8 border-l-2 border-purple-800/40" />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              className={cn(
                "group relative flex items-center gap-8 py-4 transition-all",
                m.highlight ? "bg-[#0d0d1a] border border-white/10 rounded-xl p-4 px-8" : "px-4"
              )}
            >
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-800 text-sm font-bold text-white transition-all group-hover:bg-purple group-hover:scale-110">
                {m.year}
              </div>

              <div className="flex flex-1 flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="font-sans text-lg font-bold text-white group-hover:text-white/90 transition-colors">{m.title}</span>
                <span className="font-sans text-sm font-bold text-purple/70 group-hover:text-purple transition-all italic">→ {m.result}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 5: What to Expect ---
function WhatToExpect() {
  const steps = [
    { id: "①", text: "Understand your goals and constraints" },
    { id: "②", text: "Define success metrics together" },
    { id: "③", text: "Outline potential solutions" },
    { id: "④", text: "Discuss next steps and timeline" }
  ];

  return (
    <section className="py-20 px-6 bg-bg">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-white/10 bg-[#0d0d1a] p-10 md:p-16 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.15),transparent)] opacity-50" />

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-16 relative z-10">What to Expect in Your Call</h2>

          <motion.div
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 mb-16 relative z-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex items-center gap-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple text-white font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  {step.id}
                </div>
                <p className="font-sans text-lg text-white font-medium">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            <button
              onClick={() => openCalendly(CALENDLY_URLS.discovery)}
              className="flex-1 max-w-[340px] rounded-full bg-purple py-5 font-sans font-bold text-white shadow-xl shadow-purple/20 transition-all hover:scale-105 hover:bg-purple-mid"
            >
              Book Your Discovery Call &rarr;
            </button>
            <button
              onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
              className="flex-1 max-w-[340px] rounded-full border border-purple-light/40 py-5 font-sans font-bold text-purple-light transition-all hover:bg-purple/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              &lt;&gt; $250 Deep-Dive with Raghav
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Main Page ---
export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg relative">
      <TeamHero />
      <AboutExpertise />
      <JourneyMilestones />
      <WhatToExpect />
      <TalkToAI />
    </div>
  );
}
