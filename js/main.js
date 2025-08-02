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
    }
}

const displayArea = document.querySelector(".calc-display");

const numberButtons = document.querySelectorAll(".number.btn");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if ((!isOperatorClicked) && (!isEqualClicked) ){
        displayArea.textContent += button.textContent;
        } else {
            displayArea.textContent = button.textContent;
            isOperatorClicked = false;
            isEqualClicked = false;
        }
    })
})



const operatorButtons = document.querySelectorAll(".operator.btn");
operatorButtons.forEach(button => {
    if (button.id != "subtract") {
        button.addEventListener("click", () => {
            if ((!firstNum) && (displayArea.textContent)){
            firstNum = getNumInDisplay();
            } 
            displayArea.textContent = button.textContent;
            isOperatorClicked = true;

            switch(button.id) {
                case "add":
                    operator = "+";
                    break;
                case "multiply":
                    operator = "*";
                    break;
                case "divide":
                    operator = "/";
                    break;
            }
            console.log(`${firstNum} ${operator}`);
        })
    }
});
 

const clearBtn = document.querySelector(".clear-btn")
clearBtn.addEventListener("click", () => {
    displayArea.textContent = "";
    isEqualClicked = false;
    isOperatorClicked = false;
    firstNum = 0
    operator = "+";
    secondNum = 0;
})

let isOperatorClicked = false;
let isEqualClicked = false;

const validOperators = ["+", "-", "*" ,"/"];
let operator, firstNum, secondNum;
// Initialize all operands and operator to 1 at the start of the program
operator = "+";
firstNum = 0;
secondNum = 0;

function getNumInDisplay() {
    return displayArea.textContent;
}

const equalSign = document.querySelector("#equal-sign"); 
equalSign.addEventListener("click", () => {
    let secondNum = getNumInDisplay()
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    console.log(`${firstNum} ${operator} ${secondNum}`);
    
    // Condition checker
    let isBothNumbersProper = (!isNaN(firstNum)) && (!isNaN(secondNum));
    let isOperatorUnavailable = (!operator)

    if (isNaN(secondNum)){
        if ((operator == "*") || (operator == "/")){
            secondNum = 1;
        } else secondNum = 0;
    }
    
    let result = operate(operator, firstNum, secondNum);
    firstNum = result;
    displayArea.textContent = result;
    isEqualClicked = true;
});

