const number = document.getElementById("random");
const getRandomNumberButton = document.getElementById("get_random_number");

const handleClick = () => {
  //number
  const minNumber = 1;
  const maxNumber = 100;

  number.innerHTML =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  //colors

  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  `#${randColor.toUpperCase()}`;

  document.querySelector(
    "body"
  ).style.background = `#${randColor.toUpperCase()}`;
};

getRandomNumberButton.addEventListener("click", handleClick);
