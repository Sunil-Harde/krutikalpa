export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  stats: string;
  statsLabel: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  caseStudyHighlight: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription: "Streamlining operations with digital solutions and smart automation.",
    fullDescription:
      "Transform discrete and process manufacturing with connected digital architectures. We develop smart factory applications, inventory control systems, equipment monitoring dashboards, and predictive maintenance portals that minimize unplanned downtime and optimize shop-floor productivity.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    iconName: "Factory",
    stats: "35%",
    statsLabel: "Average Downtime Reduction",
    challenges: [
      "Fragmented shop-floor logs and manual tally sheets",
      "Inaccurate inventory reporting leading to production delays",
      "Lack of real-time machine telemetry and predictive alerting",
      "Complex supply chain coordination across suppliers and distributors",
    ],
    solutions: [
      "Custom ERP & Shop-Floor Execution Systems (MES)",
      "Automated Raw Material & Finished Goods Inventory Management",
      "IoT Sensor Telemetry & Real-Time Production Analytics",
      "Vendor Procurement & Purchase Order Approval Automation",
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "MQTT / IoT", "Docker", "Python"],
    caseStudyHighlight: "Inventory Management & Production ERP delivered for automotive fabrication plant.",
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare",
    shortDescription: "Innovative healthcare technology solutions for care delivery and governance.",
    fullDescription:
      "Modernize clinical workflows, patient management, and public health governance with HIPAA and ABDM-compliant healthcare software. From national health claim desk audits (Ayushman Bharat, RSBY) to hospital management and ArogyaMitra citizen health portals, we build mission-critical healthcare systems.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    iconName: "HeartPulse",
    stats: "6L+",
    statsLabel: "Health Claims Audited Across India",
    challenges: [
      "Massive claim processing backlogs and manual audit bottlenecks",
      "Strict data privacy regulations and compliance hurdles",
      "Patient data fragmentation across diagnostics, beds, and billing",
      "Remote accessibility constraints in rural public health outreach",
    ],
    solutions: [
      "ArogyaMitra Digital Public Health & Clinic Management Platform",
      "National-Scale AI-Driven Health Claim Desk & Field Audit Software",
      "Telemedicine & Appointment Booking Web / Mobile Applications",
      "Electronic Health Records (EHR) with Role-Based Security",
    ],
    technologies: ["Spring Boot", "Next.js", "Python AI", "PostgreSQL", "Redis", "AWS Cloud"],
    caseStudyHighlight: "Audited 6,00,000+ national health claims across multiple Indian states with zero data leaks.",
  },
  {
    id: "education",
    slug: "education",
    title: "Education",
    shortDescription: "Empowering learning and institutional administration through technology.",
    fullDescription:
      "Deliver modern digital campuses, interactive e-learning portals, and administrative automation suites. We build student information systems (SIS), automated fee collection gateways, attendance tracking, and AI-assisted personalized study companions for schools, colleges, and EdTech platforms.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    iconName: "GraduationCap",
    stats: "40%",
    statsLabel: "Admin Overhead Saved",
    challenges: [
      "Cumbersome paper-based grading, fee tracking, and admissions",
      "Low student engagement in traditional virtual classrooms",
      "Disjointed communication between teachers, parents, and students",
      "Difficulties in personalized pace of learning assessment",
    ],
    solutions: [
      "Comprehensive Campus ERP & Student Information Systems",
      "AI-Powered Student Doubts & Multi-Language Tutoring Chatbots",
      "Automated Fee Collection Portals with Instant Receipt Dispatch",
      "Interactive Learning Management Systems (LMS) with Live Video",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "WebRTC", "Tailwind CSS"],
    caseStudyHighlight: "Automated student onboarding, examination grading, and fee management for 15,000+ students.",
  },
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    title: "Retail & E-commerce",
    shortDescription: "Scalable e-commerce platforms and omnichannel retail solutions.",
    fullDescription:
      "Build high-converting storefronts and B2B wholesale portals engineered for lightning-fast catalog search, dynamic pricing, smooth payment gateways, and automated inventory sync across multiple channels.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    iconName: "ShoppingCart",
    stats: "3.2x",
    statsLabel: "Average Checkout Conversion Lift",
    challenges: [
      "Cart abandonment caused by slow site performance",
      "Inventory desynchronization across online stores and physical outlets",
      "Complex B2B tiered bulk pricing and credit terms",
      "Inability to handle surge traffic during festival sales",
    ],
    solutions: [
      "Headless Next.js E-Commerce Storefronts with Sub-Second Speed",
      "B2B Wholesale Portals with Custom Invoicing and Credit Limits",
      "WhatsApp Commerce & Order Notification Automation",
      "Real-Time Multi-Warehouse Inventory & Dispatch Tracking",
    ],
    technologies: ["Next.js 15", "Node.js", "Stripe / Razorpay", "PostgreSQL", "Redis", "Elasticsearch"],
    caseStudyHighlight: "B2B E-commerce platform scaling 10,000+ SKUs with real-time stock allocation.",
  },
  {
    id: "logistics-supply-chain",
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    shortDescription: "Optimizing supply chain with smart systems and real-time tracking.",
    fullDescription:
      "Gain complete visibility over fleet movements, warehouse dispatches, and last-mile delivery milestones. Our logistics software features live GPS telemetry, automated route optimization, digital proof-of-delivery (PoD), and vendor SLA monitoring.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    iconName: "Truck",
    stats: "28%",
    statsLabel: "Fuel & Fleet Transit Cost Savings",
    challenges: [
      "Blind spots during in-transit shipments and dispatch handoffs",
      "Disputes over lost items or late delivery penalties",
      "Suboptimal route planning causing fuel wastage",
      "Delayed paper bills of lading and signature verifications",
    ],
    solutions: [
      "Field Assist Geo-Tagged Vehicle & Personnel Tracking App",
      "Centralized Logistics Control Tower & Dispatch Dispatcher",
      "Digital Proof of Delivery (e-POD) with In-App Signature & Photos",
      "Automated Milestone SMS & WhatsApp Notifications for Customers",
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL / PostGIS", "Google Maps API", "WebSockets"],
    caseStudyHighlight: "Deployed Field Assist tracking system managing 2,500+ daily field visits with geo-fencing.",
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate",
    shortDescription: "Digital solutions for modern real estate developers and property managers.",
    fullDescription:
      "Transform property marketing and asset management. We build 3D virtual tour property showcases, real estate CRM lead funnels, automated tenant billing portals, and maintenance ticketing software for builders and facility operators.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    iconName: "Building2",
    stats: "45%",
    statsLabel: "Inbound Lead Qualification Increase",
    challenges: [
      "High acquisition cost of property buyer leads with poor follow-up",
      "Manual lease documentation and rent payment tracking",
      "Lack of interactive online floorplans and virtual tours",
      "Unorganized maintenance tickets causing tenant dissatisfaction",
    ],
    solutions: [
      "Interactive Project Portals with Unit Availability Matrices",
      "Real Estate AI Lead Nurturing & Site Visit Scheduling Chatbots",
      "Tenant & Owner Portal for Automated Rent Invoicing & Maintenance",
      "Broker & Channel Partner Incentive Management System",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS S3", "Three.js"],
    caseStudyHighlight: "Lead capture & automated WhatsApp follow-up engine for a premier residential township.",
  },
  {
    id: "financial-services",
    slug: "financial-services",
    title: "Financial Services",
    shortDescription: "Secure, compliant fintech and banking workflow automation software.",
    fullDescription:
      "Build bank-grade digital experiences with hardened encryption, automated KYC verifications, loan origination engines, and real-time transaction reconciliation dashboards adhering to strict financial regulatory standards.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    iconName: "Landmark",
    stats: "100%",
    statsLabel: "Regulatory Compliance Audit Ready",
    challenges: [
      "Strict data privacy regulations and security audit standards",
      "Complex paper-heavy loan underwriting and document verification",
      "Fraudulent transaction detection and prevention in real time",
      "Outdated legacy core banking database bottlenecks",
    ],
    solutions: [
      "Digital Loan Origination & Automated Credit Appraisal Portals",
      "AI-Powered Document OCR for Instant PAN, Aadhaar, & Bank Statements",
      "Automated Reconciliation Engines Processing Millions of Ledger Rows",
      "Customer Self-Service Banking & Investment Web / Mobile Apps",
    ],
    technologies: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
    caseStudyHighlight: "Automated document audit & OCR verification processing 50,000+ monthly loan applications.",
  },
  {
    id: "automotive",
    slug: "automotive",
    title: "Automotive",
    shortDescription: "Connected software systems for auto dealerships, workshops, and parts suppliers.",
    fullDescription:
      "Power dealership sales networks and spare-parts supply chains with purpose-built automotive software. From vehicle configuration engines to digital job cards in service workshops, we build software that accelerates the automotive industry.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    iconName: "Car",
    stats: "50%",
    statsLabel: "Service Bay Turnaround Speedup",
    challenges: [
      "Stock inaccuracies in spare parts inventory across distributed dealerships",
      "Delayed service job card creation and paper bill approvals",
      "Poor service reminder follow-up leading to lost customer retention",
      "Disconnected vehicle warranty and insurance claim workflows",
    ],
    solutions: [
      "Dealership Management System (DMS) & Digital Workshop Job Cards",
      "Spare Parts Catalog with Dynamic Stock Inquiries & QR Invoicing",
      "Automated Service Due SMS & WhatsApp Appointment Booking",
      "Automobile Warranty & Insurance Claim Processing Desk",
    ],
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS", "AWS", "Docker"],
    caseStudyHighlight: "Streamlined workshop management system connecting 20+ service centers across western India.",
  },
];
