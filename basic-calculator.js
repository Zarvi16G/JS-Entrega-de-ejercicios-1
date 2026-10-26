const resultList = document.getElementById('result');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const clearButton = document.getElementById('clear');

const addResult = (a, b) => a + b;
const subtractResult = (a, b) => a - b;
const multiplyResult = (a, b) => a * b;
const divideResult = (a, b) => a / b;

const displayResult = (result) => {
  const resultItem = document.createElement('li');
  resultItem.textContent = `Result: ${result}`;
  resultList.appendChild(resultItem);
};

addButton.addEventListener('click', () => {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  const result = addResult(num1, num2);
  displayResult(result);
});

subtractButton.addEventListener('click', () => {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  const result = subtractResult(num1, num2);
  displayResult(result);
});

multiplyButton.addEventListener('click', () => {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  const result = multiplyResult(num1, num2);
  displayResult(result);
});

divideButton.addEventListener('click', () => {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  if (num2 === 0) {
    alert('Cannot divide by zero');
    return;
  }
  const result = divideResult(num1, num2);
  displayResult(result);
});

clearButton.addEventListener('click', () => {
  resultList.innerHTML = '';
  number1.value = '';
  number2.value = '';
});