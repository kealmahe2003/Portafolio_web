# Kevin Alexander Marín — Portafolio

Portafolio personal de **Kevin Alexander Marín**, Full Stack Developer en Valle del Cauca, Colombia.

> Construyo software para resolver problemas reales, desde el levantamiento de requisitos hasta la puesta en producción y el mantenimiento.

El proyecto principal es el caso de estudio del **POS de Crepes & Kaffee**: un sistema que reemplazó las comandas en papel de un restaurante y ha registrado más de 2.200 ventas sin interrupciones.

## Características

- **Bilingüe (ES / EN)** con rutas localizadas (`/es/proyectos/pos` ↔ `/en/projects/pos`) y un selector que conserva la página equivalente.
- **Tema claro y oscuro** sin dependencias y sin parpadeo al cargar. Respeta la preferencia del sistema y recuerda la elección.
- **100 % estático**: todas las páginas se generan en el build.
- **SEO**: metadatos por idioma, `hreflang`, URL canónicas, Open Graph, `sitemap.xml` y `robots.txt`.
- **Accesible**: HTML semántico, foco de teclado visible, enlace para saltar al contenido, contraste AA en ambos temas y soporte de `prefers-reduced-motion`.

## Rendimiento

Lighthouse en perfil móvil (build de producción):

| Página | Performance | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Inicio | 98 | 100 | 100 | 100 |
| Caso de estudio POS | 97 | 100 | 100 | 100 |

Cómo se consigue: Server Components por defecto con solo dos islas de cliente pequeñas (tema e idioma), imágenes optimizadas con `next/image`, fuentes auto-hospedadas con `next/font`, animaciones solo con CSS y ningún script de terceros.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components)
- React 19 y TypeScript estricto
- Tailwind CSS 4
- Despliegue en [Vercel](https://vercel.com)

## Estructura

```text
src/
├── app/
│   ├── [locale]/                 # Rutas localizadas (es, en)
│   │   ├── layout.tsx            # Layout raíz: fuentes, tema, header y footer
│   │   ├── page.tsx              # Inicio
│   │   └── projects/
│   │       ├── page.tsx          # Listado de proyectos
│   │       └── [slug]/page.tsx   # Caso de estudio
│   ├── globals.css               # Tokens de diseño (claro / oscuro)
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/                   # Header
│   ├── projects/                 # Tarjetas de proyecto
│   └── ui/                       # Selector de tema e idioma
├── data/projects.ts              # Proyectos, habilidades y enlaces
└── i18n/
    ├── config.ts                 # Idiomas y rutas localizadas
    └── dictionaries.ts           # Textos en español e inglés
```

Las rutas en español (`/es/proyectos/...`) se sirven desde `app/[locale]/projects/...` mediante `rewrites` en `next.config.ts`.

## Desarrollo local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |

### Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (p. ej. `https://tu-dominio.com`). Se usa en URL canónicas, `sitemap.xml` y Open Graph. |

## Contacto

- Correo: [kealmahe@gmail.com](mailto:kealmahe@gmail.com)
- GitHub: [@kealmahe2003](https://github.com/kealmahe2003)
- LinkedIn: [kevinmarin-fullstack-dev](https://linkedin.com/in/kevinmarin-fullstack-dev)
