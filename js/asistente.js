// V1.0 — Asistente virtual del sitio (ventana flotante, estilo ACIEM)
//
// Responde con base en el contenido real del sitio: servicios, formación,
// experiencia, proyectos, publicaciones, credenciales y contacto.
// No inventa datos: si no hay respuesta, ofrece contacto directo.

const WHATSAPP_URL =
  "https://wa.me/573102754610?text=Hola%2C%20deseo%20recibir%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Ciro%20Carvajal";

const chatMessages = document.getElementById("chatMessages");
const chatTyping = document.getElementById("chatTyping");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatSuggestions = document.getElementById("chatSuggestions");

// ---------- Utilidades ----------

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const scrollChatToBottom = () => {
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
};

const addMessage = (role, html) => {
  if (!chatMessages) return;

  const bubble = document.createElement("div");
  bubble.className = `chat-msg chat-msg-${role}`;
  bubble.innerHTML = html;

  chatMessages.appendChild(bubble);
  scrollChatToBottom();
};

// ---------- Base de conocimiento ----------

const KNOWLEDGE = [
  {
    keys: ["hola", "buenas", "buenos dias", "hey", "que mas", "saludo"],
    answer: `
      ¡Hola! Soy el asistente virtual de <strong>Ciro Carvajal</strong>, ingeniero
      mecánico, doctor, consultor, docente e investigador.
      <br><br>¿En qué puedo ayudarle? Puede preguntarme por sus servicios,
      formación, experiencia, proyectos o cómo contactarlo.
    `,
  },
  {
    keys: ["servicio", "servicios", "que ofrece", "que hace", "en que puede ayudar", "areas"],
    answer: `
      Estos son los seis servicios:
      <br><br>
      <strong>1. Ingeniería y consultoría técnica</strong> — evaluación técnica,
      mantenimiento industrial y optimización de procesos y activos.
      <br><br>
      <strong>2. Seguridad y Salud en el Trabajo</strong> — matrices de riesgo,
      trabajo seguro en alturas y espacios confinados, y gestión preventiva.
      <br><br>
      <strong>3. Inteligencia Artificial y transformación digital</strong> —
      diagnóstico de madurez digital, pilotos de IA y automatización de procesos.
      <br><br>
      <strong>4. Desarrollo Web</strong> — sitios institucionales, portales,
      dashboards, observatorios y aplicaciones web.
      <br><br>
      <strong>5. Formación y conferencias</strong> — cursos, diplomados, talleres
      y programas a la medida.
      <br><br>
      <strong>6. Investigación y academia</strong> — metodología, instrumentos,
      análisis estadístico (SPSS · AMOS · SEM) y asesoría doctoral.
      <br><br>
      ¿Quiere que le detalle alguno o que le prepare una propuesta?
    `,
  },
  {
    keys: ["precio", "precios", "costo", "costos", "valor", "tarifa", "cuanto cobra", "cuanto cuesta", "presupuesto", "cotizacion", "cuanto vale"],
    answer: `
      Cada propuesta se calcula según el alcance del proyecto: número de personas,
      duración, entregables y nivel de acompañamiento.
      <br><br>
      Puede pedir una <strong>propuesta escrita</strong> por WhatsApp o por el
      formulario de contacto, y se la respondo en menos de 24 horas hábiles.
    `,
  },
  {
    keys: ["contacto", "contactar", "escribir", "whatsapp", "telefono", "celular", "correo", "email", "como me comunico"],
    answer: `
      Puede escribirme por estos medios:
      <br><br>
      <strong>WhatsApp:</strong> 310 2754610 · 300 6083832
      <br>
      <strong>Correo:</strong> cirocarvajal@gmail.com
      <br>
      <strong>LinkedIn:</strong> Ciro Antonio Carvajal Labastida
      <br><br>
      Respondo de lunes a viernes, normalmente en menos de 24 horas hábiles.
    `,
  },
  {
    keys: ["formacion", "formacion academica", "estudios", "titulo", "titulos", "universidad", "doctor", "doctorado", "master", "magister", "especialista", "ingeniero mecanico", "estudio"],
    answer: `
      Su formación académica:
      <br><br>
      <strong>Doctor en Gerencia Evaluativa Tecnológica Empresarial y Educativa</strong>
      — UNET, Venezuela, 2025.
      <br>
      <strong>Magíster Scientiarum en Mantenimiento Industrial</strong>
      — UNEXPO, Barquisimeto, Venezuela, 1994.
      <br>
      <strong>Especialista en Seguridad y Salud en el Trabajo</strong>
      — Universidad Manuela Beltrán, Bucaramanga, 2012.
      Licencia Resolución 22818 SSS, 2024.
      <br>
      <strong>Especialista en Docencia Universitaria</strong> — 1997.
      <br>
      <strong>Ingeniero Mecánico</strong> — Universidad Francisco de Paula
      Santander (UFPS), Cúcuta, 1981.
    `,
  },
  {
    keys: ["experiencia", "trayectoria", "trabajo", "laboral", "curriculum", "hoja de vida", "cv", "donde ha trabajado", "universidad antonio nario", "sena"],
    answer: `
      Su trayectoria profesional:
      <br><br>
      <strong>Docente y coordinador académico</strong> — Universidad Antonio Nariño,
      sede Cúcuta, 20 años.
      <br>
      <strong>Catedrático universitario</strong> — Universidad Francisco de Paula
      Santander, 14 años.
      <br>
      <strong>Docente de tiempo completo</strong> — Universidad Libre, Seccional
      Cúcuta, 7 años.
      <br>
      <strong>Coordinador académico y formador</strong> — SENA Regional Norte de
      Santander. Instructor certificado en trabajo seguro en alturas y espacios
      confinados.
      <br>
      <strong>Consultor técnico</strong> — Corporación CYGA, convenio ECOPETROL
      (GEA-02-07).
      <br>
      <strong>Gerente</strong> — HOServices SAS.
      <br><br>
      En la ACIEM es <strong>Vicepresidente del Capítulo Norte de Santander</strong>.
    `,
  },
  {
    keys: ["proyecto", "proyectos", "portafolio", "caso", "casos", "portales", "observatorio", "dashboard", "trabajos"],
    answer: `
      Algunos proyectos desarrollados:
      <br><br>
      <strong>Portal Web ACIEM Norte de Santander</strong> — sitio institucional con
      contenido dinámico, buscador y observatorio regional.
      <br>
      <strong>Observatorio de Ingeniería y Desarrollo Regional</strong> — tablero
      de indicadores actualizado automáticamente.
      <br>
      <strong>Asistente virtual con IA</strong> — atención automatizada en el portal.
      <br>
      <strong>Sistema IMDF</strong> — madurez digital de ferreterías.
      <br>
      <strong>Factores psicosociales del teletrabajo</strong> e
      <strong>interactividad estudiantil</strong> — sistemas de medición e
      investigación.
      <br><br>
      Puede ver el detalle en la sección de proyectos.
    `,
  },
  {
    keys: ["inteligencia artificial", "ia", "automatizacion", "chatbot", "agentes", "machine learning", "datos", "madurez digital"],
    answer: `
      En <strong>Inteligencia Artificial y transformación digital</strong> se trabaja:
      <br><br>
      • Diagnóstico de madurez digital de la organización.
      <br>
      • Auditoría de procesos manuales.
      <br>
      • Piloto de IA y medición de resultados.
      <br>
      • Escalado y automatización.
      <br>
      • Asistentes y agentes de IA.
      <br><br>
      Su posición es que <strong>la IA no reemplaza ingenieros: los multiplica</strong>.
    `,
  },
  {
    keys: ["desarrollo web", "pagina web", "sitio web", "portal", "software", "aplicacion", "app", "frontend", "backend", "programacion", "tecnologias", "stack", "hosting", "dominio"],
    answer: `
      En <strong>Desarrollo Web</strong> se construyen sitios institucionales,
      portales, dashboards, observatorios y aplicaciones web.
      <br><br>
      <strong>Stack:</strong> HTML5, CSS3, JavaScript, jQuery · Python, PHP,
      Node.js, JSON · Git, GitHub Actions y Cloudflare Workers.
      <br><br>
      La metodología de trabajo es el <strong>modelo en V</strong>: requisitos y
      alcance, diseño y arquitectura, desarrollo, implementación, pruebas y
      despliegue.
    `,
  },
  {
    keys: ["seguridad y salud", "sst", "salud en el trabajo", "alturas", "confinados", "riesgo", "riesgos", "accidente", "prevencion", "epi"],
    answer: `
      En <strong>Seguridad y Salud en el Trabajo</strong> se trabaja con:
      <br><br>
      • Evaluación de riesgos y matriz de peligros.
      <br>
      • Trabajo seguro en alturas y espacios confinados.
      <br>
      • Gestión preventiva y seguimiento.
      <br>
      • Capacitación y formación certificable.
      <br><br>
      Entregables: matrices de riesgo, planes preventivos y formación. Como
      resultado, entornos más seguros y cumplimiento normativo.
    `,
  },
  {
    keys: ["investigacion", "publicacion", "publicaciones", "tesis", "articulos", "artículo", "spss", "amos", "sem", "instrumentos", "metodologia", "doctorado", "google scholar", "scopus", "orcid", "cvlac"],
    answer: `
      En <strong>Investigación y academia</strong> se ofrece metodología,
      diseño de investigación, instrumentos validados y análisis estadístico
      (SPSS · AMOS · SEM).
      <br><br>
      <strong>Publicaciones destacadas:</strong>
      <br>
      • Artículo científico en la Revista UIS Ingenierías (2019) sobre estimación
      de parámetros de motores de inducción a partir de las pérdidas de potencia.
      <br>
      • Tesis doctoral sobre interactividad estudiantil y compromiso académico
      en campus virtuales del Norte de Santander.
      <br><br>
      Perfiles públicos: ORCID, CvLAC de Minciencias, Scopus y Google Scholar.
    `,
  },
  {
    keys: ["formacion para empresas", "capacitacion", "conferencias", "curso", "cursos", "diplomado", "taller", "docencia", "enseñar", "capacitar"],
    answer: `
      En <strong>Formación y conferencias</strong> se diseñan programas a la
      medida: conferencias, cursos, diplomados, talleres y módulos de
      formación.
      <br><br>
      Se entrega programa, material de estudio y certificación. El resultado son
      competencias nuevas aplicables desde el día siguiente.
    `,
  },
  {
    keys: ["redes", "linkedin", "facebook", "instagram", "youtube", "redes sociales"],
    answer: `
      Puede seguirme en:
      <br><br>
      <strong>LinkedIn</strong> — Ciro Antonio Carvajal Labastida
      <br>
      <strong>Facebook</strong> — /cirocarvajal
      <br>
      <strong>Instagram</strong> — @ciroantoniocarvajal
      <br>
      <strong>YouTube</strong> — videos y conferencias
    `,
  },
  {
    keys: ["donde esta", "ubicacion", "ciudad", "reside", "vive", "cucuta", "norte de santander", "colombia", "pais"],
    answer: `
      Su base de trabajo es <strong>Cúcuta, Norte de Santander (Colombia)</strong>,
      y los proyectos se desarrollan también de forma remota.
    `,
  },
  {
    keys: ["horario", "disponibilidad", "cuando", "agenda", "cita", "reunion"],
    answer: `
      Atiendo <strong>lunes a viernes</strong> y respondo normalmente en menos de
      24 horas hábiles.
      <br><br>
      Los proyectos de desarrollo se manejan con cronograma y entregas definidas.
    `,
  },
  {
    keys: ["gracias", "genial", "perfecto", "ok", "vale"],
    answer: `Con gusto. ¿Hay algo más en lo que pueda ayudarle?`,
  },
];

const FALLBACK = `
  No tengo esa información con certeza. Le propongo dos opciones:
  <br><br>
  • Preguntar por <strong>servicios</strong>, <strong>formación</strong>,
  <strong>proyectos</strong> o <strong>contacto</strong>.
  <br>
  • Escribirme directamente por <strong>WhatsApp</strong> o por el
  <strong>formulario de contacto</strong>, y le respondo en menos de 24 horas
  hábiles.
`;

// ---------- Motor de respuestas ----------

const findAnswer = (question) => {
  const q = normalize(question);

  for (const item of KNOWLEDGE) {
    if (item.keys.some((key) => q.includes(key))) {
      return item.answer;
    }
  }

  return FALLBACK;
};

// ---------- Sugerencias ----------

const SUGGESTIONS = [
  "¿Qué servicios ofrece?",
  "¿Cómo me contacto?",
  "Muéstrame su perfil",
  "Vea sus proyectos",
];

const renderSuggestions = () => {
  if (!chatSuggestions) return;

  chatSuggestions.innerHTML = "";

  SUGGESTIONS.forEach((text) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-suggestion";
    button.textContent = text;

    button.addEventListener("click", () => {
      ask(text);
    });

    chatSuggestions.appendChild(button);
  });
};

// ---------- Interacción ----------

let isResponding = false;

const ask = (question) => {
  if (isResponding || !question.trim()) return;

  addMessage("user", question);
  isResponding = true;

  if (chatTyping) chatTyping.hidden = false;
  if (chatSuggestions) chatSuggestions.hidden = true;

  // Pausa corta para que se lea como una conversación.
  window.setTimeout(() => {
    if (chatTyping) chatTyping.hidden = true;

    const answer = findAnswer(question);
    addMessage("bot", answer);

    // Enlace directo a WhatsApp en la respuesta de contacto.
    if (/contact|whatsapp|celular|correo/i.test(question)) {
      addMessage(
        "bot",
        `<a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">
          → Abrir WhatsApp con Ciro Carvajal
        </a>`
      );
    }

    isResponding = false;
    if (chatSuggestions) chatSuggestions.hidden = false;
    if (chatInput) chatInput.focus();
  }, 420);
};

// ---------- Arranque ----------

if (chatMessages && chatForm && chatInput) {
  addMessage(
    "bot",
    `¡Hola! Soy el asistente virtual de <strong>Ciro Carvajal</strong>.
     ¿En qué puedo ayudarle?`
  );

  renderSuggestions();

  chatInput.addEventListener("input", () => {
    chatInput.style.height = "auto";
    chatInput.style.height = chatInput.scrollHeight + "px";
  });

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = chatInput.value.trim();
    if (!question) return;

    chatInput.value = "";
    chatInput.style.height = "auto";

    ask(question);
  });
}
