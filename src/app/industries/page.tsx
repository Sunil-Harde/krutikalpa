import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Truck,
  Building2,
  Landmark,
  Car,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industries";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Industries | Specialized Domain Solutions",
  description:
    "Discover how KrutiKalpa delivers tailored software architectures for Manufacturing, Healthcare, Education, Retail, Logistics, Real Estate, Fintech and Automotive.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Truck,
  Building2,
  Landmark,
  Car,
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#050505]">
      {/* Header */}
      <section className="relative py-16 md:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#F97316]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              DOMAIN EXPERTISE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Industries We <span className="text-gradient-orange-pure">Transform</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            We combine rigorous software engineering with deep domain understanding to solve complex
            operational, regulatory, and growth challenges across diverse sectors.
          </p>
        </div>
      </section>

      {/* Industry Detailed Cards List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {industriesData.map((ind, index) => {
          const IconComponent = iconMap[ind.iconName] || Factory;
          const isReversed = index % 2 === 1;

          return (
            <div
              key={ind.id}
              id={ind.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/[0.08] hover:border-[#F97316]/40 transition-all"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Column: Visual Image with stats overlay */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-zinc-900 border border-white/[0.1] shadow-xl group">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-80"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0A0A0A]/90 border border-[#F97316]/50 flex items-center justify-center text-[#F97316]">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="glass-panel px-3.5 py-1.5 rounded-xl border border-white/[0.15]">
                        <span className="font-mono font-bold text-[#F97316] text-sm">
                          {ind.stats}
                        </span>
                        <span className="text-[10px] text-zinc-300 ml-1.5">
                          {ind.statsLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column: Information */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                      {ind.title}
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {ind.fullDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Common Challenges */}
                    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                        Industry Bottlenecks
                      </h4>
                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {ind.challenges.slice(0, 3).map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-red-400/80 mt-0.5">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97316] mb-2.5">
                        KrutiKalpa Implementations
                      </h4>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {ind.solutions.slice(0, 3).map((s, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="pt-2 text-xs text-zinc-400 italic border-l-2 border-[#F97316] pl-3">
                    &ldquo;{ind.caseStudyHighlight}&rdquo;
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:text-[#FB923C] transition-colors"
                    >
                      <span>Discuss Your Industry Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <CTA />
    </div>
  );
}
