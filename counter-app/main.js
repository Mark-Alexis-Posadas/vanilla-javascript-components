const theme = document.querySelector(".theme");

const handleClick = () => {
  //toggle active class
  theme.classList.toggle("active");
  //change background
  document.querySelector("body").classList.toggle("active");

  //change theme text
  theme.textContent === "dark"
    ? (theme.textContent = "light")
    : (theme.textContent = "dark");
};
theme.addEventListener("click", handleClick);

const buttons = document.querySelectorAll(".counter__buttons");
const count = document.querySelector(".counter__title");
let initialCounter = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "increment") {
      initialCounter++;
    } else if (button.id === "decrement") {
      initialCounter--;
    } else if (button.id === "reset") {
      initialCounter = 0;
    }

    count.innerHTML = initialCounter;
  });
});
