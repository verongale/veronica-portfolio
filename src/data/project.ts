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
    title: "Veronica Galeazzo Portfolio",
    subtitle: "Astro, React & Tailwind CSS — Personal Portfolio",
    metric: "Custom Design & Full-Stack Development",
    description: "Design and development of my professional portfolio as a bilingual digital experience. I handled the entire project, from UI/UX design to front-end development with Astro, React, and Tailwind CSS, including the integration of a contact system, domain management, and production deployment.",
    badge: "Astro / React / Tailwind CSS",
    link: "https://github.com/verongale/veronica-portfolio",
    image: "/portfolio-mockup.jpeg",
    isCommercial: false
  },
  {
    title: "ReceiptApp Architecture",
    subtitle: "Next.js, React & TypeScript (Independent Tech R&D)",
    metric: "Work In Progress",
    description: "A personal finance application built around a real everyday need. Developed as an independent R&D project, it allows me to explore type-safe development, component architecture, database design, and modern application patterns while building a tool I genuinely intend to use.",
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
  },
  {
  year: "2025",
  title: "Cornaglia Fratelli Website",
  description: "Corporate WordPress website for a construction company.",
  link: "https://www.cornagliafratelli.it/"
},
{
  year: "2026",
  title: "La Targa Website",
  description: "WordPress website for a signage and printing company.",
  link: "https://latarga.net/"
},
{
  year: "2025",
  title: "Edilcotto 2.0 Website",
  description: "Corporate WordPress website for a construction company.",
  link: "https://edilcotto2.it/"
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
  buttonText: "Get in touch" 
}; 
 
export const navTextEN = { 
  linkHome: "/", 
  navProjects: "Projects", 
  navPhilosophy: "My Approach", 
  navContact: "Contact" 
}; 

export const navCvTextEN = {
  linkHome: "/",
  navProjects: "Projects",
  navCv: "Resume",
  navContact: "Contact"
};
 
export const skillsEN = [ 
  "React", "TypeScript", "Next.js", "Astro", "Tailwind CSS",  
  "JavaScript", "UI & UX", "PHP", "SQL", "Git", "Wordpress", "Figma", "Canva", "Affinity"
];

export const cvDataEN = {
  header: {
    label: "Curriculum Vitae",
    name: "Veronica Galeazzo",
    role: "Web Designer & Front-End Developer",
    intro:
      "I work across design and development, combining visual thinking with front-end implementation to build clear, functional and responsive digital experiences.",
  },

  profile: {
    title: "Professional Profile",
    text:
      "My experience spans website and web application development, WordPress and CMS-based projects, UI/UX design, landing pages, e-commerce and SEO analysis. I work across the visual and technical sides of digital projects, with a focus on turning projects and ideas into concrete, usable interfaces.",
  },

  experienceTitle: "Work Experience",

  experience: [
    {
      role: "Web Designer — Freelance",
      period: "Dec 2025 – Present",
      responsibilities: [
        "Showcase website development using custom code or CMS platforms such as WordPress",
        "Front-end development for websites and web applications",
        "Back-end development for websites and management systems",
        "SEO analysis",
      ],
    },
    {
      role: "Web Designer — Networkers",
      period: "Sep 2025 – Sep 2026",
      responsibilities: [
        "Showcase website development using custom code or WordPress",
        "E-commerce development and management",
        "UI/UX design",
        "Landing page design",
      ],
    },
    {
      role: "Intern — Bagubits, Cuneo",
      period: "Jun 2024 – Aug 2024",
      responsibilities: [
        "Showcase website development using custom code or WordPress",
        "Front-end development for websites and web applications",
        "Back-end development for websites and management systems",
        "SEO analysis",
        "Digital graphic design and visual content creation",
        "UI/UX design",
        
      ],
    },
    {
      role:
        "Academic Director & English Teacher — The One School of Languages, Cuneo",
      period: "Jul 2021 – Oct 2022",
      responsibilities: [
        "Course supervision",
        "Front office",
        "English teaching",
      ],
    },
  ],

  educationTitle: "Education",

  education: [
    {
      title: "En.A.I.P. — TIC: Programming & Software Development",
      description:
        "Focus on computer science fundamentals and programming and software development techniques.",
      qualification: "",
    },
    {
      title:
        "University Course in Performing and Visual Arts — UCLA, Los Angeles",
      description:
        "University-level coursework focused on performing and visual arts.",
      qualification: "",
    },
    {
      title: "ITS-ICT Piemonte — Communication Technician",
      description:
        "Training in filming, editing, sound design, graphic design and computer science.",
      qualification:
        "Qualification: Higher Technical Education diploma in videomaking.",
    },
    {
      title:
        'Liceo Classico e Scientifico "S. Pellico-G. Peano" — Bilingual',
      description:
        "Humanities and foreign languages.",
      qualification: "Qualification: Classical High School Diploma.",
    },
  ],

  skillsTitle: "Technical Skills",

  skills: [
    {
      category: "Front-End & Web",
      items: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "React",
        "Next.js",
        "TypeScript",
        "Astro",        
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Web Interfaces",
        "Modern UI Implementation",
        "Web Performance Optimization",
      ],
    },
    {
      category: "Back-End & Data",
      items: ["PHP", "Next.js", "MySQL", "Prisma ORM"],
    },
    {
      category: "CMS & Tools",
      items: ["WordPress", "Figma", "Microsoft Office", "Windows", "Affinity Suite", "Canva", "Git", "VS Code"],
    },
    {
      category: "Other",
      items: ["UI/UX Design", "E-commerce", "Landing Pages"],
    },
  ],

  languagesTitle: "Languages",

  languages: [
    {
      name: "Italian",
      level: "Native",
    },
    {
      name: "English",
      level: "C2 / Professional proficiency",
    },
    {
      name: "French",
      level: "B1",
    },
    {
      name: "Spanish",
      level: "B1",
    },
  ],

  additionalTitle: "Additional Information",

  additional: "Driving licence: B1",

  requestCV: {
    label: "Get in Touch",
    title: "Let's Connect",
    description:
      "Interested in working together, discussing an opportunity, or simply learning more about my experience? Feel free to get in touch. I can also provide my full CV and professional references upon request.",
    button: "Send Message",
  },
};