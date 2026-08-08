"use client";

import * as React from "react";
import { motion } from "framer-motion";

const roadmapItems = [
  { phase: "01", name: "Foundation", status: "completed" },
  { phase: "02", name: "Auth", status: "completed" },
  { phase: "03", name: "AI Router", status: "completed" },
  { phase: "04", name: "Conversation", status: "completed" },
  { phase: "05", name: "JNANA Memory", status: "active" },
  { phase: "06", name: "YANTRA Agents", status: "active" },
  { phase: "07", name: "Tools", status: "upcoming" },
  { phase: "08", name: "Multimodal", status: "upcoming" },
  { phase: "09", name: "Frontend", status: "upcoming" },
  { phase: "10", name: "Enterprise", status: "upcoming" }
];

export function Roadmap() {
  return (
    <section className="py-32 px-6 bg-pure-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 tracking-widest">
            EVOLUTION
          </h2>
        </div>

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
          
          {/* Active timeline line */}
          <motion.div 
            className="absolute top-1/2 left-0 h-0.5 bg-quantum-orange shadow-[0_0_10px_#ff6a00] -translate-y-1/2"
            initial={{ width: "0%" }}
            whileInView={{ width: "55%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="flex justify-between relative z-10 overflow-x-auto pb-12 pt-12 snap-x hide-scrollbar">
            {roadmapItems.map((item, index) => {
              const isCompleted = item.status === "completed";
              const isActive = item.status === "active";
              
              return (
                <div key={item.phase} className="flex flex-col items-center min-w-[100px] snap-center">
                  <div className={`font-mono text-[10px] mb-4 ${isCompleted ? 'text-white/60' : isActive ? 'text-quantum-orange' : 'text-white/30'}`}>
                    PHASE {item.phase}
                  </div>
                  
                  {/* Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-4 h-4 rounded-full border-2 bg-black relative mb-4 ${
                      isCompleted 
                        ? 'border-quantum-orange bg-quantum-orange shadow-[0_0_10px_#ff6a00]' 
                        : isActive
                          ? 'border-quantum-orange shadow-[0_0_15px_#ff6a00]'
                          : 'border-white/20'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-quantum-orange rounded-full animate-ping" />
                    )}
                  </motion.div>
                  
                  <div className={`font-orbitron text-xs text-center px-2 ${
                    isCompleted ? 'text-white/80' : isActive ? 'text-quantum-orange text-glow-orange font-bold' : 'text-white/40'
                  }`}>
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
