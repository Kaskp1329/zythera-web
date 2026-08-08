"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
        className={cn(
          "group relative overflow-hidden rounded-lg border border-white/10 bg-black/40 p-6 backdrop-blur-md transition-colors",
          hoverEffect && "hover:border-quantum-orange/50 hover:bg-black/60",
          className
        )}
        {...props}
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        
        {/* Hover glow effect */}
        {hoverEffect && (
          <div className="absolute inset-0 -z-10 opacity-0 bg-gradient-to-br from-quantum-orange/10 to-transparent transition-opacity duration-300 group-hover:opacity-100" />
        )}
        
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
