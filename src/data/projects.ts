import type { StaticImageData } from "next/image";
import type { Locale } from "@/i18n/config";
import posCover from "../../public/images/projects/pos/crepes-kaffee.jpeg";

type Localized = Record<Locale, string>;

export type Project = {
  slug: string;
  name: string;
  status?: "production" | "academic";
  stack: string[];
  summary: Localized;
  links?: { demo?: string; repo?: string };
  image?: { src: StaticImageData; alt: Localized };
  caseStudy?: { title: Localized; body: Localized }[];
};

export const projects: Project[] = [
  {
    slug: "pos",
    name: "POS Crepes & Kaffee",
    status: "production",
    stack: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Vitest"],
    summary: {
      es: "Sistema POS que reemplazó las comandas en papel de un restaurante. La versión 1, en HTML, CSS y JavaScript puro, está en producción y se usa a diario en el local; la versión 2, con React, TypeScript, NestJS, Prisma y PostgreSQL, está en desarrollo.",
      en: "POS system that replaced a restaurant's paper order tickets. Version 1, built with plain HTML, CSS and JavaScript, is in production and used daily at the restaurant; version 2, with React, TypeScript, NestJS, Prisma and PostgreSQL, is in development.",
    },
    image: {
      src: posCover,
      alt: {
        es: "Kevin Alexander Marín frente al mural de Crepes & Kaffee",
        en: "Kevin Alexander Marín in front of the Crepes & Kaffee mural",
      },
    },
    caseStudy: [
      {
        title: { es: "Contexto y problema", en: "Context and problem" },
        body: {
          es: "Los pedidos se registraban en comandas de papel que podían extraviarse. Eso generaba pedidos no entregados y descuadres de caja.",
          en: "Orders were written on paper tickets that could get lost, leading to undelivered orders and cash register discrepancies.",
        },
      },
      {
        title: { es: "Mi rol", en: "My role" },
        body: {
          es: "Proyecto freelance en el que soy el único responsable técnico desde septiembre de 2025: requerimientos, historias de usuario, desarrollo, pruebas, documentación y soporte de la versión en producción.",
          en: "A freelance project where I've been the sole technical lead since September 2025: requirements, user stories, development, testing, documentation and support for the production version.",
        },
      },
      {
        title: { es: "Requisitos", en: "Requirements" },
        body: {
          es: "Levanté los requerimientos directamente con los dueños, usuarios no técnicos, y traduje sus necesidades operativas en casos de uso e historias de usuario con criterios de aceptación.",
          en: "I gathered requirements directly from the owners, who are non-technical users, and translated their operational needs into use cases and user stories with acceptance criteria.",
        },
      },
      {
        title: { es: "Evolución técnica", en: "Technical evolution" },
        body: {
          es: "La versión 1 la construí desde cero con HTML, CSS y JavaScript puro, sin frameworks; es la que está en producción y se usa a diario en el local. La versión 2 es una reconstrucción desde cero con una mejor arquitectura y un mejor modelo de datos. Aprendí NestJS para este proyecto.",
          en: "I built version 1 from scratch with plain HTML, CSS and JavaScript, no frameworks; it's the version in production and used daily at the restaurant. Version 2 is a ground-up rebuild with a better architecture and data model. I learned NestJS for this project.",
        },
      },
      {
        title: { es: "Arquitectura de la versión 2", en: "Version 2 architecture" },
        body: {
          es: "Frontend en React y TypeScript; backend en NestJS con Prisma ORM y PostgreSQL, con APIs REST, modelo de datos SQL y migraciones. Ya está probada en varios dispositivos, con la aplicación desplegada en un servidor.",
          en: "React and TypeScript frontend; NestJS backend with Prisma ORM and PostgreSQL, with REST APIs, a SQL data model and migrations. It has already been tested on several devices, with the app deployed on a server.",
        },
      },
      {
        title: { es: "Decisión de arquitectura", en: "Architecture decision" },
        body: {
          es: "Documenté en un ADR la decisión de usar PostgreSQL autogestionado en el servidor en lugar de un backend como servicio, para evitar dependencias innecesarias.",
          en: "I documented in an ADR the decision to use self-managed PostgreSQL on the server instead of a backend-as-a-service, to avoid unnecessary dependencies.",
        },
      },
      {
        title: { es: "Calidad", en: "Quality" },
        body: {
          es: "Valido los endpoints con Postman y documento el sistema en los repositorios. La versión 2 tiene pruebas automatizadas con Vitest: unitarias en el frontend y el backend, y de extremo a extremo en la API. En mis propias pruebas, antes del lanzamiento, detecté un error en los pagos divididos: los pagos con efectivo y transferencia se registraban como efectivo en la caja. Lo corregí sin afectar la operación real.",
          en: "I validate endpoints with Postman and keep technical documentation in the repositories. Version 2 has automated tests with Vitest: unit tests on the frontend and backend, and end-to-end tests for the API. In my own testing before launch, I caught a bug in split payments: payments made with cash and bank transfer were recorded as cash in the register. I fixed it without affecting real operations.",
        },
      },
      {
        title: { es: "Resultados", en: "Results" },
        body: {
          es: "El sistema reemplazó las comandas en papel: cada pedido queda registrado y se han procesado más de 2.200 ventas sin interrupciones.",
          en: "The system replaced the paper tickets: every order is recorded, and more than 2,200 sales have been processed without interruptions.",
        },
      },
      {
        title: { es: "Uso de IA", en: "Use of AI" },
        body: {
          es: "Uso Claude Code configurado con archivos de instrucciones del proyecto (CLAUDE.md / AGENTS.md), documentación y ADR, y le doy como contexto historias de usuario, criterios de aceptación y requerimientos funcionales y no funcionales. Reviso el código generado y descarto lo que agrega complejidad o dependencias innecesarias. La responsabilidad de validar y mantener el sistema es mía.",
          en: "I use Claude Code set up with project instruction files (CLAUDE.md / AGENTS.md), documentation and ADRs, and give it user stories, acceptance criteria and functional and non-functional requirements as context. I review the generated code and discard anything that adds unnecessary complexity or dependencies. Validating and maintaining the system remains my responsibility.",
        },
      },
    ],
  },
  {
    slug: "fincalc",
    name: "FinCalc — Ingeniería Económica",
    status: "academic",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Zustand", "Gemini API"],
    summary: {
      es: "App web educativa con calculadoras financieras, wiki de conceptos y asistente con IA. Proyecto en equipo de 10 personas en la Universidad del Valle: creé la primera versión y el despliegue, rediseñé la interfaz con tema claro/oscuro, conecté el chatbot a la versión actualizada de la API de Gemini y añadí la exportación a Excel.",
      en: "Educational web app with financial calculators, a concepts wiki and an AI assistant. A 10-person team project at Universidad del Valle: I built the first version and deployment, redesigned the UI with light/dark themes, connected the chatbot to the updated Gemini API, and added Excel export.",
    },
    links: {
      demo: "https://ing-economica-sistemas.vercel.app/",
      repo: "https://github.com/kealmahe2003/Proyecto-Ing-economica",
    },
  },
];

export const caseStudies = projects.filter((p) => p.caseStudy);

export const links = {
  email: "kealmahe@gmail.com",
  github: "https://github.com/kealmahe2003",
  linkedin: "https://linkedin.com/in/kevinmarin-fullstack-dev",
};
