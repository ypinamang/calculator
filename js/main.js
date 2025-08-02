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
    
    if (button.id != "dot") {
    
  
    button.addEventListener("click", () => { 
        if (displayArea.textContent == "0"){
            displayArea.textContent = "";
        }
        if ((!isOperatorClicked) && (!isEqualClicked))  {
        displayArea.textContent += button.textContent;
        } else {
            displayArea.textContent = button.textContent;
            isOperatorClicked = false;
            isEqualClicked = false;
        }
        isNumberEntered = true;
    })
    } else { 
        if (!displayArea.textContent.includes(".")) {
            displayArea.textContent += ".";
        }
    }
})



const operatorButtons = document.querySelectorAll(".operator.btn");
operatorButtons.forEach(button => {
    if (button.id != "subtract") {
        button.addEventListener("click", () => {
 
            if (((!firstNum) || (displayArea.textContent))){
            firstNum = getNumInDisplay();
            if (isNaN(firstNum)) {
                firstNum = 0;
                console.log("I'm here because firstNum is really NaN")
            }
            
            console.log("I was executed...to display firstNum")
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
            
            isNumberEntered = false;
        })
    }
});

// Handling subtraction and the minus button separately
const minusBtn = document.querySelector("#subtract");
minusBtn.addEventListener("click", () => {

    if ((!firstNum) || (displayArea.textContent)) {
        firstNum = getNumInDisplay();
        console.log("Minus in action.")
    }

    displayArea.textContent = minusBtn.textContent;
    isOperatorClicked = true;
    isminusClicked = true;


    operator = "-";
});

const dotBtn = document.querySelector("#dot");
dotBtn.addEventListener("click", () => {
    if (!displayArea.textContent.includes(".")) {
        displayArea.textContent += ".";
    } 
}) 

 

const clearBtn = document.querySelector(".clear-btn")
clearBtn.addEventListener("click", () => {
    displayArea.textContent = "";
    isEqualClicked = false;
    isOperatorClicked = false;
    isNumberEntered = false
    initializeAll();
})

let isOperatorClicked = false;
let isEqualClicked = false;
let isMinusClicked = false;

const validOperators = ["+", "-", "*" ,"/"];
let operator, firstNum, secondNum, result;

// Initialize all operands and operator to 1 at the start of the program
initializeAll();


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
    
    if ((isBothNumbersProper) && (isNumberEntered)){
    result = operate(operator, firstNum, secondNum);
    console.log(`${firstNum} ${operator} ${secondNum} version both proper`);
    firstNum = result;
    }  else {
        if (isNaN(firstNum) & isNaN(secondNum)) {
        result = 0;
        } else if (isNaN(firstNum)) {
            
            result = operate(operator, 0, secondNum);
        } else {
            result = operate(operator, firstNum, 0);
        }
        console.log(`${firstNum} ${operator} ${secondNum} version sankwas`);
        
        
    }
    displayArea.textContent = result;
    isEqualClicked = true;
    isNumberEntered = false;

});

function initializeAll() {
operator = "+";
firstNum = 0;
secondNum = 0;
displayArea.textContent = "0";
}