const currentInput = document.getElementById("current-input");
const previousInput = document.getElementById("previous-input");
const currentOperator = document.getElementById("operator");
const numbers = document.querySelectorAll("button");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const negative = document.getElementById("neg");

// Function that adds 2 numbers.
function add(x, y) {
  const result = x + y;
  return result;
}

// Function that subtract 2 numbers.
function subtract(x, y) {
  const result = x - y;
  return result;
}

// Function that divide 2 numbers.
function divide(x, y) {
  if (y == 0) {
    return "ERROR!! DO NOT USE 0!!"
  }
  const result = x / y;
  return result;
}

// Function that multiply 2 numbers.
function multiply(x, y) {
  const result = x * y;
  return result;
}

// Function that turns the remainder of a number.
function remainder(x, y) {
  const result = x % y;
  return result;
}

// Function that return the power of a number.
function power(x, y) {
  const result = Math.pow(x, y);
  return result;
}

// Function that turn the number into a negative one.
function makeNegative() {
  if (currentInput.innerText.includes("-")) {
    currentInput.innerText = currentInput.innerText.slice(1, currentInput.innerText.length);
    return;
  }
  currentInput.innerText = "-"+currentInput.innerText;
}

// Function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(x, y, operator) {
  const operators = {
    "+": add,
    "-": subtract,
    "÷": divide,
    "×": multiply,
    "%": remainder,
    xⁿ: power,
  };

  const result = operators[operator](x, y);
  return result;
}

// Function that populate the calculator screen with data.
function populateScreen(e) {
  if (e.target.getAttribute("id") == "equal") {
    currentInput.innerText = operate(
      +previousInput.innerText,
      +currentInput.innerText,
      currentOperator.innerText
    );
    previousInput.innerText = "‏‏‎ ‎";
    currentOperator.innerText = "";
    return;
  } else if (
    (e.target.getAttribute("name") == "op" && previousInput.innerText == "") ||
    (e.target.getAttribute("name") == "op" &&
      previousInput.innerText == "‏‏‎ ‎")
  ) {
    previousInput.innerText = currentInput.innerText;
    currentInput.innerText = "";
    currentOperator.innerText = e.target.innerText;
    return;
  } else if (
    e.target.getAttribute("name") == "op" &&
    !previousInput.innerText == ""
  ) {
    previousInput.innerText = operate(
      +previousInput.innerText,
      +currentInput.innerText,
      currentOperator.innerText
    );
    currentInput.innerText = "";
    currentOperator.innerText = e.target.innerText;
    return;
  } else if (e.target.getAttribute("name") == "num") {
    if (previousInput.innerText == "‏‏‎ ‎") {
      currentInput.innerText  = "";
      previousInput.innerText = "";
    }
    currentInput.innerText = currentInput.innerText + e.target.innerText;
    return;
  }
}

// Function that clear all.
function clearAll() {
  currentInput.innerText = "";
  currentOperator.innerText = "";
  previousInput.innerText = "";
}

// Function that delete last entered number.
function deleting() {
  currentInput.innerText = currentInput.innerText.slice(0, currentInput.innerText.length - 1);
}

numbers.forEach((num) => num.addEventListener("click", populateScreen));
clear.addEventListener("click", clearAll);
del.addEventListener("click", deleting);
negative.addEventListener("click", makeNegative);
