const listmovie = document.querySelector(".movie");
const imgs = listmovie.getElementsByTagName("img");
const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");
const length = imgs.length;
let current = 0;

const handlechangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listmovie.style.transform = `translateX(0px)`;
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listmovie.style.transform = `translateX(${width * -1 * current}px)`;
  }
};
right.addEventListener("click", () => {
  handlechangeSlide();
});
left.addEventListener("click", () => {
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listmovie.style.transform = `translateX(${width * -1 * current}px)`;
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listmovie.style.transform = `translateX(${width * -1 * current}px)`;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});
window.addEventListener("load", () => {
  const element = document.querySelector("body");
  if (element) {
    setTimeout(() => {
      element.classList.add("load");
    }, 100);
  }
});
