"use client";

import * as React from "react";
import { X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NoticeBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVisible(false)}
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#0a0a0a] rounded-2xl border border-quantum-orange/20 shadow-[0_0_50px_rgba(255,106,0,0.15)] overflow-hidden"
        >
          {/* Subtle top glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-quantum-orange/50 to-transparent" />
          
          <div className="p-8">
            {/* Header: Badge and Close */}
            <div className="flex items-start justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-quantum-orange/30 bg-quantum-orange/10 text-quantum-orange text-xs font-bold tracking-wider font-orbitron">
                <div className="w-2 h-2 rounded-full bg-quantum-orange animate-pulse" />
                OFFICIAL LAUNCH NOTICE
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                aria-label="Close notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Body */}
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Zythera OS Launch Postponed
            </h2>
            
            <div className="space-y-4 text-white/80 leading-relaxed font-sans text-[15px]">
              <p>
                Due to temporary financial and technical constraints, the official public launch of <strong>Zythera OS</strong> has been postponed.
              </p>
              <p>
                Please note that the website's automated waitlist registration is currently unavailable.
              </p>
            </div>

            {/* Highlighted Email Box */}
            <div className="mt-8 p-5 rounded-xl border border-dashed border-quantum-orange/30 bg-quantum-orange/5 relative">
              <h3 className="text-white font-bold mb-2">
                To join the waitlist & get notified early:
              </h3>
              <p className="text-white/70 mb-4 text-sm">
                Please contact us directly via email at:
              </p>
              
              <a 
                href="mailto:support@zythera.co.in" 
                className="inline-flex items-center gap-2 text-xl font-bold text-quantum-orange hover:text-hot-orange transition-colors group"
              >
                <Mail className="w-5 h-5 text-white/70 group-hover:text-quantum-orange transition-colors" />
                <span className="underline decoration-quantum-orange/40 group-hover:decoration-quantum-orange underline-offset-4">
                  support@zythera.co.in
                </span>
              </a>

              <p className="mt-5 text-sm text-white/40 italic">
                *Please include your <strong>Name</strong> and a <strong>1-line message</strong> in your email.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:support@zythera.co.in"
                className="flex-1 text-center py-3 px-4 rounded-lg bg-quantum-orange hover:bg-hot-orange text-black font-bold transition-colors shadow-[0_0_20px_rgba(255,106,0,0.3)]"
                onClick={() => setIsVisible(false)}
              >
                Contact Support via Email
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="py-3 px-8 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
