// DOM nodes
const form = document.querySelector("#todo-form");
const formField = document.getElementById("title");
const todoList = document.getElementById("todo-list");

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  getTodos(10);
}

function getTodos(limit) {
  fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then((response) => response.json())
    .then((data) => showTodos(data))
    .catch((error) => alert(error));
}

function showTodos(todosArr) {
  todosArr.forEach((todo) => {
    const todoNode = createTodoNode(todo);
    todoList.appendChild(todoNode);
  });
}

function createTodoNode(todoObject) {
  const div = document.createElement("div");
  div.innerText = todoObject.title;
  if (todoObject.completed) {
    div.classList.add("done");
  }
  return div;
}
