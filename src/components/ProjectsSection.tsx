"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight-card";
import { Badge } from "./ui/badge";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./ui/icons";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Lenoire AI Desktop Copilot",
    description:
      "Asisten AI otonom yang terintegrasi langsung dengan Wayland (Hyprland), sistem file Linux, dan perkakas kreatif seperti LibreSprite & Zed Editor.",
    tags: ["Python", "Hyprland", "AI Agents", "GTK/Qt"],
    github: "https://github.com/RevethS",
    demo: "#",
    badge: "Featured",
    color: "cyan",
  },
  {
    title: "Fortune 500 Data Analytics",
    description:
      "Notebook & visualisasi komprehensif mengolah data finansial, valuasi pasar, dan performa korporasi global secara interaktif.",
    tags: ["Python", "Pandas", "Jupyter", "Data Science"],
    github: "https://github.com/RevethS",
    demo: "#",
    badge: "Analytics",
    color: "purple",
  },
  {
    title: "Modern Interactive Portfolio",
    description:
      "Arsitektur portofolio Next.js 16 App Router dengan styling modern terinspirasi Shadcn UI & Aceternity UI, performa instan dan animasi fluid.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/RevethS",
    demo: "#",
    badge: "Web App",
    color: "emerald",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="cyan" className="mb-3">
          <FolderGit2 className="w-3.5 h-3.5" /> Selected Works
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Karya &amp; Eksplorasi Pilihan
        </h2>
        <p className="mt-3 text-neutral-400 max-w-xl text-sm sm:text-base">
          Kumpulan eksperimen, sistem automasi, serta aplikasi web yang dirancang dengan performa dan estetika tinggi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Spotlight className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={item.color as any}>{item.badge}</Badge>
                  <div className="flex items-center gap-2">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors p-1"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={item.demo}
                      className="text-neutral-400 hover:text-cyan-400 transition-colors p-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-900">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Spotlight>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
