"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";
import { EmployeeLoginModal } from "@/components/auth/EmployeeLoginModal";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 md:py-4 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? "bg-[#E5E7EB]/90 dark:bg-[#080808]/90 backdrop-blur-xl border-b border-zinc-300 dark:border-white/[0.08] shadow-md dark:shadow-2xl"
            : "bg-[#E5E7EB]/70 dark:bg-[#080808]/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          
<Link
  href="/"
  className="flex items-center gap-2.5 group focus:outline-none"
  aria-label="KrutiKalpa Solutions Home"
>
  {/* Logo Image */}
  <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-xl border-2 border-[#FF6B0A] bg-white shadow-lg shadow-[#FF6B0A]/25">
    <Image
      src="/images/logo/K_LOGO.jpeg"
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


          {/* Desktop Nav - Pill Style matching approved image */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center bg-white/80 dark:bg-[#101010]/90 border border-zinc-300/80 dark:border-white/[0.08] rounded-full p-1.5 shadow-sm dark:shadow-lg backdrop-blur-md transition-colors"
          >
            {mainNavLinks.map((item) => {
              const cleanPath = (pathname || "/").replace(/\/+$/, "") || "/";
              const cleanHref = (item.href || "/").replace(/\/+$/, "") || "/";
              const isActive =
                cleanHref === "/"
                  ? cleanPath === "/"
                  : cleanPath === cleanHref || cleanPath.startsWith(`${cleanHref}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-1.5 text-[15px] font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#FF6B0A] text-white shadow-md shadow-[#FF6B0A]/30 font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle, Employee Login & Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle (Visible on desktop and tablet) */}
            <ThemeToggle />

            {/* Desktop & Tablet Employee Login Button */}
            <button
              type="button"
              onClick={() => setLoginModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-zinc-800 dark:text-white bg-white dark:bg-white/[0.05] hover:bg-zinc-100 dark:hover:bg-white/[0.1] border border-zinc-300 dark:border-white/[0.15] hover:border-[#FF6B0A]/60 transition-all duration-200 shadow-sm hover:shadow-[#FF6B0A]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A]"
            >
              <LogIn className="w-3.5 h-3.5 text-[#FF6B0A]" />
              <span>Employee Login</span>
            </button>

            {/* Mobile & Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="lg:hidden p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden mt-3 p-4 bg-white/95 dark:bg-[#101010]/95 border border-zinc-300 dark:border-white/[0.1] rounded-2xl shadow-2xl backdrop-blur-2xl transition-colors"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {mainNavLinks.map((item) => {
                const cleanPath = (pathname || "/").replace(/\/+$/, "") || "/";
                const cleanHref = (item.href || "/").replace(/\/+$/, "") || "/";
                const isActive =
                  cleanHref === "/"
                    ? cleanPath === "/"
                    : cleanPath === cleanHref || cleanPath.startsWith(`${cleanHref}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#FF6B0A] text-white font-semibold"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-white/[0.08] flex items-center gap-3">
                <ThemeToggle showLabel className="flex-1 justify-center py-2.5 rounded-xl" />
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginModalOpen(true);
                  }}
                  className="flex-1 btn-orange-gradient py-2.5 text-center justify-center font-semibold text-white rounded-xl flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Employee Login</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Employee Login Modal */}
      <EmployeeLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  );
}

export default Navbar;