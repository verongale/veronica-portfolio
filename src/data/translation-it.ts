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
export const projectsDataIT: Project[] = [
  {
    title: "Stellarwatch E-commerce",
    subtitle: "Custom WooCommerce & Data Architecture (Built at Networkers)",
    metric: "93.47% Engagement Rate",
    description: "Trasformazione di un concept iniziale in un e-commerce di orologi di lusso pronto per la produzione. Ho sviluppato una logica WooCommerce personalizzata per sostituire il checkout standard con richieste d'acquisto via WhatsApp e strutturato il livello dati dei prodotti con Advanced Custom Fields (ACF).",
    badge: "WordPress / PHP / ACF",
    link: "https://stellarwatch.it",
    image: "/stellarwatch-mockup.jpeg",
    isCommercial: true
  },
  {
    title: "ReceiptApp Architecture",
    subtitle: "Next.js, React & TypeScript (Independent Tech R&D)",
    metric: "In Corso",
    description: "Applicazione per la gestione delle finanze personali sviluppata come progetto indipendente di ricerca e sviluppo, con particolare attenzione all'architettura dei componenti, alla type safety, ai controlli a tempo di compilazione e alla gestione moderna dello stato.",
    badge: "Next.js / React / TypeScript",
    link: "https://github.com/verongale/receiptapp",
    image: "/receiptapp.jpeg",
    isCommercial: false
  },
  
  {
    title: "Futura Automotive Platform",
    subtitle: "Corporate Showroom & Tailored Content Management System (Built at Networkers)",
    metric: "Zero-Friction Admin UX",
    description: "Progettazione e sviluppo di una piattaforma per la gestione e presentazione di un catalogo di veicoli ad alte prestazioni. Ho realizzato un'esperienza di amministrazione personalizzata per utenti non tecnici, rendendo la gestione quotidiana dell'inventario semplice, rapida e autonoma.",
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

export const minorProjectsIT: MinorProject[] = [
  {
    year: "2025",
    title: "Technobuild Website",
    description: "Sito WordPress sviluppato con Divi Builder e CSS personalizzato, con particolare attenzione alla realizzazione di una UI responsive.",
    link: "https://technobuild.sviluppo-networkers.it"
  },
  {
    year: "2026",
    title: "Collina delle Rondini Website",
    description: "Sito WordPress sviluppato con Divi Builder, CSS personalizzato e JavaScript per realizzare un'esperienza utente su misura.",
    link: "https://lacollinadellerondini.it" 
  } 
]; 
 
 
export const matrixPointsIT = [ 
  { 
    title: "Il Vantaggio Ibrido", 
    description: "Mi muovo tra design e sviluppo senza considerarli due mondi separati. Posso lavorare sulla struttura e sulla resa visiva di un'interfaccia, ma anche occuparmi di ciò che succede dietro le quinte. Questo mi permette di tradurre esigenze e idee in soluzioni digitali concrete, mantenendo coerenza tra progettazione e implementazione.", 
    bgClass: "bg-brand-yellow text-brand-bg", 
    numberClass: "text-brand-bg/60" 
  }, 
  { 
    title: "Dalle Basi al Futuro", 
    description: "Non mi interessa usare uno strumento senza capire cosa c'è sotto. Ho costruito le mie basi partendo da JavaScript, HTML, CSS, PHP a oggetti e database SQL. Questa conoscenza mi permette di affrontare framework e tecnologie moderne con maggiore consapevolezza e di capire più velocemente come inserirli all'interno di un progetto.", 
    bgClass: "bg-brand-cyan text-brand-bg", 
    numberClass: "text-brand-bg/60" 
  }, 
  { 
    title: "Contesto Internazionale", 
    description: "Ho vissuto per diversi anni negli Stati Uniti, dove ho frequentato anche corsi di livello universitario ottenendo relativi crediti formativi. In seguito ho insegnato inglese per un anno in una scuola. È un'esperienza che mi ha dato una conoscenza dell'inglese costruita sul campo e la capacità di comunicare e lavorare con persone provenienti da contesti diversi.", 
    bgClass: "bg-brand-blue text-brand-bg", 
    numberClass: "text-brand-bg/60" 
  } 
]; 
 
export const heroTextIT = { 
  welcome: "Full-Time · Part-Time · B2B / Partita IVA · Remote", 
  titleBefore: "Ciao, sono", 
  role: "Web Designer & Front-End Developer", 
  manifesto: "Unisco competenze di design e sviluppo per trasformare progetti e idee in interfacce digitali concrete, curate e funzionali.",  
  buttonWork: "Guarda i Progetti", 
  buttonContact: "Connettiamoci" 
}; 
 
export const footerTextIT = { 
  title: "Costruiamo qualcosa insieme.", 
  description: "Sono aperta a opportunità Full-Time e Part-Time, così come a collaborazioni B2B in regime di Partita IVA. Valuto opportunità in Italia e collaborazioni da remoto con team internazionali.", 
  buttonText: "Connettiti su LinkedIn" 
}; 
 
export const navTextIT = { 
  linkHome: "/", 
  navProjects: "Progetti", 
  navPhilosophy: "Il mio approccio", 
  navContact: "Contatti" 
}; 
 
export const skillsIT = [ 
  "React", "TypeScript", "Next.js", "Astro", "Tailwind CSS",  
  "JavaScript", "UI & UX", "PHP", "SQL", "Git", "WordPress", "Figma", "Canva", "Affinity"
];