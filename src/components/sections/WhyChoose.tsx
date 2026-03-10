import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Code, Database, Globe } from 'lucide-react';

const CARDS = [
  {
    title: "24/7 · Always Available",
    icon: <Clock className="h-8 w-8 text-white" />,
    desc: "Our AI systems never sleep, taking calls and processing logic around the clock."
  },
  {
    title: "Enterprise Security",
    icon: <Shield className="h-8 w-8 text-purple-light" />,
    desc: "Bank-grade encryption, SOC2 compliance readiness, and private VPC deployments."
  },
  {
    title: "Lightning Fast",
    icon: <Zap className="h-8 w-8 text-purple-mid" />,
    chip: "Build Speed | Weeks, not quarters",
    desc: "Rapid MVPs deployed in record time without compromising architectural integrity."
  },
  {
    title: "Clean Architecture",
    icon: <Code className="h-8 w-8 text-green" />,
    desc: "Extensible codebases built on modern stacks ready for scale from day one."
  },
  {
    title: "Data Integrity",
    icon: <Database className="h-8 w-8 text-white" />,
    desc: "Reliable, uncorrupted data pipelines feeding directly into your analytics hubs."
  },
  {
    title: "Global Reach",
    icon: <Globe className="h-8 w-8 text-purple" />,
    desc: "Deploy systems with multi-language AI models designed for global audiences."
  }
];

export function WhyChoose() {
  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Why Choose <span className="text-purple text-glow">NexFlow</span></h2>
          <p className="mt-4 font-sans text-lg text-muted">Architectural superiority meets execution speed.</p>
        </motion.div>

        <motion.div
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group glass-card flex flex-col items-start p-8 transition-colors hover:border-purple/30 hover:bg-surface-2"
            >
              <div className="mb-6 rounded-full border border-border bg-surface p-4 transition-transform group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="mb-3 font-sans text-xl font-bold text-white">{card.title}</h3>
              {card.chip && (
                <span className="mb-4 inline-block rounded-full bg-surface-2 px-3 py-1 font-sans text-xs font-medium text-white/80 border border-border">
                  {card.chip}
                </span>
              )}
              <p className="font-sans text-muted">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
