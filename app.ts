// list storage and display task list
let tasks: string[] = [];
let taskList = document.getElementById('taskList') as HTMLLIElement;
const taskInput = document.getElementById('taskInput') as HTMLInputElement;




// Function to add task
function addTask() {
        const task = taskInput.value.trim();    //trim removes white spaces
    if (task !== "") {
        tasks.push(task);
        // displayTasks();
        taskInput.value = "";
    } else {
        alert('Please enter a task');
    }
}

// // Function to modify
function modifyTask(num: number) {
    const newTask = prompt('Enter the new task', tasks[num]);
    if (newTask !== null) {
        tasks[num] = newTask.trim();
        // displayTasks();
    }
}

//  Function to delete task
function deleteTask(num: number) {
    if (confirm("Are you sure you want to delete?")) {
        tasks.splice(num, 1)
        // displayTasks()
    }
}

// // Function to display Tasks
function displayTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task, num) => {
        const li = document.createElement('li');
    })
}
// displayTasks()
