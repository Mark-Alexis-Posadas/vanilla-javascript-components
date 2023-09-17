const number = document.getElementById("random");
const getRandomNumberButton = document.getElementById("get_random_number");

const handleClick = () => {
  const minNumber = 1;
  const maxNumber = 100;
  return (number.innerHTML =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
};

getRandomNumberButton.addEventListener("click", handleClick);
