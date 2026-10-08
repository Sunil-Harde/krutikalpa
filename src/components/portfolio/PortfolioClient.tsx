"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, CheckCircle2, Quote, ExternalLink } from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolio";

const categories = [
  "All",
  "Web Application",
  "AI / Chatbot",
  "AI Agents",
  "Mobile App",
  "Custom Software",
];

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory ||
      project.tags.includes(activeCategory);

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#F97316] text-white shadow-md shadow-[#F97316]/30"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects, client, tech..."
            className="w-full bg-[#0A0A0A] border border-white/[0.1] rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#F97316]/70 transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-[#0A0A0A] rounded-2xl border border-white/[0.08]">
          <p className="text-zinc-400 text-sm">
            No projects matched your search criteria. Try another keyword or filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={project.slug}
              className="group bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#F97316]/15 flex flex-col justify-between"
            >
              {/* Mockup Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.1]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-85"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F97316] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <div className="font-mono font-bold text-[#F97316] text-sm">{m.stat}</div>
                        <div className="text-[10px] text-zinc-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-medium">{project.client}</span>
                  <Link
                    href={`/case-studies#${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:text-[#FB923C] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
