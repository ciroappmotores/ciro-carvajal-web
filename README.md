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

## Pendientes antes de publicar

1. Confirmar el **dominio final** (hoy en marcador `cirocarvajal.com` en canonical, sitemap y Open Graph).
2. **LinkedIn** → `js/contacto.js` (`LINKEDIN_URL`) — pendiente de la URL del perfil.
3. **CV en PDF** → colocar en `assets/docs/CV-Ciro-Carvajal.pdf` y conectar los botones de descarga en `perfil.html`.
4. **Testimonios reales** → `index.html` (sección con marcadores en gris).

> ✅ Ya activados: correo `cirocarvajal@gmail.com` y WhatsApp `310 2754610` (todos los enlaces del sitio).

## Despliegue

El sitio es 100 % estático: puede publicarse en **GitHub Pages**, **Netlify**,
**Cloudflare Pages** o cualquier hosting. Requisitos: mantener la estructura de
carpetas y, en el hosting, apuntar a `index.html` y a `404.html` para errores.