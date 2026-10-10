"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { companyData } from "@/data/company";
import { quickLinks, footerServices, legalLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#F97316]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] p-[2px] shadow-lg shadow-[#F97316]/25">
                <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-[#F97316] text-xl tracking-tighter">K</span>
                  <span className="font-extrabold text-white text-xs -ml-0.5">K</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-xl font-bold tracking-tight text-white leading-none">
                  <span className="text-white">Kruti</span>
                  <span className="text-[#F97316]">Kalpa</span>
                </div>
                <span className="text-[11px] tracking-wider text-zinc-400 font-medium uppercase mt-0.5">
                  Solutions
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Turning ideas into digital solutions. We design, build and scale transformative web
              applications, AI systems and enterprise platforms.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-[#F97316] hover:border-[#F97316]/40 hover:bg-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-[#F97316] hover:border-[#F97316]/40 hover:bg-white/[0.08] transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-[#F97316] hover:border-[#F97316]/40 hover:bg-white/[0.08] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-[#F97316] hover:border-[#F97316]/40 hover:bg-white/[0.08] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-zinc-500">
              <span className="font-semibold text-zinc-400">CIN:</span> {companyData.cin}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>
                  {companyData.contact.address.city}, {companyData.contact.address.state},{" "}
                  {companyData.contact.address.country}
                  <span className="block text-xs text-zinc-500 mt-0.5">
                    {companyData.contact.address.building}, {companyData.contact.address.area}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:text-[#FB923C] transition-colors"
              >
                <span>Schedule a Technical Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 KrutiKalpa Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
