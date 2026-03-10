import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface PillButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  glow?: boolean;
  active?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export function PillButton({ children, glow, active, icon, fullWidth, className, ...props }: PillButtonProps) {
  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-bold transition-all duration-300 overflow-hidden",
        fullWidth ? "w-full" : "w-fit",
        glow
          ? "border-2 border-purple-light/40 bg-purple text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transform hover:scale-[1.03]"
          : active
          ? "bg-white text-black hover:bg-white/90"
          : "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20",
        className
      )}
      {...props}
    >
      {/* Type K: Shimmer Sweep */}
      <motion.div
        variants={{
          hover: { x: '200%', transition: { duration: 0.6, ease: "easeInOut" } }
        }}
        initial={{ x: '-100%' }}
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
      />
      
      {icon && <span className="flex items-center justify-center relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
