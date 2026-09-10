import type { Project } from './project';

// 1. I Progetti tradotti
export const projectsDataIT: Project[] = [
  {
    title: "Stellarwatch E-commerce",
    subtitle: "Custom WooCommerce & Data Architecture (Built at Networkers)",
    metric: "93.47% Engagement Rate",
    description: "Progettazione e ingegnerizzazione di un catalogo di orologi di lusso da bozze su carta a produzione. Programmato hook custom per bypassare il checkout nativo in favore di una redirezione su WhatsApp e strutturato i dati con ACF.",
    badge: "WordPress / PHP / ACF",
    link: "https://stellarwatch.it",
    image: "/stellarwatch-mockup.jpeg",
    isCommercial: true
  },
  {
    title: "ReceiptApp Architecture",
    subtitle: "Next.js, React & TypeScript (Independent Tech R&D)",
    metric: "In Corso",
    description: "Un tracciatore di finanze personali type-safe costruito fase per fase per padroneggiare l'architettura a componenti, i controlli a tempo di compilazione e la gestione dello stato moderna.",
    badge: "Next.js / React / TypeScript",
    link: "https://github.com",
    image: "/receiptapp.jpeg",
    isCommercial: false
  },
  {
    title: "Futura Automotive Platform",
    subtitle: "Corporate Showroom & Tailored Content Management System (Built at Networkers)",
    metric: "Zero-Friction Admin UX",
    description: "Progettazione e ingegnerizzazione di un catalogo di veicoli ad alte prestazioni per una concessionaria moderna. Architettura di un backend custom altamente intuitivo, esplicitamente progettato per clienti non tecnici, per aggiornamenti quotidiani dell'inventario senza alcuna formazione.",
    badge: "WordPress / Custom CMS / Admin UX",
    link: "https://futuracar.net",
    image: "/futuracar-it.png",
    isCommercial: true
  }
];

interface MinorProject {
  year: string;
  title: string;
  description: string;
  link: string;
}

export const minorProjectsIT: MinorProject[] = [
  {
    year: "2026",
    title: "Technobuild Website",
    description: "Sito WordPress costruito con Divi Builder e CSS personalizzato",
    link: "https://technobuild.sviluppo-networkers.it"
  },
  {
    year: "2026",
    title: "Collina delle Rondini Website",
    description: "Un sito WordPress costruito con Divi Builder, CSS personalizzato e JavaScript per un'esperienza utente unica.",
    link: "https://lacollinadellerondini.it"
  }
];  

// 2. La Filosofia tradotta
export const matrixPointsIT = [
  {
    title: "Il Vantaggio Ibrido",
    description: "La maggior parte degli sviluppatori odia il design, la maggior parte dei designer teme il codice. Io amo entrambi in egual misura. Trovo la stessa adrenalina nel perfezionare un layout UI e nel risolvere un problema di logica complesso. Questo mi permette di costruire prodotti digitali con un approccio completo, senza compromessi.",
    bgClass: "bg-brand-yellow text-brand-bg",
    numberClass: "text-brand-bg/60"
  },
  {
  title: "Dalle Basi al Futuro",
  description: "Non mi piacciono le scorciatoie alla cieca: amo capire il perché delle cose. Per questo sono partita dalle fondamenta native come JavaScript Vanilla (ES6+), OOP PHP e database SQL, un controllo profondo che oggi mi permette di padroneggiare con rapidità ed efficacia i framework e le architetture moderne più recenti.",
  bgClass: "bg-brand-cyan text-brand-bg",
  numberClass: "text-brand-bg/60"
  },
  {
    title: "Cultura Internazionale",
    description: "Con un livello C2 in inglese, studi di arti visive multimediali e una mentalità da remoto adattiva, sono strutturalmente pronta a integrarmi in team di prodotto cross-border fin dal primo giorno.",
    bgClass: "bg-brand-blue text-brand-bg",
    numberClass: "text-brand-bg/60"
  }
];

// 3. I Testi della Hero tradotti
export const heroTextIT = {
  welcome: "Disponibile per Partita IVA / B2B Remote contracting",
  titleBefore: "Ciao, sono",
  role: "Design Engineer & Sviluppatrice Front-End",
  manifesto: "Sotto lo scoglio...", 
  buttonWork: "Guarda i Progetti",
  buttonContact: "Connettiamoci"
};

export const footerTextIT = {
  title: "Costruiamo qualcosa insieme.",
  description: "Al momento valuto opportunità da remoto e collaborazioni in regime di Partita IVA in tutta Europa.",
  buttonText: "Connettiti su LinkedIn"
};

export const navTextIT = {
  linkHome: "/",
  navProjects: "Progetti",
  navPhilosophy: "Filosofia",
  navContact: "Contatti"
};

export const skillsIT = [
  "React", "TypeScript", "Next.js", "Astro", "Tailwind CSS", 
  "JavaScript Vanilla", "Ingegneria UI", "UX Backend", "PHP", "SQL", "Git"
];
