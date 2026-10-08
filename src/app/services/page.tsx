import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Code2,
  Bot,
  MessageSquare,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services | High-Performance Engineering & AI Solutions",
  description:
    "Explore KrutiKalpa's full suite of enterprise software services: Web Development, Web Apps, AI Agents, Chatbots, Mobile Apps, Custom ERP, and Cloud Infrastructure.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Code2,
  Bot,
  MessageSquare,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Compass,
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

      {/* Grid of All 9 Services */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="group bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#F97316]/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[#F97316]/40 group-hover:bg-[#F97316]/10 flex items-center justify-center text-[#F97316] transition-colors">
                      <IconComponent className="w-6 h-6 text-[#F97316]" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      {service.heroTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#F97316] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Top Highlights */}
                  <ul className="space-y-2 mb-8 text-xs text-zinc-300">
                    {service.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] group-hover:text-[#FB923C] transition-colors"
                  >
                    <span>View Service Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </div>
  );
}
