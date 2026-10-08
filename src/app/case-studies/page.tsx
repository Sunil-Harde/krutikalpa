import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Quote,
  Cpu,
  BarChart3,
  AlertCircle,
} from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Case Studies | Enterprise Engineering Deep Dives",
  description:
    "In-depth case studies detailing how KrutiKalpa solved mission-critical problems in Manufacturing, E-Commerce, Public Health, and Civic Governance.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#050505]">
      {/* Header */}
      <section className="relative py-16 md:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#F97316]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              ENGINEERING IMPACT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Detailed <span className="text-gradient-orange-pure">Case Studies</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Discover the exact challenges, architectural decisions, and measurable outcomes delivered
            by our engineering team.
          </p>
        </div>
      </section>

      {/* Case Studies Deep Dive List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {portfolioProjects.map((project, idx) => (
          <article
            key={project.id}
            id={project.slug}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/[0.08] scroll-mt-32"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-zinc-400">· Client: {project.client}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-4">
                {project.metrics.map((m, i) => (
                  <div key={i} className="text-right">
                    <div className="text-2xl font-mono font-extrabold text-[#F97316]">{m.stat}</div>
                    <div className="text-[10px] text-zinc-400">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Visual & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-8 items-center">
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.1] bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover brightness-85"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-base text-zinc-300 leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Tech Pills */}
                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2">
                    Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Challenge */}
              <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.05]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4" />
                  The Operational Challenge
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.05]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4" />
                  The KrutiKalpa Engineering Solution
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4" />
                Measurable Impact Delivered
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial if present */}
            {project.testimonial && (
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#F97316]/10 to-transparent border border-[#F97316]/20 flex items-start gap-4">
                <Quote className="w-6 h-6 text-[#F97316] shrink-0 rotate-180 mt-1" />
                <div>
                  <p className="text-sm italic text-zinc-200">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-semibold text-[#F97316]">
                    — {project.testimonial.author}, {project.testimonial.role}
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </section>

      <CTA />
    </div>
  );
}
