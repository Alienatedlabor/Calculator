//selectors
let previousExpression = document.querySelector(".previousNumber");
console.log(previousExpression);
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
    //parseFloat(buttonValue);
    console.log(typeof buttonValue);
    updateDisplay(buttonValue);
  });
});
//function to update display
function updateDisplay(buttonValue) {
  currentExpression.append(buttonValue);
}
//function to clear display
//doesn't do what I want it to
function clear() {
  const CLEAR = document.querySelector(".clear");
  CLEAR.addEventListener("click", () => {
    currentExpression.innerText = "";
    currentExpression.innerText = "0";
    previousExpression.innerText = "previous expression shows here";
  });
}
//function to delete single input - slice isn't a function/doesn't work

// const DELETE = document.querySelector(".delete");
// DELETE.addEventListener("click", deleteSingle())
// function deleteSingle() {
//  let deleted = currentExpression.innerText.slice(0, -1)
//  return deleted;
// }
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
clear();
