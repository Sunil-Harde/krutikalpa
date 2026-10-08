"use client";

import React from "react";
import {
  Search,
  Target,
  Code2,
  CheckCircle,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { processSteps } from "@/data/process";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Target,
  Code2,
  CheckCircle,
  Rocket,
  ShieldCheck,
};

export function Process() {
  // Use the 5 primary stages highlighted in Section 6 of approved design
  const featuredSteps = processSteps.slice(0, 5);

  return (
    <section className="py-20 md:py-28 relative bg-[#050505] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#F97316]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Development Process
            </h2>
          </div>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            A structured approach to deliver high-quality solutions.
          </p>
        </div>

        {/* Connected Process RoadMap matching Section 6 of approved design */}
        <div className="relative">
          {/* Subtle connecting horizontal wave line for large screens */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 border-t border-dashed border-[#F97316]/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {featuredSteps.map((step, idx) => {
              // Alternating node heights for dynamic visual appeal
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.step}
                  className={`flex flex-col items-center text-center group ${
                    isEven ? "lg:translate-y-6" : ""
                  }`}
                >
                  {/* Step Number Circle Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border-2 border-[#F97316] shadow-lg shadow-[#F97316]/25 flex items-center justify-center text-white font-mono font-bold text-base group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#F97316]">{step.step}</span>
                    </div>

                    {/* Small pulse ring */}
                    <span className="absolute -inset-1 rounded-full border border-[#F97316]/30 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-[#F97316] transition-colors mb-1.5">
                    {step.title}
                  </h3>

                  {/* Short Subtitle */}
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-[190px]">
                    {step.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
