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
  resultItem.textContent = `Resultado: ${result}`;
  resultList.appendChild(resultItem);
};

// Lee los dos campos; si alguno está vacío, parseFloat da NaN y se avisa
const readNumbers = () => {
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert('Introduce los dos números');
    return null;
  }
  return { num1, num2 };
};

addButton.addEventListener('click', () => {
  const numbers = readNumbers();
  if (numbers === null) return;
  displayResult(addResult(numbers.num1, numbers.num2));
});

subtractButton.addEventListener('click', () => {
  const numbers = readNumbers();
  if (numbers === null) return;
  displayResult(subtractResult(numbers.num1, numbers.num2));
});

multiplyButton.addEventListener('click', () => {
  const numbers = readNumbers();
  if (numbers === null) return;
  displayResult(multiplyResult(numbers.num1, numbers.num2));
});

divideButton.addEventListener('click', () => {
  const numbers = readNumbers();
  if (numbers === null) return;
  if (numbers.num2 === 0) {
    alert('No se puede dividir entre cero');
    return;
  }
  displayResult(divideResult(numbers.num1, numbers.num2));
});

clearButton.addEventListener('click', () => {
  resultList.innerHTML = '';
  number1.value = '';
  number2.value = '';
});
