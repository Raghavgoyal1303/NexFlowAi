import React, { useState, useEffect } from 'react';
import { PillButton } from './ui/PillButton';
import { cn } from '../utils/cn';
import { motion } from 'framer-motion';
import { openCalendly, CALENDLY_URLS } from '../utils/calendly';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const LINKS = ['Home', 'Services', 'Case Studies', 'Content', 'Pricing', 'Team'];

export function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex w-full items-center justify-between px-8 py-4 transition-all duration-300",
        scrolled ? "bg-bg/80 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      {/* Logo */}
      <div 
        onClick={() => setActivePage('home')}
        className="cursor-pointer"
      >
        <span className="font-sans text-xl font-bold tracking-tight text-white">NexFlow<span className="text-purple">AI</span></span>
      </div>

      {/* Nav Links */}
      <div className="hidden items-center gap-6 rounded-full border border-border bg-surface/50 px-8 py-3 backdrop-blur-md lg:flex">
        {LINKS.map((link) => {
          const isActive = activePage.toLowerCase() === link.toLowerCase();
          return (
            <button
              key={link}
              onClick={() => setActivePage(link.toLowerCase())}
              className={cn(
                "font-sans text-sm transition-colors hover:text-white",
                isActive ? "font-semibold text-white" : "text-muted"
              )}
            >
              {link}
            </button>
          );
        })}
      </div>

      <div className="hidden sm:block">
        <PillButton 
          glow 
          onClick={() => openCalendly(CALENDLY_URLS.discovery)}
        >
          Book Discovery Call
        </PillButton>
      </div>
    </nav>
  );
}
