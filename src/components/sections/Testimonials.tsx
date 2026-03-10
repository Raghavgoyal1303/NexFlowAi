import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { cn } from '../../utils/cn';

const ALL_TESTIMONIALS = [
  { quote: "NexFlow's voice AI replaced our entire SDR tier 1 mapping. It's doing the work of 5 humans without needing weekends off.", name: "Sarah K.", role: "VP Sales · SaaS Corp" },
  { quote: "Shipped an enterprise-grade Stripe and multi-tenant auth SaaS within 11 days. The speed is actually absurd.", name: "Michael R.", role: "Founder · Acme Data" },
  { quote: "Our scheduling velocity went up 40% purely because the AI answers on the first ring, every time.", name: "Dr. Evans", role: "Clinic Director" },
  { quote: "We tested three 'AI Voice' agencies. NexFlow was the only one that delivered latency below 600ms. It actually sounds human.", name: "James L.", role: "COO · Logistics Inc" },
  { quote: "The architectural depth they bring to MVP builds is phenomenal. They don't just hack things together.", name: "Elena V.", role: "CTO · Fintech Start" },
  { quote: "A true ROI positive investment within the first 30 days. Incredible operation.", name: "Marcus P.", role: "Growth Lead" },
  { quote: "Automated our entire onboarding flow. Saved 20 hrs/week immediately.", name: "Priya M.", role: "Head of Ops · HealthTech Co" },
  { quote: "Best ROI on any tool we've bought this year. The AI handles follow-ups better than our team did.", name: "Jordan T.", CEO: "CEO · RetailEdge" },
  { quote: "From idea to live MVP in 9 days. Genuinely shocked at the quality.", name: "Anika R.", role: "Founder · EduStart" },
  { quote: "Voice agent passed as human in blind tests by our QA team.", name: "Carlos B.", role: "CTO · InsureTech" },
  { quote: "We 3x'd our inbound conversion rate in the first month.", name: "Lisa W.", role: "CMO · GrowthLab" },
  { quote: "Replaced 3 junior SDRs with one AI agent. Cost savings were immediate.", name: "Tom H.", role: "VP Sales · DataCorp" },
  { quote: "The attention to code quality is rare. Clean architecture, zero shortcuts.", name: "Nina K.", role: "Engineer · FinanceOS" },
  { quote: "Latency under 500ms. It actually sounds warmer than our human agents.", name: "Omar S.", role: "COO · TelecomX" },
  { quote: "Seamless integration with our legacy CRM. The AI feels like a team member.", name: "David G.", role: "Director · LogiTech" },
  { quote: "The voice quality is indistinguishable from a native speaker. Impressive tech.", name: "Sophie M.", role: "Marketing · Global Brands" },
  { quote: "Handling 1000+ calls a day without a single glitch. Robust and reliable.", name: "Kevin W.", role: "Ops Lead · FinServ" },
  { quote: "Rapid prototyping at its best. They understood our vision instantly.", name: "Rachel D.", role: "Product Manager · AI Apps" },
  { quote: "Transformed our customer support. Wait times are now zero.", name: "Liam O.", role: "Head of CS · CloudScale" },
  { quote: "The most efficient engineering partner we've ever worked with.", name: "Chen X.", role: "Founder · TechNexus" }
];

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="mb-6 w-full min-h-[220px] rounded-xl border border-border bg-[#0d0d1a] p-6 transition-all hover:border-purple/30 flex flex-col justify-between">
      <p className="mb-4 font-sans text-[15px] leading-relaxed text-white/80 italic">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border text-[14px] font-bold text-white">
          {t.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-sans text-[14px] font-semibold text-white">{t.name}</h4>
          <p className="font-sans text-[12px] text-purple-light">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function InfiniteColumn({ items, direction, duration }: { items: any[], direction: 'up' | 'down', duration: string }) {
  return (
    <div className="relative h-[712px] overflow-hidden">
      <div 
        className={cn(
          "flex flex-col",
          direction === 'up' ? "animate-scroll-up" : "animate-scroll-down"
        )}
        style={{ '--scroll-duration': duration } as React.CSSProperties}
      >
        {/* Triple the items to ensure seamless loop with height constraints */}
        {[...items, ...items, ...items].map((t, idx) => (
          <TestimonialCard key={idx} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const col1 = ALL_TESTIMONIALS.slice(0, 5);
  const col2 = ALL_TESTIMONIALS.slice(5, 10);
  const col3 = ALL_TESTIMONIALS.slice(10, 15);
  const col4 = ALL_TESTIMONIALS.slice(15, 20);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Pre-Testimonial CTA */}
        <div className="mb-32 flex flex-col items-center justify-center">
          <div className="mb-6 flex items-center gap-4 rounded-full border border-border bg-surface px-6 py-2">
            <span className="flex items-center gap-2 font-mono text-sm text-white/90">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
              </span>
              LIVE RECORDINGS
            </span>
            <span className="h-4 w-px bg-border"></span>
            <span className="font-sans text-sm text-muted">A/B tested against human reps</span>
          </div>

          <button className="group relative flex w-full max-w-2xl items-center justify-center gap-3 rounded-full border-[1.5px] border-purple-mid bg-transparent py-5 font-sans text-lg font-bold text-white shadow-[0_0_24px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-300 hover:scale-[1.02]">
            <PhoneCall className="h-5 w-5" />
            Get This For Your Business &rarr;
          </button>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-16 relative">
          <SectionLabel>CLIENT TESTIMONIALS</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
            What Our <span className="bg-gradient-to-r from-purple-light to-purple-mid bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="font-sans text-lg text-muted max-w-2xl mx-auto">
            Don't just take our word for it. Here is the operational impact we've driven for real companies.
          </p>
        </div>

        {/* Infinite Scroll Columns */}
        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-20 grid h-[712px] grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Gradients to fade out top and bottom */}
          <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-bg to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <InfiniteColumn items={col1} direction="up" duration="35s" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <InfiniteColumn items={col2} direction="down" duration="45s" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <InfiniteColumn items={col3} direction="up" duration="40s" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <InfiniteColumn items={col4} direction="down" duration="38s" />
          </motion.div>
        </motion.div>

        {/* Decor Quote */}
        <div className="absolute left-6 bottom-20 opacity-5 pointer-events-none">
          <span className="font-serif text-[300px] text-purple">&rdquo;</span>
        </div>
      </div>
    </section>
  );
}
