//* Variables
const buttonEl = document.querySelector("#save-task");
const tasksToDoEl = document.querySelector("#tasks-to-do");
const taskNameInput = document.querySelector("input[name='task-name']");
const formEl = document.querySelector("#task-form");
const taskTypeInput = document.querySelector("select[name='task-type']");
console.log(taskTypeInput);

//* Functions
// Creates tasks
const createTaskHandler = function (e) {
  // Prevents site from reloading
  e.preventDefault();
  // Creates new list item
  const taskItemEl = document.createElement("li");
  // Adds class to list item
  taskItemEl.classList.add("task-item");
  // Create div to hold task info
  const taskInfoEl = document.createElement("div");
  // Set its contents as the input and select values
  taskInfoEl.innerHTML = `
  <h3 class="task-name">
    ${taskNameInput.value}
  </h3> 
  <span class="task-type">
    ${taskTypeInput.value}
  </span>
  `;
  // Append the div to the li
  taskItemEl.appendChild(taskInfoEl);
  // Append list item to ul
  tasksToDoEl.appendChild(taskItemEl);
};

//* Event Listeners
formEl.addEventListener("submit", createTaskHandler);
