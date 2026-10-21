import type { Locale } from "./config";

const es = {
  meta: {
    title: "Kevin Alexander Marín — Full Stack Developer",
    description:
      "Full Stack Developer en Valle del Cauca, Colombia. Construyo software para resolver problemas reales, desde los requisitos hasta producción.",
    projectsTitle: "Proyectos",
    projectsDescription: "Proyectos y casos de estudio de Kevin Alexander Marín.",
  },
  nav: {
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    skipToContent: "Saltar al contenido",
    toggleTheme: "Cambiar tema claro/oscuro",
    language: "Idioma",
  },
  hero: {
    title: "Full Stack Developer",
    value:
      "Construyo software para resolver problemas reales, desde los requisitos hasta producción.",
    location: "Valle del Cauca, Colombia",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
  },
  featured: {
    eyebrow: "Proyecto principal",
    metric: "+2.200 ventas registradas sin interrupciones",
    readCase: "Leer caso de estudio",
  },
  projects: {
    title: "Otros proyectos",
    allTitle: "Proyectos",
    status: {
      production: "En producción",
      inProgress: "En desarrollo",
    },
    stack: "Stack",
    back: "Volver a proyectos",
  },
  about: {
    title: "Sobre mí",
    body: "Soy Full Stack Developer en Crepes & Kaffee desde septiembre de 2025 y estudiante de último año de Ingeniería de Sistemas en la Universidad del Valle (finalización prevista en 2027). Me interesa resolver problemas reales de negocio de punta a punta: requisitos, diseño, desarrollo, despliegue y soporte.",
  },
  skills: {
    title: "Stack tecnológico",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      testing: "Pruebas",
      tools: "Herramientas",
      learning: "En aprendizaje",
    },
  },
  experience: {
    title: "Experiencia y formación",
    items: [
      { period: "Sep. 2025 – Actualidad", role: "Full Stack Developer", place: "Crepes & Kaffee" },
      { period: "2021 – Previsto 2027", role: "Ingeniería de Sistemas", place: "Universidad del Valle, sede Tuluá" },
      { period: "2019 – 2020", role: "Técnico en Mantenimiento y Reparación de Equipos de Cómputo", place: "SENA" },
    ],
  },
  contact: {
    title: "Contacto",
    body: "¿Tienes un proyecto o una oportunidad? Escríbeme.",
    email: "Correo",
  },
  footer: {
    rights: "Kevin Alexander Marín",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "Kevin Alexander Marín — Full Stack Developer",
    description:
      "Full Stack Developer based in Valle del Cauca, Colombia. I build software that solves real-world problems, from requirements gathering to deployment.",
    projectsTitle: "Projects",
    projectsDescription: "Projects and case studies by Kevin Alexander Marín.",
  },
  nav: {
    projects: "Projects",
    about: "About",
    contact: "Contact",
    skipToContent: "Skip to content",
    toggleTheme: "Toggle light/dark theme",
    language: "Language",
  },
  hero: {
    title: "Full Stack Developer",
    value:
      "I build software that solves real-world problems, from requirements gathering to deployment and maintenance.",
    location: "Valle del Cauca, Colombia",
    viewProjects: "View projects",
    downloadCv: "Download CV",
  },
  featured: {
    eyebrow: "Featured project",
    metric: "2,200+ sales recorded without interruptions",
    readCase: "Read case study",
  },
  projects: {
    title: "More projects",
    allTitle: "Projects",
    status: {
      production: "In production",
      inProgress: "In development",
    },
    stack: "Stack",
    back: "Back to projects",
  },
  about: {
    title: "About",
    body: "I've been a Full Stack Developer at Crepes & Kaffee since September 2025, and I'm a final-year Systems Engineering student at Universidad del Valle (expected graduation 2027). I enjoy solving real business problems end to end: requirements, design, development, deployment and support.",
  },
  skills: {
    title: "Tech stack",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      testing: "Testing",
      tools: "Tools",
      learning: "Currently learning",
    },
  },
  experience: {
    title: "Experience & education",
    items: [
      { period: "Sep 2025 – Present", role: "Full Stack Developer", place: "Crepes & Kaffee" },
      { period: "2021 – Expected 2027", role: "Systems Engineering", place: "Universidad del Valle, Tuluá campus" },
      { period: "2019 – 2020", role: "Computer Maintenance and Repair Technician", place: "SENA" },
    ],
  },
  contact: {
    title: "Contact",
    body: "Have a project or an opportunity? Get in touch.",
    email: "Email",
  },
  footer: {
    rights: "Kevin Alexander Marín",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
