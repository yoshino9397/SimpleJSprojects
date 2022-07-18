const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerHTML = `
    <p>${todoText}</p>
    <button class="remove">x</button>
    `;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    const btn = todoEl.querySelector(".remove");
    btn.addEventListener("click", () => {
      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll("li");
  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.todoText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
