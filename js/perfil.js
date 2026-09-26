// V1.2 — Currículum inteligente (perfil.html)
const cvTabs = Array.from(document.querySelectorAll("[data-cv-tab]"));
const cvItems = Array.from(document.querySelectorAll("#cvList li"));

if (cvTabs.length && cvItems.length) {
  const applyFilter = (tag) => {
    cvItems.forEach((li) => {
      const tags = (li.dataset.cv || "").split(" ").filter(Boolean);
      const show = tag === "todos" || tags.indexOf(tag) !== -1;
      li.classList.toggle("is-hidden", !show);
    });
    cvTabs.forEach((tab) =>
      tab.classList.toggle("is-active", tab.dataset.cvTab === tag)
    );
  };

  cvTabs.forEach((tab) =>
    tab.addEventListener("click", () => applyFilter(tab.dataset.cvTab))
  );
}

// Imprimir / guardar PDF
const printBtn = document.getElementById("cvPrint");
if (printBtn) {
  printBtn.addEventListener("click", () => window.print());
}

// Descargar CV completo (placeholder hasta publicar el PDF)
const cvDownload = document.getElementById("cvDownload");
if (cvDownload && cvDownload.getAttribute("href") === "#") {
  cvDownload.addEventListener("click", (e) => {
    e.preventDefault();
    alert(
      "El CV en PDF se publicará en una próxima versión. Por ahora use IMPRIMIR / GUARDAR PDF."
    );
  });
}