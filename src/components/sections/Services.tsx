import React from 'react';
import { motion } from 'framer-motion';

export function Services() {
  return (
    <section className="relative py-20 px-6 bg-surface-2/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">
            Our <span className="italic text-purple text-glow">Services</span>
          </h2>
          <p className="mt-4 font-serif text-xl italic text-muted">Two pillars. One goal: revenue momentum.</p>
        </motion.div>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Left Service */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="group glass-card overflow-hidden p-8 hover:border-purple/30"
          >
            <div className="mb-8 flex h-64 w-full flex-col justify-end rounded-xl border border-border/50 bg-[#0d0d1a] px-6 py-6 font-sans relative">
              {/* Chat Mockup */}
              <div className="absolute inset-x-6 top-6 flex flex-col gap-4">
                <div className="flex w-fit max-w-[85%] flex-col rounded-2xl rounded-tl-sm bg-purple-mid/20 px-4 py-3 text-sm text-white border border-purple-glow">
                  <span className="mb-1 text-xs font-semibold text-purple-light">Incoming Call</span>
                  <p>"Hello, I'm looking to book a demo for next Tuesday."</p>
                </div>
                <div className="flex w-fit max-w-[85%] self-end flex-col rounded-2xl rounded-tr-sm bg-surface-2 px-4 py-3 text-sm text-white/90 border border-border">
                  <span className="mb-1 text-xs font-semibold text-muted">AI Response</span>
                  <p>"Absolutely. I have a 10 AM or 2 PM available. Which works best for you?"</p>
                </div>
              </div>
            </div>
            <h3 className="mb-3 font-serif text-3xl font-bold text-white group-hover:text-purple-light transition-colors">AI Voice Intelligence</h3>
            <p className="font-sans leading-relaxed text-muted">
              Hyper-realistic AI voice agents deployed across phone networks. Qualify leads, route calls, and schedule meetings automatically mimicking human empathy flawlessly.
            </p>
          </motion.div>

          {/* Right Service */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="group glass-card overflow-hidden p-8 hover:border-purple/30"
          >
            <div className="mb-8 flex h-64 w-full flex-wrap items-center justify-center gap-3 rounded-xl border border-border/50 bg-[#0d0d1a] p-8">
              <div className="animate-float whitespace-nowrap rounded-lg border border-border bg-surface-2 px-6 py-3 font-mono text-sm text-white shadow-lg shadow-black/50" style={{ animationDelay: '0s' }}>
                Auth & Security
              </div>
              <div className="animate-float whitespace-nowrap rounded-lg border border-purple-glow bg-purple-mid/10 px-6 py-3 font-mono text-sm text-purple-light shadow-xl shadow-purple/20" style={{ animationDelay: '0.5s' }}>
                Stripe Billing
              </div>
              <div className="animate-float whitespace-nowrap rounded-lg border border-border bg-surface-2 px-6 py-3 font-mono text-sm text-white shadow-lg shadow-black/50" style={{ animationDelay: '1s' }}>
                Analytics Dashboard
              </div>
              <div className="animate-float whitespace-nowrap rounded-lg border border-green/30 bg-green/10 px-6 py-3 font-mono text-sm text-green shadow-lg shadow-black/50" style={{ animationDelay: '1.5s' }}>
                Native Integrations
              </div>
            </div>
            <h3 className="mb-3 font-serif text-3xl font-bold text-white group-hover:text-purple-light transition-colors">MVP Excellence</h3>
            <p className="font-sans leading-relaxed text-muted">
              From zero to launched in weeks. We engineer robust SaaS applications with complete authentication, billing, and highly performant user interfaces built to scale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
