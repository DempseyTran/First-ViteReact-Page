function toggleFilter(id) {
  const content = document.getElementById(`${id}-content`);
  const toggle = document.getElementById(`${id}-toggle`);

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    toggle.textContent = "-";
  } else {
    content.classList.add("hidden");
    toggle.textContent = "+";
  }
}

function applyFilters() {
  const filterText = document
    .querySelector(".filter-input")
    .value.toLowerCase();
  const selectedCategories = Array.from(
    document.querySelectorAll('.filter-category input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value.toLowerCase());
  const selectedSeries = Array.from(
    document.querySelectorAll('#series-content input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value.toLowerCase());

  const comics = document.querySelectorAll(".comics-grid .comic");

  comics.forEach((comic) => {
    const name = comic.dataset.name?.toLowerCase();
    const category = comic.dataset.category?.toLowerCase();
    const series = comic.dataset.series?.toLowerCase();

    const matchesText = name && name.includes(filterText);
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(category);
    const matchesSeries =
      selectedSeries.length === 0 || selectedSeries.includes(series);

    if (matchesText && matchesCategory && matchesSeries) {
      comic.style.display = "block";
    } else {
      comic.style.display = "none";
    }
  });
}

document.querySelector(".filter-input").addEventListener("input", applyFilters);

document
  .querySelectorAll('.filter-category input[type="checkbox"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
  });
