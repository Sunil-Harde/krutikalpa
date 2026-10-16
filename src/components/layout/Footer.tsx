"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
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
  {/* Logo Image */}
  <div className="relative w-10 h-10 shrink-0 overflow-hidden ">
    <Image
      src="/images/logo/K_LOGO.png"
      alt="KrutiKalpa Solutions logo"
      fill
      priority
      sizes="40px"
      className="object-contain"
    />
  </div>

  {/* Brand Name */}
  <div className="flex flex-col">
    <div className="flex items-center text-xl font-bold tracking-tight leading-none">
      <span className="text-zinc-950 transition-colors dark:text-white">
        Kruti
      </span>
      <span className="text-[#FF6B0A]">Kalpa</span>
    </div>

    <span className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 transition-colors dark:text-zinc-400">
      Solutions
    </span>
  </div>
</Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-sm">
              Turning ideas into digital solutions. We design, build and scale transformative web
              applications, AI systems and enterprise platforms.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
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
                href={companyData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] dark:hover:text-[#1877F2] dark:hover:border-[#1877F2]/40 dark:hover:bg-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
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

        {/* WardMitra Flagship Platform Showcase */}
        {/* <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-zinc-100/80 dark:via-white/[0.03] to-orange-500/5 border border-[#FF6B0A]/20 dark:border-[#FF6B0A]/25 shadow-sm transition-all hover:border-[#FF6B0A]/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-zinc-950 border border-[#FF6B0A]/30 p-2.5 flex items-center justify-center shadow-lg shadow-[#FF6B0A]/15">
                <svg viewBox="0 0 56 56" className="w-full h-full" fill="none" aria-hidden="true">
                  <path d="M14 34 C14 20 42 20 42 34" stroke="#FF6B0A" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M19 34 C19 25 37 25 37 34" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="28" cy="18" r="4" fill="#FF6B0A" />
                  <circle cx="18" cy="42" r="3" fill="#FFFFFF" opacity="0.9" />
                  <circle cx="28" cy="45" r="3.5" fill="#FF6B0A" />
                  <circle cx="38" cy="42" r="3" fill="#FFFFFF" opacity="0.9" />
                  <line x1="28" y1="22" x2="28" y2="41" stroke="#FF6B0A" strokeWidth="2" />
                  <line x1="18" y1="42" x2="28" y2="45" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
                  <line x1="38" y1="42" x2="28" y2="45" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    Ward<span className="text-[#FF6B0A]">Mitra</span>
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-[#FF6B0A]/15 text-[#FF6B0A] border border-[#FF6B0A]/20">
                    Flagship Civic AI
                  </span>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1 font-medium">
                  WardMitra developed by <span className="text-[#FF6B0A] font-bold">KrutiKalpa Solutions Pvt. Ltd.</span>
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  AI-powered civic grievance redressal, multilingual NLP, and municipal administration platform.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Link
                href="/portfolio/#wardmitra-digital-governance"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6B0A] hover:bg-[#E85D04] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#FF6B0A]/20 hover:shadow-lg hover:shadow-[#FF6B0A]/30 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
              >
                <span>Explore WardMitra</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 KrutiKalpa Solutions Pvt. Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
            <p className="flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
              <Link
                href="/portfolio/#wardmitra-digital-governance"
                className="text-[#FF6B0A] hover:underline font-semibold"
              >
                WardMitra
              </Link>
              <span className="text-zinc-400 dark:text-zinc-500 font-normal">developed by</span>
              <span className="font-semibold text-zinc-900 dark:text-white">KrutiKalpa Solutions Pvt. Ltd.</span>
            </p>
          </div>
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
