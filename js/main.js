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


const displayArea = document.querySelector(".calc-display")
document.addEventListener("keydown", (event) => {
    if (!isNaN(event.key)){
        displayArea.textContent += event.key;
    }else if (event.key == "Backspace") {
        displayArea.textContent = displayArea.textContent.slice(0, -1);
    } 
    
    }
);