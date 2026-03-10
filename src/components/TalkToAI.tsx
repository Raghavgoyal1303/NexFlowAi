import React, { useEffect } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    tidioChatApi: any;
  }
}

export function TalkToAI() {
  useEffect(() => {
    const handleTidioReady = () => {
      if (window.tidioChatApi) {
        window.tidioChatApi.hide();
      }
    };

    document.addEventListener("tidioChat-ready", handleTidioReady);
    return () => document.removeEventListener("tidioChat-ready", handleTidioReady);
  }, []);

  const handleOpenChat = () => {
    if (window.tidioChatApi) {
      window.tidioChatApi.open();
    }
  };

  return (
    <motion.button
      onClick={handleOpenChat}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 rounded-full bg-purple px-6 py-4 text-white shadow-2xl shadow-purple/40 backdrop-blur-md transition-all hover:bg-purple-mid group"
    >
      <div className="relative">
        <MessageSquare className="h-6 w-6" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1"
        >
          <Sparkles className="h-3 w-3 text-purple-200 fill-purple-200" />
        </motion.div>
      </div>
      <span className="font-sans font-bold tracking-tight">Talk to AI</span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full border border-purple animate-ping opacity-20 pointer-events-none" />
    </motion.button>
  );
}
