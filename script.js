//selectors
let previousExpression = document.querySelector(".previousNumber");
console.log(previousExpression);
let currentExpression = document.querySelector(".currentNumber");
//event listeners
let buttonValue = "";
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttonValue = button.id;
    console.log(buttonValue);
    updateDisplay(buttonValue);
  });
});
//function to update display
function updateDisplay(buttonValue){
  currentExpression.append(buttonValue);
};
//function to clear display 
//doesn't do what I want it to
function clear(){
const clear =  document.querySelector(".clear");
clear.addEventListener("click", () => {
  buttonValue = 0;
  updateDisplay(buttonValue);
})
};
//function to delete single input
function deleteSingle(){};
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