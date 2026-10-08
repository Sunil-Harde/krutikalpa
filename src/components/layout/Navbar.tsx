"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";
import { companyData } from "@/data/company";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 sm:px-6 lg:px-8 ${
        isScrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="KrutiKalpa Solutions Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] p-[2px] shadow-lg shadow-[#F97316]/25 group-hover:shadow-[#F97316]/40 transition-shadow">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-[#F97316] text-lg tracking-tighter">K</span>
              <span className="font-extrabold text-white text-xs -ml-0.5">K</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-lg font-bold tracking-tight text-white leading-none">
              <span className="text-[#F97316]">Kruti</span>
              <span className="text-white">Kalpa</span>
            </div>
            <span className="text-[10px] tracking-wider text-zinc-400 font-medium uppercase mt-0.5">
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Pill Style matching approved image */}
        <nav className="hidden lg:flex items-center bg-[#0A0A0A]/90 border border-white/[0.08] rounded-full p-1.5 shadow-lg backdrop-blur-md">
          {mainNavLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#F97316] text-white shadow-md shadow-[#F97316]/30 font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button matching approved design */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.15] hover:border-[#F97316]/60 transition-all duration-200 shadow-sm hover:shadow-[#F97316]/20"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-[#0A0A0A] border border-white/[0.1] rounded-2xl shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col space-y-1">
            {mainNavLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#F97316] text-white font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/[0.08]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-orange-gradient py-3 text-center justify-center font-semibold text-white rounded-full flex items-center gap-2"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
