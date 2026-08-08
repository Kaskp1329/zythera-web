import * as React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="font-orbitron font-bold text-xl tracking-widest text-white mb-1">ZYTHERA</h3>
          <p className="font-mono text-xs text-quantum-orange tracking-widest">AUTONOMOUS INTELLIGENCE</p>
          <p className="font-sans text-white/50 text-sm mt-4">
            &copy; {currentYear} Zythera Technologies. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs text-white/60">
          <Link href="#" className="hover:text-quantum-orange transition-colors">PRODUCT</Link>
          <Link href="#" className="hover:text-quantum-orange transition-colors">ARCHITECTURE</Link>
          <Link href="#" className="hover:text-quantum-orange transition-colors">ENTERPRISE</Link>
          <Link href="#" className="hover:text-quantum-orange transition-colors">DOCUMENTATION</Link>
          <Link href="#" className="hover:text-quantum-orange transition-colors">GITHUB</Link>
          <Link href="#" className="hover:text-quantum-orange transition-colors">PRIVACY</Link>
          <Link href="#" className="hover:text-quantum-orange transition-colors">TERMS</Link>
        </div>
      </div>
    </footer>
  );
}
