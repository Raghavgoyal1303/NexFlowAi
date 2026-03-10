import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Phone, MessageSquare } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { PillButton } from '../ui/PillButton';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

const CHECKLIST = [
  "Complete workflow audit",
  "ROI & cost-saving projections",
  "Technology stack recommendation",
  "Custom voice AI demo mapping",
  "Deployment timeline estimation"
];

export function DiscoveryCall() {
  return (
    <section className="relative py-20 px-6 bg-[#0a0a14] border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <SectionLabel>READY TO START</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-8 mb-4">
            Let's build your <span className="text-purple italic">unfair advantage.</span>
          </h2>
          <p className="font-sans text-xl text-muted">Stop competing on effort. Start competing on leverage.</p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 mt-8">
          {/* Left Column: Type C - Slide In Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-sans text-2xl font-bold text-white mb-6">What to Expect in Your Call</h3>
            <ul className="space-y-4 mb-10">
              {CHECKLIST.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-light" />
                  <span className="font-sans text-lg text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-border bg-surface-2/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple/20 border border-purple-glow">
                  <Phone className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white">Reach Raghav at:</h4>
                  <p className="font-sans text-sm text-muted">Direct Founder Access</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <PillButton className="bg-surface hover:bg-surface border border-border text-white">
                  +91 6284911102
                </PillButton>
                <PillButton className="bg-green/10 hover:bg-green/20 border-green/30 text-green" icon={<MessageSquare className="h-4 w-4" />}>
                  WhatsApp
                </PillButton>
              </div>
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
            {/* Background Glow */}
            <div className="absolute inset-0 bg-purple-glow blur-[100px] opacity-40 rounded-full"></div>
            
            <div className="glass-card relative flex flex-col items-center p-10 text-center border-purple/30 shadow-2xl shadow-purple/10">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-mid/20 border border-purple-glow">
                <Calendar className="h-10 w-10 text-purple-light" />
              </div>
              <h3 className="mb-2 font-serif text-3xl font-bold text-white">Discovery Call</h3>
              <p className="mb-8 font-sans text-muted">30 minutes · Free consultation</p>
              
              <PillButton 
                glow 
                fullWidth 
                className="mb-6 py-4 text-lg"
                onClick={() => openCalendly(CALENDLY_URLS.discovery)}
              >
                Book Discovery Call &rarr;
              </PillButton>
              
              <button 
                onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
                className="mb-6 font-sans text-sm text-purple-light hover:underline font-medium"
              >
                Prefer a founder session? $250 Deep-Dive with Raghav
              </button>
              
              <span className="font-sans text-xs text-muted flex items-center gap-1 justify-center">
                ⏱ Usually responds within 2 hours
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
