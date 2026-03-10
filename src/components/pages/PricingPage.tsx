import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Zap, 
  Rocket, 
  Shield, 
  Star, 
  CheckCircle2,
  Minus,
  Plus,
  ArrowRight
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

// --- Shared Constants & Styles ---
const cardHover: any = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const GLOBAL_CARD_CLASSES = "border border-white/[0.07] bg-[#0d0d1a] rounded-[14px] transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/[0.08] cursor-default";

// --- Pricing Data ---
type PricingTab = 'AI Voice & Chat' | 'MVP & Micro-SaaS' | 'Complete Solution';

const PRICING_DATA: Record<PricingTab, {
  subtext: string;
  plans: any[];
}> = {
  'AI Voice & Chat': {
    subtext: "Voice intelligence that scales response capacity without adding headcount.",
    plans: [/* Placeholder for specific tab plans if needed, user focused on 'Complete Solution' details */]
  },
  'MVP & Micro-SaaS': {
    subtext: "Production-grade foundations shipped in weeks, not months.",
    plans: []
  },
  'Complete Solution': {
    subtext: "One team. Two capabilities. Three ways to win—AI Voice & Text Automations + MVP/Micro-SaaS, scoped to ROI.",
    plans: [
      {
        name: "Launch",
        subtitle: "From Zero to First Wins",
        desc: "Perfect for founders validating demand and getting first wins quickly.",
        icon: <Rocket className="h-6 w-6 text-purple" />,
        price: "Let's Talk",
        tag: "Founder-scoped ROI",
        sections: [
          {
            label: "Complete Solution",
            items: [
              "Everything from Voice & Chat",
              "Everything from MVP & Micro-SaaS",
              "Integrated workflow automation",
              "End-to-end customer journey",
              "Unified analytics dashboard"
            ]
          },
          {
            label: "Delivery & Support",
            items: [
              "2–4 week build window",
              "Slack/WhatsApp project channel",
              "Documentation + handover video"
            ]
          }
        ],
        ctaType: "dark"
      },
      {
        name: "Scale",
        subtitle: "Compounding Growth",
        popular: true,
        desc: "For teams with traction that need performance and reliability at scale.",
        icon: <Zap className="h-6 w-6 text-white" />,
        iconBg: "bg-gradient-to-br from-purple to-pink-500",
        price: "Let's Talk",
        tag: "Founder-scoped ROI",
        sections: [
          {
            label: "Complete Solution",
            items: [
              "Advanced multi-channel automation",
              "Full-featured SaaS platform",
              "Advanced analytics & experiments",
              "Complete DevOps pipeline",
              "Enterprise integrations"
            ]
          },
          {
            label: "Delivery & Support",
            items: [
              "4–8 week build window",
              "Weekly show-and-tell & KPI reviews",
              "Runbook + team training"
            ]
          }
        ],
        ctaType: "purple"
      },
      {
        name: "Enterprise",
        subtitle: "Production at Scale",
        desc: "For regulated, multi-brand, or high-volume operations requiring enterprise features.",
        icon: <Shield className="h-6 w-6 text-purple" />,
        price: "Let's Talk",
        tag: "Founder-scoped ROI",
        sections: [
          {
            label: "Enterprise Solution",
            items: [
              "Complete enterprise voice platform",
              "Full multi-tenant SaaS architecture",
              "Enterprise compliance & security",
              "Dedicated infrastructure & support",
              "Custom roadmap & solution architecture"
            ]
          },
          {
            label: "Delivery & Support",
            items: [
              "PMO cadence + priority support",
              "Incident runbooks",
              "Dedicated solution architect"
            ]
          }
        ],
        ctaType: "dark"
      }
    ]
  }
};

// --- Page Component ---
// --- Section 3: All Plans Include ---
function AllPlansInclude() {
  const features = [
    "Founder-led collaboration with senior builders",
    "Conversion-grade UI + conversation design",
    "Analytics from day one",
    "CRM/calendar wiring",
    "Security aligned to client policies",
    "Own your code & infrastructure"
  ];

  return (
    <section className="px-6 mb-8">
      <div className="mx-auto max-w-7xl">
        <div className={cn(GLOBAL_CARD_CLASSES, "p-10 md:p-16")}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-12">All Plans Include</h2>
          <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple/20 text-purple border border-purple/30">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="font-sans text-base text-white/80">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Section 4: Optional Add-ons ---
function OptionalAddOns() {
  const addons = [
    "WhatsApp/SMS broadcasting",
    "Knowledge base buildout",
    "ELT → warehouse + BI",
    "Human QA for transcripts",
    "Sales ops toolkit"
  ];

  return (
    <section className="px-6 mb-32">
      <div className="mx-auto max-w-7xl">
        <div className={cn(GLOBAL_CARD_CLASSES, "p-10")}>
          <h2 className="font-serif text-2xl font-bold text-white text-center mb-8">Optional Add-ons</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {addons.map((a, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-sans font-bold text-sm hover:border-purple/50 transition-colors">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Section 5: FAQ ---
function PricingFAQ() {
  const faqData = [
    { q: "How fast can we launch?", a: "Launch tier: 2–4 weeks. Scale tier: 4–8 weeks. Enterprise: custom timeline based on complexity." },
    { q: "What tech stacks do you support?", a: "We're stack-agnostic and work with your existing infrastructure, whether modern or legacy systems." },
    { q: "Do you handle compliance?", a: "Yes, we align to your policies and can implement SOC2-ready processes, audit trails, and data residency requirements." },
    { q: "Do you disclose pricing publicly?", a: "We scope to ROI on the discovery call rather than one-size-fits-all packages." },
    { q: "Do you offer retainers?", a: "Yes, ongoing optimization retainers are available post-launch." },
    { q: "Who owns the code?", a: "You do. Always. Full repo transfer on completion." }
  ];

  return (
    <section className="px-6 py-20 bg-surface/30">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-[40px] md:text-[56px] font-bold text-white text-center mb-20 leading-tight">
          Frequently Asked <span className="text-purple italic">Questions</span>
        </h2>
        
        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {faqData.map((item, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="pb-12 border-b border-white/5 last:border-0"
            >
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-4">{item.q}</h3>
              <p className="font-sans text-base md:text-lg text-muted leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 6: Ready to Get Started? ---
function ReadyToStart() {
  return (
    <section className="px-6 py-32 text-center bg-bg relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-purple/5 blur-[100px] opacity-30" />
      
      <div className="mx-auto max-w-3xl relative z-10">
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8">Ready to Get Started?</h2>
        <p className="font-sans text-lg text-muted mb-12 leading-relaxed">
          Book your discovery call to discuss your specific needs and get a custom quote.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="rounded-full bg-purple px-10 py-5 font-sans font-bold text-white shadow-xl shadow-purple/20 transition-all hover:scale-105 hover:bg-purple-mid">
            Book Your Discovery Call &rarr;
          </button>
          <button className="rounded-full border border-purple-light/40 px-10 py-5 font-sans font-bold text-purple-light transition-all hover:bg-purple/5">
            $250 Deep-Dive with Raghav
          </button>
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<PricingTab>('Complete Solution');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <section className="pt-32 pb-20 px-6 mb-20 relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple/10 blur-[120px] opacity-30" />
        
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Plans that </span>
            <span className="text-purple italic">start where you are</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-sans text-lg text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {PRICING_DATA[activeTab].subtext}
          </motion.p>

          <div className="inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 mb-8 relative">
            {['☎ AI Voice & Chat', '🚀 MVP & Micro-SaaS', '⭐ Complete Solution'].map((tab) => {
              const tabName = tab.split(' ').slice(1).join(' ') as PricingTab;
              const isActive = activeTab === tabName;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tabName)}
                  className={cn(
                    "relative px-6 py-2.5 rounded-full font-sans text-sm font-bold transition-all",
                    isActive ? "text-white" : "text-muted hover:text-white"
                  )}
                >
                  {tab}
                  {isActive && (
                    <motion.div 
                      layoutId="pricingTabPill"
                      className="absolute inset-0 z-[-1] rounded-full bg-purple"
                      transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <motion.p
             key={activeTab}
             initial={{ opacity: 0, y: 5 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-sans text-xs text-muted mb-12"
          >
            {activeTab === 'Complete Solution' ? "*Best for organizations needing both custom software and AI agents." : "*Customized to your specific operational scale."}
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => openCalendly(CALENDLY_URLS.discovery)}
              className="rounded-full border border-white/20 px-8 py-3.5 font-sans font-bold text-white transition-all hover:bg-white/5"
            >
              Book Your Discovery Call
            </button>
            <button 
              onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
              className="rounded-full border border-purple-light/40 bg-transparent px-8 py-3.5 font-sans font-bold text-purple-light transition-all hover:bg-purple/5"
            >
              $250 Deep-Dive
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:grid-cols-3"
          >
            {PRICING_DATA[activeTab].plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={cn(
                  GLOBAL_CARD_CLASSES,
                  "p-8 flex flex-col relative",
                  plan.popular ? "border-purple-500/40 bg-purple-900/[0.04] lg:-translate-y-4 lg:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)]" : ""
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="flex justify-between items-start mb-8">
                  <div className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl",
                    plan.iconBg || "bg-white/5 border border-white/10"
                  )}>
                    {plan.icon}
                  </div>
                  <span className="rounded-lg bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                    {plan.tag}
                  </span>
                </div>

                <div className="mb-8">
                  <h3 className="font-serif text-3xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="font-sans text-sm font-bold text-purple-light tracking-wide uppercase">{plan.subtitle}</p>
                </div>

                <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                  {plan.desc}
                </p>

                <div className="mb-10 pt-8 border-t border-white/5">
                   <div className="font-serif text-4xl font-bold text-white">{plan.price}</div>
                   <div className="font-sans text-xs text-muted mt-1 italic">Scoped based on project value</div>
                </div>

                <div className="space-y-10 flex-1">
                  {plan.sections.map((section: any, si: number) => (
                    <div key={si}>
                      <h4 className="font-sans text-[11px] font-bold text-purple-light uppercase tracking-widest mb-6 flex items-center gap-3">
                        <span className="h-4 w-0.5 bg-purple shrink-0" />
                        {section.label}
                      </h4>
                      <ul className="space-y-4">
                        {section.items.map((item: string, ii: number) => (
                          <li key={ii} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-purple-light shrink-0 mt-0.5" />
                            <span className="font-sans text-sm text-white/70 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openCalendly(CALENDLY_URLS.discovery)}
                  className={cn(
                    "mt-12 w-full rounded-xl py-4 font-sans font-bold transition-all hover:scale-[1.02]",
                    plan.ctaType === 'purple' 
                      ? "bg-purple text-white shadow-lg shadow-purple/20 hover:bg-purple-mid" 
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  )}
                >
                  Book Your Discovery Call &rarr;
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AllPlansInclude />
      <OptionalAddOns />
      <PricingFAQ />
      <ReadyToStart />
    </div>
  );
}
