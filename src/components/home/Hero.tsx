"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Bot,
  MessageSquare,
  LayoutGrid,
  Globe,
  Briefcase,
  Users,
  Layers,
  Award,
  Sparkles,
  X,
} from "lucide-react";
// import { GlobeNetworks } from "./GlobeNetwork"; // Imported here

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#EA580C]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                BUILD · INNOVATE · TRANSFORM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Transforming Businesses Through{" "}
              <span className="text-gradient-orange-pure block sm:inline">Technology</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              We design and develop websites, web applications, AI agents, chatbots and custom
              software solutions to help businesses grow, streamline operations and create lasting
              value.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="btn-orange-gradient text-sm sm:text-base group">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="btn-outline-dark text-sm sm:text-base group"
                aria-label="Watch Video Introduction"
              >
                <div className="w-6 h-6 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Column: Calling GlobeNetwork inside the Orange Circle with Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">

            {/* Calling the modular GlobeNetwork component here */}
            {/* <GlobeNetworks /> */}

            {/* Floating Card 1: AI Agents (Top Right) */}
            <div className="absolute top-2 -right-2 sm:right-2 glass-panel p-3 sm:p-3.5 rounded-2xl flex items-center gap-3 shadow-xl animate-float-slow max-w-[210px] z-30">
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  AI Agents
                </div>
                <div className="text-[11px] text-zinc-400">Smart Automation</div>
              </div>
            </div>

            {/* Floating Card 2: Chatbots (Mid Right / Center) */}
            <div className="absolute top-28 -right-4 sm:right-0 glass-panel p-3 sm:p-3.5 rounded-2xl flex items-center gap-3 shadow-xl animate-float-reverse max-w-[210px] z-30">
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Chatbots
                </div>
                <div className="text-[11px] text-zinc-400">Engage & Convert</div>
              </div>
            </div>

            {/* Floating Card 3: Web Applications (Lower Mid Right) */}
            <div className="absolute bottom-20 -right-2 sm:right-2 glass-panel p-3 sm:p-3.5 rounded-2xl flex items-center gap-3 shadow-xl animate-float-slow max-w-[210px] z-30">
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Web Applications
                </div>
                <div className="text-[11px] text-zinc-400">Scalable Solutions</div>
              </div>
            </div>

            {/* Floating Card 4: Websites (Bottom Right) */}
            <div className="absolute -bottom-2 sm:bottom-0 right-4 sm:right-8 glass-panel p-3 sm:p-3.5 rounded-2xl flex items-center gap-3 shadow-xl animate-float-reverse max-w-[210px] z-30">
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Websites
                </div>
                <div className="text-[11px] text-zinc-400">Modern & Responsive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shadow-md shadow-[#F97316]/15 shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">50+</div>
              <div className="text-xs sm:text-sm text-zinc-400">Projects Delivered</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shadow-md shadow-[#F97316]/15 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">30+</div>
              <div className="text-xs sm:text-sm text-zinc-400">Happy Clients</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shadow-md shadow-[#F97316]/15 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">5+</div>
              <div className="text-xs sm:text-sm text-zinc-400">Industries Served</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shadow-md shadow-[#F97316]/15 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
              <div className="text-xs sm:text-sm text-zinc-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div className="relative w-full max-w-3xl bg-[#0A0A0A] border border-white/[0.1] rounded-2xl p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.05] text-zinc-400 hover:text-white"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                KrutiKalpa Corporate Introduction
              </h3>
              <div className="aspect-video w-full rounded-xl bg-zinc-900 flex flex-col items-center justify-center border border-white/[0.08] p-6 text-center">
                <Sparkles className="w-12 h-12 text-[#F97316] mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-white">Engineering Enterprise Excellence</h4>
                <p className="text-sm text-zinc-400 max-w-md mt-1">
                  Discover how KrutiKalpa Solutions delivers scalable digital products, AI automation
                  agents, and transformative enterprise platforms across India and worldwide.
                </p>
                <div className="mt-6 flex gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setVideoModalOpen(false)}
                    className="btn-orange-gradient text-xs px-5 py-2 rounded-full"
                  >
                    Schedule an Intro Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}