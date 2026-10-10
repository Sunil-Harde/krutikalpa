import { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
  Building,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { companyData } from "@/data/company";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | KrutiKalpa Solutions",
  description:
    "Connect with KrutiKalpa Solutions Private Limited. Reach our engineering office at Kohinoor B-Zone, Baner, Pune for custom software, AI agents, web development, and digital transformation inquiries.",
};

const guarantees = [
  "Response within 24 business hours",
  "Direct discussion with senior engineering architects",
  "Strict mutual NDA & intellectual property protection",
  "Transparent project scoping & milestones",
];

export default function ContactPage() {
  return (
    <div className="pb-10 bg-[#050505]">
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#F97316]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Let&apos;s Build Your Next Digital{" "}
            <span className="text-gradient-orange-pure">Breakthrough</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Whether you need a cutting-edge web application, autonomous AI agents, enterprise cloud
            modernization, or custom software architecture, our team is ready to collaborate.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-xs font-semibold uppercase tracking-wider mb-4">
                Corporate Office
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                KrutiKalpa Solutions Private Limited
              </h2>
              <p className="mt-2 text-xs font-mono text-zinc-400">
                CIN: {companyData.cin}
              </p>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Headquarters
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {companyData.contact.address.building}, {companyData.contact.address.street},{" "}
                    {companyData.contact.address.area}, {companyData.contact.address.city},{" "}
                    {companyData.contact.address.state} &ndash; {companyData.contact.address.pincode},{" "}
                    {companyData.contact.address.country}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kohinoor+B-Zone+Baner+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#F97316] hover:underline"
                  >
                    View on Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/30 transition-all">
                <div className="flex items-start gap-4 ">

                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316] mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Email Inquiries
                    </h3>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-sm font-semibold text-white hover:text-[#F97316] transition-colors break-all block"
                    >
                      {companyData.contact.email}
                    </a>
                    <a
                      href={`mailto:${companyData.contact.supportEmail}`}
                      className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors break-all block mt-1"
                    >
                      {companyData.contact.supportEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#F97316]/30 transition-all">
                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316] mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Direct Line
                    </h3>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-sm font-semibold text-white hover:text-[#F97316] transition-colors block"
                    >
                      {companyData.contact.phoneDisplay}
                    </a>
                    <a
                      href={`tel:${companyData.contact.alternatePhone.replace(/\s+/g, "")}`}
                      className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors block mt-1"
                    >
                      {companyData.contact.alternatePhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & WhatsApp */}
            <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F97316]" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Business Hours
                  </h4>
                  <p className="text-sm text-zinc-200 font-medium">
                    Monday &ndash; Saturday: 10:00 AM &ndash; 6:00 PM IST
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Quick WhatsApp Chat
                  </h4>
                  <p className="text-xs text-zinc-400">Chat directly with our solutions team</p>
                </div>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/30 text-xs font-bold transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Engagement Guarantees */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                Our Engagement Guarantee
              </h4>
              <ul className="space-y-2">
                {guarantees.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                  START A CONVERSATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Send Us a Project Inquiry
                </h3>
                <p className="text-sm text-zinc-400 mt-2">
                  Tell us about your requirements, project timelines, and goals. We will schedule a scoping session within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
