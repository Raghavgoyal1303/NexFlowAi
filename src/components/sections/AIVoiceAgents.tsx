import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { CountUp } from '../ui/CountUp';
import { PillButton } from '../ui/PillButton';

const FEATURES = [
  { title: "Inbound", desc: "greet → qualify → route → schedule" },
  { title: "Outbound", desc: "targeted campaigns, callbacks, re-engagement" },
  { title: "Follow-ups", desc: "multistep cadences across phone/SMS/WhatsApp" },
  { title: "CRM-native", desc: "notes, statuses, tasks logged automatically" },
  { title: "Human-grade", desc: "natural dialogue, context memory, graceful handoff" }
];

export function AIVoiceAgents() {
  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Type C - Slide In Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex h-14 w-fit items-center justify-center rounded-2xl bg-[#111127] p-4 border border-border">
              <Phone className="h-6 w-6 text-purple-light" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              AI Voice Agents
            </h2>
            <p className="mt-4 mb-8 font-serif text-xl italic text-muted">
              Zero latency. Zero sleep. Total conversion.
            </p>

            <ul className="mb-10 space-y-4">
              {FEATURES.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-purple-mid/20 border border-purple-glow">
                    <CheckCircle2 className="h-4 w-4 text-purple-light" />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-white">{feature.title}: </span>
                    <span className="font-sans text-muted">{feature.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface-2 px-5 py-2">
              <div className="h-2 w-2 rounded-full bg-green animate-pulse" />
              <span className="font-sans text-sm font-medium text-white/90">
                Go-live speed: typically 7–14 days • <a href="#demos" className="text-purple-light hover:underline">See it in action</a>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Type D - Slide In Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-glow blur-[100px] pointer-events-none"></div>
            
            <div className="glass-card relative border-purple/20 p-8 shadow-2xl shadow-purple/10 border-[1.5px] bg-[#0d0d1a]/80">
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-sm tracking-tight text-muted">AI Voice Performance · Real-time dashboard</span>
              </div>
              
              <div className="flex flex-col items-center justify-center py-8">
                {/* CSS Donut Chart */}
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-surface-2"
                     style={{ background: `conic-gradient(#9333ea 0deg 90deg, #111127 90deg 360deg)` }}>
                  <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-[#0d0d1a] shadow-inner shadow-black">
                    <span className="font-sans text-4xl font-bold text-white">
                      <CountUp end={25} suffix="%" />
                    </span>
                    <span className="font-sans text-xs text-muted">Conversion Jump</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-surface-2/50 p-4 border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-sans text-sm font-bold text-white">Live Call Volume</span>
                  <span className="font-mono text-xs text-green">+142% MoM</span>
                </div>
                <div className="h-2 w-full rounded-full bg-surface">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-mid to-purple-light" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
