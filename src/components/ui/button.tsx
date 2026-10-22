"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "shimmer";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-50 rounded-xl cursor-pointer";

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-13 px-8 text-base",
    };

    const variants = {
      primary:
        "bg-white text-neutral-950 hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
      secondary:
        "bg-neutral-800 text-neutral-100 hover:bg-neutral-700 border border-neutral-700",
      outline:
        "border border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-neutral-500",
      ghost: "text-neutral-400 hover:text-white hover:bg-neutral-900/40",
      shimmer:
        "animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2638,55%,#000103)] bg-[length:200%_100%] border border-slate-800 text-slate-200 hover:text-white shadow-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizes[size], variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
