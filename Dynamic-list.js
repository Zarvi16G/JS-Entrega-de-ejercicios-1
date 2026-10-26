const input = document.getElementById('input');
const list = document.getElementById('list');

const array = ["peach", "banana", "apple", "orange", "grape", "kiwi", "mango", "strawberry", "blueberry", "raspberry"];

const renderList = () => {
  array.map((item) => {
    const li = document.createElement('li'); // un li NUEVO por cada ítem
    li.textContent = item;
    list.appendChild(li);
  });   
};

renderList(); // muestra lo guardado apenas se abre la página

function filterList() {
    const filter = input.value.toLowerCase();
    list.innerHTML = '';

    const filteredArray = array.filter(item => item.toLowerCase().startsWith(filter));
    
    filteredArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}