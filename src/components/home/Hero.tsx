"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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

/* =========================================
   ANIMATED COUNTER
   Starts counting when it enters the screen
========================================= */

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

function AnimatedCounter({
  end,
  suffix = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min(
        (now - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span
      ref={counterRef}
      aria-label={`${end}${suffix}`}
      className="tabular-nums"
    >
      {count}
      {suffix}
    </span>
  );
}

/* =========================================
   HERO COMPONENT
========================================= */

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">

      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#F97316]/10 blur-[140px]" />

      <div className="pointer-events-none absolute top-10 right-10 h-[450px] w-[450px] rounded-full bg-[#EA580C]/10 blur-[120px]" />

      {/* Grid texture overlay */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-40" />

      {/* Main content container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl pl-4 sm:pl-6 lg:pl-8">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* LEFT COLUMN: Headline and CTAs */}
          <div className="space-y-6 text-left lg:col-span-7">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/30 bg-white/[0.04] px-3.5 py-1.5 shadow-inner">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#F97316]" />

              <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                BUILD · INNOVATE · TRANSFORM
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              Transforming Businesses Through{" "}
              <span className="text-gradient-orange-pure block sm:inline">
                Technology
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              We design and develop websites, web applications, AI agents,
              chatbots and custom software solutions to help businesses grow,
              streamline operations and create lasting value.
            </p>

            {/* Hero buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">

              <Link
                href="/contact"
                className="btn-orange-gradient group text-sm sm:text-base"
              >
                <span>Get Started</span>

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
{/* 
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="btn-outline-dark group text-sm sm:text-base"
                aria-label="Watch Video Introduction"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F97316]/20 text-[#F97316] transition-colors group-hover:bg-[#F97316] group-hover:text-white">
                  <Play className="ml-0.5 h-3 w-3 fill-current" />
                </div>

                <span>Watch Video</span>
              </button> */}

            </div>
          </div>

          {/* RIGHT COLUMN: Globe and floating cards */}
          <div
            className="relative flex min-h-[480px] items-center justify-end sm:min-h-[460px] lg:col-span-5 lg:min-w-0"
            style={{
              marginRight: "min(0px, calc((80rem - 100vw) / 2))",
            }}
          >

            {/* Globe image */}
            <div className="relative -top-5 flex h-[520px] w-full items-end justify-end sm:h-[460px] lg:h-[500px]">
              <Image
                src="/images/hero/Earth5.png"
                alt="KrutiKalpa Solutions Digital Infrastructure"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-contain object-right"
              />
            </div>

            {/* Floating Card 1: AI Agents */}
            <div className="glass-panel animate-float-reverse absolute top-5 left-2 z-30 flex max-w-[210px] items-center gap-3 rounded-2xl p-3 shadow-xl sm:p-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/15 text-[#F97316]">
                <Bot className="h-5 w-5" />
              </div>

              <div className="text-left">
                <div className="text-xs font-bold leading-tight text-white sm:text-sm">
                  AI Agents
                </div>

                <div className="text-[11px] text-zinc-400">
                  Smart Automation
                </div>
              </div>
            </div>

            {/* Floating Card 2: Chatbots */}
            <div className="glass-panel animate-float-slow absolute top-20 right-10 z-30 flex max-w-[210px] items-center gap-3 rounded-2xl p-3 shadow-xl sm:p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/15 text-[#F97316]">
                <MessageSquare className="h-5 w-5" />
              </div>

              <div className="text-left">
                <div className="text-xs font-bold leading-tight text-white sm:text-sm">
                  Chatbots
                </div>

                <div className="text-[11px] text-zinc-400">
                  Engage &amp; Convert
                </div>
              </div>
            </div>

            {/* Floating Card 3: Web Applications */}
            <div className="glass-panel animate-float-slow absolute left-2 bottom-20 z-30 flex max-w-[210px] items-center gap-3 rounded-2xl p-3 shadow-xl sm:p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/15 text-[#F97316]">
                <LayoutGrid className="h-5 w-5" />
              </div>

              <div className="text-left">
                <div className="text-xs font-bold leading-tight text-white sm:text-sm">
                  Web Applications
                </div>

                <div className="text-[11px] text-zinc-400">
                  Scalable Solutions
                </div>
              </div>
            </div>

            {/* Floating Card 4: Websites */}
            <div className="glass-panel animate-float-reverse absolute right-4 bottom-10 z-30 flex max-w-[210px] items-center gap-3 rounded-2xl p-3 shadow-xl sm:right-8 sm:p-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/15 text-[#F97316]">
                <Globe className="h-5 w-5" />
              </div>

              <div className="text-left">
                <div className="text-xs font-bold leading-tight text-white sm:text-sm">
                  Websites
                </div>

                <div className="text-[11px] text-zinc-400">
                  Modern &amp; Responsive
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================
            ANIMATED STATISTICS BAR
        ========================================= */}

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/[0.08] pt-10 sm:gap-8 lg:grid-cols-4">

          {/* 1. Projects Delivered */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#0A0A0A] text-[#F97316] shadow-md shadow-[#F97316]/15">
              <Briefcase className="h-6 w-6" />
            </div>

            <div>
              <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                <AnimatedCounter end={50} suffix="+" />
              </div>

              <div className="text-xs text-zinc-400 sm:text-sm">
                Projects Delivered
              </div>
            </div>
          </div>

          {/* 2. Happy Clients */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#0A0A0A] text-[#F97316] shadow-md shadow-[#F97316]/15">
              <Users className="h-6 w-6" />
            </div>

            <div>
              <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                <AnimatedCounter end={30} suffix="+" />
              </div>

              <div className="text-xs text-zinc-400 sm:text-sm">
                Happy Clients
              </div>
            </div>
          </div>

          {/* 3. Industries Served */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#0A0A0A] text-[#F97316] shadow-md shadow-[#F97316]/15">
              <Layers className="h-6 w-6" />
            </div>

            <div>
              <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                <AnimatedCounter end={5} suffix="+" />
              </div>

              <div className="text-xs text-zinc-400 sm:text-sm">
                Industries Served
              </div>
            </div>
          </div>

          {/* 4. Client Satisfaction */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#0A0A0A] text-[#F97316] shadow-md shadow-[#F97316]/15">
              <Award className="h-6 w-6" />
            </div>

            <div>
              <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                <AnimatedCounter end={100} suffix="%" />
              </div>

              <div className="text-xs text-zinc-400 sm:text-sm">
                Client Satisfaction
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          VIDEO MODAL
      ========================================= */}

      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="hero-video-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setVideoModalOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-white/[0.1] bg-[#0A0A0A] p-6 shadow-2xl">

            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 rounded-full bg-white/[0.05] p-2 text-zinc-400 hover:text-white"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4">
              <h3
                id="hero-video-title"
                className="flex items-center gap-2 text-xl font-bold text-white"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#F97316]" />
                KrutiKalpa Corporate Introduction
              </h3>

              <div className="flex aspect-video w-full flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-zinc-900 p-6 text-center">

                <Sparkles className="mb-3 h-12 w-12 animate-bounce text-[#F97316]" />

                <h4 className="text-lg font-bold text-white">
                  Engineering Enterprise Excellence
                </h4>

                <p className="mt-1 max-w-md text-sm text-zinc-400">
                  Discover how KrutiKalpa Solutions delivers scalable digital
                  products, AI automation agents, and transformative enterprise
                  platforms across India and worldwide.
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setVideoModalOpen(false)}
                    className="btn-orange-gradient rounded-full px-5 py-2 text-xs"
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

export default Hero;