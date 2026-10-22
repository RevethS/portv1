"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Code2, Cpu, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Top pill badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge variant="cyan" className="mb-6 py-1.5 px-4 cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Full-Stack Developer &amp; AI Systems Enthusiast
        </Badge>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-100 max-w-4xl"
      >
        Membangun Pengalaman Digital yang{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent">
          Cepat, Estetik &amp; Cerdas
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed"
      >
        Halo, aku <span className="text-white font-medium">Reveth Lenoire</span>. Fokus merancang arsitektur sistem, aplikasi web modern berkinerja tinggi, dan integrasi workflow AI otomasi desktop.
      </motion.p>

      {/* Call to Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a href="#projects">
          <Button variant="primary" size="md" className="gap-2 group">
            Lihat Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
        <a href="#contact">
          <Button variant="outline" size="md" className="gap-2">
            <Mail className="w-4 h-4 text-cyan-400" />
            Hubungi Saya
          </Button>
        </a>
      </motion.div>

      {/* Quick Stats / Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl"
      >
        <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 text-cyan-400 mb-1">
            <Code2 className="w-5 h-5" />
            <span className="text-2xl font-bold text-white">Next.js</span>
          </div>
          <p className="text-xs text-neutral-400">Fullstack React Framework</p>
        </div>

        <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 text-indigo-400 mb-1">
            <Cpu className="w-5 h-5" />
            <span className="text-2xl font-bold text-white">AI Agent</span>
          </div>
          <p className="text-xs text-neutral-400">Automasi &amp; Tool Calling</p>
        </div>

        <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm col-span-2 sm:col-span-1">
          <div className="flex items-center justify-center gap-2 text-purple-400 mb-1">
            <Sparkles className="w-5 h-5" />
            <span className="text-2xl font-bold text-white">Linux/Arch</span>
          </div>
          <p className="text-xs text-neutral-400">Hyprland &amp; Custom Workflow</p>
        </div>
      </motion.div>
    </section>
  );
}
