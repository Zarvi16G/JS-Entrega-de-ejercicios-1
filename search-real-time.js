const list = document.getElementById('tasks-list');
const clearButton = document.getElementById('clear-completed');

// Lee las tareas guardadas; si no hay nada, devuelve una lista vacía
const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

// Guarda la lista completa como texto
const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

/*
 * Posición de un <li> dentro de la lista.
 *
 * La fila en la posición i corresponde a tasks[i]. Se calcula en el momento del
 * evento (y no al crear la fila) porque al borrar una tarea las posiciones de
 * las de abajo se mueven.
 *
 * Tipos de fila según su posición:
 * - index < tasks.length   -> tarea guardada
 * - index === tasks.length -> caja vacía habilitada para escribir la siguiente
 * - index > tasks.length   -> caja deshabilitada (bloqueada) de abajo
 */
const getRowIndex = (li) => Array.from(list.children).indexOf(li);

// Tachado si la tarea está completada
const updateCompletedStyle = (textInput, completed) => {
  textInput.style.textDecoration = completed ? 'line-through' : 'none';
};

// Crea un <li> con su checkbox y su caja de texto
const createRow = (task, disabled) => {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task ? task.completed : false;
  checkbox.disabled = !task; // una caja vacía no se puede marcar

  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.placeholder = 'Write something here';
  textInput.value = task ? task.text : '';
  textInput.disabled = disabled;
  updateCompletedStyle(textInput, checkbox.checked);

  // 'input': se dispara con cada cambio del texto (igual que en el ejercicio 8)
  textInput.addEventListener('input', () => {
    const tasks = getTasks();
    const index = getRowIndex(li);
    const text = textInput.value.trim();

    checkbox.disabled = text === '';

    if (index === tasks.length) {
      // Es la caja vacía: con la primera letra se convierte en tarea
      if (text === '') return;

      tasks.push({ text, completed: false });

      // Desbloquea la caja de abajo y agrega una nueva bloqueada al final
      li.nextElementSibling.querySelector('input[type="text"]').disabled = false;
      list.appendChild(createRow(null, true));
    } else {
      tasks[index].text = text;
    }

    saveTasks(tasks);
  });

  /*
   * 'blur': se dispara cuando la caja pierde el foco (el usuario hace clic fuera
   * o pasa a otra caja).
   *
   * Las tareas vacías se borran aquí y no en 'input' porque, si se borrara al
   * instante, la caja desaparecería mientras el usuario la está editando (por
   * ejemplo, si borra todo para reescribirla).
   */
  textInput.addEventListener('blur', () => {
    const tasks = getTasks();
    const task = tasks[getRowIndex(li)];

    if (task && task.text === '') {
      tasks.splice(getRowIndex(li), 1); // quita 1 elemento en esa posición
      saveTasks(tasks);
      li.remove();
    }
  });

  // En un checkbox, 'change' se dispara justo al marcarlo o desmarcarlo
  checkbox.addEventListener('change', () => {
    const tasks = getTasks();
    tasks[getRowIndex(li)].completed = checkbox.checked;
    saveTasks(tasks);
    updateCompletedStyle(textInput, checkbox.checked);
  });

  li.append(checkbox, textInput);
  return li;
};

// Dibuja toda la lista desde cero
const renderList = () => {
  // Quita tareas vacías que hayan quedado guardadas (por ejemplo, si se recargó
  // la página sin salir de una caja vacía)
  const tasks = getTasks().filter((task) => task.text !== '');
  saveTasks(tasks);

  list.textContent = ''; // limpia la lista para no repetir filas

  tasks.forEach((task) => list.appendChild(createRow(task, false)));

  list.appendChild(createRow(null, false)); // caja vacía para escribir
  list.appendChild(createRow(null, true));  // caja bloqueada de abajo
};

// Borra solo las completadas: filter se queda con las que NO están marcadas
clearButton.addEventListener('click', () => {
  const pendingTasks = getTasks().filter((task) => !task.completed);
  saveTasks(pendingTasks);
  renderList();
});

renderList(); // muestra lo guardado apenas se abre la página
