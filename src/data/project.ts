//Project type to ensure that all projects folloe the same structure 
export interface Project {
  title: string;
  subtitle: string;
  metric: string;
  description: string;
  badge: string;
  link: string;
  image: string;
  isCommercial: boolean;
}

// Projects that will be displayed on the main page of the portfolio
export const projectsData: Project[] = [
  {
    title: "Stellarwatch E-commerce",
    subtitle: "Custom WooCommerce & Data Architecture (Built at Networkers)",
    metric: "93.47% Engagement Rate",
    description: "Engineered a luxury timepiece platform from paper sketches straight to production. Programmed custom database hooks to replace standard checkout flows with private WhatsApp redirections and architected data layers using Advanced Custom Fields (ACF).",
    badge: "WordPress / PHP / ACF",
    link: "https://stellarwatch.it",
    image: "/stellarwatch-mockup.jpeg",
    isCommercial: true
  },
  {
    title: "ReceiptApp Architecture",
    subtitle: "Next.js, React & TypeScript (Independent Tech R&D)",
    metric: "Work In Progress",
    description: "A type-safe personal finance application built phase-by-phase to master component architecture, continuous compile-time checks, and modern client-side state management patterns.",
    badge: "Next.js / React / TypeScript",
    link: "https://github.com/verongale/receiptapp",
    image: "/receiptapp.jpeg",
    isCommercial: false
  }
];

export const matrixPointsEN = [
  {
    title: "The Hybrid Advantage",
    description: "Most developers hate design, and most designers fear the terminal. I love both in equal measure. I find the exact same adrenaline rush in perfecting a UI layout and in resolving a complex compile-time error in TypeScript.",
    bgClass: "bg-brand-yellow text-brand-bg",
    numberClass: "text-brand-bg/60"
  },
  {
    title: "Vanilla Engineering Foundations",
    description: "I didn't just learn framework shortcuts. My software engineering training at En.A.I.P. focused on pure, native Vanilla JavaScript (ES6+), Object-Oriented PHP, and relational SQL database design.",
    bgClass: "bg-brand-cyan text-brand-bg",
    numberClass: "text-brand-bg/60"
  },
  {
    title: "International & Agile Culture",
    description: "With a certified C2 level in English, multimedia visual arts training at UCLA (USA), and an adaptable remote mindset, I am structurally ready to integrate into cross-border product teams from day one.",
    bgClass: "bg-gradient-to-br from-brand-yellow to-brand-cyan text-brand-bg",
    numberClass: "text-brand-bg/60"
  }
];

export const heroTextEN = {
  welcome: "Available for EU Remote Contracting (VIES VAT)",
  manifesto: "I bridge the gap between creative composition and type-safe code. I love the creative rush of designing an interface, but I get the exact same satisfaction from engineering the logic to make it work flawlessly. For me, the entire production workflow and the continuous study behind it is pure adrenaline.",
  buttonWork: "View Work",
  buttonContact: "Let's Connect"
};

export const footerTextEN = {
  title: "Let's build something together.",
  description: "I am currently looking for remote roles and B2B contracting opportunities across Europe.",
  buttonText: "Connect on LinkedIn"
};