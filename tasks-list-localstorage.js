const input = document.getElementById('input');
const addButton = document.getElementById('add-button');
const list = document.getElementById('list');

// Lee la lista guardada; si no hay nada, devuelve una lista vacía
const getItems = () => JSON.parse(localStorage.getItem('items')) || [];

// Guarda la lista completa como texto
const saveItems = (items) => localStorage.setItem('items', JSON.stringify(items));

// Dibuja toda la lista desde cero
const renderList = () => {
  const items = getItems();
  list.textContent = ''; // limpia la lista para no repetir ítems

  items.forEach((item, index) => {
    const li = document.createElement('li'); // un li NUEVO por cada ítem
    li.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => deleteItem(index));

    li.appendChild(deleteButton); // el botón va dentro del li
    list.appendChild(li);         // el li va dentro de la lista
  });
};

const addItemStorage = () => {
  const value = input.value.trim();
  if (value === '') return; // no agrega ítems vacíos

  const items = getItems();
  items.push(value);
  saveItems(items);

  input.value = ''; // limpia la caja de texto
  renderList();
};

const deleteItem = (index) => {
  const items = getItems();
  items.splice(index, 1); // quita 1 elemento en esa posición
  saveItems(items);
  renderList();
};

addButton.addEventListener('click', addItemStorage);

renderList(); // muestra lo guardado apenas se abre la página