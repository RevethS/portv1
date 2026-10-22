"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./ui/icons";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {}
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="emerald" className="mb-3">
          <MessageSquare className="w-3.5 h-3.5" /> Get in Touch
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Mari Berkolaborasi!
        </h2>
        <p className="mt-3 text-neutral-400 max-w-xl text-sm sm:text-base">
          Tertarik untuk mendiskusikan project, kolaborasi open-source, atau sekadar bertukar pikiran seputar software development?
        </p>
      </div>

      <div className="max-w-2xl mx-auto rounded-3xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl p-8 sm:p-10 shadow-2xl relative">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-2">Nama</label>
              <input
                type="text"
                required
                placeholder="Reveth / John Doe"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="revethpancake@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-400 mb-2">Pesan</label>
            <textarea
              required
              rows={4}
              placeholder="Ceritakan tentang project atau ide menarikmu..."
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full gap-2">
            {submitted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Pesan Terkirim!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Kirim Pesan
              </>
            )}
          </Button>
        </form>

        <div className="mt-8 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>© 2026 Reveth Lenoire. Built with Next.js &amp; Aceternity/Shadcn style.</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/RevethS" target="_blank" rel="noreferrer" className="hover:text-neutral-300 transition-colors flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <a href="mailto:revethpancake@gmail.com" className="hover:text-neutral-300 transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
