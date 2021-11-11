//* Variables
const buttonEl = document.querySelector("#save-task");
const tasksToDoEl = document.querySelector("#tasks-to-do");
const formEl = document.querySelector("#task-form");

//* Functions
//~ Gets data from user
const taskFormHandler = function (e) {
  // Prevents site from reloading
  e.preventDefault();
  // Gets data from input field and select dropdown
  const taskNameInput = document.querySelector("input[name='task-name']");
  const taskTypeInput = document.querySelector("select[name='task-type']");
  // Package up input data as an object
  const taskDataObj = { name: taskNameInput.value, type: taskTypeInput.value };
  // Passes input data into function that creates and appends tasks then calls it
  createTaskEl(taskDataObj);
};

//~ Creates new task element and appends it to ul
const createTaskEl = function (taskDataObj) {
  // Creates new list item
  const taskItemEl = document.createElement("li");
  // Adds class to list item
  taskItemEl.classList.add("task-item");
  // Create div to hold task info
  const taskInfoEl = document.createElement("div");
  // Set its contents as the input and select values
  taskInfoEl.innerHTML = `
  <h3 class="task-name">
    ${taskDataObj.name}
  </h3> 
  <span class="task-type">
    ${taskDataObj.type}
  </span>
  `;
  // Append the div to the li
  taskItemEl.appendChild(taskInfoEl);
  // Append list item to ul
  tasksToDoEl.appendChild(taskItemEl);
};

//* Event Listeners
formEl.addEventListener("submit", taskFormHandler);
