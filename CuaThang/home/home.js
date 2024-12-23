const listnv = document.querySelector(".listnv");
const card = listnv.querySelectorAll(".card");
const left = document.querySelector(".bx-chevron-left");
const right = document.querySelector(".bx-chevron-right");
const length = card.length;
let current = 0;

const handlechangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = card[0].offsetWidth;
    listnv.style.transform = `translateX(0px)`;
  } else {
    current++;
    let width = card[0].offsetWidth;
    listnv.style.transform = `translateX(${width * -1 * current}px)`;
  }
};
right.addEventListener("click", () => {
  handlechangeSlide();
});
left.addEventListener("click", () => {
  if (current == 0) {
    current = length - 1;
    let width = card[0].offsetWidth;
    listnv.style.transform = `translateX(${width * -1 * current}px)`;
  } else {
    current--;
    let width = card[0].offsetWidth;
    listnv.style.transform = `translateX(${width * -1 * current}px)`;
  }
});
function ToPage() {
  window.location.href = "../char/spider.html";
}
function toggleSearch() {
  const container = document.querySelector(".search");
  container.classList.toggle("active");
}
