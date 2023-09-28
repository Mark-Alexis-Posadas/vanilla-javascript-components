const calculatorButtons = document.querySelectorAll(".calculator-buttons");
const calculatorInput = document.getElementById("input");
let number1 = "";
let operator = "";
let number2 = "";

calculatorButtons.forEach((button) => {
  const handleClick = () => {
    const buttonText = button.textContent;

    if (isNumber(buttonText)) {
      if (operator === "") {
        number1 += buttonText;
      } else {
        number2 += buttonText;
      }
    } else if (isOperator(buttonText)) {
      if (number1 !== "") {
        operator = buttonText;
      } else {
        console.log("Invalid input: Please enter a number first.");
      }
    } else if (buttonText === "=") {
      if (number1 !== "" && number2 !== "") {
        calculateResult();
      } else {
        console.log(
          "Invalid input: Please enter both numbers and an operator."
        );
      }
    } else if (buttonText === "c") {
      clearInput();
    }

    calculatorInput.value = `${number1} ${operator} ${number2}`;
  };

  button.addEventListener("click", handleClick);
});

function isNumber(value) {
  return !isNaN(value);
}

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

function calculateResult() {
  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Division by zero is not allowed.");
        clearInput();
        return;
      }
      break;
    default:
      console.log("Invalid operator");
      clearInput();
      return;
  }

  calculatorInput.value = result;
  number1 = result.toString();
  number2 = "";
  operator = "";
}

function clearInput() {
  calculatorInput.value = "";
  number1 = "";
  operator = "";
  number2 = "";
}
