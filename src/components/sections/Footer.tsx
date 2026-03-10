import React from 'react';
import { motion } from 'framer-motion';
import { openCalendly, CALENDLY_URLS } from '../../utils/calendly';

const LINKS = ['Home', 'Services', 'Case Studies', 'Content', 'Pricing', 'Team'];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050508] px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <span className="font-sans text-xl font-bold tracking-tight text-white">NexFlow<span className="text-purple">AI</span></span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map(link => (
            <a key={link} href="#" className="font-sans text-sm font-medium text-muted transition-colors hover:text-white">
              {link}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.deepdive)}
            className="font-sans text-sm font-medium text-muted hover:text-white transition-colors text-left"
          >
            $250 Deep-Dive
          </button>
          <button 
            onClick={() => openCalendly(CALENDLY_URLS.discovery)}
            className="font-sans text-sm font-medium text-muted hover:text-white transition-colors text-left"
          >
            Book Discovery Call
          </button>
        </div>
      </div>
      
      <div className="mt-12 text-center font-sans text-xs text-white/30">
        &copy; {new Date().getFullYear()} NexFlow AI Automation. All rights reserved.
      </div>
    </footer>
  );
}
