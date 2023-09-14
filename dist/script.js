const toggleMenu = document.querySelector(".toggle__menu");
const header = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  header.classList.toggle("open");
});