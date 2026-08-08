"use client";

import * as React from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";
import { motion, AnimatePresence } from "framer-motion";

export function WaitlistModal() {
  const { isWaitlistModalOpen, setWaitlistModalOpen } = useAppStore();
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({ name: "", email: "", role: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json().catch(() => ({}));
      
      if (response.ok) {
        setStatus("success");
      } else {
        setErrorMessage(data.error || "System error. Failed to register access request.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  const handleClose = () => {
    setWaitlistModalOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", role: "" });
    }, 300);
  };

  return (
    <Modal isOpen={isWaitlistModalOpen} onClose={handleClose}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 rounded-full bg-quantum-orange/20 border-2 border-quantum-orange flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,106,0,0.5)]">
              <svg className="w-8 h-8 text-quantum-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2 tracking-wide">ACCESS GRANTED</h3>
            <p className="text-white/70 font-sans">You're on the list. Welcome to Zythera.</p>
            <Button className="mt-8 w-full" onClick={handleClose}>
              CLOSE
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-orbitron font-bold text-white tracking-wider mb-2">JOIN ZYTHERA</h2>
              <p className="text-white/60 font-sans text-sm">Be among the first to experience autonomous AI execution.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs font-mono text-white/50 mb-1">NAME // IDENTIFIER</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:border-quantum-orange focus:ring-1 focus:ring-quantum-orange transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-xs font-mono text-white/50 mb-1">EMAIL // COMMUNICATION</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:border-quantum-orange focus:ring-1 focus:ring-quantum-orange transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/50 mb-1">ROLE // CLASSIFICATION (OPTIONAL)</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:border-quantum-orange focus:ring-1 focus:ring-quantum-orange transition-all"
                  placeholder="Company or Role"
                />
              </div>

              {status === "error" && (
                <div className="text-red-400 text-sm py-2 border-l-2 border-red-500 pl-3 bg-red-500/10">
                  {errorMessage || "System error. Failed to register access request."}
                </div>
              )}

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                      PROCESSING...
                    </span>
                  ) : (
                    "JOIN THE WAITLIST"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
