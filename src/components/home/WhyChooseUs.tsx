"use client";

import React from "react";
import {
  BrainCircuit,
  RefreshCw,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { whyChooseUsData } from "@/data/whyUs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  RefreshCw,
  ShieldCheck,
  Handshake,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Businesses Choose KrutiKalpa?
            </h2>
          </div>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            Our commitment to quality, innovation and client success sets us apart.
          </p>
        </div>

        {/* 4 Cards Grid matching Section 8 of approved design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F97316]/10 flex flex-col"
              >
                {/* Hexagon/Rounded Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] mb-6 group-hover:scale-105 group-hover:bg-[#F97316]/10 transition-all">
                  <IconComponent className="w-6 h-6 text-[#F97316]" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-[#F97316] transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.shortDescription}
                </p>

                {item.stat && (
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#F97316] font-mono text-sm">
                      {item.stat}
                    </span>
                    <span className="text-[11px] text-zinc-500">{item.statLabel}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
