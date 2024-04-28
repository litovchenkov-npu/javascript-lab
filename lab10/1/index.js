function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskName = taskInput.value.trim();

    if (taskName !== '') {
        let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
        taskList.push(taskName);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks() {
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    let listElement = document.getElementById('taskList');
    listElement.innerHTML = '';

    taskList.forEach(function(task, index) {
        let listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.setAttribute('data-index', index);
        listItem.onclick = () => deleteTask(task);
        listElement.appendChild(listItem);
    });
}

function deleteTask() {
    let taskInput = document.getElementById('deleteInput');
    let taskName = taskInput.value.trim();
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

    let updatedTaskList = taskList.filter(function(task) {
        return task !== taskName;
    });

    localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
    taskInput.value = '';
    displayTasks();
}

function deleteAllTasks() {
    localStorage.removeItem('taskList');
    displayTasks();
}

window.onload = displayTasks;