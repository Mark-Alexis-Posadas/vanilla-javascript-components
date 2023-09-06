const toggleButton = document.querySelector(".toggle-button");
const content = document.querySelector(".content");

const handleClick = () => {
  content.classList.toggle("active");
};

toggleButton.addEventListener("click", (e) => {
  // Prevent the click event from propagating to the document
  e.stopPropagation();
  handleClick();
});

document.addEventListener("click", (e) => {
  // Check if the click event target is NOT within the .content element
  if (!content.contains(e.target)) {
    content.classList.remove("active");
  }
});
