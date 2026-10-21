import type { StaticImageData } from "next/image";
import type { Locale } from "@/i18n/config";
import posCover from "../../public/images/projects/pos/crepes-kaffee.jpeg";

type Localized = Record<Locale, string>;

export type Project = {
  slug: string;
  name: string;
  status?: "production" | "inProgress";
  stack: string[];
  summary: Localized;
  image?: { src: StaticImageData; alt: Localized };
  caseStudy?: { title: Localized; body: Localized }[];
};

export const projects: Project[] = [
  {
    slug: "pos",
    name: "POS Crepes & Kaffee",
    status: "production",
    stack: ["React", "TypeScript", "Node.js", "NestJS", "Prisma", "PostgreSQL"],
    summary: {
      es: "Sistema POS que reemplazó las comandas en papel de un restaurante. Interfaz responsiva, API REST y PostgreSQL, usado desde varios dispositivos.",
      en: "POS system that replaced a restaurant's paper order tickets. Responsive UI, REST API and PostgreSQL, used across multiple devices.",
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
          es: "Único responsable técnico desde septiembre de 2025: levantamiento de requisitos, diseño, desarrollo, despliegue y soporte.",
          en: "Sole technical lead since September 2025: requirements gathering, design, development, deployment and support.",
        },
      },
      {
        title: { es: "Requisitos", en: "Requirements" },
        body: {
          es: "Conversaciones con los dueños del negocio, casos de uso e historias de usuario con criterios de aceptación.",
          en: "Conversations with the business owners, use cases, and user stories with acceptance criteria.",
        },
      },
      {
        title: { es: "Arquitectura", en: "Architecture" },
        body: {
          es: "Frontend responsivo en React y TypeScript, API REST en Node.js y base de datos PostgreSQL. El sistema se usa desde varios dispositivos del local.",
          en: "Responsive React and TypeScript frontend, a Node.js REST API and a PostgreSQL database. The system is used from several devices in the restaurant.",
        },
      },
      {
        title: { es: "Evolución técnica", en: "Technical evolution" },
        body: {
          es: "Tras una primera versión del backend, lo migré a NestJS con Prisma.",
          en: "After a first version of the backend, I migrated it to NestJS with Prisma.",
        },
      },
      {
        title: { es: "Calidad", en: "Quality" },
        body: {
          es: "Validación de endpoints con Postman, manejo de errores y correcciones antes del lanzamiento.",
          en: "Endpoint validation with Postman, error handling, and fixes before launch.",
        },
      },
      {
        title: { es: "Resultados", en: "Results" },
        body: {
          es: "Se eliminaron las comandas en papel y el sistema ha registrado más de 2.200 ventas sin interrupciones.",
          en: "Paper tickets were eliminated and the system has recorded more than 2,200 sales without interruptions.",
        },
      },
      {
        title: { es: "Uso de IA", en: "Use of AI" },
        body: {
          es: "Usé Claude Code apoyado en historias de usuario, criterios de aceptación, revisión crítica del código y ADR. La responsabilidad de validar y mantener el sistema es mía.",
          en: "I used Claude Code alongside user stories, acceptance criteria, critical code review and ADRs. Validating and maintaining the system remains my responsibility.",
        },
      },
    ],
  },
  {
    slug: "pixelpocket",
    name: "PixelPocket",
    status: "inProgress",
    stack: ["React Native", "Expo", "TypeScript", "Supabase"],
    summary: {
      es: "Aplicación móvil con React Native, Expo, TypeScript y Supabase.",
      en: "Mobile app built with React Native, Expo, TypeScript and Supabase.",
    },
  },
];

export const caseStudies = projects.filter((p) => p.caseStudy);

export const skills = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "NestJS", "APIs REST", "Prisma ORM"],
  databases: ["PostgreSQL", "MySQL"],
  testing: ["Jest", "Vitest", "Postman"],
  tools: ["Git", "GitHub", "Vercel", "Railway", "Jira", "Figma", "Claude Code"],
  learning: ["Docker"],
};

export const links = {
  email: "kealmahe@gmail.com",
  github: "https://github.com/kealmahe2003",
  linkedin: "https://linkedin.com/in/kevinmarin-fullstack-dev",
};
