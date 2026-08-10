"use client";

import * as React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NoticeBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-0 left-0 w-full z-[100] bg-red-900/95 border-b border-red-500/50 backdrop-blur-md text-white px-4 py-3 shadow-[0_4px_30px_rgba(220,38,38,0.3)]"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm md:text-base font-sans text-center sm:text-left leading-relaxed">
            <strong className="font-orbitron tracking-wider text-red-200">SYSTEM NOTICE:</strong> Due to unforeseen financial and technical issues, the official launch of Zythera has been postponed. 
            The integrated waitlist form is currently offline. To join the waitlist or for further inquiries, please email us directly at <a href="mailto:support@zythera.co.in" className="font-bold underline text-white hover:text-red-200 transition-colors">support@zythera.co.in</a> with your name and a brief 1-line message.
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors flex-shrink-0"
            aria-label="Close notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
