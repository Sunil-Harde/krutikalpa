import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Industries } from "@/components/home/Industries";
import { Technologies } from "@/components/home/Technologies";
import { Process } from "@/components/home/Process";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: {
    absolute: "KrutiKalpa Solutions | Premier Software & AI Development Company in Pune",
  },
  description:
    "KrutiKalpa Solutions Private Limited is a technology engineering company in Baner, Pune. We engineer high-performance websites, scalable web applications, autonomous AI agents, chatbots, and custom software.",
  alternates: {
    canonical: "https://krutikalpa.com/",
  },
  openGraph: {
    title: "KrutiKalpa Solutions | Premier Software & AI Development Company in Pune",
    description:
      "Transforming businesses through technology: enterprise websites, web applications, AI agents, chatbots, and custom software in Pune, Maharashtra.",
    url: "https://krutikalpa.com/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions Pune Corporate Headquarters and Engineering Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KrutiKalpa Solutions | Software Development Company in Pune",
    description:
      "Custom software, autonomous AI agents, chatbots, and high-performance web applications built for scale.",
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Us Section (Dark) */}
      <About />

      {/* 3. Core Services Section (Dark) */}
      <Services />

      {/* 4. Industries We Serve Section (Dark) */}
      <Industries />

      {/* 5. Technology Stack Section (Dark) */}
      <Technologies />

      {/* 6. Our Process Section (Dark) */}
      <Process />

      {/* 7. Portfolio / Case Studies Section (Dark) */}
      <Portfolio />

      {/* 8. Why Choose Us Section (Dark) */}
      <WhyChooseUs />

      {/* 9. Testimonials Section (Dark) */}
      <Testimonials />

      {/* 10. CTA Section (Dark) */}
      <CTA />
    </div>
  );
}
