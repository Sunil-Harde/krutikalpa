"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";

export function Portfolio() {
  // Show 3 featured projects matching Section 7 of the approved design
  const featured = portfolioProjects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Work
              </h2>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
              Explore some of our recent projects that have helped businesses achieve real impact.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#FB923C] group transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Cards Grid matching Section 7 of approved design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio#${project.slug}`}
              className="group bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/50 rounded-2xl p-0 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#F97316]/15 flex flex-col justify-between"
            >
              {/* Mockup Preview Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.1] shadow-inner">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Industry Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F97316] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Arrow Link matching "View Case Study ->" */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center text-xs font-semibold text-[#F97316] gap-1 group-hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
