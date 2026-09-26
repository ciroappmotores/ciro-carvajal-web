// V1.7 — Contacto (contacto.html)
const CONTACT_EMAIL = "cirocarvajal@gmail.com";
const WHATSAPP_NUMBER = "573102754610"; // 310 2754610 (Colombia, +57)
const LINKEDIN_URL = "https://www.linkedin.com/feed/"; // TODO: usar la URL del perfil (linkedin.com/in/usuario) si es distinta

const encode = (value) => encodeURIComponent(value);

// ---- Canales directos ----
const channelEmail = document.getElementById("channelEmail");
const channelWhatsApp = document.getElementById("channelWhatsApp");
const channelLinkedIn = document.getElementById("channelLinkedIn");

if (channelEmail) {
  channelEmail.href = `mailto:${CONTACT_EMAIL}?subject=${encode(
    "Contacto desde el sitio web"
  )}`;
}

const presetWhatsAppText =
  "Hola Ciro, visité su sitio web y quiero conversar sobre un proyecto.";

if (channelWhatsApp) {
  channelWhatsApp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(
    presetWhatsAppText
  )}`;
}

if (channelLinkedIn) {
  if (LINKEDIN_URL) {
    channelLinkedIn.href = LINKEDIN_URL;
  } else {
    channelLinkedIn.addEventListener("click", (e) => {
      e.preventDefault();
      const note = document.getElementById("formNote");
      if (note) {
        note.textContent =
          "El perfil de LinkedIn se publicará próximamente. Puede usar WhatsApp o el correo mientras tanto.";
      }
    });
  }
}

// ---- Formulario ----
const form = document.getElementById("contactForm");
const sendWhatsApp = document.getElementById("sendWhatsApp");
const formNote = document.getElementById("formNote");

const getField = (id) => document.getElementById(id);
const fieldValue = (id) => {
  const el = getField(id);
  return el ? el.value.trim() : "";
};

const validEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = fieldValue("nombre");
    const email = fieldValue("email");
    const asunto = fieldValue("asunto");
    const mensaje = fieldValue("mensaje");

    if (!nombre || !email || !asunto || !mensaje) {
      if (formNote) formNote.textContent = "Complete todos los campos por favor.";
      return;
    }
    if (!validEmail(email)) {
      if (formNote) formNote.textContent = "Escriba un correo electrónico válido.";
      return;
    }

    const asuntoCorreo = `Sitio web — ${asunto} — ${nombre}`;
    const cuerpo = `Nombre: ${nombre}\nCorreo: ${email}\nAsunto: ${asunto}\n\n${mensaje}`;

    // Abre el programa de correo con el mensaje listo para enviar.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encode(
      asuntoCorreo
    )}&body=${encode(cuerpo)}`;

    if (formNote) {
      formNote.classList.add("is-ok");
      formNote.textContent =
        "Se abrió su programa de correo con el mensaje listo. Si no se abrió, escríbame por WhatsApp.";
    }
  });

  sendWhatsApp.addEventListener("click", () => {
    const nombre = fieldValue("nombre");
    const email = fieldValue("email");
    const asunto = fieldValue("asunto");
    const mensaje = fieldValue("mensaje");

    const texto = `Hola Ciro, soy ${nombre || "…"} (${email || "sin correo"}).\nAsunto: ${
      asunto || "consulta"
    }\n\n${mensaje || "Quiero conversar sobre un proyecto."}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encode(texto)}`, "_blank");
  });
}