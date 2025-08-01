const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}


const operate = function (operator, a, b) {
    switch (operator) {
        case "+": 
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            if (b == 0) return "Not gonna work";
            return a / b;
            break;
        default: 
            return 0;
    }
}

// Show clicked number in display

const displayClickedBtn = function(button, displayArea) {
    const operatorSymbols = ["+", "-", "*", "/"];
    // don't display if character is an equal sign
    if (button.textContent == "=") return;
    if ((button.textContent == ".") && (!displayArea.textContent.includes("."))){
            displayArea.textContent += ".";
        } else {
              if (button.textContent !== ".") {
                displayArea.textContent += button.textContent;
              }     
        }
    }



const displayArea = document.querySelector(".calc-display");
console.log(displayArea.textContent);

const numberButtons = document.querySelectorAll(".number");

let firstNum = 0;
let operator = "";
let isEqualClicked = false;
let result = 0;

numberButtons.forEach(button => button.addEventListener("click", () => {
    if (isEqualClicked) {
        clearDisplay();
        isEqualClicked = false;
    }
    displayClickedBtn(button, displayArea);
}));



const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => button.addEventListener("click", () => {
    firstNum = displayArea.textContent;
    firstNum = parseFloat(firstNum);
    
    clearDisplay();
    switch(button.id) {
        case "add":
            operator = "+";
            break;
        case "subtract":
            operator = "-";
            break;
        case "multiply":
            operator = "*";
            break;
        case "divide":
            operator = "/";
            break;
        default:
            console.log("Invalid");
    }
   
}))


const clearDisplay = function(){
    displayArea.textContent = "";
}

const equalButton = document.querySelector("#equal-sign");

equalButton.addEventListener("click", () => {

    

    let secondNum = displayArea.textContent;
    secondNum = parseFloat(secondNum);

    // Perform calc
    if (!isEqualClicked){
    result = operate(operator, firstNum, secondNum);
    } else result = result;

    clearDisplay();
    displayArea.textContent = result;
    isEqualClicked = true;
    console.log(firstNum);
    console.log(operator);
    console.log(secondNum);
    console.log(result);

});


