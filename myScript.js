// DOM nodes
const form = document.querySelector("#todo-form");
const formField = document.getElementById("title");
const todoList = document.getElementById("todo-list");

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  getTodos(10);
  // event handlers
  form.addEventListener("submit", createNewTodo);
  todoList.addEventListener("click", toggleTodoStatus);
}

function toggleTodoStatus(e) {
  if (e.target.classList.contains("todo")) {
    const todo = e.target;
    const currentStatus = todo.classList.contains("done");
    sendPatchRequest(todo.id, currentStatus).then((modifiedTodo) =>
      markTodoDoneOnDOM(todo, modifiedTodo.completed)
    );
    console.log(currentStatus);
  }
}

function markTodoDoneOnDOM(selectedNode, updatedStatus) {
  selectedNode.classList.toggle("done", updatedStatus);
}

function sendPatchRequest(todoId, currentStatus) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    method: "PATCH",
    body: JSON.stringify({
      completed: !currentStatus,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
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
  //console.log(todoObject);
  const div = document.createElement("div");
  div.innerText = todoObject.title;
  div.id = todoObject.id;
  div.classList.add("todo");
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
