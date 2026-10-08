"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Truck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Truck,
  Building2,
};

export function Industries() {
  // Show 6 featured industries matching Section 4 of the approved design
  const featuredIndustries = industriesData.slice(0, 6);

  return (
    <section id="industries" className="py-20 md:py-28 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Industries We Serve
              </h2>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
              We build solutions for diverse industries with deep domain understanding.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#FB923C] group transition-colors"
          >
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Industry Cards Grid matching Section 4 of approved design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {featuredIndustries.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Factory;
            return (
              <Link
                key={ind.id}
                href="/industries"
                className="group relative bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#F97316]/15 flex flex-col justify-between"
              >
                {/* Image Thumbnail with Overlay */}
                <div className="relative h-32 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30" />

                  {/* Orange Icon Overlay Badge */}
                  <div className="absolute bottom-2 left-3 w-8 h-8 rounded-lg bg-[#0A0A0A]/90 border border-[#F97316]/40 flex items-center justify-center text-[#F97316] backdrop-blur-md">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#F97316] transition-colors leading-snug mb-1.5">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {ind.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/[0.05] flex items-center justify-end text-[#F97316] text-xs">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
