import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import { CTA } from "@/components/home/CTA";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Software Engineering & AI Services",
  description:
    "Explore KrutiKalpa's full suite of enterprise software services in Pune: Website Development, Web Applications, AI Agents, Chatbots, Mobile Apps, Custom ERP, and Cloud Infrastructure.",
  alternates: {
    canonical: "https://krutikalpa.com/services/",
  },
  openGraph: {
    title: "Software Engineering & AI Services | KrutiKalpa Solutions",
    description:
      "Enterprise web apps, autonomous AI agents, chatbots, mobile applications, and bespoke ERP systems engineered in Pune, Maharashtra.",
    url: "https://krutikalpa.com/services/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions - Engineering & AI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & AI Development Services | KrutiKalpa Solutions",
    description:
      "High-performance website development, autonomous AI workflows, and custom enterprise software.",
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    itemListElement: servicesData.map((svc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: svc.title,
      url: `https://krutikalpa.com/services/${svc.slug}/`,
      description: svc.shortDescription,
    })),
  };

  return (
    <div className="pt-28 pb-20 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
        ]}
      />
      <JsonLd
        type="Service"
        data={{
          "@type": "ItemList",
          name: "KrutiKalpa Solutions Engineering Services",
          description: "Full suite of software engineering, web development, and AI solutions.",
          ...serviceListSchema,
        }}
      />
      {/* Header */}
      <section className="relative py-16 md:py-24 border-b border-zinc-200 dark:border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#FF6B0A]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/[0.04] border border-[#FF6B0A]/30 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#FF6B0A]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B0A]">
              OUR CAPABILITIES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            End-To-End Software &amp;{" "}
            <span className="text-gradient-orange-pure">AI Solutions</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
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
