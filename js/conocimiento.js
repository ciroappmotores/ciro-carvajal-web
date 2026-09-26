// V1.5 — Filtro por tema (conocimiento.html)
const topicFilters = Array.from(
  document.querySelectorAll("[data-topic-filter]")
);
const articleCards = Array.from(
  document.querySelectorAll("#topicsGrid .article-card")
);

if (topicFilters.length && articleCards.length) {
  const applyTopicFilter = (tema) => {
    articleCards.forEach((card) => {
      const show =
        tema === "todos" || (card.dataset.tema || "").indexOf(tema) !== -1;
      card.classList.toggle("is-hidden", !show);
    });

    topicFilters.forEach((btn) =>
      btn.classList.toggle("is-active", btn.dataset.topicFilter === tema)
    );
  };

  topicFilters.forEach((btn) =>
    btn.addEventListener("click", () =>
      applyTopicFilter(btn.dataset.topicFilter)
    )
  );
}