function makeZero() {
    var textArea = document.querySelector('.display');
    textArea.innerHTML = "";
    document.getElementById('point').disabled = false;
}

function sendToDisplay(el) {
    var toCalculate = document.querySelector('.display');
    var tempOperation = toCalculate.innerText + el;
    toCalculate.innerText = tempOperation;
}

function sendoperator(el) {
    var toCalculate = document.querySelector('.display');
    var tempOperation = toCalculate.innerText + el;
    toCalculate.innerText = tempOperation;
    document.getElementById('point').disabled = false;
}

function sendToDisplaypoint(el) {
    var toCalculate = document.querySelector('.display');
    var tempOperation = toCalculate.innerText + el;
    toCalculate.innerText = tempOperation;
    document.getElementById('point').disabled = true;
}

function deleteElement() {
    var textArea = document.querySelector('.display');
    var equation = textArea.innerText;
    equation = (equation.slice(0, equation.length - 1))
    textArea.innerText = equation;
}

function evaluateExpression() {
    var textArea = document.querySelector('.display');
    var equation = textArea.innerText;
    var result = eval(equation);
    textArea.innerText = result;
    document.getElementById('point').disabled = false;
}