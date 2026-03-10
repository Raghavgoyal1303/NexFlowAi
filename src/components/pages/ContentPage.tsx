import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Phone, 
  Target, 
  Rocket, 
  Code, 
  Globe, 
  Shield, 
  Play, 
  Clock, 
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

// --- Types & Data ---
type ContentTab = 'Services' | 'Videos';
type Category = 'All' | 'Voice' | 'MVP' | 'Auto' | 'Demo' | 'Guide' | 'Launch' | 'Scale' | 'Enterprise';

interface ContentCard {
  title: string;
  desc: string;
  tab: ContentTab;
  category: Category;
  duration: string;
  icon: React.ReactNode;
  gradient: string;
  tag: string;
}

const CONTENT_CARDS: ContentCard[] = [
  // Services Tab
  {
    title: "AI Receptionist",
    desc: "Never miss a call. Answer, qualify, book.",
    tab: "Services",
    category: "Launch",
    duration: "2 weeks",
    icon: <Phone className="h-8 w-8 text-white" />,
    gradient: "from-teal-500 to-emerald-600",
    tag: "Launch"
  },
  {
    title: "Voice SDR",
    desc: "Instant callbacks. Revive cold leads.",
    tab: "Services",
    category: "Scale",
    duration: "3 weeks",
    icon: <Target className="h-8 w-8 text-white" />,
    gradient: "from-blue-500 to-indigo-600",
    tag: "Scale"
  },
  {
    title: "MVP Launch",
    desc: "Proof in weeks. Revenue in months.",
    tab: "Services",
    category: "Launch",
    duration: "3 weeks",
    icon: <Rocket className="h-8 w-8 text-white" />,
    gradient: "from-purple-500 to-pink-600",
    tag: "Launch"
  },
  {
    title: "SaaS Platform",
    desc: "Billing. Roles. Scale.",
    tab: "Services",
    category: "Scale",
    duration: "6 weeks",
    icon: <Code className="h-8 w-8 text-white" />,
    gradient: "from-orange-500 to-red-600",
    tag: "Scale"
  },
  {
    title: "Global Voice",
    desc: "Hindi. English. Hinglish.",
    tab: "Services",
    category: "Scale",
    duration: "2 weeks",
    icon: <Globe className="h-8 w-8 text-white" />,
    gradient: "from-pink-500 to-rose-600",
    tag: "Scale"
  },
  {
    title: "Enterprise",
    desc: "Multi-tenant. Compliant. Bulletproof.",
    tab: "Services",
    category: "Enterprise",
    duration: "10+ weeks",
    icon: <Shield className="h-8 w-8 text-white" />,
    gradient: "from-indigo-600 to-blue-800",
    tag: "Enterprise"
  },
  // Videos Tab
  {
    title: "DialEstatePro Demo",
    desc: "Real estate voice SDR in action",
    tab: "Videos",
    category: "Demo",
    duration: "8 min",
    icon: <Play className="h-8 w-8 text-white" />,
    gradient: "from-teal-500 to-emerald-600",
    tag: "Demo"
  },
  {
    title: "VEDA Walkthrough",
    desc: "Lead conversion dashboard live",
    tab: "Videos",
    category: "Demo",
    duration: "12 min",
    icon: <Play className="h-8 w-8 text-white" />,
    gradient: "from-blue-500 to-indigo-600",
    tag: "Demo"
  },
  {
    title: "How We Build MVPs",
    desc: "Full build process explained",
    tab: "Videos",
    category: "Guide",
    duration: "15 min",
    icon: <Play className="h-8 w-8 text-white" />,
    gradient: "from-purple-500 to-pink-600",
    tag: "Guide"
  },
  {
    title: "Voice Agent Setup",
    desc: "From zero to live in 2 weeks",
    tab: "Videos",
    category: "Voice",
    duration: "10 min",
    icon: <Play className="h-8 w-8 text-white" />,
    gradient: "from-orange-500 to-red-600",
    tag: "Voice"
  },
  {
    title: "ROI Calculator Walk",
    desc: "How to measure automation ROI",
    tab: "Videos",
    category: "Guide",
    duration: "6 min",
    icon: <Play className="h-8 w-8 text-white" />,
    gradient: "from-pink-500 to-rose-600",
    tag: "Guide"
  },
  {
    title: "EduForge AI Demo",
    desc: "AI curriculum builder in action",
    tab: "Videos",
    category: "Demo",
    duration: "9 min",
    icon: <Play className="h-8 w-8 text-white" />,
    gradient: "from-indigo-600 to-blue-800",
    tag: "Demo"
  },
];

const cardHover: any = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// --- Main Component ---
export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<ContentTab>('Services');
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters: Category[] = ['All', 'Voice', 'MVP', 'Auto', 'Demo', 'Guide'];

  const filteredCards = CONTENT_CARDS.filter(card => {
    const matchesTab = card.tab === activeTab;
    const matchesFilter = activeFilter === 'All' || card.category === activeFilter || card.tag === activeFilter;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          card.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-bg relative">
      {/* Search & Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Purple radial ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple/10 blur-[120px] opacity-50" />
        
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5"
          >
            <Sparkles className="h-4 w-4 text-white" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-white">Knowledge Base</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-[64px] md:text-[96px] font-bold leading-[1.1] tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">Playbooks</span>
            <span className="text-white"> & Insights</span>
          </motion.h1>

          <div className="space-y-2 mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="font-serif text-2xl text-white"
            >
              Curated wisdom
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="font-serif text-lg text-purple italic"
            >
              Ship smarter
            </motion.p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center justify-center gap-8 mb-10">
            {['Services', 'Videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab as ContentTab);
                  setActiveFilter('All');
                }}
                className={cn(
                  "relative py-2 px-6 font-sans font-bold transition-all",
                  activeTab === tab ? "text-white" : "text-muted hover:text-white"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabPill"
                    className="absolute inset-0 z-[-1] rounded-full bg-purple"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative mx-auto max-w-2xl mb-12">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted" />
            </div>
            <input 
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-5 pl-14 pr-6 font-sans text-white focus:border-purple/50 focus:outline-none focus:ring-1 focus:ring-purple/50 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-6 flex items-center text-muted hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {filters.map((f) => (
              <motion.button
                key={f}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "rounded-full px-6 py-2 font-sans text-sm font-bold transition-all border",
                  activeFilter === f 
                    ? "bg-purple border-purple text-white" 
                    : "bg-white/5 border-white/10 text-muted hover:bg-white/10 hover:text-white"
                )}
              >
                {f}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            layout
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode='popLayout'>
              {filteredCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  layout
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative flex flex-col rounded-[14px] border border-white/[0.07] bg-[#0d0d1a] hover:border-purple-500/50 hover:bg-purple-900/[0.08] transition-all cursor-pointer overflow-hidden"
                >
                  {/* Card Header Gradient */}
                  <div className={cn("relative h-48 flex items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105", card.gradient)}>
                    <div className="text-white drop-shadow-lg scale-125 group-hover:scale-[1.35] transition-transform duration-500">
                      {card.icon}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-8 flex-1">
                      {card.desc}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 text-muted text-[10px] font-bold uppercase tracking-widest">
                        <Clock className="h-3 w-3" />
                        {card.duration}
                      </div>
                      <span className="rounded-lg bg-white/5 border border-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCards.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-sans text-muted">No matching guides or videos found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-10 right-10 z-[100] group">
        <button 
          onClick={() => openCalendly(CALENDLY_URLS.discovery)}
          className="flex items-center gap-3 rounded-full border border-purple/50 bg-[#0d0d1a] px-8 py-4 font-sans font-bold text-white shadow-[0_0_24px_rgba(124,58,237,0.3)] transition-all hover:scale-105 hover:bg-purple hover:shadow-[0_0_32px_rgba(124,58,237,0.5)]"
        >
          📞 Book Call &rarr;
        </button>
      </div>
    </div>
  );
}
