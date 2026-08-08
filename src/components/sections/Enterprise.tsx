"use client";

import * as React from "react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/Button";
import { Shield, Server, FileCheck, Network } from "lucide-react";
import { motion } from "framer-motion";

export function Enterprise() {
  const { setWaitlistModalOpen } = useAppStore();

  const features = [
    { icon: <Shield className="w-5 h-5" />, title: "RBAC & SSO", desc: "Granular access controls and identity provider integration." },
    { icon: <FileCheck className="w-5 h-5" />, title: "AUDIT LOGS", desc: "Comprehensive logging of all agent actions and system events." },
    { icon: <Server className="w-5 h-5" />, title: "LOCAL-FIRST", desc: "Deploy entirely within your VPC or on-premise infrastructure." },
    { icon: <Network className="w-5 h-5" />, title: "SCALABLE EXECUTION", desc: "Distributed worker architecture for high-throughput tasks." }
  ];

  return (
    <section id="enterprise" className="py-32 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6"
          >
            BUILT FOR <span className="text-quantum-orange">REAL SYSTEMS</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 font-sans text-lg mb-10 max-w-xl"
          >
            Zythera is designed for serious deployment. We provide the security, observability, and control required to run autonomous agents in production environments.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 text-quantum-orange bg-quantum-orange/10 p-2 rounded border border-quantum-orange/30">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-white text-sm mb-1">{feat.title}</h4>
                  <p className="font-sans text-white/50 text-xs">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" onClick={() => setWaitlistModalOpen(true)}>
              REQUEST EARLY ACCESS
            </Button>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          {/* Abstract Security/Enterprise Graphic */}
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.1),transparent_70%)]" />
            
            <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,106,0,0.3)" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="rgba(255,106,0,0.5)" strokeWidth="0.5" />
              <polygon points="50,25 70,38 70,62 50,75 30,62 30,38" fill="rgba(255,106,0,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" className="animate-pulse" />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield className="w-16 h-16 text-quantum-orange opacity-80" />
            </div>
            
            {/* Encrypted data stream simulation */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-16 overflow-hidden mask-image-gradient">
              <div className="font-mono text-[8px] text-white/40 animate-[slideUp_2s_linear_infinite] whitespace-pre text-center">
                {"0x7F2A9C... OK\nAUTH_Z... 200\nKEY_EX... DONE\nSEC_LVL... MAX\n0x7F2A9C... OK\nAUTH_Z... 200"}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
