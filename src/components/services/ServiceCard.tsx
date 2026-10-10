"use client";

import React from "react";
import Image from "next/image";
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
} from "lucide-react";
import { ServiceItem } from "@/data/services";

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

interface ServiceCardProps {
  service: ServiceItem;
  priority?: boolean;
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Code2;

  return (
    <article
      className="group relative bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#F97316]/10 motion-reduce:hover:translate-y-0"
    >
      {/* 1. Image at the top (16:9 Aspect Ratio) */}
      {service.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-white/[0.06]">
          <Image
            src={service.image}
            alt={service.imageAlt || `${service.title} illustration`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
          />
          {/* Subtle gradient overlay to smoothly transition to card background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/20 pointer-events-none" />
        </div>
      ) : (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[#0e0e0e] to-[#151515] border-b border-white/[0.06] flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#F97316]">
            <IconComponent className="w-7 h-7 text-[#F97316]" />
          </div>
        </div>
      )}

      {/* Card Content Area */}
      <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* 2. Existing service icon and category label */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[#F97316]/40 group-hover:bg-[#F97316]/10 flex items-center justify-center text-[#F97316] transition-colors shrink-0">
              <IconComponent className="w-6 h-6 text-[#F97316]" />
            </div>
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
              {service.heroTag}
            </span>
          </div>

          {/* 3. Service title */}
          <h3 className="text-xl font-bold text-white group-hover:text-[#F97316] transition-colors mb-3">
            {service.title}
          </h3>

          {/* 4. Existing service description */}
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            {service.shortDescription}
          </p>

          {/* 5. Existing feature list */}
          <ul className="space-y-2.5 mb-8 text-xs text-zinc-300">
            {service.highlights.slice(0, 3).map((hl, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 6. Existing "View Service Specifications" link */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-auto">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] hover:text-[#FB923C] group/link transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-md"
          >
            <span>View Service Specifications</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform motion-reduce:transform-none" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
