"use strict";
// list storage and display task list
let tasks = [];
let taskList = document.getElementById('taskList');
// Function to add task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim(); //trim removes white spaces
    if (task !== "") {
        tasks.push(task);
        // displayTasks();
        taskInput.value = "";
    }
    else {
        alert('Please enter a task');
    }
}
// // Function to modify
function modifyTask(num) {
    const newTask = prompt('Enter the new task', tasks[num]);
    if (newTask !== null) {
        tasks[num] = newTask.trim();
        // displayTasks();
    }
}
//  Function to delete task
function deleteTask(num) {
    if (confirm("Are you sure you want to delete?")) {
        tasks.splice(num, 1);
        // displayTasks()
    }
}
// // Function to display Tasks
function displayTasks() {
    taskList.innerHTML = "";
}
// displayTasks()
