import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { companyData } from "@/data/company";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://krutikalpa.com"),
  title: {
    default: "KrutiKalpa Solutions | Transforming Businesses Through Technology",
    template: "%s | KrutiKalpa Solutions",
  },
  description:
    "We design and develop high-performance websites, web applications, AI agents, chatbots, and custom software solutions. Partner with Pune's premier software engineering company.",
  keywords: [
    "KrutiKalpa Solutions",
    "Software Development Company Pune",
    "AI Agent Development",
    "Enterprise Web Applications",
    "Chatbot Development",
    "Custom Software Solutions",
    "Digital Governance Systems",
    "Next.js Development Agency",
  ],
  authors: [{ name: "KrutiKalpa Solutions Private Limited" }],
  creator: "KrutiKalpa Solutions",
  publisher: "KrutiKalpa Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://krutikalpa.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krutikalpa.com",
    siteName: "KrutiKalpa Solutions",
    title: "KrutiKalpa Solutions | Transforming Businesses Through Technology",
    description:
      "Enterprise websites, scalable web applications, autonomous AI agents, chatbots, and custom software engineering.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions - Transforming Businesses Through Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KrutiKalpa Solutions | Transforming Businesses Through Technology",
    description:
      "Modern software engineering company in Pune delivering Web, AI Agents, Chatbots, and Custom Software.",
    creator: "@krutikalpa",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#050505] text-white antialiased min-h-screen flex flex-col selection:bg-[#F97316] selection:text-white">
        <JsonLd type="Organization" />
        <JsonLd type="LocalBusiness" />
        <Navbar />
        <main className="flex-1">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
