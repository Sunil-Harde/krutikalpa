import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 bg-[#050505] px-4">
      <div className="relative glass-panel max-w-lg w-full p-8 sm:p-12 rounded-3xl border border-white/[0.08] text-center space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#F97316]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-[#F97316]/15 border border-[#F97316]/40 flex items-center justify-center text-[#F97316] mx-auto">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#F97316]">
            404
          </span>
          <h1 className="text-2xl font-bold text-white tracking-tight">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
            The page you are looking for may have been moved, renamed, or is temporarily
            unavailable.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/" className="btn-orange-gradient text-xs px-6 py-2.5 rounded-full">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link href="/services" className="btn-outline-dark text-xs px-6 py-2.5 rounded-full">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
