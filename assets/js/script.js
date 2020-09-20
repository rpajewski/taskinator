// Taskinator - Task Manager Application

// Assign a variables to DOM objects
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Assign a variable to the fuction responsible for creating a new task
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

// Add event listener to task button to create a new task
buttonEl.addEventListener("click", createTaskHandler);

