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
  },
  
  {
  title: "Futura Automotive Platform",
  subtitle: "Corporate Showroom & Tailored Content Management System (Built at Networkers)",
  metric: "Zero-Friction Admin UX",
  description: "Engineered a high-performance vehicle catalog platform for a modern automotive dealership. Architected a custom, highly intuitive backend content framework explicitly tailored for non-technical clients, enabling seamless daily vehicle inventory updates with zero training requirements.",
  badge: "WordPress / Custom CMS / Admin UX",
  link: "https://futuracar.net",
  image: "/futuracar-it.png",
  isCommercial: true
}

];

export interface MinorProject {
  year: string;
  title: string;
  description: string;
  link: string;
}

export const minorProjectsEN: MinorProject[] = [
  {
    year: "2025",
    title: "Technobuild Website",
    description: "Wordpress website built with Divi Builder and Custom CSS",
    link: "https://technobuild.sviluppo-networkers.it"
  },
  {
    year: "2026",
    title: "Collina delle Rondini Website",
    description: "Wordpress website built with Divi Builder, Custom CSS and JavaScript",
    link: "https://lacollinadellerondini.it"
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
  title: "Foundations to Future",
  description: "I don't rely on blind shortcuts; I need to understand how things work under the hood. Starting from core fundamentals like pure Vanilla JavaScript (ES6+), OOP PHP, and SQL databases gave me a deep control that now allows me to master modern frameworks and cutting-edge architectures with speed and precision.",
  bgClass: "bg-brand-cyan text-brand-bg",
  numberClass: "text-brand-bg/60"
}
,
  {
    title: "International & Agile Culture",
    description: "With a certified C2 level in English, multimedia visual arts training at UCLA (USA), and an adaptable remote mindset, I am structurally ready to integrate into cross-border product teams from day one.",
    bgClass: "bg-brand-blue text-brand-bg",
    numberClass: "text-brand-bg/60"
  }
];

export const heroTextEN = {
  welcome: "Available for EU Remote Contracting (VIES VAT)",
  titleBefore: "Hi, I'm",
  role: "Design Engineer & Front-End Developer",
  manifesto: "I bridge the gap between creative composition and type-safe code. I love the creative rush of designing an interface, but I get the exact same satisfaction from engineering the logic to make it work flawlessly. For me, the entire production workflow and the continuous study behind it is pure adrenaline.",
  buttonWork: "View Work",
  buttonContact: "Let's Connect"
};

export const footerTextEN = {
  title: "Let's build something together.",
  description: "I am currently looking for remote roles and B2B contracting opportunities across Europe.",
  buttonText: "Connect on LinkedIn"
};

export const navTextEN = {
  linkHome: "/",
  navProjects: "Projects",
  navPhilosophy: "Philosophy",
  navContact: "Contact"
};

export const skillsEN = [
  "React", "TypeScript", "Next.js", "Astro", "Tailwind CSS", 
  "Vanilla JavaScript", "UI Engineering", "Admin UX", "PHP", "SQL", "Git"
];
