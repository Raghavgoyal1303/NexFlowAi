import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '../ui/Accordion';

const FAQ_ITEMS = [
  {
    question: "Is this custom built for us?",
    answer: "Yes. We don't sell off-the-shelf software. Every voice agent and MVP we build is uniquely architected for your specific business logic, brand voice, and tech stack."
  },
  {
    question: "Voice agent or human? How does it sound?",
    answer: "We use ultra-low latency (<600ms) models combined with hyper-realistic voice synthesis. Most customers cannot tell they are speaking to an AI—it includes natural pauses, filler words, and handles interruptions gracefully."
  },
  {
    question: "How fast can we go live?",
    answer: "For voice agents: typically 7 to 14 days from sign-off to full production deployment. For SaaS MVPs: 3 to 6 weeks depending on the complexity of features and integrations."
  },
  {
    question: "What about security & data compliance?",
    answer: "Security is built in, not bolted on. We implement SOC2 compliant infrastructure, end-to-end encryption, and can deploy to dedicated VPCs if your compliance requires it (e.g., HIPAA)."
  },
  {
    question: "Do you disclose pricing?",
    answer: "Our engagements typically start at $10k+ for MVP builds and $2k/mo+ for voice intelligence. We provide a guaranteed fixed-price quote after the Discovery Call. No mysterious hourly billing."
  }
];

export function FAQ() {
  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            FAQs <span className="italic text-purple-light text-xl md:text-3xl font-normal">(straight talk)</span>
          </h2>
          <p className="font-sans text-muted">Clear answers to your most pressing questions.</p>
        </motion.div>

        <Accordion items={FAQ_ITEMS} animateEntrance />
      </div>
    </section>
  );
}
