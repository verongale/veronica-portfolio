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
    image: "https://unsplash.com",
    isCommercial: true
  },
  {
    title: "ReceiptApp Architecture",
    subtitle: "Next.js, React & TypeScript (Independent Tech R&D)",
    metric: "In Corso",
    description: "Un tracciatore di finanze personali type-safe costruito fase per fase per padroneggiare l'architettura a componenti, i controlli a tempo di compilazione e la gestione dello stato moderna.",
    badge: "Next.js / React / TypeScript",
    link: "https://github.com",
    image: "https://unsplash.com",
    isCommercial: false
  }
];

// 2. La Filosofia tradotta
export const matrixPointsIT = [
  {
    title: "Il Vantaggio Ibrido",
    description: "La maggior parte degli sviluppatori odia il design, la maggior parte dei designer teme il terminale. Io amo entrambi in egual misura. Trovo la stessa adrenalina nel perfezionare un layout UI e nel risolvere un errore TypeScript.",
    bgClass: "bg-brand-yellow text-brand-bg",
    numberClass: "text-brand-bg/60"
  },
  {
    title: "Basi Vanilla Eccezionali",
    description: "Non ho imparato solo scorciatoie da framework. La mia formazione software (En.A.I.P.) si è concentrata su JavaScript Vanilla puro (ES6+), PHP a oggetti e database relazionali SQL.",
    bgClass: "bg-brand-cyan text-brand-bg",
    numberClass: "text-brand-bg/60"
  },
  {
    title: "Cultura Internazionale",
    description: "Con un livello C2 in inglese, studi di arti visive multimediali e una mentalità da remoto adattiva, sono strutturalmente pronta a integrarmi in team di prodotto cross-border fin dal primo giorno.",
    bgClass: "bg-gradient-to-br from-brand-yellow to-brand-cyan text-brand-bg",
    numberClass: "text-brand-bg/60"
  }
];

// 3. I Testi della Hero tradotti
export const heroTextIT = {
  welcome: "Disponibile per Partita IVA / B2B Remote contracting",
  role: "Design Engineer & Sviluppatrice Front-End",
  manifesto: "Sotto lo scoglio tra composizione creativa e sistemi type-safe. Amo la scarica creativa del design di un'interfaccia, ma provo la stessa identica soddisfazione nell'ingegnerizzare il codice per farla funzionare senza errori. L'intero processo e lo studio dietro sono pura adrenalina.",
  buttonWork: "Guarda i Progetti",
  buttonContact: "Contattami"
};

export const footerTextIT = {
  title: "Costruiamo qualcosa insieme.",
  description: "Al momento valuto opportunità da remoto e collaborazioni in regime di Partita IVA in tutta Europa.",
  buttonText: "Connettiti su LinkedIn"
};