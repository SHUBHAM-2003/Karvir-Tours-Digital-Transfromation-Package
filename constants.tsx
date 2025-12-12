import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  Bot, 
  MapPin, 
  MessageCircle, 
  Share2, 
  Palette, 
  QrCode
} from 'lucide-react';
import { DeliverableItem, TimelinePhase, SummaryRow } from './types';

export const DELIVERABLES: DeliverableItem[] = [
  {
    id: "website-development",
    title: "Modern Website Development",
    description: "High-performance, responsive website designed to increase trust and lead generation.",
    fullDescription: "A state-of-the-art travel agency website built with Next.js and React. Features include a dynamic tour catalog, high-resolution image galleries, customer testimonials, and an integrated booking inquiry system. The site is optimized for speed (Core Web Vitals) and SEO to ensure maximum visibility on Google.",
    icon: Globe,
    price: 20000,
    marketPrice: "₹15,000 – ₹40,000",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    demoLink: "#",
    features: [
      "5+ Pages (Home, About, Tours, Reviews)",
      "Hero Video Background Support",
      "Mobile Responsive & Modern UI/UX",
      "24×7 AI Chatbot Integration",
      "SEO Optimized Structure",
      "Fast Loading Speeds"
    ]
  },
  {
    id: "office-management-system",
    title: "Custom Office Management System",
    description: "The core of the transformation. A complete internal software to manage operations.",
    fullDescription: "A bespoke ERP solution tailored specifically for tour operators. Abandon spreadsheets for a centralized dashboard that handles tour scheduling, staff salary management, kitchen inventory, and expense tracking. Includes role-based access control for Owners, Managers, and Staff.",
    icon: LayoutDashboard,
    price: 70000,
    marketPrice: "₹80,000 – ₹1,50,000",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    demoLink: "#",
    features: [
      "Clean Login System (Owner, Office, Tour, Kitchen)",
      "Automated Tour & Salary Management",
      "Role-based Dashboards",
      "Itinerary & Expense Management",
      "Passenger Manifest Generation",
      "Financial Reporting"
    ]
  },
  {
    id: "parents-monitoring-app",
    title: "Parents Monitoring App",
    description: "Simple, secure Android app for parents to track student tour updates.",
    fullDescription: "A dedicated Android application designed to give peace of mind to parents. Tour managers can post live updates, location check-ins, and daily photos. Parents receive push notifications for important announcements, ensuring transparency and trust during student tours.",
    icon: Smartphone,
    price: 30000,
    marketPrice: "₹25,000 – ₹50,000",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    demoLink: "#",
    features: [
      "Live Updates & Notifications",
      "Photo Sharing & Highlights Gallery",
      "Day-wise Itinerary Display",
      "Emergency Contact Information",
      "Secure Parent Login"
    ]
  },
  {
    id: "ai-automation-agents",
    title: "AI Automation Agents",
    description: "Intelligent agents to handle feedback and itinerary generation.",
    fullDescription: "Leverage the power of Artificial Intelligence to automate repetitive tasks. Our AI agents can automatically solicit feedback from customers post-trip via WhatsApp, analyze sentiment, and generate reports. Additionally, the AI Itinerary Generator can create custom travel plans in seconds based on user preferences.",
    icon: Bot,
    price: 15000, // Combined Feedback (10k) + Itinerary (5k)
    marketPrice: "₹15,000 – ₹40,000",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    demoLink: "https://id-preview--404de2c5-42e3-422e-8a8f-ab4165dde63e.lovable.app/",
    referenceImages: [],
    features: [
      "AI Feedback Agent (Auto-requests reviews)",
      "AI Itinerary Generator (Instant plans)",
      "Automated Reporting to Director",
      "n8n Workflow Integration",
      "Natural Language Processing"
    ]
  },
  {
    id: "google-business-setup",
    title: "Google Business Setup",
    description: "Complete optimization for local search visibility.",
    fullDescription: "Dominate local search results when customers look for 'Tours in Karvir'. We optimize your Google Business Profile with high-quality images, accurate service descriptions, and a strategy to generate consistent 5-star reviews, driving organic footfall and calls.",
    icon: MapPin,
    price: 5000,
    marketPrice: "₹3,000 – ₹10,000",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    demoLink: "#",
    features: [
      "Profile Optimization & SEO",
      "Map & Service Listing",
      "Review Funnel Setup",
      "Q&A Seeding",
      "Post Management Setup"
    ]
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Business Automation",
    description: "Streamlined communication with automated flows.",
    fullDescription: "Turn WhatsApp into a 24/7 sales machine. We set up the WhatsApp Business API (or app automation) to handle common queries, send automated brochures, and manage lead intake. Includes setting up a product catalog directly within WhatsApp.",
    icon: MessageCircle,
    price: 5000,
    marketPrice: "₹3,000 – ₹10,000",
    imageUrl: "https://images.unsplash.com/photo-1611746341950-c3683e9ea2f6?auto=format&fit=crop&w=1200&q=80",
    demoLink: "#",
    features: [
      "Business Profile Setup",
      "Auto-replies & Quick Replies",
      "Catalog Setup",
      "Labeling System for Leads",
      "Welcome Message Flows"
    ]
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "1 Month support to kickstart the digital presence.",
    fullDescription: "Jumpstart your brand's social presence with a month of high-quality content. We create engaging Reels, informative carousel posts, and promotional stories designed to capture attention and grow your follower base on Instagram and Facebook.",
    icon: Share2,
    price: 8000,
    marketPrice: "₹7,000 – ₹20,000",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    demoLink: "#",
    features: [
      "Content Creation (4 Reels, 8 Posts)",
      "Tour Promotions",
      "Online Engagement & Community Management",
      "Hashtag Strategy",
      "Bio Optimization"
    ]
  },
  {
    id: "branding-assets",
    title: "Branding & Creative Assets",
    description: "Professional visual identity for physical and digital use.",
    fullDescription: "A consistent brand image builds trust. We provide a suite of high-resolution creative assets including logo refinements, color palette definitions, typography, and templates for flyers, brochures, and social media posts.",
    icon: Palette,
    price: 4000,
    marketPrice: "₹3,000 – ₹10,000",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=1200&q=80",
    demoLink: "#",
    features: [
      "Posters & Brochures Design",
      "Presentation Templates",
      "Promotional Graphics",
      "Social Media Templates",
      "Brand Guidelines Document"
    ]
  },
  {
    id: "smart-visiting-card",
    title: "Smart Visiting Card & QR",
    description: "Modern networking tools with digital landing page.",
    fullDescription: "Network smarter with NFC-enabled digital business cards. Tap your card on a client's phone to instantly share your contact details and a mini-landing page showcasing your popular tour packages and contact links.",
    icon: QrCode,
    price: 3000,
    marketPrice: "₹2,000 – ₹6,000",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    demoLink: "#",
    features: [
      "Premium Card Design",
      "Smart QR Code System",
      "Dedicated Mini-Landing Page",
      "One-click Contact Save",
      "Analytics on Scans"
    ]
  }
];

export const TIMELINE: TimelinePhase[] = [
  {
    phase: 1,
    title: "Website Development",
    duration: "1 week",
    items: ["UI/UX Design", "Content Structuring", "AI Chatbot Setup"]
  },
  {
    phase: 2,
    title: "OMS Development",
    duration: "4–5 weeks",
    items: ["Dashboard UI/UX", "Role-based Auth", "Workflows (Salary, Tours)", "Calendar Integration"]
  },
  {
    phase: 3,
    title: "OMS Testing & Deployment",
    duration: "5 days",
    items: ["Bug Fixes", "Load Testing", "User Acceptance Testing"]
  },
  {
    phase: 4,
    title: "AI Agents Development",
    duration: "2 weeks",
    items: ["Feedback Automation", "Itinerary Generator", "n8n Workflows"]
  },
  {
    phase: 5,
    title: "Play Store Mobile App",
    duration: "2 weeks",
    items: ["App Design", "Development", "Publishing Setup"]
  },
  {
    phase: 6,
    title: "Google & WhatsApp Setup",
    duration: "4–5 days",
    items: ["Business Profile", "SEO Optimization", "Automation Flows"]
  },
  {
    phase: 7,
    title: "Social Media & Branding",
    duration: "1 month",
    items: ["Parallel to development", "Content Creation", "Branding Assets"]
  }
];

export const PRICING_SUMMARY: SummaryRow[] = [
  { service: "Website (5+ pages + animations)", price: 20000 },
  { service: "Office Management System", price: 70000 },
  { service: "Parental Monitoring App", price: 25000 },
  { service: "Google Business Setup", price: 5000 },
  { service: "AI Feedback Assistant", price: 10000 },
  { service: "WhatsApp Automation Setup", price: 5000 },
  { service: "Social Media Handling (1 Month)", price: 8000 },
  { service: "Branding Designs", price: 4000 },
  { service: "Visiting Card + QR Landing Page", price: 3000 },
  { service: "AI Itinerary Generator", price: 5000 },
];