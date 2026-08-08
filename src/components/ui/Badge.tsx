import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  pulse?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, active = true, pulse = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          active
            ? "border-quantum-orange/50 bg-quantum-orange/10 text-quantum-orange"
            : "border-white/20 bg-white/5 text-white/50",
          className
        )}
        {...props}
      >
        {pulse && active && (
          <span className="mr-1.5 flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-quantum-orange"></span>
          </span>
        )}
        {!pulse && active && (
          <span className="mr-1.5 flex h-1.5 w-1.5 rounded-full bg-quantum-orange"></span>
        )}
        {!active && (
          <span className="mr-1.5 flex h-1.5 w-1.5 rounded-full bg-white/30"></span>
        )}
        {children}
      </div>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
