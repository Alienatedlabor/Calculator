//selectors
let previousExpression = document.querySelector(".previousNumber");
previousExpression.innerText = "previous expression shows here";
let currentExpression = document.querySelector(".currentNumber");
// want 0 to be default, and clear upon button press
currentExpression.innerText = 0;
//event listeners
let buttonValue = "";
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttonValue = button.id;
    console.log(buttonValue);
    console.log(typeof buttonValue);
    updateDisplay(buttonValue);
  });
});
//function to update display
function updateDisplay(buttonValue) {
  console.log(typeof currentExpression.innerText);
  // replace regex gets rid of leading 0 while still allowing 0's in the currentExpression
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
//function to delete single input - slice isn't a function/doesn't work
const DELETE = document.querySelector(".delete");
DELETE.buttonValue = "";
DELETE.addEventListener("click", deleteSingle);
function deleteSingle() {
  currentExpression.innerText = currentExpression.innerText.slice(0, -7);
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

const sum = function ([...Numbers]) {
  let total = 0;
  for (const number of Numbers) {
    total += number;
  }
  return ~~[total];
};
// using .reduce:
// const sum = function(array){
// return array.reduce((total,current) => total + current, 0)
// }
// 0 at the end is start total

const multiply = function (array) {
  return array.reduce((total, current) => total * current);
};

const divide = function (array) {
  return array.reduce((total, current) => total / current);
}; //not sure if this works

//function operate: takes 2 numbers and an operator and calls one of the above math functions:
const operate = function (number1, number2, operator) {
  //addition
  //subtraction
  //multiplication
  //division
};

//calling functions:
