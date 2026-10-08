import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Service | KrutiKalpa Solutions",
  description:
    "Terms of Service governing the use of KrutiKalpa Solutions Private Limited websites, enterprise software development services, and AI solutions.",
};

export default function TermsPage() {
  const lastUpdated = "March 15, 2025";

  return (
    <div className="pb-20 bg-[#050505]">
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <FileText className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              LEGAL AGREEMENT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Last Updated: {lastUpdated} &bull; Effective Immediately
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] border border-white/[0.08] text-zinc-300 space-y-10 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website (<span className="text-white font-mono">krutikalpa.com</span>) or engaging{" "}
              <strong className="text-white">{companyData.legalName}</strong> (CIN:{" "}
              <span className="text-[#F97316] font-mono">{companyData.cin}</span>) for technology advisory, web development, custom software engineering, AI agent development, or digital governance solutions, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              2. Scope of Services & Engagements
            </h2>
            <p className="mb-3">
              KrutiKalpa Solutions delivers enterprise-grade software development, AI agent integration, cloud infrastructure consulting, and ongoing technical maintenance. Specific project engagements are formalized through dedicated Statements of Work (SOW), Master Services Agreements (MSA), or Service Level Agreements (SLA), which shall govern technical scope, deliverables, timelines, and commercial terms.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              3. Intellectual Property Rights
            </h2>
            <p className="mb-3">
              <strong className="text-white">Client Ownership:</strong> Upon full settlement of contractual payments specified in the applicable Statement of Work, all custom bespoke code, product designs, and project deliverables engineered specifically for the client shall become the exclusive intellectual property of the client.
            </p>
            <p>
              <strong className="text-white">Company Tooling & Pre-existing Assets:</strong> KrutiKalpa Solutions retains all right, title, and interest in its proprietary foundational libraries, internal developer frameworks, pre-existing software utilities, algorithms, and general know-how developed independently of the client engagement.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              4. Client Responsibilities & Acceptable Use
            </h2>
            <p className="mb-3">When using our platforms or interacting with our development teams, clients and visitors agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>Provide accurate, verified information for scoping and communication.</li>
              <li>Refrain from attempting unauthorized access, penetration testing without prior written consent, or reverse engineering of any KrutiKalpa infrastructure.</li>
              <li>Provide timely access to third-party APIs, feedback, and necessary credentials essential for agreed milestone completion.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              5. Confidentiality & Non-Disclosure
            </h2>
            <p>
              Both parties agree to protect proprietary technical architectures, business models, client databases, and trade secrets disclosed during project discussions with the highest degree of care. Mutual Non-Disclosure Agreements (NDAs) executed between the parties shall remain in full force and effect across all collaborative phases.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              6. Warranties & Limitation of Liability
            </h2>
            <p className="mb-3">
              KrutiKalpa Solutions warrants that services will be performed with professional skill, craftsmanship, and diligence matching prevailing enterprise industry standards.
            </p>
            <p>
              To the maximum extent permitted by applicable Indian law, KrutiKalpa Solutions shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from downtime of third-party cloud infrastructure, unauthorized external breaches beyond reasonable commercial control, or changes in third-party API dependencies.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India. The courts of <strong className="text-white">Pune, Maharashtra, India</strong> shall have exclusive jurisdiction to settle any disputes arising under or related to these Terms.
            </p>
          </div>

          {/* Section 8 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
              8. Contact & Legal Inquiries
            </h2>
            <p className="text-sm text-zinc-300 mb-4">
              If you have any questions or require legal clarification regarding these Terms of Service, please contact our legal and corporate desk:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong className="text-white">Company:</strong> {companyData.legalName}
              </p>
              <p>
                <strong className="text-white">CIN:</strong> {companyData.cin}
              </p>
              <p>
                <strong className="text-white">Address:</strong> {companyData.contact.address.full}
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
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#F97316] font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
