const imageElements = document.querySelectorAll(".column li");
const displayedImage = document.getElementById("dis-img");

imageElements.forEach((element) => {
  element.addEventListener("click", () => {
    const imageSrc = element.getAttribute("data-image");

    if (imageSrc) {
      displayedImage.src = `imgcast/${imageSrc}`;
      displayedImage.alt = element.textContent.trim();

      displayedImage.style.visibility = "visible";
      displayedImage.style.zIndex = 10;
    }
  });
});

const listItems = document.querySelectorAll("li");

function clearActive() {
  listItems.forEach((li) => li.classList.remove("active"));
}

listItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.stopPropagation();
    clearActive();
    item.classList.add("active");
  });
});
document.addEventListener("click", () => {
  clearActive();
});
