"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

const steps = [
  { id: "UNDERSTAND", label: "UNDERSTAND" },
  { id: "PLAN", label: "PLAN" },
  { id: "DELEGATE", label: "DELEGATE" },
  { id: "EXECUTE", label: "EXECUTE" },
  { id: "VERIFY", label: "VERIFY" },
  { id: "DELIVER", label: "DELIVER" }
];

export function ExecutionDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { setAIState } = useAppStore();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      setAIState("PROCESSING");
      interval = setInterval(() => {
        setActiveStep((prev) => prev + 1);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, setAIState]);

  useEffect(() => {
    if (isPlaying && activeStep >= steps.length - 1) {
      setTimeout(() => {
        setIsPlaying(false);
        setAIState("IDLE");
      }, 1500); // Wait for the last step to finish visualizing before resetting
    }
  }, [activeStep, isPlaying, setAIState]);

  const handleStart = () => {
    setActiveStep(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-32 px-6 bg-pure-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            FROM INTENT TO <span className="text-quantum-orange text-glow-orange">EXECUTION</span>
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto text-lg">
            Zythera translates high-level goals into multi-step agent workflows.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8 border-white/10 shadow-2xl relative overflow-hidden">
          {/* User Request Bubble */}
          <div className="mb-12">
            <span className="font-mono text-xs text-white/50 mb-2 block">USER INTENT</span>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 max-w-2xl">
              <p className="font-sans text-xl text-white">
                "Research the market, analyze the results, create a report, and send it to my team."
              </p>
            </div>
            {!isPlaying && activeStep === 0 && (
              <button 
                onClick={handleStart}
                className="mt-6 px-6 py-2 bg-quantum-orange/20 border border-quantum-orange text-white font-orbitron rounded hover:bg-quantum-orange hover:text-black transition-colors"
              >
                EXECUTE WORKFLOW
              </button>
            )}
            {!isPlaying && activeStep === steps.length - 1 && (
              <button 
                onClick={handleStart}
                className="mt-6 px-6 py-2 border border-white/20 text-white font-orbitron rounded hover:bg-white/10 transition-colors"
              >
                RESTART DEMO
              </button>
            )}
          </div>

          {/* Workflow Pipeline */}
          <div className="relative pt-8">
            <div className="absolute top-12 left-0 w-full h-1 bg-white/10 rounded" />
            
            <div className="flex justify-between relative z-10">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                
                return (
                  <div key={step.id} className="flex flex-col items-center relative">
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-4 transition-colors duration-500 ${
                        isActive 
                          ? "border-quantum-orange bg-quantum-orange shadow-[0_0_15px_#ff6a00]" 
                          : isPast 
                            ? "border-quantum-orange bg-quantum-orange/20" 
                            : "border-white/20 bg-black"
                      }`}
                      animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                      transition={{ repeat: isActive ? Infinity : 0, duration: 1.5 }}
                    >
                      {(isActive || isPast) && (
                        <div className={`w-3 h-3 rounded-full ${isActive ? "bg-white" : "bg-quantum-orange"}`} />
                      )}
                    </motion.div>
                    
                    <span className={`font-mono text-xs tracking-wider transition-colors duration-500 ${
                      isActive ? "text-quantum-orange text-glow-orange" : isPast ? "text-white/80" : "text-white/30"
                    }`}>
                      {step.label}
                    </span>

                    {/* Agent nodes visualizing work */}
                    {isActive && index > 1 && index < 5 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute top-16 flex gap-2"
                      >
                        {[0, 1, 2].map(i => (
                          <motion.div 
                            key={i}
                            className="w-2 h-2 rounded-full bg-hot-orange shadow-[0_0_5px_#ffb347]"
                            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Progress line fill */}
            <motion.div 
              className="absolute top-12 left-0 h-1 bg-quantum-orange rounded shadow-[0_0_10px_#ff6a00]"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
