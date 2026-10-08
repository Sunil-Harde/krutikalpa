"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner with Fiery Orange Curved Ribbon Background Effect matching Section 10 */}
        <div className="relative rounded-3xl overflow-hidden border border-[#F97316]/30 bg-gradient-to-r from-[#170a03] via-[#0A0A0A] to-[#1a0c04] p-10 sm:p-16 lg:p-20 text-center shadow-2xl shadow-[#F97316]/10">
          {/* Curved Glowing Flame Graphic Overlay */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#F97316]/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-[#EA580C]/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Tag matching Section 10 */}
          <div className="inline-block mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              LET&apos;S WORK TOGETHER
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Build Something Great?
          </h2>

          {/* Subhead */}
          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Let&apos;s discuss your project and create innovative solutions together.
          </p>

          {/* Buttons matching approved design */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-orange-gradient text-sm sm:text-base font-semibold group px-8 py-3"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="btn-outline-dark text-sm sm:text-base font-semibold px-8 py-3 border-white/20 hover:border-[#F97316]"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
