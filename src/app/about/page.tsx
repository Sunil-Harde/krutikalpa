import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users2,
  Lightbulb,
  ShieldCheck,
  Handshake,
  CheckCircle2,
  Building,
  Target,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react";
import { companyData } from "@/data/company";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About Us | KrutiKalpa Solutions",
  description:
    "Learn about KrutiKalpa Solutions Private Limited - our mission, vision, engineering team, and decade-long track record delivering digital platforms across India.",
};

const schemeHistory = [
  { year: "2009", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "1,50,000" },
  { year: "2010", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "3,70,000" },
  { year: "2011", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "5,90,000" },
  { year: "2012", scheme: "BKKY – Biju Krushak Kalyan Yojana", coverage: "Odisha", scale: "1,70,000" },
  { year: "2013", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "1,10,000" },
  { year: "2014", scheme: "CMUHIS – CM Universal Health Insurance", coverage: "Arunachal Pradesh", scale: "90,000" },
  { year: "2015", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "5,10,000" },
  { year: "2016", scheme: "AAA – Atal Amrit Abhiyan", coverage: "Assam", scale: "4,10,000" },
  { year: "2018", scheme: "MSBY – Mukhya Mantri Swasthya Bima Yojana", coverage: "Chhattisgarh", scale: "2,40,000" },
  { year: "2023–25", scheme: "Ayushman Bharat – Claims Desk & Field Audit", coverage: "Pan-India", scale: "6,00,000+ Claims" },
];

export default function AboutPage() {
  return (
    <div className=" pb-20 h-full bg-[#050505]">
      {/* Hero Header */}
      <section className="relative py-16 h-[70vh] md:py-24  overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              ABOUT OUR COMPANY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Building Digital Solutions For A{" "}
            <span className="text-gradient-orange-pure">Better Tomorrow</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            KrutiKalpa Solutions Private Limited is an Indian technology engineering company focused on
            building intelligent digital governance platforms, autonomous AI systems, and custom
            software for high-growth enterprises and public institutions.
          </p>
        </div>
      </section>

      {/* Corporate Story & Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Story & Philosophy
              </h2>
            </div>

            <p className="text-zinc-300 text-base leading-relaxed">
              We believe technology should simplify complexity, eliminate operational bottlenecks,
              and empower human potential. Combining a deep understanding of mission-critical
              workflows with state-of-the-art modern cloud and AI architectures, KrutiKalpa
              delivers scalable software systems that drive measurable commercial and civic outcomes.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Based in Pune, Maharashtra, our engineers and architects have contributed to some of the
              largest digital execution programmes in India—spanning nationwide beneficiary
              enrolment, biometric smart identity systems, field workforce geo-tracking, and health
              claims audit automation at unprecedented scale.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F97316]/20 text-[#F97316] flex items-center justify-center font-bold">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Our Mission</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{companyData.mission}</p>
              </div>

              <div className="glass-panel p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F97316]/20 text-[#F97316] flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Our Vision</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{companyData.vision}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#0A0A0A] aspect-[4/4]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="KrutiKalpa Team Engineering Collaborative Space"
                fill
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <div className="text-lg font-bold text-white">Corporate Identity</div>
                <div className="text-xs text-zinc-400 mt-1">
                  Registered: {companyData.legalName}
                </div>
                <div className="text-xs text-[#F97316] mt-0.5">CIN: {companyData.cin}</div>
                <div className="text-xs text-zinc-500 mt-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" /> {companyData.contact.address.full}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Government Schemes Table */}
      <section className="py-16 bg-[#080808] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                National Scale Track Record
              </h2>
            </div>
            <p className="text-zinc-400 text-sm sm:text-base">
              KrutiKalpa&apos;s leadership and execution team has contributed to large-scale
              technology-driven programmes across India, managing mission-critical operations and
              hundreds of thousands of beneficiary enrollments.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="bg-white/[0.03] text-xs uppercase text-zinc-400 border-b border-white/[0.08]">
                <tr>
                  <th className="py-4 px-6 font-semibold">Year</th>
                  <th className="py-4 px-6 font-semibold">Programme / Initiative</th>
                  <th className="py-4 px-6 font-semibold">Coverage</th>
                  <th className="py-4 px-6 font-semibold text-right">Beneficiary / Claim Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {schemeHistory.map((item, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-6 font-mono text-xs text-[#F97316] font-bold">
                      {item.year}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-white">{item.scheme}</td>
                    <td className="py-3.5 px-6 text-zinc-400">{item.coverage}</td>
                    <td className="py-3.5 px-6 text-right font-mono font-bold text-emerald-400">
                      {item.scale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Flagship Proprietary Platforms */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
            PROPRIETARY PLATFORMS
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2">
            Engineered By KrutiKalpa
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Our specialized product suites solving critical public administration and field management
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08]">
            <div className="text-xs font-mono font-bold text-[#F97316] mb-2">CIVIC AI SUITE</div>
            <h3 className="text-xl font-bold text-white mb-2">WardMitra</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              AI-powered  digital governance platform enabling citizen engagement, grievance
              management, workflow automation, multilingual communication, and administrative
              dashboards .
            </p>
            <div className="text-xs text-zinc-500 font-medium">NLP in English & Marathi</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08]">
            <div className="text-xs font-mono font-bold text-[#F97316] mb-2">MOBILE OPERATIONS</div>
            <h3 className="text-xl font-bold text-white mb-2">Field Assist</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Geo-tagged field reporting and monitoring application designed for mobile workforce
              management, secure offline data collection, and real-time field operations.
            </p>
            <div className="text-xs text-zinc-500 font-medium">Tamper-Proof GPS & Offline Sync</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08]">
            <div className="text-xs font-mono font-bold text-[#F97316] mb-2">PUBLIC HEALTH TECH</div>
            <h3 className="text-xl font-bold text-white mb-2">ArogyaMitra</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Digital healthcare and public health platform designed to improve healthcare
              accessibility, streamline hospital operations, and automate claim audit verification.
            </p>
            <div className="text-xs text-zinc-500 font-medium">National Claim Desk Compliance</div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
