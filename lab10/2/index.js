const broadcastChannel = new BroadcastChannel('taskListChannel');

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskName = taskInput.value.trim();

    if (taskName !== '') {
        let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
        taskList.push(taskName);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        
        broadcastChannel.postMessage({ action: 'add', task: taskName });
        
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
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    let taskName = document.getElementById('deleteInput').value.trim();

    let updatedTaskList = taskList.filter(function(task) {
        return task !== taskName;
    });

    localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
    
    broadcastChannel.postMessage({ action: 'delete', task: taskName });
    
    document.getElementById('deleteInput').value = '';
    displayTasks();
}

function deleteAllTasks() {
    localStorage.removeItem('taskList');
    broadcastChannel.postMessage({ action: 'delete' });
    
    displayTasks();
}

broadcastChannel.onmessage = (event) => {
    const { action, task } = event.data;
    if (action === 'add' || action === 'delete') {
        displayTasks();
    }
};

window.onload = displayTasks;