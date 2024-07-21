document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Create task elements in the DOM for each task found in Local Storage
    tasks.forEach((task) => {
      const taskListItem = document.createElement('li');
      taskListItem.textContent = task;
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';
      removeButton.onclick = () => {
        taskList.removeChild(taskListItem);
        removeTaskFromStorage(task);
      };
      taskListItem.appendChild(removeButton);
      taskList.appendChild(taskListItem);
    });
  
    // Create the addTask Function
    function addTask() {
      // Retrieve and trim the value from the task input field
      const taskText = taskInput.value.trim();
  
      // Check if taskText is not empty
      if (taskText === "") {
        alert("Please enter a task");
        return;
      }
  
      // Create a new li element
      const taskListItem = document.createElement('li');
      taskListItem.textContent = taskText;
  
      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';
  
      // Assign an onclick event to the remove button
      removeButton.onclick = () => {
        taskList.removeChild(taskListItem);
        removeTaskFromStorage(taskText);
      };
  
      // Append the remove button to the li element
      taskListItem.appendChild(removeButton);
  
      // Append the li element to taskList
      taskList.appendChild(taskListItem);
  
      // Add task to tasks array and save to Local Storage
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      // Clear the task input field
      taskInput.value = "";
    }
  
    // Function to remove task from tasks array and Local Storage
    function removeTaskFromStorage(task) {
      tasks = tasks.filter((t) => t !== task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });