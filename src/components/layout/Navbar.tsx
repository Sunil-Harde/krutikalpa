"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const ZOHO_LOGIN_URL =
  "https://accounts.zoho.in/signin?servicename=VirtualOffice&portal_id=60075465350&hide_signup=true&hide_title=true&hide_fs=true&serviceurl=https%3A%2F%2Fmail.zoho.in%2F%3Flogin%3Dtrue%26Requested_Domain%3Dkrutikalpa.com";

export function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const cleanPath = (pathname || "/").replace(/\/+$/, "") || "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3">
      {/* Smooth expanding and shrinking background */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -z-10
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isScrolled
              ? "top-0 left-0 w-full h-full translate-x-0 translate-y-0 rounded-none bg-white/75 dark:bg-[#080808]/95 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.08] shadow-md dark:shadow-xl"
              : "top-1/2 left-1/2 w-[min(660px,calc(100%-1rem))] h-[46px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75 dark:bg-[#080808]/95 backdrop-blur-xl border border-zinc-300/60 dark:border-white/[0.10] shadow-sm dark:shadow-lg"
          }`}
      />

      {/* Main navbar layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4 min-h-11">
        {/* Brand Logo */}
        <div className="flex items-center justify-self-start min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="KrutiKalpa Solutions Home"
          >
            <div className="relative w-11 h-11 shrink-0 overflow-hidden ">
              <Image
                src="/images/logo/K_LOGO.png"
                alt="KrutiKalpa Solutions logo"
                fill
                priority
                sizes="44px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center text-xl font-bold tracking-tight leading-none">
                <span className="text-zinc-950 dark:text-white transition-colors">
                  Kruti
                </span>
                <span className="text-[#FF6B0A]">Kalpa</span>
              </div>

              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 transition-colors">
                Solutions
              </span>
            </div>
          </Link>
        </div>

        {/* Center Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center justify-self-center gap-1 rounded-full px-2.5 py-1.5"
        >
          {mainNavLinks.map((item) => {
            const cleanHref =
              (item.href || "/").replace(/\/+$/, "") || "/";

            const isActive =
              cleanHref === "/"
                ? cleanPath === "/"
                : cleanPath === cleanHref ||
                  cleanPath.startsWith(`${cleanHref}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative whitespace-nowrap px-4 xl:px-[18px] py-2 text-[15px] leading-5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#FF6B0A] text-white shadow-md shadow-[#FF6B0A]/30 font-semibold"
                    : "font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/[0.06]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center justify-self-end gap-2.5 sm:gap-3">
          <ThemeToggle />

          {/* Employee Login */}
          <a
            href={ZOHO_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Employee Login - Zoho Workplace"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-zinc-800 dark:text-white bg-white/80 dark:bg-white/[0.05] hover:bg-zinc-100 dark:hover:bg-white/[0.1] border border-zinc-300 dark:border-white/[0.15] hover:border-[#FF6B0A]/60 transition-all duration-200 shadow-sm hover:shadow-[#FF6B0A]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A] whitespace-nowrap"
          >
            <LogIn className="w-4 h-4 text-[#FF6B0A]" />
            <span>Employee Login</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/80 dark:bg-white/[0.05] border border-zinc-300/80 dark:border-white/[0.1] text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A] shadow-sm transition-colors"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="relative z-20 lg:hidden mt-3 p-4 bg-white/95 dark:bg-[#0E0E0E]/95 border border-zinc-300/80 dark:border-white/[0.1] rounded-2xl shadow-2xl backdrop-blur-2xl"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col space-y-1"
          >
            {mainNavLinks.map((item) => {
              const cleanHref =
                (item.href || "/").replace(/\/+$/, "") || "/";

              const isActive =
                cleanHref === "/"
                  ? cleanPath === "/"
                  : cleanPath === cleanHref ||
                    cleanPath.startsWith(`${cleanHref}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-3 rounded-xl text-base transition-colors ${
                    isActive
                      ? "bg-[#FF6B0A] text-white font-semibold"
                      : "font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Bottom Actions */}
            <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-white/[0.08] flex items-center gap-3">
              <ThemeToggle
                showLabel
                className="flex-1 justify-center py-2.5 rounded-xl"
              />

              <a
                href={ZOHO_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Employee Login - Zoho Workplace"
                className="flex-1 btn-orange-gradient py-2.5 text-center justify-center font-semibold text-white rounded-xl flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Employee Login</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;