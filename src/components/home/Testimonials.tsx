"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 md:py-28 relative bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent & arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                What Our Clients Say
              </h2>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
              We are proud to have worked with amazing businesses.
            </p>
          </div>

          {/* Navigation Arrows matching top right in approved design */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/[0.1] hover:border-[#F97316]/50 text-zinc-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/[0.1] hover:border-[#F97316]/50 text-zinc-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Card matching Section 9 of approved design */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#0A0A0A] border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl transition-all">
            {/* Orange Quote Glyph */}
            <div className="text-[#F97316] mb-6">
              <Quote className="w-10 h-10 rotate-180 fill-[#F97316]/20 text-[#F97316]" />
            </div>

            {/* Testimonial Review Quote */}
            <blockquote className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Meta */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#F97316]/40 shrink-0">
                  <Image
                    src={current.avatar}
                    alt={current.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-white">{current.author}</div>
                  <div className="text-xs text-zinc-400">
                    {current.role}, {current.company}
                  </div>
                </div>
              </div>

              {/* 5 Orange Stars */}
              <div className="flex items-center gap-1 text-[#F97316]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Indicators matching approved design */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i
                    ? "w-7 bg-[#F97316]"
                    : "w-2 bg-zinc-700 hover:bg-zinc-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
