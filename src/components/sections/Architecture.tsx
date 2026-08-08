"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const layers = [
  { id: "multimodal", name: "MULTIMODAL", desc: "Vision, voice, OCR, speech processing." },
  { id: "tools", name: "TOOLS", desc: "Browser, code, email, calendar, GitHub, automation." },
  { id: "yantra", name: "YANTRA", desc: "Planning, task graphs, and multi-agent runtime." },
  { id: "jnana", name: "JNANA", desc: "Semantic memory and contextual knowledge." },
  { id: "zcore", name: "Z-CORE", desc: "The central execution engine." },
  { id: "enterprise", name: "ENTERPRISE", desc: "RBAC, SSO, audit logs, deployment controls." }
];

export function Architecture() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section id="architecture" className="py-32 px-6 bg-pure-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            THE INTELLIGENCE STACK
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto text-lg">
            A modular, layered architecture designed for scalable autonomous execution.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Interactive Stack Diagram */}
          <div className="w-full lg:w-1/2 relative perspective-1000">
            <div className="flex flex-col gap-4 max-w-md mx-auto transform-gpu rotate-x-12">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  className={`relative p-6 border rounded cursor-pointer transition-all duration-300 backdrop-blur-md ${
                    activeLayer === layer.id 
                      ? "border-quantum-orange bg-quantum-orange/10 z-10 scale-105 shadow-[0_0_30px_rgba(255,106,0,0.2)]" 
                      : "border-white/20 bg-black/50 hover:border-white/50"
                  }`}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Energy connecting lines (visible on hover) */}
                  {activeLayer === layer.id && (
                    <motion.div 
                      layoutId="energy-line"
                      className="absolute -right-12 top-1/2 w-12 h-px bg-quantum-orange shadow-[0_0_10px_#ff6a00]" 
                    />
                  )}
                  
                  <div className="flex justify-between items-center">
                    <h3 className={`font-orbitron font-bold text-xl tracking-wider ${activeLayer === layer.id ? "text-quantum-orange text-glow-orange" : "text-white"}`}>
                      {layer.name}
                    </h3>
                    <span className="font-mono text-xs text-white/30 border border-white/10 px-2 py-1 rounded bg-white/5">
                      L-{6 - index}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Layer Details Panel */}
          <div className="w-full lg:w-1/2 h-[400px]">
            <div className="glass-panel h-full rounded-lg p-8 border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {activeLayer ? (
                  <motion.div
                    key={activeLayer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <h4 className="text-3xl font-orbitron font-bold text-quantum-orange mb-4 text-glow-orange">
                      {layers.find(l => l.id === activeLayer)?.name}
                    </h4>
                    <p className="text-white/80 font-sans text-xl leading-relaxed mb-8">
                      {layers.find(l => l.id === activeLayer)?.desc}
                    </p>
                    
                    <div className="mt-auto space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/20" />
                        <span className="font-mono text-xs text-quantum-orange">SYSTEM METRICS</span>
                        <div className="h-px flex-1 bg-white/20" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 font-mono text-xs text-white/50">
                        <div className="flex justify-between border border-white/10 p-2 rounded">
                          <span>STATUS</span>
                          <span className="text-green-400">ONLINE</span>
                        </div>
                        <div className="flex justify-between border border-white/10 p-2 rounded">
                          <span>LATENCY</span>
                          <span className="text-white">{(Math.random() * 20 + 5).toFixed(1)}ms</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full items-center justify-center text-white/30"
                  >
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <p className="font-mono text-sm tracking-widest text-center">HOVER OVER A LAYER TO<br />INSPECT ARCHITECTURE</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
