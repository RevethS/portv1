"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Wrench, Terminal, Layers, Database, Palette, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Layers,
    items: ["React 19", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
  },
  {
    title: "Backend & Systems",
    icon: Database,
    items: ["Node.js", "Python", "REST APIs", "PostgreSQL / SQLite", "Docker", "Arch Linux"],
  },
  {
    title: "AI & Desktop Automation",
    icon: Cpu,
    items: ["AI Agent Architectures", "Prompt Engineering", "Tool Calling & MCP", "Wayland / Hyprland Scripting", "Bash"],
  },
  {
    title: "Developer Tools & Creative",
    icon: Palette,
    items: ["Zed Editor", "Git & GitHub", "LibreSprite", "Linux CLI Workflows", "Figma"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="purple" className="mb-3">
          <Wrench className="w-3.5 h-3.5" /> Capabilities
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Keahlian &amp; Stack Teknologi
        </h2>
        <p className="mt-3 text-neutral-400 max-w-xl text-sm sm:text-base">
          Toolkit yang sering kugunakan untuk mengubah ide menjadi produk digital yang fungsional dan teroptimasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-md relative overflow-hidden group hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-cyan-400 group-hover:text-white group-hover:bg-cyan-600/20 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-100">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-neutral-900/90 text-neutral-300 border border-neutral-800 hover:border-cyan-500/50 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
