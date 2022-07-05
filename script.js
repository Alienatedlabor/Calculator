//selectors
let previousExpression = document.querySelector(".previousNumber");
previousExpression.innerText = "previous expression shows here";
let currentExpression = document.querySelector(".currentNumber");
currentExpression.innerText = 0;
//event listeners
let buttonValue = "";
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttonValue = button.id;
    updateDisplay(buttonValue);
  });
});
//function to update display
function updateDisplay(buttonValue) {
  // replace regex gets rid of leading 0 while still allowing 0's in the currentExpression               !!! pressing equals at 0 gives NaN
  currentExpression.innerText = currentExpression.innerText.replace(/^0+/, ``);
  currentExpression.append(buttonValue);
}

//function to clear display
const CLEAR = document.querySelector(".clear");
CLEAR.addEventListener("click", clear);
function clear() {
  currentExpression.innerText = "";
  currentExpression.innerText = "0";
  previousExpression.innerText = "previous expression shows here";
}
//function to delete single input
const DELETE = document.querySelector(".delete");
DELETE.buttonValue = "";
DELETE.addEventListener("click", deleteSingle);
function deleteSingle() {
  currentExpression.innerText = currentExpression.innerText.slice(0, -1);
  if (currentExpression.innerText == "") {
    currentExpression.innerText = "0";
  }
}
//basic math functions:

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (array) {
  return array.reduce((total, current) => total * current);
};

const divide = function (array) {
  return array.reduce((total, current) => total / current);
}; //not sure if this works

const operate = function (currentExpression, previousExpression, operator) {
  //addition
  if (operator === "+") {
    add(currentNumber, previousExpression);
  }
  //subtraction
  if (operator === "-") {
    subtract(currentExpression, previousExpression);
  }
  //multiplication
  if (operator === "X") {
    multiply(currentExpression, previousExpression);
  }
  //division
  if (operator === "/") {
    divide(currentExpression, previousExpression);
  }
};
//need to return solution upon pressing equals button:
//function operate: takes 2 numbers and an operator and calls one of the above math functions:
const equals = document.querySelector(".equals");
equals.addEventListener("click", operate);

//function to return result upon equals press:

//adding operators to DOM, making operator selection cause display shift currentExpression to previousExpression
const operator = document.querySelectorAll(".operator");
operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    let parseNumber = parseFloat(currentExpression.innerText);
    console.log(parseNumber);
    console.log(typeof parseNumber);
    previousExpression.innerText = parseNumber + operator.id;
    currentExpression.innerText = "";
  });
});


//calling functions:
