// Function to add a new task
function addTask() {
    var input = document.getElementById('taskInput');
    var taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    var taskList = document.getElementById('taskList');

    // Create new list item
    var taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Add delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.onclick = function() {
        taskItem.remove();
        saveTasksToLocalStorage();
    };
    taskItem.appendChild(deleteButton);

    // Append new task to the list
    taskList.appendChild(taskItem);

    // Clear input field
    input.value = '';

    // Save tasks to localStorage
    saveTasksToLocalStorage();
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage() {
    var tasks = [];
    var taskList = document.getElementById('taskList').getElementsByTagName('li');

    for (var i = 0; i < taskList.length; i++) {
        tasks.push(taskList[i].textContent);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasksFromLocalStorage() {
    var storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        var tasks = JSON.parse(storedTasks);
        var taskList = document.getElementById('taskList');

        tasks.forEach(function(taskText) {
            var taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            var deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.onclick = function() {
                taskItem.remove();
                saveTasksToLocalStorage();
            };
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);
        });
    }
}

// Load tasks from localStorage when the page loads 
window.onload = function() {
    loadTasksFromLocalStorage();
};
