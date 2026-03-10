import React from 'react';
import { motion } from 'framer-motion';

export function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute -left-20 top-20 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
