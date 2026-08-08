"use client";

import * as React from "react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EnergyCoreScene } from "@/components/3d/EnergyCoreScene";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { setWaitlistModalOpen, setPromoModalOpen, setAIState } = useAppStore();

  // Cycle through states for demonstration purposes
  React.useEffect(() => {
    const states: ("IDLE" | "LISTENING" | "THINKING" | "PROCESSING")[] = ["IDLE", "LISTENING", "THINKING", "PROCESSING"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % states.length;
      setAIState(states[currentIndex]);
    }, 8000); // Change state every 8 seconds
    
    return () => clearInterval(interval);
  }, [setAIState]);

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Scene Background */}
      <EnergyCoreScene />

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-6 mx-auto">
            ● ZYTHERA INTELLIGENCE ONLINE
          </Badge>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-[100px] leading-[1.1] font-orbitron font-bold text-white tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-quantum-orange via-hot-orange to-gold-highlight animate-gradient">AUTONOMOUS AI</span><br />
          OPERATING SYSTEM
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white/70 max-w-3xl font-sans mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Zythera is an autonomous execution engine built to reason, plan, remember, use tools, orchestrate agents, and execute real-world tasks.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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

      {/* Floating HUD Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <motion.div 
          className="absolute top-[30%] left-[10%] font-mono text-[10px] text-quantum-orange/70 flex flex-col items-end gap-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="border-b border-quantum-orange/30 pb-1">CORE STATUS // ONLINE</span>
          <span>LATENCY // 12ms</span>
        </motion.div>

        <motion.div 
          className="absolute top-[40%] right-[10%] font-mono text-[10px] text-quantum-orange/70 flex flex-col items-start gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <span className="border-b border-quantum-orange/30 pb-1">NEURAL ENGINE // ACTIVE</span>
          <span>AGENTS // READY</span>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[25%] left-[15%] font-mono text-[10px] text-quantum-orange/70 flex flex-col items-start gap-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
        >
          <span className="border-l-2 border-quantum-orange/50 pl-2">MEMORY // SYNCHRONIZED</span>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[35%] right-[15%] font-mono text-[10px] text-quantum-orange/70 flex flex-col items-end gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 }}
        >
          <span className="border-r-2 border-quantum-orange/50 pr-2">EXECUTION // ARMED</span>
        </motion.div>
      </div>
    </section>
  );
}
