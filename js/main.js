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
    displayArea.textContent += button.textContent;
}

const displayArea = document.querySelector(".calc-display");
console.log(displayArea.textContent);

const buttons = document.querySelectorAll(".number");


buttons.forEach(button => button.addEventListener("click", () => displayClickedBtn(button, displayArea)));