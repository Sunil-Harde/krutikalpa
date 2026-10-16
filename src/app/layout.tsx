import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
    default: "KrutiKalpa Solutions | Software Development & AI Solutions in Pune",
    template: "%s | KrutiKalpa Solutions",
  },
  description:
    "KrutiKalpa Solutions is a technology engineering company based in Pune, Maharashtra. We design and build enterprise websites, scalable web applications, autonomous AI agents, chatbots, and custom software solutions.",
  keywords: [
    "KrutiKalpa Solutions",
    "Software Development Company in Pune",
    "Web Development Company in Pune",
    "AI Agent Development Company",
    "Enterprise Web Applications",
    "Chatbot Development Services",
    "Custom Software Development Pune",
    "ERP Development",
    "Digital Governance Systems",
    "IT Services Pune Maharashtra",
  ],
  authors: [{ name: "KrutiKalpa Solutions Private Limited", url: "https://krutikalpa.com" }],
  creator: "KrutiKalpa Solutions",
  publisher: "KrutiKalpa Solutions Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://krutikalpa.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krutikalpa.com/",
    siteName: "KrutiKalpa Solutions",
    title: "KrutiKalpa Solutions | Software Development & AI Solutions in Pune",
    description:
      "Transforming businesses through technology: enterprise websites, web applications, AI agents, chatbots, and custom software engineering.",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions - Software Engineering and AI Solutions in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KrutiKalpa Solutions | Software Development & AI Solutions in Pune",
    description:
      "Software engineering and AI company in Pune, India delivering Websites, Web Apps, AI Agents, Chatbots, and Custom Software.",
    creator: "@krutikalpa",
    images: [
      "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/images/logo/K_LOGO.png"
          type="image/jpeg"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('krutikalpa-theme');
                  var theme = (saved === 'light' || saved === 'dark') ? saved : 'dark';
                  document.documentElement.classList.remove('dark', 'light');
                  document.documentElement.classList.add(theme);
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.style.colorScheme = theme;
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#E5E7EB] dark:bg-[#080808] text-zinc-900 dark:text-[#FAFAFA] antialiased min-h-screen flex flex-col selection:bg-[#FF6B0A] selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <JsonLd type="Organization" />
          <JsonLd type="LocalBusiness" />
          <JsonLd type="WebSite" />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
