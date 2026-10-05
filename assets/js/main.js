const search = document.querySelector("#recipe-search");
const filterButtons = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".recipe-card")];
const count = document.querySelector("#visible-count");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "all";

function filterRecipes() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach((card) => {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.search.includes(query);
    const show = matchesCategory && matchesSearch;
    card.hidden = !show;
    if (show) visible += 1;
  });

  count.textContent = visible;
  emptyState.hidden = visible !== 0;
}

search.addEventListener("input", filterRecipes);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    filterRecipes();
  });
});

document.querySelectorAll(".card-summary").forEach((button) => {
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    const details = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", String(!isOpen));
    details.hidden = isOpen;
  });
});
