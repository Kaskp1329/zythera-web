"use client";

import * as React from "react";
import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function Navbar() {
  const { setWaitlistModalOpen, aiState } = useAppStore();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex flex-col">
            <span className="font-orbitron font-bold text-2xl tracking-wider text-white group-hover:text-quantum-orange transition-colors">
              ZYTHERA
            </span>
            <span className="font-mono text-[10px] text-white/50 tracking-widest">
              AUTONOMOUS INTELLIGENCE
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-white/70">
          {["Intelligence", "Capabilities", "Architecture", "Enterprise"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-quantum-orange transition-colors hover:text-glow-orange"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Badge active={aiState !== 'OFFLINE'} pulse={aiState === 'PROCESSING' || aiState === 'THINKING'} className="hidden sm:flex">
            SYSTEM {aiState}
          </Badge>
          <Button size="sm" onClick={() => setWaitlistModalOpen(true)}>
            JOIN WAITLIST
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
