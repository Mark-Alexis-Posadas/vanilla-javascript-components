const button = document.getElementById("btn");

const handleClick = (e) => {
  if (button.textContent === "Dark") {
    button.textContent = "Light";
  } else {
    button.textContent = "Dark";
  }

  //OR

  // button.textContent === "Dark"
  //   ? (button.textContent = "Light")
  //   : (button.textContent = "Dark");
};

button.addEventListener("click", handleClick);
