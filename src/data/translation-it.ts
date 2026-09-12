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

export const navCvTextIT = {
  linkHome: "/",
  navProjects: "Progetti",
  navCv: "Curriculum",
  navContact: "Contatti"
  
};
 
export const skillsIT = [ 
  "React", "TypeScript", "Next.js", "Astro", "Tailwind CSS",  
  "JavaScript", "UI & UX", "PHP", "SQL", "Git", "WordPress", "Figma", "Canva", "Affinity"
];
export const cvDataIT = {
  header: {
    label: "Curriculum Vitae",
    name: "Veronica Galeazzo",
    role: "Web Designer & Front-End Developer",
    intro:
      "Lavoro tra design e sviluppo, combinando progettazione visiva e implementazione front-end per realizzare esperienze digitali chiare, funzionali e responsive.",
  },

  profile: {
    title: "Profilo Professionale",
    text:
      "La mia esperienza comprende la realizzazione di siti web e applicativi, progetti con WordPress e CMS, design UI/UX, landing page, e-commerce e analisi SEO. Lavoro tra la componente visiva e quella tecnica dei progetti digitali, trasformando requisiti e idee in interfacce concrete, funzionali e utilizzabili.",
  },

  experienceTitle: "Esperienza Professionale",

  experience: [
    {
      role: "Web Designer — Freelance",
      period: "Dic 2025 – Presente",
      responsibilities: [
        "Realizzazione di siti vetrina con codice o CMS come WordPress",
        "Sviluppo front-end di siti web e applicativi",
        "Sviluppo back-end di siti web e gestionali",
        "Analisi SEO",
      ],
    },
    {
      role: "Web Designer — Networkers",
      period: "Set 2025 – Set 2026",
      responsibilities: [
        "Realizzazione di siti vetrina con codice o WordPress",
        "Realizzazione e gestione e-commerce",
        "Design UI/UX",
        "Design di landing page",
      ],
    },
    {
      role: "Stagista — Bagubits, Cuneo",
      period: "Giu 2024 – Ago 2024",
      responsibilities: [
        "Realizzazione di siti vetrina con codice o CMS come WordPress",
        "Sviluppo front-end di siti web e applicativi",
        "Sviluppo back-end di siti web e gestionali",
        "Analisi SEO",
      ],
    },
    {
      role:
        "Direttrice didattica e insegnante di inglese — The One School of Languages, Cuneo",
      period: "Lug 2021 – Ott 2022",
      responsibilities: [
        "Supervisione corsi",
        "Front office",
        "Insegnamento della lingua inglese",
      ],
    },
  ],

  educationTitle: "Formazione",

  education: [
    {
      title: "En.A.I.P. — TIC: Tecniche di Programmazione e Sviluppo Software",
      description:
        "Studio di elementi operativi di informatica e tecniche di programmazione e sviluppo software.",
      qualification: "",
    },
    {
      title:
        "Corso universitario in Performing and Visual Arts — UCLA, Los Angeles",
      description:
        "Corso di livello universitario dedicato alle arti performative e visive.",
      qualification: "",
    },
    {
      title: "ITS-ICT Piemonte — Tecnico della comunicazione",
      description:
        "Studio di tecniche di ripresa, montaggio, sound design, grafica e informatica.",
      qualification:
        "Qualifica conseguita: diploma di scuola ad alta specializzazione tecnologica, operatore in videomaking.",
    },
    {
      title:
        'Liceo Classico e Scientifico "S. Pellico-G. Peano" — bilingue',
      description:
        "Studio di materie umanistiche e lingue straniere.",
      qualification: "Qualifica conseguita: Maturità Classica.",
    },
  ],

  skillsTitle: "Competenze Tecniche",

  skills: [
    {
      category: "Front-End & Web",
      items: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Interfacce Web Responsive",
        "Implementazione di UI moderne",
        "Ottimizzazione delle prestazioni Web",
      ],
    },
    {
      category: "Back-End & Database",
      items: ["PHP (conoscenze di base)", "MySQL"],
    },
    {
      category: "CMS & Strumenti",
      items: ["WordPress", "Figma", "Microsoft Office", "Windows"],
    },
    {
      category: "Altro",
      items: ["UI/UX Design", "E-commerce", "Landing Page", "Analisi SEO"],
    },
  ],

  languagesTitle: "Lingue",

  languages: [
    {
      name: "Italiano",
      level: "Madrelingua",
    },
    {
      name: "Inglese",
      level: "C2 / Padronanza professionale",
    },
    {
      name: "Francese",
      level: "B1",
    },
    {
      name: "Spagnolo",
      level: "B1",
    },
  ],

  additionalTitle: "Altre Informazioni",

  additional: "Patente di guida: B1",

  requestCV: {
    label: "CV completo",
    title: "Vuoi ricevere il CV completo?",
    description:
      "Il CV completo, comprensivo dei dati di contatto e delle informazioni aggiuntive, è disponibile su richiesta.",
    button: "Richiedi il CV completo",
  },
};