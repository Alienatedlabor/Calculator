//tracking values
let trackedValue = 0;
let previousOperator = "";

//display selectors
let previousExpression = document.querySelector(".previousNumber");
previousExpression.innerText = " ";
let currentExpression = document.querySelector(".currentNumber");
currentExpression.innerText = 0;

//button stuff
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
  currentExpression.innerText = currentExpression.innerText.replace(/^0+/, ``);
  currentExpression.append(buttonValue);
  if (currentExpression.innerText.length >= 13 || previousExpression.innerText.length >= 29){
    alert("too many characters for display")
    clear();
  }
}

//function to clear display
const CLEAR = document.querySelector(".clear");
CLEAR.addEventListener("click", clear);
function clear() {
  trackedValue = 0;
  previousOperator = "";
  currentExpression.innerText = "0";
  previousExpression.innerText = "";
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
//adding operators to DOM, making operator selection cause display shift currentExpression to previousExpression
const operator = document.querySelectorAll(".operator");
operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    //turns bottom string into number
    let parseNumber = parseFloat(currentExpression.innerText);
    if (previousOperator) {
      operate(parseNumber, previousOperator);
    } else {
      trackedValue = parseNumber;
    }
    previousOperator = operator.id;
    previousExpression.innerText = previousExpression.innerText + parseNumber + operator.id;
    currentExpression.innerText = "";
    if (operator.id === '=') {
      currentExpression.innerText = trackedValue;
      currentExpression.innerText = parseFloat(currentExpression.innerText).toFixed(2);
    }
  });
});
//clear the display on press after calculation: 
const equals = document.querySelector(".equals");
equals.addEventListener("blur", clear);

const operate = function (newValue, operator) {
  //addition
  if (operator === "+") {
    trackedValue += newValue;
  }
  //subtraction
  if (operator === "-") {
    trackedValue -= newValue;
  }
  //multiplication
  if (operator === "X") {
    trackedValue *= newValue;
  }
  //division
  if (operator === "/") {
    trackedValue /= newValue;
  }
};
//TO DO: 
//set string length limit so display can't overflow
//disallow multiple operator presses - currently returns NaN so this might be enough. 
