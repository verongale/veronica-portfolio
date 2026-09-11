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
    description: "Engineered a luxury timepiece platform from paper sketches to production. Built custom WooCommerce logic to replace the standard checkout flow with private WhatsApp enquiries, while structuring the product data layer with Advanced Custom Fields (ACF).",
    badge: "WordPress / PHP / ACF",
    link: "https://stellarwatch.it",
    image: "/stellarwatch-mockup.jpeg",
    isCommercial: true
  },
  {
    title: "ReceiptApp Architecture",
    subtitle: "Next.js, React & TypeScript (Independent Tech R&D)",
    metric: "Work In Progress",
    description: "A type-safe personal finance application developed as an independent R&D project, focused on component architecture, compile-time safety, and modern state management patterns.",
    badge: "Next.js / React / TypeScript",
    link: "https://github.com/verongale/receiptapp",
    image: "/receiptapp.jpeg",
    isCommercial: false
  },
  
  {
    title: "Futura Automotive Platform",
    subtitle: "Corporate Showroom & Tailored Content Management System (Built at Networkers)",
    metric: "Zero-Friction Admin UX",
    description: "Engineered a vehicle showroom and inventory platform for a modern performance-car dealership. Designed a custom admin experience around non-technical users, making daily inventory updates simple, fast, and independent.",
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
    description: "WordPress website developed with Divi Builder and custom CSS, with a focus on responsive UI implementation.",
    link: "https://technobuild.sviluppo-networkers.it"
  },
  {
    year: "2026",
    title: "Collina delle Rondini Website",
    description: "WordPress website developed with Divi Builder, custom CSS, and JavaScript to deliver a tailored user experience.",
    link: "https://lacollinadellerondini.it" 
  } 
]; 
 
 
export const matrixPointsEN = [ 
  { 
    title: "The Hybrid Advantage", 
    description: "Most developers don't love design, and most designers shy away from code. I love both in equal measure. I find the exact same adrenaline rush in perfecting a UI layout and in resolving a complex compile-time error in TypeScript.", 
    bgClass: "bg-brand-yellow text-brand-bg", 
    numberClass: "text-brand-bg/60" 
  }, 
  { 
    title: "Foundations to Future", 
    description: "I don't like using tools without understanding what happens underneath. I built my foundations around JavaScript, HTML, CSS, object-oriented PHP, and SQL databases. Those fundamentals help me approach modern frameworks and architectures with a deeper understanding of the systems I am building on top of.", 
    bgClass: "bg-brand-cyan text-brand-bg", 
    numberClass: "text-brand-bg/60" 
  }, 
  { 
    title: "International & Agile Culture", 
    description: "I lived in the United States for several years, where I also attended university-level courses and earned academic credits. I later taught English in a school for a year. This experience gave me more than language proficiency: it taught me how to communicate clearly across cultures, adapt to different environments, and work comfortably in English on a daily basis.", 
    bgClass: "bg-brand-blue text-brand-bg", 
    numberClass: "text-brand-bg/60" 
  } 
]; 
 
export const heroTextEN = { 
  welcome: "Full-Time · Part-Time · B2B Contracting · Remote", 
  titleBefore: "Hi, I'm", 
  role: "Digital Designer & Front-End Developer", 
  manifesto: "I work at the intersection of design and development, translating product requirements into cohesive digital experiences, from visual structure to working code.", 
  buttonWork: "View Work", 
  buttonContact: "Let's Connect" 
}; 
 
export const footerTextEN = { 
  title: "Let's build something together.", 
  description: "I'm open to Full-Time and Part-Time roles, as well as B2B contracting through my Italian VAT setup. I'm interested in working remotely with international teams across Europe.", 
  buttonText: "Connect on LinkedIn" 
}; 
 
export const navTextEN = { 
  linkHome: "/", 
  navProjects: "Projects", 
  navPhilosophy: "My Approach", 
  navContact: "Contact" 
}; 
 
export const skillsEN = [ 
  "React", "TypeScript", "Next.js", "Astro", "Tailwind CSS",  
  "JavaScript", "UI & UX", "PHP", "SQL", "Git", "Wordpress", "Figma", "Canva", "Affinity"
];