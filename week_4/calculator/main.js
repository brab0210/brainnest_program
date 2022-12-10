let displayScreen = document.querySelector("#display");
let btnsNumbers = document.querySelectorAll(".number");
let btnsOperators = document.querySelectorAll(".operator");
let dotBtn = document.querySelector("#dot");

function operations(numA, numB, operator) {
  let result;
  if (numB == 0 && operator == "/") {
    return "cannot be divided by zero";
  }

  switch (operator) {
    case "-":
      result = numA - numB;
      break;
    case "+":
      result = numA + numB;
      break;
    case "/":
      result = numA / numB;
      break;
    default:
      result = numA * numB;
  }
  return result;
}

function changeSign() {
  if (firstNumber !== null || secondNumber !== null) {
    displayScreen.textContent = displayScreen.textContent * -1;
    firstNumber = displayScreen.textContent;
  }
}

function decimalNumber() {
  if (displayScreen.textContent == "0") {
    dotBtn.disabled = true;
    displayScreen.textContent += ".";
  }
  if (displayScreen.textContent == "") {
    dotBtn.disabled = true;
    displayScreen.textContent += "0.";
  }

  if (!firstNumber.includes(".") || !secondNumber.includes(".")) {
    if (firstNumber !== null && secondNumber === null) {
      displayScreen.textContent += ".";
      firstNumber = Number(displayScreen.textContent);
      dotBtn.disabled = true;
    }
    if (secondNumber !== null) {
      displayScreen.textContent += ".";
      secondNumber = Number(displayScreen.textContent);
      dotBtn.disabled = true;
    }
  }
}

function erase() {
  displayScreen.textContent = displayScreen.textContent.toString().slice(0, -1);
  if (operator === null) {
    firstNumber = Number(displayScreen.textContent);
  } else {
    secondNumber = Number(displayScreen.textContent);
  }
  if (displayScreen.textContent == "") {
    displayScreen.textContent = "0";
  }
}

function eraseAll() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  displayScreen.textContent = "0";
}

let firstNumber = null;
let secondNumber = null;
let operator = null;

btnsNumbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (displayScreen.textContent == "0") {
      displayScreen.textContent = "";
    }
    if (secondNumber === null && operator === null) {
      displayScreen.textContent += e.target.textContent;
      firstNumber = displayScreen.textContent;
    }
    if (firstNumber !== null && operator !== null) {
      displayScreen.textContent += e.target.textContent;
      secondNumber = displayScreen.textContent;
    }
    if (displayScreen.textContent.length > 9) {
      displayScreen.textContent = displayScreen.textContent.substring(0, 9);
    }
  });
});

btnsOperators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operator === null && operator !== "=") {
      operator = e.target.textContent;
      displayScreen.textContent = "";
      dotBtn.disabled = false;
    }
    if (firstNumber !== null && secondNumber !== null) {
      let result = operations(
        Number(firstNumber),
        Number(secondNumber),
        operator
      ).toFixed(0);
      displayScreen.textContent = result;
      firstNumber = Number(result);
      secondNumber = null;
    }
  });
});
