import type { Locale } from "./config";

const es = {
  meta: {
    title: "Kevin Alexander Marín — Full Stack Developer",
    description:
      "Desarrollador Full Stack freelance y estudiante de último año de Ingeniería de Sistemas en la Universidad del Valle. Construí el POS de Crepes & Kaffee: más de 2.200 ventas. Disponible para práctica o rol junior.",
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
    availability: "Disponible para práctica o rol junior · con aval de la universidad",
    title: "Full Stack Developer",
    value:
      "Construyo software para resolver problemas reales, desde los requisitos hasta producción.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    photoAlt: "Retrato de Kevin Alexander Marín",
    facts: {
      location: { label: "Ubicación", value: "Zarzal, Valle del Cauca, Colombia", detail: "" },
      studies: { label: "Estudios", value: "Ingeniería de Sistemas · Universidad del Valle", detail: "2021 – Actualidad" },
      experience: { label: "Experiencia", value: "Full Stack Developer (Freelance) · Crepes & Kaffee", detail: "Sep. 2025 – Actualidad" },
    },
  },
  featured: {
    eyebrow: "Proyecto principal",
    metric: "+2.200 ventas registradas sin interrupciones",
    readCase: "Leer caso de estudio",
  },
  projects: {
    title: "Otros proyectos",
    status: {
      production: "En producción",
      academic: "Académico",
    },
    demo: "Demo",
    repo: "Código",
    stack: "Stack",
    back: "Volver a proyectos",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy estudiante de último año de Ingeniería de Sistemas en la Universidad del Valle (finalización prevista en 2027) y desarrollador Full Stack freelance. Como único responsable técnico, construí desde cero el POS de Crepes & Kaffee: reemplazó las comandas en papel del negocio y ha registrado más de 2.200 ventas sin interrupciones.",
      "He trabajado todo el proceso: levantar requerimientos con personas no técnicas, construir, probar, documentar y dar soporte. Trabajo con agentes de IA configurados con instrucciones de proyecto, documentación y registros de decisiones de arquitectura (ADR), y reviso el código que generan antes de aceptarlo.",
      "Busco una práctica o un rol junior en TI donde aportar en desarrollo de software, datos o automatización de procesos, aprender de un equipo profesional y crecer en despliegue e infraestructura; hoy estoy aprendiendo Docker. Me mueven las ganas de aprender (aprendí NestJS para la segunda versión del POS), la autonomía y convertir las necesidades de personas no técnicas en software que usan a diario.",
    ],
    languages: { label: "Idiomas", value: "Español (nativo) · Inglés (B1, lectura de documentación técnica)" },
  },
  skills: {
    title: "Stack tecnológico",
    groups: [
      { label: "Lenguajes", items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS", "Java y Python (conocimientos)"] },
      { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Angular (nivel inicial)"] },
      { label: "Backend", items: ["Node.js", "NestJS", "APIs REST", "Prisma ORM", "Arquitectura en capas"] },
      { label: "Bases de datos", items: ["PostgreSQL", "MySQL"] },
      { label: "Pruebas", items: ["Jest", "Vitest", "Postman"] },
      {
        label: "IA",
        items: [
          "Claude Code (uso actual)",
          "Modelos de Gemini (uso previo en desarrollo)",
          "API de Gemini (chatbots en proyectos universitarios)",
          "Configuración de agentes con CLAUDE.md / AGENTS.md y ADR",
        ],
      },
      { label: "Herramientas", items: ["Git", "GitHub", "Vercel", "Railway", "Jira", "Figma"] },
      { label: "Metodologías", items: ["Scrum", "Historias de usuario", "Casos de uso"] },
      { label: "En aprendizaje", items: ["Docker", "Interés en Linux y AWS"] },
    ],
  },
  experience: {
    title: "Experiencia y formación",
    items: [
      { period: "Sep. 2025 – Actualidad", role: "Full Stack Developer (Freelance)", place: "Crepes & Kaffee", detail: "" },
      {
        period: "2021 – Previsto 2027",
        role: "Ingeniería de Sistemas",
        place: "Universidad del Valle, sede Tuluá",
        detail: "Último año, con aval de la universidad para realizar la práctica. Proyectos en equipo con Scrum, Jira y Git.",
      },
      { period: "2019 – 2020", role: "Técnico en Mantenimiento y Reparación de Equipos de Cómputo", place: "SENA", detail: "" },
    ],
  },
  contact: {
    title: "Contacto",
    body: "¿Tienes una práctica, un rol junior o un proyecto? Escríbeme.",
    availability:
      "Busco una práctica o un rol junior en TI: desarrollo de software, datos o automatización de procesos. Cuento con aval de la universidad para realizar la práctica.",
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
      "Freelance Full Stack Developer and final-year Systems Engineering student at Universidad del Valle. I built the Crepes & Kaffee POS: 2,200+ sales. Available for an internship or junior role.",
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
    availability: "Available for an internship or junior role · internship approved by my university",
    title: "Full Stack Developer",
    value:
      "I build software that solves real-world problems, from requirements gathering to deployment and maintenance.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    photoAlt: "Portrait of Kevin Alexander Marín",
    facts: {
      location: { label: "Location", value: "Zarzal, Valle del Cauca, Colombia", detail: "" },
      studies: { label: "Education", value: "Systems Engineering · Universidad del Valle", detail: "2021 – Present" },
      experience: { label: "Experience", value: "Full Stack Developer (Freelance) · Crepes & Kaffee", detail: "Sep 2025 – Present" },
    },
  },
  featured: {
    eyebrow: "Featured project",
    metric: "2,200+ sales recorded without interruptions",
    readCase: "Read case study",
  },
  projects: {
    title: "More projects",
    status: {
      production: "In production",
      academic: "Academic",
    },
    demo: "Demo",
    repo: "Code",
    stack: "Stack",
    back: "Back to projects",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a final-year Systems Engineering student at Universidad del Valle (expected graduation 2027) and a freelance Full Stack Developer. As the sole technical lead, I built the Crepes & Kaffee POS from scratch: it replaced the business's paper order tickets and has recorded more than 2,200 sales without interruptions.",
      "I've worked through the whole process: gathering requirements with non-technical people, building, testing, documenting and supporting. I work with AI agents set up with project instructions, documentation and architecture decision records (ADRs), and I review the code they generate before accepting it.",
      "I'm looking for an internship or a junior IT role where I can contribute to software development, data or process automation, learn from a professional team and grow into deployment and infrastructure; I'm currently learning Docker. I'm driven by a willingness to learn (I learned NestJS for the second version of the POS), autonomy, and turning the needs of non-technical people into software they use every day.",
    ],
    languages: { label: "Languages", value: "Spanish (native) · English (B1, reading technical documentation)" },
  },
  skills: {
    title: "Tech stack",
    groups: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS", "Java and Python (working knowledge)"] },
      { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Angular (beginner)"] },
      { label: "Backend", items: ["Node.js", "NestJS", "REST APIs", "Prisma ORM", "Layered architecture"] },
      { label: "Databases", items: ["PostgreSQL", "MySQL"] },
      { label: "Testing", items: ["Jest", "Vitest", "Postman"] },
      {
        label: "AI",
        items: [
          "Claude Code (current)",
          "Gemini models (previously, for development)",
          "Gemini API (chatbots in university projects)",
          "Agent setup with CLAUDE.md / AGENTS.md and ADRs",
        ],
      },
      { label: "Tools", items: ["Git", "GitHub", "Vercel", "Railway", "Jira", "Figma"] },
      { label: "Methodologies", items: ["Scrum", "User stories", "Use cases"] },
      { label: "Currently learning", items: ["Docker", "Interested in Linux and AWS"] },
    ],
  },
  experience: {
    title: "Experience & education",
    items: [
      { period: "Sep 2025 – Present", role: "Full Stack Developer (Freelance)", place: "Crepes & Kaffee", detail: "" },
      {
        period: "2021 – Expected 2027",
        role: "Systems Engineering",
        place: "Universidad del Valle, Tuluá campus",
        detail: "Final year, with university approval to do an internship. Team projects with Scrum, Jira and Git.",
      },
      { period: "2019 – 2020", role: "Computer Maintenance and Repair Technician", place: "SENA", detail: "" },
    ],
  },
  contact: {
    title: "Contact",
    body: "Have an internship, a junior role or a project? Get in touch.",
    availability:
      "I'm looking for an internship or a junior IT role: software development, data or process automation. My university has approved me to do an internship.",
    email: "Email",
  },
  footer: {
    rights: "Kevin Alexander Marín",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
