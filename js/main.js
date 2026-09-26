const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-navigation");

if (menuToggle && mainNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNavigation.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );
  });

  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNavigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}

// Botón flotante de contacto rápido (estilo ACIEM): abre/cierra el panel.
const chatBtn = document.getElementById("floatingChatBtn");
const chatPanel = document.getElementById("floatingChatPanel");
const chatClose = document.getElementById("floatingChatClose");

if (chatBtn && chatPanel && chatClose) {
  chatBtn.addEventListener("click", () => {
    chatPanel.classList.toggle("activo");
  });

  chatClose.addEventListener("click", () => {
    chatPanel.classList.remove("activo");
  });

  // Cerrar al pulsar fuera del panel
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".floating-chat") &&
      chatPanel.classList.contains("activo")
    ) {
      chatPanel.classList.remove("activo");
    }
  });
}