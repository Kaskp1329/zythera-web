"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Brain, Database, Wrench, Network, Eye, Lock } from "lucide-react";
import { motion } from "framer-motion";

export function Capabilities() {
  const capabilities = [
    {
      title: "REASONING & PLANNING",
      icon: <Brain className="w-6 h-6" />,
      id: "C-01",
      desc: "Multi-step task decomposition and autonomous decision making."
    },
    {
      title: "SEMANTIC MEMORY",
      icon: <Database className="w-6 h-6" />,
      id: "C-02",
      desc: "Persistent contextual memory and vector-based knowledge retrieval through the JNANA memory layer."
    },
    {
      title: "TOOL EXECUTION",
      icon: <Wrench className="w-6 h-6" />,
      id: "C-03",
      desc: "Ability to interact with external tools and services including browser, code, email, calendar, GitHub, and other systems."
    },
    {
      title: "MULTI-AGENT ORCHESTRATION",
      icon: <Network className="w-6 h-6" />,
      id: "C-04",
      desc: "Parallel AI agents coordinated through the YANTRA execution architecture."
    },
    {
      title: "VISION & VOICE",
      icon: <Eye className="w-6 h-6" />,
      id: "C-05",
      desc: "Multimodal interaction including vision, speech, OCR, and audio capabilities."
    },
    {
      title: "LOCAL-FIRST INTELLIGENCE",
      icon: <Lock className="w-6 h-6" />,
      id: "C-06",
      desc: "Privacy-first architecture with local/offline operation and enterprise deployment capabilities."
    }
  ];

  return (
    <section id="capabilities" className="py-32 px-6 bg-pure-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6"
          >
            ONE SYSTEM.<br />
            <span className="text-quantum-orange">TOTAL EXECUTION.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-sans max-w-2xl mx-auto text-lg"
          >
            Zythera bridges the gap between intelligence and action. It doesn't just answer questions—it executes complex workflows autonomously.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded bg-quantum-orange/10 border border-quantum-orange/30 flex items-center justify-center text-quantum-orange">
                    {cap.icon}
                  </div>
                  <span className="font-mono text-xs text-white/30 border border-white/10 px-2 py-1 rounded bg-white/5">
                    {cap.id}
                  </span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-3">{cap.title}</h3>
                <p className="font-sans text-white/60 flex-grow">{cap.desc}</p>
                
                <div className="w-full h-1 bg-white/5 mt-6 rounded overflow-hidden">
                  <div className="h-full bg-quantum-orange w-1/3 opacity-50" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
