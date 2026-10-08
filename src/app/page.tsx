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

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#050505]">
      {/* 1. Hero Section (Dark - Homepage) */}
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
