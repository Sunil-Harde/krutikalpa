import { Metadata } from "next";
import Link from "next/link";
import { Shield, Sparkles, ArrowLeft, Mail, MapPin } from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | KrutiKalpa Solutions",
  description:
    "Privacy Policy for KrutiKalpa Solutions Private Limited (CIN: U62020PN2025PTC238309). Learn how we collect, handle, and protect user data under Indian DPDP and global privacy frameworks.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 15, 2025";

  return (
    <div className="pb-20 bg-[#050505]">
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <Shield className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              LEGAL & DATA PROTECTION
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Last Updated: {lastUpdated} &bull; Effective Immediately
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] border border-white/[0.08] text-zinc-300 space-y-10 leading-relaxed text-sm sm:text-base">
          {/* Introduction */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              1. Introduction & Corporate Information
            </h2>
            <p className="mb-3">
              This Privacy Policy describes how{" "}
              <strong className="text-white">{companyData.legalName}</strong> (&quot;KrutiKalpa Solutions&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a private limited company incorporated under the laws of India bearing Corporate Identification Number (CIN){" "}
              <strong className="text-[#F97316] font-mono">{companyData.cin}</strong>, collects, processes, stores, and protects personal data obtained through our official website{" "}
              <span className="text-white font-mono">krutikalpa.com</span> and associated enterprise web applications, services, and communication channels.
            </p>
            <p>
              We are committed to maintaining the confidentiality, integrity, and security of all personal and enterprise information in strict compliance with the{" "}
              <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India, the Information Technology Act, 2000, and applicable global privacy principles.
            </p>
          </div>

          {/* Data Collected */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information to facilitate business inquiries, provide custom software development services, and optimize our digital platforms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>
                <strong className="text-white">Direct Communications:</strong> Full name, corporate email address, contact phone number, company name, and project scope submitted through our contact forms or email inquiries.
              </li>
              <li>
                <strong className="text-white">Technical & Usage Data:</strong> IP address, browser type, device identifiers, operating system version, pages visited, time spent, and referral URLs gathered via anonymous server logs.
              </li>
              <li>
                <strong className="text-white">Career Applicants:</strong> Resumes, employment history, portfolios, and contact information submitted by job applicants seeking roles at KrutiKalpa Solutions.
              </li>
            </ul>
          </div>

          {/* Purpose */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              3. Purpose & Legal Basis for Processing
            </h2>
            <p className="mb-3">We utilize your personal information exclusively for lawful business purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Responding to enterprise project inquiries and preparing service proposals.</li>
              <li>Executing client agreements, software engineering contracts, and delivery milestones.</li>
              <li>Fulfilling statutory tax, compliance, and corporate obligations under Indian law.</li>
              <li>Maintaining system security, mitigating cyber risks, and preventing fraudulent access.</li>
              <li>Recruiting and evaluating prospective engineers and team members.</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              4. Disclosure and Third-Party Sharing
            </h2>
            <p>
              We <strong className="text-white">never sell, rent, or trade</strong> your personal information to third-party data brokers or marketing agencies. We may share data only with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-zinc-300">
              <li>
                <strong className="text-white">Vetted Infrastructure Providers:</strong> Cloud hosting, CDN, and email delivery vendors (e.g., AWS, Vercel) bound by strict confidentiality and security undertakings.
              </li>
              <li>
                <strong className="text-white">Regulatory & Law Enforcement Authorities:</strong> When mandated by applicable Indian statutory law, court subpoenas, or authorized government agencies.
              </li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              5. Data Security & Storage
            </h2>
            <p>
              KrutiKalpa implements enterprise-grade technical and organizational security controls, including TLS/SSL encryption in transit, strict access control matrices, periodic penetration assessments, and secure cloud storage architectures hosted in Tier-4 data centers within India and certified global regions.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              6. Your Privacy Rights
            </h2>
            <p className="mb-3">
              Under applicable data protection legislation, you are entitled to exercise the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Right to access and review information retained by us.</li>
              <li>Right to correction or updating of inaccurate personal records.</li>
              <li>Right to grievance redressal regarding data handling practices.</li>
              <li>Right to erasure of personal data where retention is no longer legally required.</li>
            </ul>
          </div>

          {/* Grievance Officer */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
              7. Grievance Officer & Contact
            </h2>
            <p className="text-sm text-zinc-300 mb-4">
              For privacy-related questions, access requests, or grievance redressal, please contact our designated Grievance Desk:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong className="text-white">Company:</strong> {companyData.legalName}
              </p>
              <p>
                <strong className="text-white">CIN:</strong> {companyData.cin}
              </p>
              <p>
                <strong className="text-white">Office:</strong> {companyData.contact.address.full}
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-[#F97316] hover:underline"
                >
                  {companyData.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-white">Support:</strong>{" "}
                <a
                  href={`mailto:${companyData.contact.supportEmail}`}
                  className="text-[#F97316] hover:underline"
                >
                  {companyData.contact.supportEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#F97316] font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
            <Link
              href="/terms"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Terms of Service &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
