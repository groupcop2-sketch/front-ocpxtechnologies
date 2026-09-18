# OCPX Technologies — Sitio corporativo

Landing page corporativa de **OCPX Technologies**, empresa de soluciones tecnológicas B2B.

**Tecnología que impulsa lo que viene.**  
**IDEAS | SOLUCIONES | RESULTADOS**

Este repositorio está preparado para convertirse en el sitio corporativo completo: arquitectura escalable, SEO técnico, formulario de contacto, páginas legales y despliegue en Vercel.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- React Hook Form + Zod
- Lucide Icons
- Vercel Analytics / Speed Insights

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Instalación

```bash
npm install
```

Instala las dependencias definidas en `package.json`.

## Desarrollo

```bash
npm run dev
```

Inicia el servidor local de desarrollo, normalmente en [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copia `.env.example` a `.env.local` y completa solo los valores reales:

```bash
cp .env.example .env.local
```

| Variable | Alcance | Uso |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Pública | Canonical, Open Graph, sitemap, robots y JSON-LD |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Pública | Correo visible en la página, si existe |
| `CONTACT_EMAIL` | Privada | Destinatario del formulario |
| `CONTACT_FROM_EMAIL` | Privada | Remitente verificado si se usa Resend |
| `RESEND_API_KEY` | Privada | Envío de correo |
| `CONTACT_WEBHOOK_URL` | Privada | Integración con CRM o automatización |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Pública | No configurar con IDs ficticios |

Las variables privadas **nunca** deben usar el prefijo `NEXT_PUBLIC_`.

El formulario solo confirma éxito si Resend o el webhook responden correctamente.

## Build

```bash
npm run build
```

Genera y valida el build optimizado para producción. No ignora errores de TypeScript ni de ESLint.

```bash
npm start
```

Ejecuta localmente la versión de producción después del build.

```bash
npm run lint
npm run typecheck
```

Revisan calidad de código y tipos.

## Estructura

```text
src/
├── app/            # Rutas, metadata, sitemap, robots, API
├── components/     # Layout, secciones, UI y compartidos
├── config/         # Empresa, URL del sitio, entorno
├── constants/      # Contenido y navegación
├── hooks/          # Hooks de interfaz
├── lib/            # SEO, analytics, contacto, utilidades
├── services/       # Contratos de integración
└── types/          # Tipos compartidos
```

El contenido comercial vive en `src/config` y `src/constants`. No inventar clientes, métricas, testimonios, direcciones, teléfonos ni redes.

## SEO

Incluye de origen:

- Metadata API (title, description, canonical, Open Graph, Twitter)
- `sitemap.ts` y `robots.ts`
- JSON-LD de Organization y ProfessionalService
- Manifest PWA
- Favicon y Apple Touch Icon oficiales
- Imagen Open Graph 1200×630

La URL canónica se deriva de `NEXT_PUBLIC_SITE_URL`. No hardcodear el dominio en los componentes.

## Formulario de contacto

- Validación en cliente y servidor con Zod
- Honeypot, control de tiempo y rate limiting
- Comprobación de origen
- Estados: idle, loading, success y error

Para activarlo en producción configura Resend **o** `CONTACT_WEBHOOK_URL`.

## Deploy en Vercel

1. Importa el repositorio en Vercel.
2. Framework: Next.js (detección automática).
3. Define `NEXT_PUBLIC_SITE_URL` con el dominio final.
4. Añade las variables privadas del formulario cuando el canal esté listo.
5. Deploy.

Comandos equivalentes en cualquier entorno:

```bash
npm install
npm run build
npm start
```

## Marca

Los originales de marca están en `img/`. Las versiones optimizadas se sirven desde `public/brand/` y `public/icons/`.

## Pendientes de información real

Cuando existan datos corporativos verificables, actualizar:

- `src/config/site.ts` (ciudad, teléfono, dirección, redes)
- `.env.local` (correo y canal de envío)
- `src/constants/projects.ts` (casos reales, sin métricas inventadas)
