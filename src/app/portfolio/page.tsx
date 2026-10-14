import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Portfolio | Delivered Software Systems & Projects",
  description:
    "Explore KrutiKalpa Solutions' track record of delivered software: Inventory ERP, B2B wholesale platforms, AI assistants, WardMitra, Field Assist, and national health claim audit suites.",
  alternates: {
    canonical: "https://krutikalpa.com/portfolio/",
  },
  openGraph: {
    title: "Enterprise Software & AI Portfolio | KrutiKalpa Solutions",
    description:
      "Explore delivered client projects: custom ERPs, autonomous AI agents, field workforce mobile apps, and governance platforms.",
    url: "https://krutikalpa.com/portfolio/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions Client Portfolio & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | KrutiKalpa Solutions",
    description:
      "Proven enterprise systems, AI automations, and custom software delivered for real business impact.",
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio/" },
        ]}
      />
      {/* Header */}
      <section className="relative py-16 md:py-24 border-b border-zinc-200 dark:border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#FF6B0A]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/[0.04] border border-[#FF6B0A]/30 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#FF6B0A]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B0A]">
              CLIENT SUCCESS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Our Featured <span className="text-gradient-orange-pure">Projects</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
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
