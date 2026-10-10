// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ArrowRight, Menu, X } from "lucide-react";
// import { mainNavLinks } from "../../data/navigation";

// type NavItem = {
//   label: string;
//   href: string;
// };


// export function Navbar() {
//   const pathname = usePathname();

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [pathname]);

//   const isActive = (href: string): boolean =>
//     href === "/"
//       ? pathname === "/"
//       : pathname === href || pathname.startsWith(`${href}/`);

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 px-4 pt-0 transition-all duration-300 sm:px-6 lg:px-8 ${
//         isScrolled
//           ? "bg-[#050505]/75 shadow-lg shadow-black/20 backdrop-blur-xl"
//           : "bg-[#050505]/35 backdrop-blur-md"
//       }`}
//     >
//       <div className="relative mx-auto flex max-w-7xl justify-center">
//         {/* Original orange contour — SVG path and transform preserved */}
//         <div
//           aria-hidden="true"
//           className={`pointer-events-none absolute -inset-x-3 top-0 hidden h-[76px] overflow-visible transition-opacity duration-300 lg:block ${
//             isScrolled ? "opacity-70" : "opacity-100"
//           }`}
//         >
//           <svg
//             className="block h-full w-full overflow-visible"
//             viewBox="0 0 1200 100"
//             preserveAspectRatio="none"
//             fill="none"
//           >
//             <defs>
//               <filter
//                 id="navbar-orange-glow"
//                 x="-20%"
//                 y="-50%"
//                 width="140%"
//                 height="200%"
//               >
//                 <feGaussianBlur stdDeviation="3" result="blur" />
//                 <feMerge>
//                   <feMergeNode in="blur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//             </defs>

//             <path
//               d="M1200 84H1173
//                  C1158 84 1151 77 1142 53
//                  C1133 28 1122 4 1104 2
//                  C1071 -1 1000 -1 966 2
//                  C949 4 941 23 932 49
//                  C924 70 917 84 900 84
//                  H313
//                  C296 84 289 74 280 50
//                  C272 27 264 5 246 3
//                  C212 -1 130 -1 96 3
//                  C79 5 73 25 65 50
//                  C58 72 52 84 35 84
//                  H0"
//               transform="translate(0 92) scale(1 -1)"
//               stroke="#F97316"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               filter="url(#navbar-orange-glow)"
//             />
//           </svg>
//         </div>

//         {/* Navbar content */}
//         <div className=" ml-20 relative z-10 grid min-h-[64px] w-[90vw] grid-cols-5 items-center justify-between gap-4 lg:min-h-[76px]">
//           {/* Brand logo */}
//           <Link
//             href="/"
//             aria-label="KrutiKalpa Solutions Home"
//             className="group ml-14 flex shrink-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
//           >
//             <div className="flex flex-col">
//               <div className="flex items-center text-lg font-bold leading-none tracking-tight text-white">
//                 <span>Kruti</span>
//                 <span className="text-[#F97316]">Kalpa</span>
//               </div>

//               <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
//                 Solutions
//               </span>
//             </div>
//           </Link>

//           {/* Desktop navigation */}
//           <nav
//             aria-label="Main navigation"
//             className="col-span-3 hidden items-center gap-0.5 lg:flex"
//           >
//             {mainNavLinks.map((item) => {
//               const active = isActive(item.href);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   aria-current={active ? "page" : undefined}
//                   className={`relative whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                     active
//                       ? "bg-[#F97316] font-semibold text-white shadow-md shadow-[#F97316]/30"
//                       : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Desktop CTA */}
//           <div className=" hidden shrink-0 items-center sm:flex ml-25">
//             <Link
//               href="/contact"
//               className="group inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-[#F97316]/60 hover:bg-white/[0.1] hover:shadow-[#F97316]/20"
//             >
//               <span>Let's Talk</span>
//               <ArrowRight className="h-4 w-4 text-[#F97316] transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>

//           {/* Mobile hamburger */}
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen((open) => !open)}
//             className="rounded-lg border border-white/[0.08] bg-zinc-900 p-2 text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] lg:hidden"
//             aria-label={
//               mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
//             }
//             aria-expanded={mobileMenuOpen}
//             aria-controls="mobile-navigation"
//           >
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile drawer */}
//         {mobileMenuOpen && (
//           <div
//             id="mobile-navigation"
//             className="relative z-20 mt-3 rounded-2xl border border-white/[0.1] bg-[#0A0A0A]/90 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
//           >
//             <nav
//               aria-label="Mobile navigation"
//               className="flex flex-col gap-1"
//             >
//               {mainNavLinks.map((item) => {
//                 const active = isActive(item.href);

//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     aria-current={active ? "page" : undefined}
//                     className={`rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
//                       active
//                         ? "bg-[#F97316] font-semibold text-white"
//                         : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}

//               <div className="mt-2 border-t border-white/[0.08] pt-3">
//                 <Link
//                   href="/contact"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] py-3 text-center font-semibold text-white"
//                 >
//                   <span>Let's Talk</span>
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;




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
              <span className="text-white">Kruti</span>
              <span className="text-[#F97316]">Kalpa</span>
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