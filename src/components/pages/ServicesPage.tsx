import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Code, 
  Target, 
  Star, 
  Rocket, 
  BarChart, 
  Shield, 
  MousePointer2, 
  Cpu, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Zap,
  Building2,
  Car,
  UtensilsCrossed,
  Users,
  FileText,
  PhoneCall
} from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { cn } from '../../utils/cn';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

// --- Shared Constants ---
const cardHover: any = {
  whileHover: {
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const GLOBAL_HOVER_CLASSES = "transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/[0.08] hover:shadow-[0_0_24px_rgba(124,58,237,0.2)]";

// --- Section 1: Hero ---
function ServicesHero() {
  return (
    <section className="relative bg-bg py-20 px-6 text-center">
      <div className="mx-auto max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Build Faster. </span>
          <span className="text-purple italic">Sell Smarter.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-sans text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          AI Voice & Text that books meetings 24/7 + MVP/Micro-SaaS that validates markets before you scale.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.discovery)}
            className="rounded-full bg-purple px-8 py-4 font-sans font-bold text-white shadow-lg shadow-purple/20 transition-all hover:scale-105 hover:bg-purple-mid"
          >
            Book Your Discovery Call &rarr;
          </button>
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
            className="rounded-full border border-white/20 px-8 py-4 font-sans font-medium text-white transition-all hover:bg-white/5"
          >
            &lt;&gt; $250 Deep-Dive
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 2: Our Process (Orbital Diagram) ---
const PROCESS_NODES = [
  { id: 'discovery', label: 'Discovery', icon: <Target className="h-5 w-5" />, desc: 'Deep-dive into your ops & goals' },
  { id: 'design', label: 'Design', icon: <Star className="h-5 w-5" />, desc: 'Architecture & UX mapping' },
  { id: 'build', label: 'Build', icon: <Code className="h-5 w-5" />, desc: 'High-speed production-ready code' },
  { id: 'deploy', label: 'Deploy', icon: <Rocket className="h-5 w-5" />, desc: 'Live launch to your infrastructure' },
  { id: 'scale', label: 'Scale', icon: <BarChart className="h-5 w-5" />, desc: 'Data-driven optimizations' },
];

function OurProcess() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative py-20 px-6 bg-[#050508]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>OUR METHODOLOGY</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
            Our <span className="text-purple">Process</span>
          </h2>
          <p className="font-sans text-lg text-muted max-w-2xl mx-auto">
            Interactive timeline showing how we transform your ideas into revenue-generating systems
          </p>
        </div>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex min-h-[500px] items-center justify-center overflow-hidden"
        >
          {/* Main Orbital Ring */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
            }}
            animate={{ rotate: 360 }}
            transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
            className="absolute h-[320px] w-[320px] rounded-full border border-purple/20 md:h-[400px] md:w-[400px]"
          />

          {/* Center Pillar */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-purple shadow-[0_0_40px_rgba(147,51,234,0.4)]"
          >
            <Zap className="h-10 w-10 text-white fill-white" />
          </motion.div>

          {/* Animated Orbital Container */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {PROCESS_NODES.map((node, idx) => {
              const angle = (idx * 360) / PROCESS_NODES.length;
              return (
                <div
                  key={node.id}
                  className="absolute"
                  style={{
                    transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="group relative flex flex-col items-center cursor-help"
                  >
                    <div className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface-2 transition-all duration-300",
                      hoveredNode === node.id ? "border-purple bg-purple/10 scale-110" : ""
                    )}>
                      <div className={cn("text-white/70 transition-colors", hoveredNode === node.id ? "text-purple" : "")}>
                        {node.icon}
                      </div>
                    </div>
                    
                    {/* Counter-rotating label so it stays upright */}
                    <div className="absolute top-[calc(100%+12px)] whitespace-nowrap">
                      <span className={cn(
                        "block font-sans text-xs font-bold uppercase tracking-widest transition-colors",
                        hoveredNode === node.id ? "text-purple" : "text-white/40"
                      )}>
                        {node.label}
                      </span>
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredNode === node.id && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute bottom-full mb-4 w-48 rounded-xl border border-purple/20 bg-surface p-4 text-center shadow-2xl z-50 pointer-events-none"
                        >
                          <p className="font-sans text-xs font-semibold text-white">{node.desc}</p>
                          <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-purple/20 bg-surface" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 3: AI Voice & Text Automations ---
const VOICE_FEATURES = [
  { icon: <Target className="h-6 w-6" />, title: "Inbound IQ", desc: "Qualify every lead instantly with natural conversation." },
  { icon: <Phone className="h-6 w-6" />, title: "Outbound Pro", desc: "High-volume follow-ups that never forget to call back." },
  { icon: <Users className="h-6 w-6" />, title: "Human Tone", desc: "Native accents and sub-600ms response latency." },
  { icon: <Zap className="h-6 w-6" />, title: "CRM Sync", desc: "Live data injection into Salesforce, HubSpot, or custom DBs." },
  { icon: <Clock className="h-6 w-6" />, title: "24/7 Availability", desc: "Zero wait times, midnight or holidays." },
  { icon: <Shield className="h-6 w-6" />, title: "Compliance", desc: "Full audit trails and HIPAA/SOC2 ready flows." },
];

function VoiceAutomations() {
  return (
    <section className="relative py-20 px-6 bg-surface-2/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple/10 border border-purple/20">
            <Phone className="h-8 w-8 text-purple" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Voice & Text <span className="text-purple">Automations</span>
          </h2>
          <p className="font-sans text-lg text-muted max-w-2xl mb-6">
            Replace manual outreach and intake with systems that handle the heavy lifting while sounding indistinguishable from your top reps.
          </p>
          <p className="font-serif text-xl italic text-purple-light underline decoration-purple/30 underline-offset-8">
            Operational leverage at the speed of sound.
          </p>
        </div>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24"
        >
          {VOICE_FEATURES.map((f, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn("group p-8 rounded-2xl border border-border bg-[#0d0d1a]", GLOBAL_HOVER_CLASSES)}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple/5 border border-purple/10 text-purple group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="font-sans font-bold text-white text-lg mb-2">{f.title}</h4>
              <p className="font-sans text-sm text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Conversation Demos */}
        <div className="mb-16 text-center">
          <h3 className="font-serif text-3xl font-bold text-white mb-12">See It In Action</h3>
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.12 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {[
              { 
                title: "Inbound Lead Qualification", 
                type: "INBOUND", 
                chat: [
                  { sender: 'Caller', msg: 'Hi, I need a quote for a 50-room hotel plumbing.' },
                  { sender: 'AI Agent', msg: 'Got it. Is this for a new build or retrofitting? I can prep a detailed scope for you now.' }
                ]
              },
              { 
                title: "Outbound Follow-up", 
                type: "OUTBOUND", 
                chat: [
                  { sender: 'AI Agent', msg: 'Hey Mark, just checking in on the proposal we sent Tuesday. Any questions on the pricing?' },
                  { sender: 'Contact', msg: 'Actually yes, about the SLA terms...' }
                ]
              },
              { 
                title: "FAQ & Routing", 
                type: "SUPPORT", 
                chat: [
                  { sender: 'Caller', msg: 'What are your hours?' },
                  { sender: 'AI Agent', msg: 'We operate 24/7, but for billing specifically, I can patch you to Sarah. Is now good?' }
                ]
              }
            ].map((demo, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={cn("rounded-2xl border border-border bg-[#0d0d1a] p-6 text-left group", GLOBAL_HOVER_CLASSES)}
              >
                <h4 className="font-sans font-bold text-white mb-1">{demo.title}</h4>
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-purple font-bold">{demo.type}</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-purple animate-pulse" />
                </div>
                <div className="space-y-4">
                  {demo.chat.map((c, ci) => (
                    <div key={ci} className={cn("flex flex-col", c.sender === 'AI Agent' ? "items-start" : "items-end")}>
                      <span className="text-[10px] text-muted mb-1 px-1">{c.sender}</span>
                      <div className={cn(
                        "rounded-2xl px-4 py-2 text-sm max-w-[85%] transition-colors duration-300",
                        c.sender === 'AI Agent' ? "bg-purple text-white rounded-tl-none group-hover:bg-purple-mid" : "bg-white/5 border border-white/10 text-white/80 rounded-tr-none group-hover:bg-white/10"
                      )}>
                        {c.msg}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button 
          onClick={() => openCalendly(CALENDLY_URLS.discovery)}
          className="w-full rounded-2xl bg-purple py-6 font-sans text-xl font-bold text-white shadow-xl shadow-purple/20 transition-all hover:bg-purple-mid hover:scale-[1.01]"
        >
          Book Your Discovery Call &rarr;
        </button>
      </div>
    </section>
  );
}

// --- Section 4: Advantages ---
function UnfairAdvantages() {
  return (
    <section className="relative py-20 px-6 bg-bg">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple/10 border border-purple/20">
            <Rocket className="h-8 w-8 text-purple" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            One team. <br/><span className="text-purple">Two unfair advantages.</span>
          </h2>
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-4 text-white/80 font-sans text-lg">
              <CheckCircle2 className="h-6 w-6 text-purple shrink-0" />
              Voice agents that never "forget to follow up."
            </div>
            <div className="flex items-center gap-4 text-white/80 font-sans text-lg">
              <CheckCircle2 className="h-6 w-6 text-purple shrink-0" />
              MVPs that validate before you scale.
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { icon: <Target className="h-10 w-10 text-purple-light" />, title: "Scope to signal", desc: "We focus on the metrics that actually move your revenue needle." },
            { icon: <Star className="h-10 w-10 text-purple-light" />, title: "Production feel", desc: "Even our 'V1' feels more polished than your competitors V3." },
            { icon: <BarChart className="h-10 w-10 text-purple-light" />, title: "Integrations that matter", desc: "No silos. We wire your new AI directly into your soul-stack." },
            { icon: <Shield className="h-10 w-10 text-purple-light" />, title: "Experiment plan", desc: "We build for testing, pivoting, and high-speed execution." },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn("p-8 rounded-2xl border border-white/5 bg-white/5 border-b-2 border-b-purple/20", GLOBAL_HOVER_CLASSES)}
            >
              <div className="mb-6 transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
              <h4 className="font-sans font-bold text-white text-lg mb-3">{item.title}</h4>
              <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 5: Sample Architectures ---
function SampleArchitectures() {
  return (
    <section className="relative py-20 px-6 bg-surface-2/30">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-4xl font-bold text-white text-center mb-16">Sample Architectures</h2>
        
        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {[
            {
              title: "Lead → App → Billing",
              desc: "Complete flow for service/B2B automation.",
              steps: ["Lead Capture", "Qualification", "Payment", "Onboarding"]
            },
            {
              title: "Content → KB → Agent",
              desc: "Personalized AI support using your data.",
              steps: ["Content CMS", "Knowledge Base", "AI Agent", "Customer"]
            },
            {
              title: "POS → Middleware → Reporting",
              desc: "Legacy hardware to modern insights.",
              steps: ["POS System", "Data Pipeline", "Analytics", "Dashboard"]
            }
          ].map((arch, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn("glass-card p-10 flex flex-col items-center text-center group", GLOBAL_HOVER_CLASSES)}
            >
              <h4 className="font-serif text-2xl font-bold text-white mb-2">{arch.title}</h4>
              <p className="font-sans text-sm text-muted mb-8">{arch.desc}</p>
              
              {/* Horizontal steps as requested */}
              <div className="flex flex-row items-center justify-center gap-2 mt-4 flex-wrap">
                {arch.steps.map((step, si) => (
                  <React.Fragment key={si}>
                    <div className="flex flex-col items-center">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple text-[10px] font-bold text-white group-hover:bg-purple-mid transition-colors">
                        {si + 1}
                      </div>
                      <span className="font-sans text-[10px] font-medium text-white/50 mt-1 text-center whitespace-nowrap">{step}</span>
                    </div>
                    {si < arch.steps.length - 1 && (
                      <span className="text-purple/40 text-sm font-bold mb-5 group-hover:text-purple transition-colors">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 6: Industries We Serve ---
function IndustriesWeServe() {
  return (
    <section className="relative py-20 px-6 bg-bg">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Industries We <span className="text-purple">Serve</span>
          </h2>
        </div>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { icon: <Building2 />, title: "Real Estate", desc: "Qualification & follow-up for high-ticket listings." },
            { icon: <Car />, title: "Automotive", desc: "Service reminders & trade-in lead capture." },
            { icon: <UtensilsCrossed />, title: "Restaurants", desc: "High-volume reservations & loyalty automation." },
            { icon: <Users />, title: "Clinics", desc: "HIPAA-compliant scheduling & intake." },
            { icon: <FileText />, title: "Education", desc: "Course sales & student eligibility screening." },
            { icon: <Zap />, title: "Services", desc: "Emergency dispatch & plumber/quote routing." },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn("group p-8 rounded-2xl border border-border bg-[#0d0d1a]", GLOBAL_HOVER_CLASSES)}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple/10 border border-purple/20 text-white transition-all group-hover:bg-purple group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                {item.icon}
              </div>
              <h4 className="font-sans font-bold text-white text-lg mb-3 transition-colors duration-200 group-hover:text-purple-light">{item.title}</h4>
              <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 7: Our Battle Stack ---
const STACK_LOGOS = [
  { name: 'Vapi', logo: 'https://vapi.ai/favicon.ico' },
  { name: 'OpenAI', logo: 'https://openai.com/favicon.ico' },
  { name: 'Supabase', logo: 'https://supabase.com/favicon.ico' },
  { name: 'Twilio', logo: 'https://www.twilio.com/favicon.ico' },
  { name: 'Claude', logo: '/stack_logo_1.png' },
  { name: 'Gemini', logo: '/stack_logo_2.png' },
  { name: 'Zapier', logo: '/stack_logo_3.png' },
  { name: 'Make', logo: '/stack_logo_4.png' },
  { name: 'LangChain', logo: '/stack_logo_5.png' },
  { name: 'n8n', logo: 'https://n8n.io/favicon.ico' },
  { name: 'Stripe', logo: 'https://stripe.com/favicon.ico' },
  { name: 'HubSpot', logo: 'https://www.hubspot.com/favicon.ico' },
];

function BattleStack() {
  return (
    <section className="relative py-20 px-6 bg-surface-2/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionLabel>OUR BATTLE STACK</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-6 leading-tight">
            <span className="text-white">Fast to ship. </span>
            <span className="text-purple">Hard to break.</span>
            <span className="text-white"> Easy to scale.</span>
          </h2>
          <div className="mt-8 grid gap-4 place-items-center">
             <p className="font-mono text-xs uppercase tracking-widest text-purple font-bold border-b border-purple/20 pb-2">Rule #1: lower latency, cleaner data, fewer clicks</p>
             <p className="font-mono text-xs uppercase tracking-widest text-purple font-bold">Rule #2: you own the code and infra</p>
          </div>
        </div>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-16"
        >
          {STACK_LOGOS.map((tool, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
              }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={cn("flex flex-col items-center justify-center p-6 rounded-2xl bg-transparent border border-white/[0.07] group", GLOBAL_HOVER_CLASSES)}
            >
              <img src={tool.logo} alt={tool.name} className="h-16 w-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 object-contain" />
              <span className="font-sans text-base font-bold text-white/50 group-hover:text-purple-light transition-colors duration-300 uppercase tracking-widest">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="font-sans text-muted mb-6">Want this wired to your stack?</p>
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.discovery)}
            className="rounded-full bg-purple px-10 py-5 font-sans font-bold text-white shadow-xl shadow-purple/20 transition-all hover:scale-105 hover:bg-purple-mid"
          >
            Book Your Discovery Call &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

// --- Section 8: Ready to Get Started? ---
function GetStarted() {
  return (
    <section className="relative py-20 px-6 bg-[#050508] border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="font-serif text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="font-sans text-lg text-muted mb-10">
          Book a call or message us on WhatsApp to discuss your project. 
          We'll review your current ops and map out the ROI path.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          <a href="tel:+916284911102" className="flex items-center gap-2 font-sans font-bold text-purple hover:underline transition-all hover:scale-105">
            <PhoneCall className="h-5 w-5" /> +91 6284911102
          </a>
          <a href="https://wa.me/916284911102" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans font-bold text-green hover:underline transition-all hover:scale-105">
            <MessageSquare className="h-5 w-5" /> WhatsApp Business
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.discovery)}
            className="rounded-full bg-purple px-8 py-4 font-sans font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            Book Your Discovery Call &rarr;
          </button>
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
            className="rounded-full border border-white/20 px-8 py-4 font-sans font-medium text-white transition-all hover:bg-white/5"
          >
            &lt;&gt; $250 Deep-Dive
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <ServicesHero />
      <OurProcess />
      <VoiceAutomations />
      <UnfairAdvantages />
      <SampleArchitectures />
      <IndustriesWeServe />
      <BattleStack />
      <GetStarted />
    </div>
  );
}
