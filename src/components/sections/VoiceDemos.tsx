import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const DEMOS = [
  {
    title: "Inbound Lead Qualification",
    subtitle: "Real Estate Brokerage",
    scenario: "Prospect calls from a Zillow listing.",
    outcome: "Agent answers instantly, qualifies budget, and schedules a viewing.",
    audioUrl: "" // Placeholder
  },
  {
    title: "Outbound Reactivation",
    subtitle: "SaaS Platform",
    scenario: "Calling users who churned 6 months ago.",
    outcome: "Agent handles objections and books demo for feature update.",
    audioUrl: ""
  },
  {
    title: "Appointment Confirmations",
    subtitle: "Medical Clinic",
    scenario: "Automated pre-appointment checklist.",
    outcome: "Reduced no-shows by 40%.",
    audioUrl: ""
  },
  {
    title: "After-hours Support",
    subtitle: "E-Commerce Brand",
    scenario: "Customer calls at 2 AM regarding shipping.",
    outcome: "Reads Shopify API order status in conversational voice.",
    audioUrl: ""
  }
];

export function VoiceDemos() {
  const [wordMap] = useState(['AI Agents', 'Voice Al', 'Sales Reps']);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % wordMap.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [wordMap.length]);

  return (
    <section className="relative py-20 px-6 bg-surface-2/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>VOICE DEMONSTRATIONS</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-8 mb-4 flex flex-wrap items-center justify-center gap-x-4">
            <span>Listen to our</span>
            <span className="text-purple italic min-w-[200px] text-center">{wordMap[wordIdx]}</span>
            <span>in action</span>
          </h2>
          <p className="font-sans text-lg text-muted">
            <a href="#" className="italic text-purple-light hover:underline">Actual AI voice recordings from live deployments.</a>
          </p>
        </div>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {DEMOS.map((demo, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="glass-card p-6 flex flex-col hover:border-purple/30 transition-colors"
            >
              <div className="mb-4">
                <h3 className="font-sans text-xl font-bold text-white">{demo.title}</h3>
                <p className="font-sans text-sm text-muted">{demo.subtitle}</p>
              </div>
              
              <div className="flex flex-col gap-2 mb-6 font-sans text-sm text-white/90">
                <div className="flex gap-2 items-start rounded-lg bg-surface-2 p-3 border border-border">
                  <span className="font-semibold text-purple-light shrink-0">Scenario:</span>
                  <span>{demo.scenario}</span>
                </div>
                <div className="flex gap-2 items-start rounded-lg bg-surface-2 p-3 border border-border">
                  <span className="font-semibold text-purple-light shrink-0">Outcome:</span>
                  <span>{demo.outcome}</span>
                </div>
              </div>

              <div className="mt-auto">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple hover:bg-purple-mid transition-colors py-3 font-sans font-medium text-white">
                  <Play className="h-4 w-4" fill="currentColor" /> Play Demo
                </button>
                <div className="mt-4 flex flex-col gap-2">
                  {/* Fake Audio Player UI */}
                  <div className="flex items-center gap-4 text-xs text-muted font-mono">
                    <span>0:00</span>
                    <div className="flex-1 h-1 bg-surface-2 rounded-full overflow-hidden">
                      <div className="w-0 h-full bg-purple"></div>
                    </div>
                    <span>1:24</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
