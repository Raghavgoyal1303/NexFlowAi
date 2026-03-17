import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneOff, Mic, Loader2, X, MessageSquare, ExternalLink } from 'lucide-react';
import Vapi from '@vapi-ai/web';
import { SectionLabel } from '../ui/SectionLabel';
import { PillButton } from '../ui/PillButton';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

const VAPI_PUBLIC_KEY = '599133eb-676e-492d-ad8a-3d2d70f247ae';

const AGENTS = [
  {
    id: '70f2979a-b343-414c-b76f-bf3cec620b78',
    name: "Aria",
    role: "Inbound Sales Representative",
    desc: "Aria specialized in high-conversion inbound qualification. She greets prospects, understands their needs, and moves them through the funnel with natural charisma.",
    traits: ["Warm & Direct", "Objection Handling", "Fast Response"],
    color: "from-purple-500 to-purple-700"
  },
  {
    id: '52d9a6f1-2237-4dc5-b4a3-d777a69b6af8',
    name: "Neha",
    role: "Customer Success / Reactivation",
    desc: "Neha focuses on long-term value. She handles customer support, churn prevention, and reactivation campaigns with deep empathy and structural logic.",
    traits: ["Empathetic", "Problem Solver", "Multi-lingual Support"],
    color: "from-green-500 to-green-700"
  }
];

// Initialize Vapi outside of component or in a useMemo
const vapi = new Vapi(VAPI_PUBLIC_KEY);

export function VoiceDemos() {
  const [activeAgentId, setActiveAgentId] = useState<string | null>(null);
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'active'>('idle');
  const [timer, setTimer] = useState(0);
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Manage Vapi Events
  useEffect(() => {
    vapi.on('call-start', () => {
      setCallStatus('active');
      setTimer(0);
    });

    vapi.on('call-end', () => {
      setCallStatus('idle');
      setActiveAgentId(null);
      setTimer(0);
    });

    vapi.on('error', (err: any) => {
      console.error('Vapi Error:', err);
      setError('Connection issue. Please try again.');
      setCallStatus('idle');
      setActiveAgentId(null);
    });

    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  // Timer logic for 1-minute limit
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callStatus === 'active') {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev >= 60) {
            vapi.stop();
            setShowLimitPopup(true);
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callStatus]);

  const startCall = async (agentId: string) => {
    if (callStatus !== 'idle') return;
    
    try {
      setError(null);
      setCallStatus('connecting');
      setActiveAgentId(agentId);
      await vapi.start(agentId);
    } catch (err) {
      console.error('Failed to start call:', err);
      setCallStatus('idle');
      setActiveAgentId(null);
      setError('Failed to connect to agent.');
    }
  };

  const endCall = () => {
    vapi.stop();
  };

  return (
    <section className="relative py-24 px-6 bg-[#050508]">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <SectionLabel>LIVE AI DEMO</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-8 mb-6">
            Talk to our <span className="text-purple italic text-glow">Live AI Agents</span>
          </h2>
          <p className="font-sans text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Experience the latency, natural voice, and intelligence of our proprietary agents. 
            No recordings. Just raw, real-time performance.
          </p>
          {error && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="mt-4 text-red-500 font-sans"
            >
              {error}
            </motion.p>
          )}
        </div>

        {/* Agents Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {AGENTS.map((agent) => {
            const isActive = activeAgentId === agent.id;
            const isConnecting = isActive && callStatus === 'connecting';
            const isInCall = isActive && callStatus === 'active';
            const isOtherAgentActive = activeAgentId !== null && !isActive;

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "glass-card relative flex flex-col p-8 md:p-10 border-[1.5px] transition-all duration-300",
                  isActive ? "border-purple shadow-[0_0_40px_rgba(147,51,234,0.2)]" : "border-white/5",
                  isOtherAgentActive && "opacity-50 grayscale pointer-events-none"
                )}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Avatar / Icon */}
                  <div className={cn(
                    "relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-xl",
                    agent.color,
                    isInCall && "animate-pulse"
                  )}>
                    <Mic className="h-10 w-10 text-white" />
                    {isInCall && (
                      <div className="absolute -inset-2 rounded-2xl border-2 border-purple-400/50 animate-ping" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="font-serif text-3xl font-bold text-white">{agent.name}</h3>
                      <p className="font-sans text-purple-light font-medium tracking-wide uppercase text-xs mt-1">
                        {agent.role}
                      </p>
                    </div>

                    <p className="font-sans text-muted leading-relaxed mb-6">
                      {agent.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {agent.traits.map(trait => (
                        <span key={trait} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                          {trait}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    {!isInCall && !isConnecting ? (
                      <button
                        onClick={() => startCall(agent.id)}
                        disabled={isOtherAgentActive}
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-purple py-4 font-sans font-bold text-white shadow-lg shadow-purple/20 transition-all hover:bg-purple-mid hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                        Call {agent.name} Now
                      </button>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <button
                          onClick={endCall}
                          className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 py-4 font-sans font-bold text-red-500 transition-all hover:bg-red-500/20"
                        >
                          <PhoneOff className="h-5 w-5" />
                          {isConnecting ? "Connecting..." : "End Call"}
                        </button>
                        
                        {isInCall && (
                          <div className="flex items-center justify-between px-2">
                             <div className="flex items-center gap-2">
                               <div className="h-2 w-2 rounded-full bg-green animate-pulse" />
                               <span className="text-xs text-green font-mono uppercase tracking-widest">Live Connection</span>
                             </div>
                             <span className="text-xs text-muted font-mono">{60 - timer}s remaining</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-muted font-sans text-sm italic">
          * Demo calls are limited to 60 seconds. <br className="md:hidden" />
          For full deployments with custom knowledge bases, contact Raghav.
        </div>
      </div>

      {/* Limit Popup Modal */}
      <AnimatePresence>
        {showLimitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-md w-full p-8 text-center relative border-purple/30 bg-surface shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => setShowLimitPopup(false)}
                className="absolute top-4 right-4 text-muted hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="mx-auto w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-purple-light" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Demo Limit Reached</h3>
              <p className="font-sans text-muted mb-8 text-lg">
                Sorry! Free demo includes only 1 minute of calling. 
                Please contact Raghav for further discussion or to build a custom agent for your business.
              </p>
              
              <div className="flex flex-col gap-4">
                <PillButton 
                  glow 
                  fullWidth
                  onClick={() => {
                    setShowLimitPopup(false);
                    openCalendly(CALENDLY_URLS.discovery);
                  }}
                >
                  Schedule Deep-Dive
                </PillButton>
                <button 
                  onClick={() => setShowLimitPopup(false)}
                  className="font-sans text-sm text-muted hover:text-white"
                >
                  Continue browsing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
