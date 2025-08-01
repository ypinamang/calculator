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
            return divide(a, b);
            break;
        default: 
            return "Invalid";
    }
}

// Show clicked number in display

const displayClickedBtn = function(button, displayArea) {
    const operatorSymbols = ["+", "-", "*", "/"];
    // don't display if character is an equal sign
    if (button.textContent == "=") return;
    if ((button.textContent == ".") && (!displayArea.textContent.includes("."))){
            displayArea.textContent += "."
            console.log("first dot now exists..accepting no more");
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
let secondNum = 0;
numberButtons.forEach(button => button.addEventListener("click", () => {
    displayClickedBtn(button, displayArea);
    firstNum = displayArea.textContent 
    firstNum = parseFloat(firstNum);
}));

const operatorButtons = document.querySelectorAll(".symbol");
operatorButtons.forEach(button => button.addEventListener("click", () => {
    clearDisplay();

}))


const clearDisplay = function(){
    displayArea.textContent = "";
}

