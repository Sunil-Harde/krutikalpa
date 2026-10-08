"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users2,
  Lightbulb,
  ShieldCheck,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { companyData } from "@/data/company";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#050505] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story, Headline, Features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                ABOUT KRUTIKALPA
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Building <span className="text-gradient-orange-pure">Digital Solutions</span> For A
                Better Tomorrow
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed pt-1">
                We are a technology-driven company focused on building innovative digital products
                including websites, web applications, AI agents, chatbots and custom software
                solutions that solve real business problems, solutions that make scale.
              </p>
            </div>

            {/* 4 Feature Badges matching approved design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Feature 1 */}
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3.5 group hover:border-[#F97316]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0 group-hover:scale-105 transition-transform">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Client-Centric Approach
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">Your success is our priority</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3.5 group hover:border-[#F97316]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0 group-hover:scale-105 transition-transform">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Innovation Driven</h4>
                  <p className="text-xs text-zinc-400 mt-1">Always ahead with technology</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3.5 group hover:border-[#F97316]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Quality & Reliability
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">Delivering scalable solutions</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3.5 group hover:border-[#F97316]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0 group-hover:scale-105 transition-transform">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Long-term Partnership
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">Growing together</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] hover:text-[#FB923C] group transition-colors"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Office Image Mockup with KrutiKalpa Wall Branding */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-zinc-900 group">
              {/* Modern Office Visual */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="KrutiKalpa Solutions Corporate Headquarters"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Overlay with brand name wall plaque */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 flex flex-col justify-end p-8">
                  {/* Glowing KrutiKalpa Solutions Sign */}
                  <div className="glass-panel p-5 rounded-xl border border-white/[0.15] backdrop-blur-md shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] p-[2px] shadow-lg shadow-[#F97316]/40 shrink-0">
                        <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
                          <span className="font-extrabold text-[#F97316] text-xl">K</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white leading-none">
                          <span className="text-[#F97316]">Kruti</span>
                          <span>Kalpa</span> Solutions
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">
                          Kohinoor B-Zone, Baner, Pune
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> ISO 9001 & DPDP Aligned
                      </span>
                      <span>Est. Pune, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
