// Объявляем переменную, которая будет хранить массив задач
let todos: string[] = [];

// Функция для добавления новой задачи
function addTodo() {
    // Получаем значение из поля ввода
    const todoInput = <HTMLInputElement>document.querySelector('#todo');
    const todo = todoInput.value;

    if (todo.trim() !== '') {
        // Добавляем задачу в массив
        todos.push(todo);

        // Очищаем поле ввода
        todoInput.value = '';

        // Обновляем список задач
        updateList();
    }
}

// Функция для обновления списка задач
function updateList() {
    // Получаем список задач
    const list = document.querySelector('#list');

    if (list) {
        // Очищаем список
        list.innerHTML = '';

        // Добавляем каждую задачу в список
        todos.forEach((todo) => {
            const listItem = document.createElement('li');
            listItem.textContent = todo;
            list.appendChild(listItem);
        });
    }
}

// Привязываем событие к кнопке
const addButton = document.querySelector('#add');
if (addButton) {
    addButton.addEventListener('click', addTodo);
}

// Обновляем список задач при запуске приложения
updateList();
