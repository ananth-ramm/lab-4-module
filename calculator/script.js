let currentInput = '0';
let previousInput = '';
let operation = null;

function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function setOperation(op) {
  if (operation !== null) calculate();
  operation = op;
  previousInput = currentInput;
  currentInput = '0';
}

function calculate() {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  let result;
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

updateDisplay();
