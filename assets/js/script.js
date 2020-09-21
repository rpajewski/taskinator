// Taskinator - Task Manager Application

// Assign a variables to DOM objects
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Assign a variable to the fuction responsible for creating a new task
var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);
};

// Add event listener to task button to create a new task
formEl.addEventListener("submit", createTaskHandler);

