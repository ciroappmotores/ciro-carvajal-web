# Ciro Carvajal — Sitio profesional

> Ingeniería, conocimiento y tecnología aplicados a soluciones reales.

Sitio web profesional de Ciro Carvajal: **Ingeniero Mecánico · Doctor · Consultor · Docente Universitario · Especialista SST · Inteligencia Artificial · Desarrollador Web**.

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | HTML5 · CSS3 · JavaScript (vanilla) · jQuery |
| Datos | JSON (indicadores, contenido) |
| Backend / automatización | Python · PHP · GitHub Actions · Cloudflare Workers |
| Control de versiones | Git · GitHub |

## Estructura

```
/
├── index.html          Inicio (13 secciones)
├── perfil.html         Trayectoria, formación, CV inteligente
├── servicios.html      6 líneas de servicio
├── proyectos.html      Portafolio + caso ACIEM NDS
├── conocimiento.html   Insight de la semana + índice temático
├── desarrollo.html     Stack, metodología en V, GitHub
├── contacto.html       Formulario, WhatsApp, correo, LinkedIn
├── 404.html            Página no encontrada
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/styles.css          Sistema visual (paleta, componentes)
│   ├── css/responsive.css      Media queries
│   ├── img/favicon.svg
│   └── img/ciro/               Foto del hero (WebP + JPEG + PNG fuente)
├── js/
│   ├── main.js                 Menú móvil
│   ├── perfil.js               Currículum inteligente
│   ├── proyectos.js            Filtros del portafolio
│   ├── conocimiento.js         Filtro del índice temático
│   └── contacto.js             Formulario + canales directos
├── scripts/optimize-hero.py    Optimización de la imagen del hero
└── docs/ARQUITECTURA-V1.md     Arquitectura y ruta de versiones
```

## Identidad visual

- **Paleta:** azul petróleo `#082F49` · azul tech `#0369A1` · cian `#06B6D4` · grafito `#111827` · gris claro `#F1F5F9` · blanco · ámbar `#F59E0B`
- **Tipografía:** Manrope (títulos) + Inter (cuerpo)

## Ruta de versiones

| Versión | Contenido | Estado |
|---|---|---|
| V1.0 | Identidad y arquitectura | ✅ |
| V1.1 | Header / Hero | ✅ |
| V1.2 | Perfil | ✅ |
| V1.3 | Servicios | ✅ |
| V1.4 | Proyectos | ✅ |
| V1.5 | Conocimiento | ✅ |
| V1.6 | Desarrollo | ✅ |
| V1.7 | Contacto | ✅ |
| V1.8 | Home completo (13 secciones) | ✅ |
| V1.9 | Calidad (SEO, rendimiento, favicon) | ✅ |
| V1.10 | Lista para publicación | ✅ |
| V2.0 | IA + RAG + automatización | ⏳ pendiente |

## Reproducir la optimización de imagen

```bash
python scripts/optimize-hero.py
```

Genera `ciro-carvajal-hero.webp` (≈100 KB) y `ciro-carvajal-hero.jpg` (≈145 KB)
a partir del PNG fuente (≈1.8 MB).

## Estado de publicación

🌍 **En línea (GitHub Pages):** https://ciroappmotores.github.io/ciro-carvajal-web/

- Repo público, Pages activado desde `main`/raíz, `.nojekyll` incluido.
- Canonical, sitemap y Open Graph apuntan temporalmente a la URL de GitHub Pages.
- Al adquirir el **dominio final**, basta con: configurar el dominio personalizado
  en GitHub Pages (Settings → Pages → Custom domain) y reemplazar la base
  `https://ciroappmotores.github.io/ciro-carvajal-web` por el dominio final en
  canonical, og:url, og:image, sitemap.xml y robots.txt (un único reemplazo de texto).

## Pendientes

1. **Dominio y hosting definitivos** → migrar el site y actualizar la base de URL (ver arriba).
2. **YouTube** → verificar el canal real (hoy apunta a la portada de la plataforma). Instagram ya quedó real: `instagram.com/ciroantoniocarvajal`.
3. **Testimonios reales** → `index.html` (sección con marcadores en gris).

> ✅ Ya activados: correos, WhatsApp (310 2754610 · 300 6083832), LinkedIn real,
> **CV en PDF** descargable (`assets/docs/CV-Ciro-Carvajal.pdf`), y credenciales completas
> en `perfil.html`: Matrícula Profesional, ORCID, CvLAC (Minciencias), Scopus, **Google Scholar**,
> producción académica, experiencia laboral real, ACIEM (vicepresidencia capítulo NS)
> y JSON-LD `Person` con perfiles (sameAs).
>
> 🔒 Datos personales (cédula, fecha de nacimiento, dirección) no se publican por privacidad.

## Despliegue

El sitio es 100 % estático y ya está publicado en **GitHub Pages** (repo público,
branch `main`, carpeta raíz). También puede moverse a **Netlify**, **Cloudflare Pages**
o cualquier hosting. Requisitos: mantener la estructura de carpetas y, en el hosting,
apuntar a `index.html` y a `404.html` para errores.