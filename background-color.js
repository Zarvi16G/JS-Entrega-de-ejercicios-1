const colorButton = document.getElementById('color-button');

// Arma un color hexadecimal (#RRGGBB) con 6 caracteres al azar
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBackgroundColor = () => {
  document.body.style.backgroundColor = getRandomColor();
};

colorButton.addEventListener('click', changeBackgroundColor);
