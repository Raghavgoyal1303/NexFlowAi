import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Code,
  Target, 
  Star, 
  Rocket, 
  BarChart, 
  Zap, 
  Users, 
  MessageSquare,
  PhoneCall,
  ExternalLink,
  Play,
  Globe
} from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { cn } from '../../utils/cn';
import { CountUp } from '../ui/CountUp';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

// --- Shared Constants & Styles ---
const cardHover: any = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const GLOBAL_CARD_CLASSES = "border border-white/[0.07] bg-[#0d0d1a] rounded-[14px] transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/[0.08] cursor-default";

// --- Section 1: Hero & Stats ---
function CaseHero() {
  const stats = [
    { value: "100%", label: "delivery track record with measurable ROI" },
    { value: "2–4mo", label: "average payback after go-live" },
    { value: "10×", label: "capacity gains without proportional headcount" },
    { value: "99.9%", label: "uptime targets; <2s response times" },
  ];

  return (
    <section className="bg-bg pt-20 pb-16 px-6 text-center">
      <div className="mx-auto max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Case Studies & </span>
          <span className="text-purple italic">Client Results</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-sans text-sm font-bold uppercase tracking-widest text-purple mb-6"
        >
          From first pilot to enterprise-grade automation
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-lg text-white/70 max-w-4xl mx-auto leading-relaxed mb-20"
        >
          We build AI Voice Agents that pick up in seconds and MVP/Micro-SaaS that prove what works fast. 
          Pilots start lean; full programs scale past $100k+ when we take a business line from manual to automated—24/7, 
          instrumented, and revenue-accountable.
        </motion.p>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={cn(GLOBAL_CARD_CLASSES, "p-8 text-left")}
            >
              <h3 className="font-serif text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="font-sans text-xs text-muted leading-relaxed uppercase tracking-wider font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 2: Flagship Cases ---
const CASE_STUDIES = [
  {
    title: "DialEstatePro",
    subtitle: "Real-Estate Calling, Done Right",
    icon: <Phone className="h-6 w-6 text-emerald-400" />,
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    desc: "A massive voice-SDR rollout for a real-estate conglomerate. We replaced a tier-1 SDR team with AI agents that handle discovery and live transfers.",
    metrics: [
      { val: "250", label: "Brokers served", sub: "twice weekly", tag: "purple" },
      { val: "2s", label: "Connect time", sub: "max", tag: "purple" },
      { val: "7¢", label: "Cost per minute", sub: "connected", tag: "purple" },
      { val: "24/7", label: "Availability", sub: "", tag: "" },
    ],
    summary: "The system identifies hot leads, confirms intent, and patches them through to human brokers within 2 seconds of the AI finishing its pitch.",
    links: [
      { label: "Watch Recording", icon: <Play className="h-3 w-3" />, color: "text-purple" },
      { label: "dialestatepro.xyz", icon: <ExternalLink className="h-3 w-3" />, color: "text-muted" }
    ]
  },
  {
    title: "VEDA",
    subtitle: "Lead Conversion Dashboard (Voice-First Response)",
    icon: <Target className="h-6 w-6 text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    desc: "VEDA's core engine uses a voice-callback agent to capture high-intent traffic instantly. We built the dashboard, auth, and the agent logic from scratch.",
    metrics: [
      { val: "4h → 30s", label: "Response time", sub: "", tag: "" },
      { val: "25-40%", label: "Booking increase", sub: "", tag: "" },
      { val: "74%", label: "Conversion lift", sub: "average", tag: "purple" },
      { val: "$3–5k", label: "Monthly savings", sub: "", tag: "" },
    ],
    summary: "By reducing speed-to-lead from 4 hours to 30 seconds, VEDA helped their pilot clients recapture nearly 80% of 'lost' traffic.",
    links: [
      { label: "Watch Recording", icon: <Play className="h-3 w-3" />, color: "text-purple" }
    ]
  },
  {
    title: "EduForge AI",
    subtitle: "Curriculum & School Ops, Reinvented",
    icon: <Rocket className="h-6 w-6 text-purple-400" />,
    iconBg: "bg-purple-500/10 border-purple-500/20",
    desc: "A large-scale curriculum generator for private institutions. We converted months of manual planning sessions into a sub-10-minute automated flow.",
    metrics: [
      { val: "95%", label: "Planning time", sub: "reduction", tag: "purple" },
      { val: "400%", label: "Output lift", sub: "", tag: "" },
      { val: "99%", label: "Resource discovery", sub: "time saved", tag: "purple" },
      { val: "+31%", label: "Student engagement", sub: "", tag: "" },
    ],
    summary: "The platform uses RAG (Retrieval-Augmented Generation) on proprietary school data to output teacher-ready lesson plans and grading rubrics.",
    links: []
  },
  {
    title: "MMG Digital",
    subtitle: "Agent Swarm for Freelancer Coaching",
    icon: <Users className="h-6 w-6 text-orange-400" />,
    iconBg: "bg-orange-500/10 border-orange-500/20",
    desc: "Automating the 'expert help' tier of a massive digital coaching program. Our AI agents mentor students based on the founder's specific methodology.",
    metrics: [
      { val: "70%", label: "Coaching overhead", sub: "reduction", tag: "purple" },
      { val: "2-3", label: "ROI timeline", sub: "months", tag: "purple" },
      { val: "$60k+", label: "Annual savings", sub: "", tag: "" },
      { val: "24/7", label: "Coverage", sub: "expert-level", tag: "purple" },
    ],
    summary: "The agency now coaches 10x the students with 30% fewer human mentors, while maintaining a higher satisfaction rating than the human team.",
    links: []
  }
];

function FlagshipCases() {
  return (
    <section className="py-20 px-6 bg-bg">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-20">Flagship Cases</h2>
        
        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {CASE_STUDIES.map((cs, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className={cn(GLOBAL_CARD_CLASSES, "p-8 group")}
            >
              {/* Card Header */}
              <div className="flex items-start gap-5 mb-8">
                <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border", cs.iconBg)}>
                  {cs.icon}
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-white">{cs.title}</h3>
                  <p className="font-sans text-sm text-purple-light font-medium">{cs.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-white/70 leading-relaxed mb-8">{cs.desc}</p>

              {/* Metric Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {cs.metrics.map((m, mi) => (
                  <div key={mi} className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 group-hover:border-purple/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-serif text-xl font-bold text-white">{m.val}</span>
                      {m.tag && (
                        <span className="rounded-full bg-purple/10 px-2 py-0.5 font-mono text-[9px] font-bold text-purple-light uppercase">
                          {m.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-[10px] uppercase font-bold tracking-widest text-muted">{m.label}</p>
                    {m.sub && <p className="font-sans text-[10px] text-muted/60">{m.sub}</p>}
                  </div>
                ))}
              </div>

              {/* Lower summary */}
              <p className="font-sans text-sm text-white/60 italic leading-relaxed mb-8 border-l-2 border-purple/30 pl-4">
                {cs.summary}
              </p>

              {/* Links */}
              {cs.links.length > 0 && (
                <div className="flex items-center gap-6 mt-auto">
                  {cs.links.map((link, li) => (
                    <a 
                      key={li} 
                      href="#" 
                      className={cn(
                        "flex items-center gap-2 font-sans text-sm font-bold transition-all hover:scale-105",
                        link.color === 'text-purple' ? "text-purple hover:text-purple-light" : "text-muted hover:text-white"
                      )}
                    >
                      {link.icon}
                      {link.label}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 3: Monthly Calls Chart ---
function MonthlyCallsChart() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  
  const bars = Array.from({ length: 28 }, (_, i) => ({
    height: 30 + Math.random() * 60,
    val: Math.floor(200 + Math.random() * 800),
    delay: i * 0.02
  }));

  return (
    <section className="py-20 px-6 bg-[#050508]">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Scale Proof</h2>
          <p className="font-sans text-lg text-muted max-w-2xl">
            Real-time call volume during a single client's SDR rollout phase.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
          className={cn(GLOBAL_CARD_CLASSES, "w-full max-w-[580px] p-8 relative overflow-visible")}
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="font-sans font-bold text-white text-xl">Monthly Calls Handled</h4>
              <p className="font-sans text-xs text-muted uppercase tracking-widest font-bold">Jan 2025 · DialEstatePro</p>
            </div>
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple/10 border border-purple/30">
              <Phone className="h-6 w-6 text-purple-light" />
            </div>
          </div>

          <div className="mb-12">
            <span className="font-serif text-6xl font-bold text-white">
              <CountUp end={12450} decimals={0} />
            </span>
            <span className="font-sans text-sm text-purple-light ml-3 font-bold uppercase tracking-tight">Total Volume</span>
          </div>

          <div className="relative flex items-end justify-between h-48 gap-[2px] px-1">
            {bars.map((bar, i) => (
              <div key={i} className="flex-1 group relative flex flex-col items-center h-full justify-end">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: `${bar.height}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                  className={cn(
                    "w-full rounded-t-sm transition-all duration-300 cursor-pointer",
                    hoveredBar === i ? "bg-purple-light shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "bg-gradient-to-t from-purple/40 to-purple-mid"
                  )}
                />
                
                {/* Custom Tooltip */}
                <AnimatePresence>
                  {hoveredBar === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -5, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute bottom-full mb-2 z-20 pointer-events-none"
                    >
                      <div className="bg-surface-2 border border-purple/50 px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md">
                        <span className="font-mono text-[10px] text-white font-bold">{bar.val} calls</span>
                      </div>
                      <div className="w-2 h-2 bg-surface-2 border-r border-b border-purple/50 rotate-45 mx-auto -mt-1" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between border-t border-white/5 pt-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green animate-pulse" />
              <span className="font-mono text-[10px] text-muted tracking-tight">System Status: OK</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-3 w-3 text-purple-light" />
              <span className="font-mono text-[10px] text-muted tracking-tight">Latency: 480ms</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 4: Enterprise Value ---
function EnterpriseValue() {
  return (
    <section className="py-20 px-6 bg-bg">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Why It's Worth $100k+ at Enterprise Scale
          </h2>
          <p className="font-sans text-lg text-muted max-w-3xl mx-auto">
            We don't just build 'apps.' We build revenue-accountable autonomous departments that scale without adding a single dollar to your payroll.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: What You Get - Type C */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={cn(GLOBAL_CARD_CLASSES, "p-10")}
          >
            <h3 className="font-serif text-2xl font-bold text-white text-center mb-10">What You Get</h3>
            <ul className="space-y-6">
              {[
                "24/7 voice coverage (inbound + outbound + callbacks)",
                "Calendar + CRM + compliance + audit trails",
                "Analytics that explain where revenue is coming from",
                "Productization (auth, billing, roles, dashboards, CI/CD)",
                "Rollout, training, and hardening for enterprise scale"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple/20">
                    <CheckCircle2 className="h-4 w-4 text-purple-light" />
                  </div>
                  <span className="font-sans text-white/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Typical Investment - Type D */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={cn(GLOBAL_CARD_CLASSES, "p-10 flex flex-col")}
          >
            <h3 className="font-serif text-2xl font-bold text-white text-center mb-10">Typical Investment</h3>
            
            <div className="space-y-4 mb-8">
              <div className="rounded-2xl bg-purple/10 border border-purple/20 p-8 text-center ring-1 ring-inset ring-purple/30">
                <div className="font-serif text-4xl font-bold text-white mb-1">$100k+</div>
                <div className="font-sans text-sm text-purple-light font-bold uppercase tracking-widest">Enterprise programs (phased)</div>
              </div>
              
              <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/10 p-8 text-center">
                <div className="font-serif text-4xl font-bold text-white mb-1">2–4 months</div>
                <div className="font-sans text-sm text-emerald-400 font-bold uppercase tracking-widest">Payback timeline once live</div>
              </div>
            </div>

            <p className="mt-auto font-sans text-xs text-muted leading-relaxed text-center italic">
              *Investment varies based on complexity, concurrency requirements, and integration depth. Most clients recoup within 120 days of full deployment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Section 5: Snapshots ---
function Snapshots() {
  const snapshots = [
    {
      title: "ContentForge",
      subtitle: "Enterprise SEO Automation",
      result: "80% cost reduction; 10× speed; 85% first-draft acceptance; 300–500% ROI in 3 months",
      link: "contentforge.pro"
    },
    {
      title: "AdScripts.co",
      subtitle: "Paid Social Creative Swarms",
      result: "90% cost reduction; weeks → hours; +60% conversion; 10+ variants per concept",
      link: "adscripts.co"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#050508]">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white text-center mb-16">
          Snapshots <span className="text-muted">(Fast Wins We Like to Show)</span>
        </h2>
        
        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {snapshots.map((s, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn(GLOBAL_CARD_CLASSES, "p-8")}
            >
              <h4 className="font-sans text-xl font-bold text-white mb-1">{s.title}</h4>
              <p className="font-sans text-sm text-purple-light mb-6">{s.subtitle}</p>
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 border-l-2 border-purple/30 pl-4">
                {s.result}
              </p>
              <a href="#" className="font-sans text-sm font-bold text-purple hover:underline flex items-center gap-2">
                <Globe className="h-4 w-4" /> {s.link}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 6: Buyer Reviews ---
const REVIEWS = [
  { 
    name: "Jahmai Nicome", 
    role: "Real Estate Investor", 
    rating: 5.0, 
    quote: "Absolutely game-changing automation. The voice agent sounds native and handles objections better than most junior callers we've hired.",
    img: "https://i.pravatar.cc/150?u=jahmai"
  },
  { 
    name: "Justin Cohen", 
    role: "Founder, Exsportium", 
    rating: 4.9, 
    quote: "Revolutionized our curriculum process. What used to take our academic team weeks now takes minutes with higher consistency.",
    img: "https://i.pravatar.cc/150?u=justin"
  },
  { 
    name: "MMG Digital Team", 
    role: "Leadership Team", 
    rating: 4.8, 
    quote: "We went from 50 to 500 freelancers coached without losing quality. The AI swarm is now our core competitive advantage.",
    img: "https://i.pravatar.cc/150?u=mmg"
  },
  { 
    name: "Restaurant Ops Lead", 
    role: "Multi-Location Chain", 
    rating: 4.7, 
    quote: "Reservations saved during peak hours. No more busy signals or lost bookings because the host was too busy to pick up.",
    img: "https://i.pravatar.cc/150?u=rest"
  },
  { 
    name: "VEDA Stakeholder", 
    role: "Lead Conversion Team", 
    rating: 4.9, 
    quote: "From 4 hours to 30 seconds response time. The ROI was clear within the first week of turning the voice callbacks on.",
    img: "https://i.pravatar.cc/150?u=veda"
  }
];

function BuyerReviews() {
  return (
    <section className="py-20 px-6 bg-bg">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          
          {/* Left Column: Sticky Summary - Type C */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-green">Client Results</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              What Buyers Say After Go-Live
            </h2>
            <p className="font-sans text-lg text-muted mb-10 leading-relaxed">
              Real feedback from founders and operators who have deployed our systems into live production environments.
            </p>

            <div className="grid gap-4 mb-10">
              {[
                { val: "100%", label: "Delivery Track Record" },
                { val: "2-4mo", label: "Average Payback" },
                { val: "10×", label: "Capacity Gains" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                  <span className="font-serif text-xl font-bold text-white">{s.val}</span>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-muted">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => openCalendly(CALENDLY_URLS.discovery)}
                className="rounded-full bg-purple py-4 font-sans font-bold text-white shadow-lg transition-all hover:scale-105"
              >
                Book Discovery Call &rarr;
              </button>
              <button 
                onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
                className="rounded-full border border-white/20 py-4 font-sans font-medium text-white transition-all hover:bg-white/5"
              >
                &lt;&gt; $250 Deep-Dive
              </button>
            </div>
          </motion.div>

          {/* Right Column: Scrollable Reviews - Type E */}
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.12 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {REVIEWS.map((r, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={cn(GLOBAL_CARD_CLASSES, "p-8 group")}
              >
                <div className="flex items-center gap-5 mb-6">
                  <img src={r.img} alt={r.name} className="h-14 w-14 rounded-full grayscale group-hover:grayscale-0 transition-all border border-border" />
                  <div>
                    <h4 className="font-sans font-bold text-white">{r.name}</h4>
                    <p className="font-sans text-sm text-muted">{r.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-500 group-hover:brightness-125 transition-all">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className={cn("h-4 w-4 fill-current", si < Math.floor(r.rating) ? "" : "opacity-30")} />
                    ))}
                  </div>
                  <span className="font-sans text-sm font-bold text-white">{r.rating.toFixed(1)}</span>
                </div>

                <p className="font-sans text-lg text-white/80 leading-relaxed italic">
                  "{r.quote}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Section 7: Our Playbook ---
const PLAYBOOK_STEPS = [
  { 
    id: "01", 
    title: "Discover", 
    icon: <Target className="h-6 w-6" />, 
    desc: "the leak (missed calls, slow callbacks, no-shows, messy handoffs)" 
  },
  { 
    id: "02", 
    title: "Design", 
    icon: <Star className="h-6 w-6" />, 
    desc: "flows that collapse to one outcome: qualified meetings on the calendar" 
  },
  { 
    id: "03", 
    title: "Build & Integrate", 
    icon: <Code className="h-6 w-6" />, 
    desc: "telephony/SIP, ASR/NLU/TTS, calendars, CRM, WhatsApp/SMS" 
  },
  { 
    id: "04", 
    title: "Deploy & Learn", 
    icon: <Rocket className="h-6 w-6" />, 
    desc: "instrument speed-to-lead, bookings, show rate; iterate weekly" 
  },
  { 
    id: "05", 
    title: "Productize", 
    icon: <BarChart className="h-6 w-6" />, 
    desc: "when the voice loop works, ship the MVP → v1 with auth, billing, analytics" 
  },
];

function OurPlaybook() {
  return (
    <section className="py-20 px-6 bg-[#050508]">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-20">
          Our Playbook <span className="text-muted">(Why Results Repeat)</span>
        </h2>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-10"
        >
          {PLAYBOOK_STEPS.map((step, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn(GLOBAL_CARD_CLASSES, "p-8 group flex flex-col items-center text-center")}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple/10 border border-purple/20 text-purple group-hover:scale-110 group-hover:bg-purple group-hover:text-white transition-all">
                {step.icon}
              </div>
              <span className="font-mono text-xs font-bold text-purple-light group-hover:text-white transition-colors mb-2">{step.id} {step.title}</span>
              <p className="font-sans text-xs text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className={cn(GLOBAL_CARD_CLASSES, "p-8")}>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span className="font-sans font-bold text-white px-4 py-2 rounded-lg bg-surface-2 border border-border whitespace-nowrap">Operating standards:</span>
            <p className="font-sans text-sm text-muted leading-relaxed">
              99.9% uptime target, sub-2s responses, 400+ integrations, DNC/opt-out guardrails, and documentation + handover included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Section 8: Ready to See It Work? ---
function ReadyToWork() {
  return (
    <section className="py-20 px-6 bg-bg border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Ready to See It Work?
        </h2>

        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 mb-16"
        >
          {[
            { title: "DialEstatePro Recording", sub: "Real estate voice SDR in action" },
            { title: "VEDA Recording", sub: "Lead conversion dashboard + voice callbacks" }
          ].map((demo, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn(GLOBAL_CARD_CLASSES, "p-10 group text-center")}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-2 border border-purple/30 text-purple group-hover:scale-110 transition-all">
                <Play className="h-6 w-6 fill-current" />
              </div>
              <h4 className="font-sans text-xl font-bold text-white mb-2">{demo.title}</h4>
              <p className="font-sans text-sm text-muted mb-8">{demo.sub}</p>
              <a href="#" className="font-sans text-sm font-bold text-purple group-hover:text-purple-light group-hover:underline inline-flex items-center gap-2 transition-all">
                Watch Demo <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mb-16 italic text-muted text-xs">
          (Recordings: functioning projects; more on request.)
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.discovery)}
            className="flex-1 max-w-[400px] rounded-full bg-purple py-5 font-sans font-bold text-white shadow-xl shadow-purple/20 transition-all hover:scale-[1.03] hover:bg-purple-mid"
          >
            Book Your Discovery Call &rarr;
          </button>
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
            className="flex-1 max-w-[400px] rounded-full border border-purple-light/40 py-5 font-sans font-bold text-purple-light transition-all hover:bg-purple/5"
          >
            &lt;&gt; $250 Deep-Dive with Raghav
          </button>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <CaseHero />
      <FlagshipCases />
      <MonthlyCallsChart />
      <EnterpriseValue />
      <Snapshots />
      <BuyerReviews />
      <OurPlaybook />
      <ReadyToWork />
    </div>
  );
}
