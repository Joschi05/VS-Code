let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetInput = false;

const resultEl = document.getElementById('result');
const expressionEl = document.getElementById('expression');

function updateDisplay() {
    resultEl.textContent = currentInput;
    resultEl.className = 'result' + (currentInput.length > 9 ? ' small' : '');
}

function inputDigit(digit) {
    if (shouldResetInput) {
        currentInput = digit;
        shouldResetInput = false;
    } else {
        currentInput = currentInput === '0' ? digit : currentInput + digit;
    }
    updateDisplay();
}

function inputDot() {
    if (shouldResetInput) {
        currentInput = '0.';
        shouldResetInput = false;
        updateDisplay();
        return;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function inputOperator(op) {
    document.querySelectorAll('.btn-operator').forEach(b => b.classList.remove('active'));

    if (operator && !shouldResetInput) {
        calculate(true);
    }

    previousInput = currentInput;
    operator = op;
    shouldResetInput = true;

    const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };
    expressionEl.textContent = `${previousInput} ${symbols[op]}`;

    const opButtons = document.querySelectorAll('.btn-operator');
    const opMap = { '+': 3, '-': 2, '*': 1, '/': 0 };
    if (opMap[op] !== undefined) {
        opButtons[opMap[op]].classList.add('active');
    }
}

function calculate(chained = false) {
    if (!operator || previousInput === '') return;

    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };

    let result;
    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
            if (b === 0) {
                currentInput = 'Fehler';
                expressionEl.textContent = '';
                operator = null;
                previousInput = '';
                updateDisplay();
                return;
            }
            result = a / b;
            break;
    }

    if (!chained) {
        expressionEl.textContent = `${previousInput} ${symbols[operator]} ${currentInput} =`;
    }

    currentInput = parseFloat(result.toFixed(10)).toString();
    operator = null;
    previousInput = '';
    shouldResetInput = true;

    document.querySelectorAll('.btn-operator').forEach(b => b.classList.remove('active'));
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetInput = false;
    expressionEl.textContent = '';
    document.querySelectorAll('.btn-operator').forEach(b => b.classList.remove('active'));
    updateDisplay();
}

function toggleSign() {
    if (currentInput === '0' || currentInput === 'Fehler') return;
    currentInput = currentInput.startsWith('-')
        ? currentInput.slice(1)
        : '-' + currentInput;
    updateDisplay();
}

function percent() {
    if (currentInput === 'Fehler') return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') inputDigit(e.key);
    else if (e.key === '.') inputDot();
    else if (e.key === '+') inputOperator('+');
    else if (e.key === '-') inputOperator('-');
    else if (e.key === '*') inputOperator('*');
    else if (e.key === '/') { e.preventDefault(); inputOperator('/'); }
    else if (e.key === 'Enter' || e.key === '=') calculate();
    else if (e.key === 'Escape') clearAll();
    else if (e.key === 'Backspace') {
        if (currentInput.length > 1 && currentInput !== 'Fehler') {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
        updateDisplay();
    }
});
