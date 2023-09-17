const buttons = document.querySelectorAll(".buttons");
let currentCount = 0;
let intervalId;
const updateCount = () => {
  currentCount++;
  document.getElementById("seconds").innerHTML = currentCount;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "start") {
      // Call updateCount every 1000 milliseconds (1 second)

      intervalId = setInterval(updateCount, 10);
    } else if (button.id === "reset") {
      clearInterval(intervalId);
      currentCount = 0;
      document.getElementById("seconds").innerHTML = currentCount;
    } else if (button.id === "stop") {
      clearInterval(intervalId);
    }
  });
});
