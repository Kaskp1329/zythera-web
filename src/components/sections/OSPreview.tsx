"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function OSPreview() {
  return (
    <section className="py-32 px-6 bg-pure-black relative overflow-hidden">
      <div className="absolute top-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            THE OPERATING <span className="text-quantum-orange text-glow-orange">ENVIRONMENT</span>
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto text-lg">
            A unified interface for orchestration, memory visualization, and agent supervision.
          </p>
        </div>

        {/* Mockup Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video max-w-6xl mx-auto"
        >
          {/* OS Window Frame */}
          <div className="absolute inset-0 glass-panel rounded-xl border border-white/20 shadow-2xl overflow-hidden flex flex-col">
            {/* Window Header */}
            <div className="h-8 border-b border-white/10 bg-black/50 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="font-mono text-[10px] text-white/30 tracking-widest">ZYTHERA OS v2.0</div>
              <div className="w-10" />
            </div>

            {/* Window Content Layout */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-white/10 bg-black/40 p-4 flex flex-col gap-6">
                <div className="font-orbitron font-bold text-lg text-white mb-4">Z-CONSOLE</div>
                
                <div className="space-y-2 font-mono text-xs text-white/50">
                  <div className="flex items-center gap-3 px-2 py-1.5 bg-white/5 text-white rounded">
                    <div className="w-1.5 h-1.5 rounded-full bg-quantum-orange animate-pulse" />
                    AGENTS
                  </div>
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    MEMORY
                  </div>
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    TOOLS
                  </div>
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    WORKFLOWS
                  </div>
                </div>
                
                <div className="mt-auto border-t border-white/10 pt-4 font-mono text-[10px] text-white/30 space-y-1">
                  <div>CPU: 42%</div>
                  <div>RAM: 14.2 GB</div>
                  <div className="text-quantum-orange">NET: SECURE</div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6 relative flex flex-col">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                
                {/* Top metrics bar */}
                <div className="grid grid-cols-4 gap-4 mb-6 relative z-10">
                  {[
                    { label: "ACTIVE AGENTS", val: "12" },
                    { label: "TASKS ENQUEUED", val: "4" },
                    { label: "MEMORY VECTORS", val: "8.4M" },
                    { label: "SUCCESS RATE", val: "99.8%" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-black/60 border border-white/10 p-3 rounded">
                      <div className="font-mono text-[10px] text-white/40 mb-1">{stat.label}</div>
                      <div className="font-sans text-xl text-white">{stat.val}</div>
                    </div>
                  ))}
                </div>

                {/* Central visualization area (Mocking the 3D core in OS) */}
                <div className="flex-1 border border-white/10 bg-black/30 rounded relative flex items-center justify-center overflow-hidden">
                  <div className="absolute w-64 h-64 border border-quantum-orange/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute w-48 h-48 border border-quantum-orange/40 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
                  <div className="w-24 h-24 bg-quantum-orange/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,106,0,0.3)] backdrop-blur-md border border-quantum-orange/50">
                    <div className="w-12 h-12 bg-quantum-orange rounded-full animate-pulse shadow-[0_0_20px_#ff6a00]" />
                  </div>
                  
                  {/* Floating Agent Nodes */}
                  <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-white/80 shadow-[0_0_10px_#fff] mb-1" />
                    <span className="font-mono text-[8px] text-white/60">RESEARCHER</span>
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-hot-orange/80 shadow-[0_0_10px_#ffb347] mb-1" />
                    <span className="font-mono text-[8px] text-white/60">ANALYZER</span>
                  </div>
                  
                  {/* Connecting lines mocked with SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#ff6a00" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="75%" y2="66%" stroke="#ff6a00" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Activity Stream */}
                <div className="h-32 mt-6 border border-white/10 bg-black/40 rounded p-3 font-mono text-[10px] overflow-hidden flex flex-col gap-1 relative z-10">
                  <div className="text-white/40 mb-2">SYSTEM.LOG</div>
                  <div className="text-white/70"><span className="text-green-400">[14:23:41]</span> [RESEARCHER] Finished scanning 45 documents.</div>
                  <div className="text-white/70"><span className="text-green-400">[14:23:42]</span> [ROUTER] Delegating synthesis to ANALYZER.</div>
                  <div className="text-quantum-orange"><span className="text-green-400">[14:23:45]</span> [ANALYZER] Processing vectors... 42% complete.</div>
                  <div className="text-white/30"><span className="text-green-400">[14:23:46]</span> Waiting for IO...</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
