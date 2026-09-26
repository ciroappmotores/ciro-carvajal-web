// V1.4 — Filtro de proyectos (proyectos.html)
const projectFilters = Array.from(
  document.querySelectorAll("[data-project-filter]")
);
const projectCards = Array.from(
  document.querySelectorAll("#projectsGrid .project-card")
);

if (projectFilters.length && projectCards.length) {
  const applyProjectFilter = (cat) => {
    projectCards.forEach((card) => {
      const cats = (card.dataset.cat || "").split(" ").filter(Boolean);
      const show = cat === "todos" || cats.indexOf(cat) !== -1;
      card.classList.toggle("is-hidden", !show);
    });

    projectFilters.forEach((btn) =>
      btn.classList.toggle("is-active", btn.dataset.projectFilter === cat)
    );
  };

  projectFilters.forEach((btn) =>
    btn.addEventListener("click", () =>
      applyProjectFilter(btn.dataset.projectFilter)
    )
  );
}