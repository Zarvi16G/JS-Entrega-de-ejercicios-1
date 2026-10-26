const labelTime = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

// Initialize timer variables
let seconds = 0;

// Avoid start multiple intervals by keeping track of the interval ID
let intervalId = null;

// Use second to get the time in hours, minutes, and seconds
function timerFunction() {
    // Usar math.floor para obtener rendondeos hacia abajo 
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  labelTime.textContent = `${h}:${m}:${s}`;
};

const startTimer = () => {
  // Si ya hay un intervalo corriendo, no se crea otro
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    seconds++;
    timerFunction();
  }, 1000);
};

const stopTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const resetTimer = () => {
  stopTimer();
  seconds = 0;
  timerFunction();
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

