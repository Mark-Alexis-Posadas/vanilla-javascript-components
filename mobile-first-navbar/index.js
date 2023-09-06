const burgerMenu = document.querySelector(".fa-solid.fa-bars");
const burgerContent = document.querySelector(".nav__container");

burgerMenu.addEventListener("click", () => {
  burgerContent.classList.toggle("active");
});
