import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import { CTA } from "@/components/home/CTA";
import { ServicesGrid } from "@/components/services/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | High-Performance Engineering & AI Solutions",
  description:
    "Explore KrutiKalpa's full suite of enterprise software services: Web Development, Web Apps, AI Agents, Chatbots, Mobile Apps, Custom ERP, and Cloud Infrastructure.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#050505]">
      {/* Header */}
      <section className="relative py-16 md:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#F97316]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              OUR CAPABILITIES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            End-To-End Software &amp;{" "}
            <span className="text-gradient-orange-pure">AI Solutions</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            From modern web applications and autonomous AI agents to mission-critical ERPs and
            resilient cloud architectures, we engineer software that propels business forward.
          </p>
        </div>
      </section>

      {/* Grid of Services with Custom AI-Generated Visuals */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesGrid services={servicesData} />
      </section>

      <CTA />
    </div>
  );
}
