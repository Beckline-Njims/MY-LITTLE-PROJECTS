const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendValue(value) {
    if (display.textContent === '0' || display.textContent === 'Error') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (operator !== '') calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = curr !== 0 ? prev / curr : 'Error'; break;
    }

    display.textContent = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.textContent = '0';
}