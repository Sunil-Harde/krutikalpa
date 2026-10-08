import { Metadata } from "next";
import { notFound } from "next/navigation";
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
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/home/CTA";

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

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | KrutiKalpa Solutions`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://krutikalpa.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} - Enterprise Engineering`,
      description: service.shortDescription,
      url: `https://krutikalpa.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Code2;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "KrutiKalpa Solutions Private Limited",
      url: "https://krutikalpa.com",
    },
    description: service.fullDescription,
    serviceType: service.heroTag,
    areaServed: "IN",
  };

  return (
    <div className="pt-28 pb-20 bg-[#050505]">
      <JsonLd type="Service" data={serviceSchema} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#F97316] font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
              <IconComponent className="w-4 h-4 text-[#F97316]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                {service.heroTag}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-orange-gradient text-sm px-7 py-3">
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-12 border-b border-white/[0.08] bg-[#0A0A0A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((b, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl flex items-center gap-5">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F97316] font-mono">
                  {b.stat}
                </div>
                <div className="text-sm font-medium text-zinc-300">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth Features & Capabilities */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Key Architecture Features
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Engineered with strict adherence to modern security, modular code, and high concurrency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feat, i) => (
            <div key={i} className="glass-panel p-7 rounded-2xl border border-white/[0.08]">
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables, Tech Stack, & Real-World Use Cases */}
      <section className="py-16 bg-[#080808] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Column 1: Deliverables */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#F97316]" />
                What We Deliver
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Tech Stack */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#F97316]" />
                Technologies Deployed
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 3: Typical Use Cases */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F97316]" />
                Industry Applications
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                {service.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] mt-2 shrink-0" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
