"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "cyan" | "purple" | "emerald";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-neutral-800/80 text-neutral-300 border-neutral-700/60",
    cyan: "bg-cyan-950/60 text-cyan-300 border-cyan-800/50 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    purple: "bg-purple-950/60 text-purple-300 border-purple-800/50 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    emerald: "bg-emerald-950/60 text-emerald-300 border-emerald-800/50 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md transition-colors",
        styles[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
}
