import React from "react";
import { companyData } from "@/data/company";

interface JsonLdProps {
  type?: "Organization" | "LocalBusiness" | "WebSite" | "Service" | "BreadcrumbList";
  data?: Record<string, any>;
}

export function JsonLd({ type = "Organization", data }: JsonLdProps) {
  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.name,
    legalName: companyData.legalName,
    url: "https://krutikalpa.com",
    logo: "https://krutikalpa.com/images/krutikalpa-logo.png",
    description: companyData.subheadline,
    telephone: companyData.contact.phone,
    email: companyData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.contact.address.full,
      addressLocality: companyData.contact.address.city,
      addressRegion: companyData.contact.address.state,
      postalCode: companyData.contact.address.pincode,
      addressCountry: "IN",
    },
    sameAs: [
      companyData.social.linkedin,
      companyData.social.twitter,
      companyData.social.instagram,
      companyData.social.youtube,
      companyData.social.github,
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyData.legalName,
    image: "https://krutikalpa.com/images/krutikalpa-office.jpg",
    "@id": "https://krutikalpa.com/#localbusiness",
    url: "https://krutikalpa.com",
    telephone: companyData.contact.phone,
    email: companyData.contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.contact.address.building,
      addressLocality: companyData.contact.address.city,
      addressRegion: companyData.contact.address.state,
      postalCode: companyData.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.559,
      longitude: 73.7868,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
  };

  const schemaPayload = data
    ? { "@context": "https://schema.org", "@type": type, ...data }
    : type === "LocalBusiness"
    ? localBusinessSchema
    : defaultOrgSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPayload) }}
    />
  );
}
