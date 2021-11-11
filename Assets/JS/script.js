//* Variables
const buttonEl = document.querySelector("#save-task");
const tasksToDoEl = document.querySelector("#tasks-to-do");

//* Functions
// Creates tasks
const createTaskHandler = function () {
  const taskItemEl = document.createElement("li");
  taskItemEl.classList.add("task-item");
  taskItemEl.textContent = "New Task";
  tasksToDoEl.appendChild(taskItemEl);
};

//* Event Listeners
buttonEl.addEventListener("click", createTaskHandler);
