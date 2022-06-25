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

//function operate: takes 2 numbers and an operator and calls one of the above functions:
const operate = function (number1, number2, operator) {
  //addition
  //subtraction
  //multiplication
  //division
};
