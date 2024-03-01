// list storage and display task list
var tasks = [];
var taskList = document.getElementById('taskList');
var taskInput = document.getElementById('taskInput');
// Function to add task
function addTask() {
    var task = taskInput.value.trim(); //trim removes white spaces
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
    var newTask = prompt('Enter the new task', tasks[num]);
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
    tasks.forEach(function (task, num) {
        var li = document.createElement('li');
    });
}
// displayTasks()
