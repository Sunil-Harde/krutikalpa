"use client";

import React from "react";
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
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

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

export function Services() {
  // Show the 6 core services featured in Section 3 of the approved design
  const coreServices = servicesData.slice(0, 6);

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Core Services
              </h2>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
              End-to-end software development services to turn your vision into reality.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#FB923C] group transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Services Grid matching approved design cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F97316]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[#F97316]/40 group-hover:bg-[#F97316]/10 flex items-center justify-center text-[#F97316] transition-colors mb-6">
                    <IconComponent className="w-6 h-6 text-[#F97316]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F97316] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow CTA */}
                <div className="flex items-center text-xs font-semibold text-[#F97316] gap-1 group-hover:gap-2 transition-all">
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
