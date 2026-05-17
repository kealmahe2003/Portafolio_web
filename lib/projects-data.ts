export type ProjectLang = {
  title: string;
  company: string;
  period: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  features: string[];
  role: string;
};

export type Project = {
  slug: string;
  visual: "pos" | "ecommerce";
  tags: string[];
  liveUrl?: string;
  es: ProjectLang;
  en: ProjectLang;
};

export const PROJECTS: Project[] = [
  {
    slug: "crepes-kaffee",
    visual: "pos",
    tags: ["React 18", "Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma ORM", "Socket.IO", "JWT", "TanStack Query", "Vitest", "Jest"],
    es: {
      title: "Sistema POS",
      company: "Crepes & Kaffee",
      period: "Sept 2025 – Abr 2026",
      tagline: "Co-fundador técnico del negocio. Sistema POS en producción desde el primer día de apertura, con más de 1.800 ventas en 8 meses continuos y sincronización en tiempo real entre dispositivos.",
      role: "Full Stack Developer · Co-fundador técnico · Presencial",
      description:
        "Como co-fundador técnico, tuve responsabilidad total sobre la infraestructura digital con autonomía completa en decisiones de arquitectura. Diseñé el sistema en capas estrictas (routes → controllers → services → Prisma) para facilitar testing y mantenimiento independiente por módulo. Implementé sincronización en tiempo real con Socket.IO usando salas por módulo (mesas, pedidos, caja), permitiendo que múltiples dispositivos reflejen cualquier cambio de estado al instante. Lideré la migración completa del sistema legacy (HTML/CSS/JS vanilla con localStorage) a React + Node.js + PostgreSQL manteniendo la operación activa. Resolví vulnerabilidades concretas: eliminé un JWT secret con fallback hardcoded, reemplacé CORS wildcard por lista blanca de orígenes e implementé Helmet para headers HTTP seguros.",
      stats: [
        { value: "1.800+", label: "Ventas procesadas" },
        { value: "245+", label: "Sesiones de caja" },
        { value: "8 meses", label: "En producción continua" },
        { value: "80", label: "Productos activos" },
      ],
      features: [
        "Arquitectura en capas (routes → controllers → services → Prisma ORM)",
        "Sincronización en tiempo real con Socket.IO — salas por módulo (mesas, pedidos, caja)",
        "Autenticación JWT con control de acceso por roles (Administrador, Cajero, Mesero)",
        "Suite de tests: Jest + Supertest (backend) y Vitest + React Testing Library (frontend)",
        "Rollback compensatorio en cliente para operaciones multi-paso sin transacción atómica",
        "Migración de sistema legacy (vanilla + localStorage) a React + Node.js + PostgreSQL",
        "Hardening de seguridad: JWT secret, CORS whitelist y Helmet para headers HTTP",
      ],
    },
    en: {
      title: "POS System",
      company: "Crepes & Kaffee",
      period: "Sept 2025 – Apr 2026",
      tagline: "Technical co-founder of the business. POS system live from day one, with 1,800+ sales over 8 continuous months and real-time multi-device sync.",
      role: "Full Stack Developer · Technical co-founder · On-site",
      description:
        "As technical co-founder, I held full responsibility over the digital infrastructure with complete autonomy on architecture decisions. I designed a strict layered architecture (routes → controllers → services → Prisma) for independent testability and maintenance per module. I built real-time sync with Socket.IO using per-module rooms (tables, orders, cash register), letting multiple devices reflect any state change instantly. I led a full migration from the legacy system (vanilla HTML/CSS/JS with localStorage) to React + Node.js + PostgreSQL while keeping the business running. I fixed concrete security vulnerabilities: removed a hardcoded JWT secret fallback, replaced CORS wildcard with an origin whitelist, and added Helmet for secure HTTP headers.",
      stats: [
        { value: "1,800+", label: "Sales processed" },
        { value: "245+", label: "Cash register sessions" },
        { value: "8 months", label: "Continuous production" },
        { value: "80", label: "Active products" },
      ],
      features: [
        "Layered architecture (routes → controllers → services → Prisma ORM)",
        "Real-time sync with Socket.IO — per-module rooms (tables, orders, cash register)",
        "JWT authentication with role-based access control (Admin, Cashier, Waiter)",
        "Test suite: Jest + Supertest (backend) and Vitest + React Testing Library (frontend)",
        "Compensatory client-side rollback for multi-step operations without atomic backend transactions",
        "Migration from legacy system (vanilla + localStorage) to React + Node.js + PostgreSQL",
        "Security hardening: JWT secret, CORS whitelist and Helmet for HTTP headers",
      ],
    },
  },
  {
    slug: "frenchie-cases",
    visual: "ecommerce",
    liveUrl: "https://frenchiecases.vercel.app",
    tags: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "MercadoPago", "Zod", "Resend", "Jest", "Vitest", "Vercel", "Railway"],
    es: {
      title: "E-commerce de accesorios móviles",
      company: "Frenchie Cases",
      period: "Mar 2026 – May 2026",
      tagline: "Reemplacé un proceso de ventas manual (WhatsApp + transferencia) con una plataforma propia en producción. 436 tests automatizados, auditoría de seguridad con 25 correcciones y MVP desplegado en 3 semanas.",
      role: "Desarrollador freelance full stack · Remoto",
      description:
        "Diseñé la arquitectura completa del sistema de forma independiente: frontend desacoplado en Vercel (Next.js 16) y backend en Railway (Express + PostgreSQL), con comunicación via REST API y cookies HTTP-only cross-domain. Construí la integración con MercadoPago — tarjeta/PSE via Payment Brick (tokenización client-side), pago contra entrega y WhatsApp — con órdenes idempotentes, validación de stock en prisma.$transaction() antes del cobro y firma de webhooks verificada por HMAC-SHA256 con crypto.timingSafeEqual para prevenir timing attacks. Conduje una auditoría de seguridad propia que identificó y corrigió 25 vulnerabilidades: IDOR en órdenes, XSS en emails HTML, user enumeration en login, subida de archivos maliciosos (magic bytes), PII en localStorage y más.",
      stats: [
        { value: "3 semanas", label: "MVP en producción" },
        { value: "436", label: "Tests automatizados" },
        { value: "25", label: "Vulnerabilidades corregidas" },
        { value: "3 métodos", label: "De pago integrados" },
      ],
      features: [
        "Arquitectura desacoplada: Next.js 16 en Vercel + Express/PostgreSQL en Railway",
        "MercadoPago con webhook verificado por HMAC-SHA256 y órdenes idempotentes",
        "Stock validado dentro de prisma.$transaction() — rollback automático si hay insuficiencia",
        "Autenticación por sesión persistida en BD (no JWT), con cookies httpOnly + sameSite",
        "Validación de uploads en dos capas: extensión y magic bytes (JPEG/PNG/WebP)",
        "209 tests de backend (Jest + Supertest) y 227 de frontend (Vitest + Testing Library)",
        "Auditoría de seguridad propia: 25 hallazgos corregidos antes del lanzamiento final",
      ],
    },
    en: {
      title: "Mobile accessories e-commerce",
      company: "Frenchie Cases",
      period: "Mar 2026 – May 2026",
      tagline: "Replaced a fully manual sales process (WhatsApp + bank transfer) with a production platform. 436 automated tests, security audit with 25 fixes, and MVP deployed in 3 weeks.",
      role: "Freelance full stack developer · Remote",
      description:
        "I independently designed the full system architecture: decoupled frontend on Vercel (Next.js 16) and backend on Railway (Express + PostgreSQL), communicating via REST API with cross-domain HTTP-only cookies. I built the MercadoPago integration — card/PSE via Payment Brick (client-side tokenization), cash on delivery and WhatsApp — with idempotent order creation, stock validation inside prisma.$transaction() before charging, and webhook signatures verified with HMAC-SHA256 using crypto.timingSafeEqual to prevent timing attacks. I conducted a self-driven security audit that identified and fixed 25 vulnerabilities: IDOR on orders, XSS in HTML emails, login user enumeration, malicious file uploads (magic bytes), PII in localStorage, and more.",
      stats: [
        { value: "3 weeks", label: "MVP to production" },
        { value: "436", label: "Automated tests" },
        { value: "25", label: "Security fixes" },
        { value: "3 methods", label: "Payment integrations" },
      ],
      features: [
        "Decoupled architecture: Next.js 16 on Vercel + Express/PostgreSQL on Railway",
        "MercadoPago with HMAC-SHA256 verified webhook and idempotent order creation",
        "Stock validated inside prisma.$transaction() — automatic rollback on insufficient inventory",
        "Session-based auth persisted in DB (not JWT), with httpOnly + sameSite cookies",
        "Two-layer upload validation: file extension and magic bytes (JPEG/PNG/WebP)",
        "209 backend tests (Jest + Supertest) and 227 frontend tests (Vitest + Testing Library)",
        "Self-driven security audit: 25 findings fixed before final launch",
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
