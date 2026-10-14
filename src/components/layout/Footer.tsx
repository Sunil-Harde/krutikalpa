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
    <footer className="relative bg-white dark:bg-[#080808] border-t border-[#D1D5DB] dark:border-white/[0.08] pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#FF6B0A]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="KrutiKalpa Solutions Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B0A] to-[#E85D04] p-[2px] shadow-lg shadow-[#FF6B0A]/25">
                <div className="w-full h-full bg-zinc-900 dark:bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-[#FF6B0A] text-xl tracking-tighter">K</span>
                  <span className="font-extrabold text-white text-xs -ml-0.5">K</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-xl font-bold tracking-tight leading-none">
                  <span className="text-zinc-950 dark:text-white transition-colors">Kruti</span>
                  <span className="text-[#FF6B0A]">Kalpa</span>
                </div>
                <span className="text-xs tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold uppercase mt-0.5 transition-colors">
                  Solutions
                </span>
              </div>
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              Turning ideas into digital solutions. We design, build and scale transformative web
              applications, AI systems and enterprise platforms.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-[#FF6B0A] hover:border-[#FF6B0A] dark:hover:text-[#FF6B0A] dark:hover:border-[#FF6B0A]/40 dark:hover:bg-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-[#FF6B0A] hover:border-[#FF6B0A] dark:hover:text-[#FF6B0A] dark:hover:border-[#FF6B0A]/40 dark:hover:bg-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-[#FF6B0A] hover:border-[#FF6B0A] dark:hover:text-[#FF6B0A] dark:hover:border-[#FF6B0A]/40 dark:hover:bg-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-[#FF6B0A] hover:border-[#FF6B0A] dark:hover:text-[#FF6B0A] dark:hover:border-[#FF6B0A]/40 dark:hover:bg-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
              <span className="font-semibold text-zinc-700 dark:text-zinc-400">CIN:</span> {companyData.cin}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400 hover:text-[#FF6B0A] dark:hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400 hover:text-[#FF6B0A] dark:hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF6B0A] shrink-0 mt-1" />
                <span>
                  {companyData.contact.address.city}, {companyData.contact.address.state},{" "}
                  {companyData.contact.address.country}
                  <span className="block text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">
                    {companyData.contact.address.building}, {companyData.contact.address.area}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF6B0A] shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-[#FF6B0A] dark:hover:text-white transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6B0A] shrink-0" />
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="hover:text-[#FF6B0A] dark:hover:text-white transition-colors"
                >
                  {companyData.contact.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF6B0A] hover:text-[#E85D04] transition-colors"
              >
                <span>Schedule a Technical Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
          <p>© 2026 KrutiKalpa Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#FF6B0A] dark:hover:text-white transition-colors"
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
