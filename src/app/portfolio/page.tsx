import { Metadata } from "next";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";

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
    <div className="pb-20 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio/" },
        ]}
      />
      {/* Header */}
      <PageHero
        badgeText="CLIENT SUCCESS"
        title={
          <>
            Our Featured <span className="text-gradient-orange-pure">Projects</span>
          </>
        }
        description="Explore our track record of high-performance web applications, autonomous AI agents, field operations tools, and enterprise platforms delivered across India."
      />

      {/* Main Portfolio Client Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioClient />
      </section>

      <CTA />
    </div>
  );
}
