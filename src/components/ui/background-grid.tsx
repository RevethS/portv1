import React from "react";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-[130px] rounded-full" />
      <div className="absolute top-[600px] -left-40 w-[600px] h-[400px] bg-gradient-to-r from-blue-600/10 to-transparent blur-[120px] rounded-full" />
      <div className="absolute top-[1200px] -right-40 w-[600px] h-[500px] bg-gradient-to-l from-purple-600/10 to-transparent blur-[140px] rounded-full" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
