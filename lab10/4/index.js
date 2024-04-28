let db;

const request = indexedDB.open('tasksDB', 1);

request.onerror = (event) => {
    console.log("Database error: " + event.target.errorCode);
};

request.onsuccess = (event) => {
    db = event.target.result;
    displayTasks();
};

request.onupgradeneeded = (event) => {
    db = event.target.result;
    const objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement:true });
    objectStore.createIndex('name', 'name', { unique: false });
};

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskName = taskInput.value.trim();

    if (taskName !== '') {
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore('tasks');
        const newTask = { name: taskName };
        const request = objectStore.add(newTask);

        request.onsuccess = function() {
            displayTasks();
        };

        taskInput.value = '';
    }
}

function displayTasks() {
    const transaction = db.transaction(['tasks'], 'readonly');
    const objectStore = transaction.objectStore('tasks');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    objectStore.openCursor().onsuccess = function(event) {
        const cursor = event.target.result;
        if (cursor) {
            const listItem = document.createElement('li');
            listItem.textContent = cursor.value.name;
            listItem.setAttribute('data-index', cursor.value.id);
            listItem.onclick = function() {
                deleteTask(cursor.value.name);
            };
            taskList.appendChild(listItem);
            cursor.continue();
        }
    };
}

function deleteTask() {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');

    objectStore.openCursor().onsuccess = function(event) {
        const cursor = event.target.result;
        if (cursor) {
            if (cursor.value.name === document.getElementById('deleteInput').value) {
                const request = cursor.delete();
                request.onsuccess = function() {
                    document.getElementById('deleteInput').value = '';
                    displayTasks();
                };
            } else {
                cursor.continue();
            }
        }
    };
}

function deleteAllTasks() {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.clear();

    request.onsuccess = () => displayTasks();
}