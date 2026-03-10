import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  animateEntrance?: boolean;
}

export function Accordion({ items, animateEntrance }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={animateEntrance ? container : {}}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex w-full flex-col gap-4"
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={index}
            variants={animateEntrance ? itemAnim : {}}
            className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:bg-surface-2"
          >
            <button
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <h3 className="font-sans text-lg font-medium text-white">{item.question}</h3>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-muted transition-transform duration-300",
                  isActive && "rotate-180 text-purple-light"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="border-t border-border/50 px-6 pb-6 pt-2 font-sans text-muted">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
