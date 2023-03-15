const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// Storing the todos
let todos = [];

// Function to add a new todo
function addTodo() {
  // Getting the input value
  const newTodo = todoInput.value.trim();

  // Adding the new todo to the todos array
  if (newTodo !== "") {
    todos.push(newTodo);

    // Rendering the todo list
    renderTodoList();
  }

  // Clearing the input field
  todoInput.value = "";
}

// Function to render the todo list
function renderTodoList() {
  // Clearing the previous list items
  todoList.innerHTML = "";

  // Looping through the todos array and creating a new list item for each todo
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    const todoText = document.createElement("span");
    todoText.classList.add("todo-text");
    todoText.textContent = todo;

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");

    checkBox.addEventListener("click", function() {
      mark(todoText, checkBox);
    });

    const todoDelete = document.createElement("button");
    todoDelete.classList.add("todo-delete");
    todoDelete.textContent = "Delete";
    todoDelete.addEventListener("click", () => deleteTodoItem(i));

    todoItem.appendChild(todoText);
    todoItem.appendChild(checkBox);
    todoItem.appendChild(todoDelete);

    todoList.appendChild(todoItem);
  }
}

// Function to delete a todo item
function deleteTodoItem(index) {
  // Removing the todo item from the todos array
  todos.splice(index, 1);

  // Rendering the updated todo list
  renderTodoList();
}

function mark(todoText, checkBox) {
  if (checkBox.checked) {
    const h2 = document.createElement("h2");
    h2.innerHTML = todoText.innerHTML;
    todoText.parentNode.replaceChild(h2, todoText);
    todoText.parentNode.removeChild(checkBox);
  } else {
    const span = document.createElement("span");
    span.innerHTML = todoText.innerHTML;
    todoText.parentNode.replaceChild(span, todoText);
  }
}

// Event listener for adding a new todo
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});
