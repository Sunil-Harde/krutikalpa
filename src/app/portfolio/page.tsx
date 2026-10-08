import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Portfolio | Proven Enterprise Systems & Case Studies",
  description:
    "Explore KrutiKalpa's portfolio of delivered enterprise software: Inventory ERP, B2B wholesale platforms, AI assistants, WardMitra, Field Assist, and national health claim audit suites.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20 bg-[#050505]">
      {/* Header */}
      <section className="relative py-16 md:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#F97316]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              CLIENT SUCCESS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Our Featured <span className="text-gradient-orange-pure">Projects</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Explore our track record of high-performance web applications, autonomous AI agents,
            field operations tools, and enterprise platforms delivered across India.
          </p>
        </div>
      </section>

      {/* Main Portfolio Client Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioClient />
      </section>

      <CTA />
    </div>
  );
}
