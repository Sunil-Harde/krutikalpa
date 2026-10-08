import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Rocket,
  HeartHandshake,
  Laptop,
  GraduationCap,
  ShieldCheck,
  Mail,
} from "lucide-react";
import { careerOpenings } from "@/data/careers";
import { companyData } from "@/data/company";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Careers | Join Our Team | KrutiKalpa Solutions",
  description:
    "Explore career opportunities at KrutiKalpa Solutions Private Limited. Join our engineering, AI, and design teams in Pune building high-impact digital solutions.",
};

const perks = [
  {
    icon: Rocket,
    title: "High-Impact Mission",
    description:
      "Work on mission-critical national architectures, enterprise automation, and AI workflows impacting millions.",
  },
  {
    icon: Laptop,
    title: "Modern Tech Stack",
    description:
      "Daily hands-on execution with Next.js 15, TypeScript, Python LLM agents, cloud-native AWS, and reactive UI patterns.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Generous training allowances, sponsored certifications, tech talks, and direct mentorship from industry veterans.",
  },
  {
    icon: HeartHandshake,
    title: "Meritocratic Culture",
    description:
      "Zero bureaucracy. Ideas win on technical merit, speed, and customer delight, not titles or hierarchy.",
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    description:
      "Industry-leading remuneration, performance bonuses, health insurance, and hybrid work flexibility.",
  },
  {
    icon: ShieldCheck,
    title: "Stability & Growth",
    description:
      "Profitable, high-growth enterprise environment with an exceptional 10+ year track record in public & private digital delivery.",
  },
];

export default function CareersPage() {
  return (
    <div className="pb-20 bg-[#050505]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              JOIN OUR ENGINEERING TEAM
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Build The Future of Enterprise &{" "}
            <span className="text-gradient-orange-pure">AI Solutions</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            At KrutiKalpa Solutions, we solve complex engineering challenges for enterprises,
            healthcare providers, and governance ecosystems. Explore our open positions and create
            lasting value with us in Baner, Pune.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-semibold text-sm shadow-lg shadow-[#F97316]/25 hover:opacity-95 transition-all"
            >
              View Open Roles
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${companyData.contact.email}?subject=General%20Career%20Inquiry%20-%20KrutiKalpa`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-white font-semibold text-sm hover:bg-white/[0.08] transition-all"
            >
              Send Open Resume
              <Mail className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Perks / Culture Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-xs font-semibold uppercase tracking-wider mb-4">
            Life At KrutiKalpa
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Top Talent Thrives With Us
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            We foster an engineering-first culture anchored in craftsmanship, autonomy, and continuous innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316]/20 to-[#EA580C]/5 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#F97316] transition-colors mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions List */}
      <section id="openings" className="py-20 border-t border-white/[0.08] bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-xs font-semibold uppercase tracking-wider mb-4">
                Current Opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Open Positions
              </h2>
              <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
                Find your next career leap. All roles offer competitive compensation and direct impact on high-growth solutions.
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-zinc-400">
              Showing <span className="text-[#F97316] font-bold">{careerOpenings.length}</span> open roles
            </div>
          </div>

          <div className="space-y-6">
            {careerOpenings.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#F97316]/15 border border-[#F97316]/30 text-xs font-semibold text-[#F97316]">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
                        <Clock className="w-3 h-3 text-zinc-400" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
                        <Briefcase className="w-3 h-3 text-zinc-400" />
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {job.title}
                    </h3>
                  </div>

                  <a
                    href={`mailto:${companyData.contact.email}?subject=Application%20for%20${encodeURIComponent(
                      job.title
                    )}%20-%20KrutiKalpa&body=Hi%20KrutiKalpa%20Team,%0A%0AI%20am%20applying%20for%20the%20${encodeURIComponent(
                      job.title
                    )}%20position.%0A%0APlease%20find%20my%20resume%20and%20portfolio%20details%20below:%0A`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-semibold text-sm hover:opacity-95 shadow-md shadow-[#F97316]/20 transition-all shrink-0"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {job.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                        Requirements & Qualifications
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Spontaneous Application */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/[0.08] text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">
              Don&apos;t See the Perfect Match?
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              We are always on the lookout for standout engineering talent, AI practitioners, and design visionaries. Send us your resume and tell us what you would love to build.
            </p>
            <a
              href={`mailto:${companyData.contact.email}?subject=Spontaneous%20Application%20-%20KrutiKalpa%20Solutions`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/10 hover:border-[#F97316]/50 text-white font-semibold text-sm hover:bg-white/[0.1] transition-all"
            >
              Email Your Resume to {companyData.contact.email}
              <ArrowRight className="w-4 h-4 text-[#F97316]" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA />
    </div>
  );
}
