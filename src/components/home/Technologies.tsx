"use client";

import React, { useState } from "react";
import {
  techCategories,
  technologiesData,
  TechCategory,
} from "@/data/technologies";
import {
  Code,
  Layers,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("Frontend");

  const filteredTech = technologiesData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="py-20 md:py-28 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Technology Stack
            </h2>
          </div>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            We use modern and proven technologies to build future-ready solutions.
          </p>
        </div>

        {/* Category Pills matching Section 5 of approved design */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {techCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#F97316] text-white shadow-lg shadow-[#F97316]/30"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/50 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F97316]/10"
            >
              {/* Tech Icon Glyph */}
              <div className="w-14 h-14 rounded-xl bg-white/[0.02] border border-white/[0.08] group-hover:border-[#F97316]/40 group-hover:bg-[#F97316]/10 flex items-center justify-center text-[#F97316] mb-3 transition-colors">
                <span className="font-mono font-bold text-lg text-white group-hover:text-[#F97316]">
                  {tech.name.slice(0, 2).toUpperCase()}
                </span>
              </div>

              {/* Name */}
              <div className="text-sm font-bold text-white group-hover:text-[#F97316] transition-colors">
                {tech.name}
              </div>

              {/* Subtitle description */}
              <div className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                {tech.description}
              </div>

              {tech.badge && (
                <span className="mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30">
                  {tech.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
