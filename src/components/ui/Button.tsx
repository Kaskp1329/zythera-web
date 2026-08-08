import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-quantum-orange/10 border border-quantum-orange/50 text-white hover:bg-quantum-orange/20 hover:border-quantum-orange hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] text-glow-orange",
      secondary: "glass-panel text-white hover:bg-white/5",
      outline: "border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
      ghost: "text-white/70 hover:text-white hover:bg-white/5"
    };
    
    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-8 py-4 text-base font-medium uppercase tracking-wider"
    };
    
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-orbitron transition-all duration-300",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
