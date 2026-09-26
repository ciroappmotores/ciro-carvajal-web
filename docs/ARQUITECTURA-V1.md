# Arquitectura 1.0 — Ciro Carvajal | Ingeniería · IA · Tecnología

Documento de arquitectura del sitio profesional. Define identidad visual, estructura,
modelo de datos y ruta de desarrollo por versiones. Este proceso también hace parte
del portafolio de desarrollo web.

## Posicionamiento

> Ingeniería, conocimiento y tecnología aplicados a soluciones reales.

**Rol:** Ingeniero Mecánico · Doctor · Consultor · Docente Universitario · Especialista SST ·
Inteligencia Artificial · Desarrollador Web.

El sitio debe responder 4 preguntas: quién es Ciro → qué sabe hacer → qué resultados produce → cómo contratarlo.

## Paleta de color

| Uso | Color | Hex |
|---|---|---|
| Autoridad (ingeniería) | Azul petróleo profundo | `#082F49` |
| Interactividad | Azul tecnológico | `#0369A1` |
| IA / desarrollo | Cian eléctrico | `#06B6D4` |
| Elegancia / contraste | Grafito | `#111827` |
| Fondos | Gris claro | `#F1F5F9` |
| Respiración | Blanco | `#FFFFFF` |
| Acento único (KPI, CTA) | Ámbar técnico | `#F59E0B` |

## Tipografía

- Encabezados: **Manrope** (600/700/800)
- Cuerpo: **Inter** (400–700)

## Menú principal

`INICIO | PERFIL | SERVICIOS | PROYECTOS | CONOCIMIENTO | DESARROLLO | CONTACTO`
+ botón destacado `SOLICITAR ASESORÍA`

## Estructura de secciones (Inicio)

1. Header
2. Hero (CIRO CARVAJAL + propuesta + 3 botones + foto)
3. Franja de áreas (Ingeniería | Consultoría | IA | Desarrollo Web | SST | Investigación | Docencia)
4. Servicios (6 tarjetas: Problema → Solución → Metodología → Entregables → Resultados)
5. Proyectos destacados (filtros + tarjetas)
6. Desarrollo & Tecnología (stack + proyecto real ACIEM como caso)
7. Casos de éxito (Situación → Problema → Solución → Resultado → Evidencias)
8. Trayectoria profesional (timeline)
9. Conocimiento (artículos)
10. Conferencias / Formación
11. Testimonios
12. CTA final ("¿Tiene un proyecto? Conversemos" → WhatsApp)
13. Footer

## Arquitectura tecnológica objetivo

```
cirocarvajal.com
      │
  FRONTEND (HTML/CSS/JS)     DATOS (JSON)
      │                          │
      ├──── GitHub ──────────────┤
      │   GitHub Actions          │
      ├── Cloudflare ─────────────┤
      │   Worker + Asistente IA   │ → RAG → Base de conocimiento
```

Prioridades: sin improvisar HTML; datos separados del HTML; panel de administración
progresivo; SEO y seguridad desde el inicio (Lighthouse: Perf ≥90, Acc ≥95, BP ≥95, SEO ≥95).

## Ruta de desarrollo por versiones

- **V1.0 — Identidad y arquitectura** ✅ diseño base, paleta, tipografía, este documento
- **V1.1 — Header / Hero** ✅ menú, CTA, hero con 3 botones, franja de áreas
- **V1.2 — Perfil** (trayectoria, línea de tiempo, formación, CV interactivo)
- **V1.3 — Servicios** (6 líneas con problema/solución/entregables)
- **V1.4 — Portafolio** (proyectos con filtros; ACIEM NDS como caso de estudio)
- **V1.5 — Desarrollo** (tecnologías + casos + GitHub)
- **V1.6 — Conocimiento** (blog técnico con categorías y fechas)
- **V1.7 — Contacto / conversión** (formulario, WhatsApp, CTA)
- **V2.0 — IA + RAG + automatización** (asistente propio, observatorio personal, admin panel)

---
*Estado al 25/09/2026: V1.0 y V1.1 implementados sobre index.html.*