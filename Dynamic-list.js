const input = document.getElementById('input');
const list = document.getElementById('list');

const array = ["peach", "banana", "apple", "orange", "grape", "kiwi", "mango", "strawberry", "blueberry", "raspberry"];

// Dibuja la lista desde cero con los elementos recibidos
const renderList = (items) => {
  list.textContent = '';

  items.forEach((item) => {
    const li = document.createElement('li'); // un li NUEVO por cada ítem
    li.textContent = item;
    list.appendChild(li);
  });
};

// includes: muestra los elementos que CONTIENEN el texto, no solo los que empiezan por él
const filterList = () => {
  const filter = input.value.toLowerCase();
  const filteredArray = array.filter((item) => item.toLowerCase().includes(filter));
  renderList(filteredArray);
};

input.addEventListener('input', filterList);

renderList(array); // muestra la lista completa apenas se abre la página
