import React, { useState, useEffect } from 'react';
import { PillButton } from './ui/PillButton';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { openCalendly, CALENDLY_URLS } from '../utils/calendly';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const LINKS = ['Home', 'Services', 'Case Studies', 'Content', 'Pricing', 'Team'];

export function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  const handleNavClick = (link: string) => {
    setActivePage(link.toLowerCase());
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 flex w-full items-center justify-between px-6 md:px-8 py-4 transition-all duration-300",
          scrolled || mobileOpen ? "bg-bg/95 backdrop-blur-lg border-b border-border/40" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer z-10"
        >
          <span className="font-sans text-xl font-bold tracking-tight text-white">NexFlow<span className="text-purple">AI</span></span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 rounded-full border border-border bg-surface/50 px-8 py-3 backdrop-blur-md lg:flex">
          {LINKS.map((link) => {
            const isActive = activePage.toLowerCase() === link.toLowerCase();
            return (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
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

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <PillButton
            glow
            onClick={() => openCalendly(CALENDLY_URLS.discovery)}
          >
            Book Discovery Call
          </PillButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center lg:hidden z-10 rounded-lg border border-border/50 bg-surface/50 p-2 text-white backdrop-blur-sm"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col bg-bg/98 backdrop-blur-xl pt-20 px-6 pb-10"
          >
            {/* Glow accent */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-purple/10 blur-[100px]" />

            <div className="relative flex flex-col gap-1 mt-4">
              {LINKS.map((link, i) => {
                const isActive = activePage.toLowerCase() === link.toLowerCase();
                return (
                  <motion.button
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                    onClick={() => handleNavClick(link)}
                    className={cn(
                      "w-full text-left px-5 py-4 rounded-xl font-sans text-lg font-medium transition-all",
                      isActive
                        ? "bg-purple/10 text-white border border-purple/30 font-semibold"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: LINKS.length * 0.06 + 0.1 }}
              className="mt-8"
            >
              <PillButton
                glow
                fullWidth
                onClick={() => {
                  setMobileOpen(false);
                  openCalendly(CALENDLY_URLS.discovery);
                }}
              >
                Book Discovery Call
              </PillButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
