"use client";

import * as React from "react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  const { setWaitlistModalOpen, setPromoModalOpen } = useAppStore();

  return (
    <section className="relative py-40 px-6 min-h-[600px] flex items-center justify-center overflow-hidden bg-black border-t border-white/5">
      {/* Background cinematic effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="absolute w-[800px] h-[800px] bg-quantum-orange/20 rounded-full blur-[150px]" />
        
        {/* Mocking a huge core in the background */}
        <div className="w-[1200px] h-[1200px] border border-quantum-orange/20 rounded-full animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[1000px] h-[1000px] border border-quantum-orange/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-8 leading-tight tracking-tight"
        >
          THE FUTURE DOESN'T<br />
          WAIT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange to-hot-orange animate-gradient">INSTRUCTIONS.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/70 font-sans mb-12"
        >
          Build with intelligence that can reason, coordinate, and execute.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" onClick={() => setWaitlistModalOpen(true)}>
            JOIN WAITLIST
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group glass-panel"
            onClick={() => setPromoModalOpen(true)}
          >
            <Play className="w-4 h-4 mr-2 text-quantum-orange group-hover:text-white transition-colors" />
            WATCH PROMO
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
