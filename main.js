const currentInput = document.getElementById("current-input");
const previousInput = document.getElementById("previous-input");
const currentOperator = document.getElementById("operator");
const numbers = document.querySelectorAll("button");
const clear = document.getElementById("clear");

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
  const result = x / y;
  return result;
}

// Function that multiply 2 numbers.
function multiply(x, y) {
  const result = x * y;
  return result;
}


// Function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(x,y,operator) {
    const operators = {
        "+" : add,
        "-" : subtract,
        "÷" : divide,
        "×" : multiply,
    }

    const result = operators[operator](x,y);
    return result;
}

// Function that populate the calculator screen with data.
function populateScreen(e) {
  if (e.target.getAttribute("name") == "op" && previousInput.innerText == "") {
    previousInput.innerText = currentInput.innerText;
    currentInput.innerText = "";
    currentOperator.innerText = e.target.innerText;
    return;
  } else if (e.target.getAttribute("name") == "op" && !previousInput.innerText == "") {
    previousInput.innerText = operate(+previousInput.innerText, +currentInput.innerText, currentOperator.innerText);
    currentInput.innerText = "";
    currentOperator.innerText = e.target.innerText;
    return;
  } else if (e.target.getAttribute("name") == "num") {
    currentInput.innerText = currentInput.innerText + e.target.innerText;
    return;
  }
}

// Function that clear all.
function clearAll(){
  currentInput.innerText = "";
  currentOperator.innerText = "";
  previousInput.innerText = "";
}

numbers.forEach(num => num.addEventListener("click", populateScreen));
clear.addEventListener("click", clearAll)
