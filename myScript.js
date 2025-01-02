// DOM nodes
const form = document.querySelector("#todo-form");
const formField = document.getElementById("title");
const todoList = document.getElementById("todo-list");

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  // event handlers
  form.addEventListener("submit", createNewTodo);
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

function createNewTodo(e) {
  e.preventDefault();
  if (formField.value) {
    sendPostRequest(formField.value).then((newTodoObj) =>
      showNewTodo(newTodoObj)
    );
    formField.value = "";
  }
}

function sendPostRequest(newTask) {
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title: newTask,
      completed: false,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}

function showNewTodo(todoObject) {
  const newTodoNode = createTodoNode(todoObject);
  todoList.appendChild(newTodoNode);
}
