document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach((taskText) => addTask(taskText, false));
    }
  
    // Create the addTask Function
    function addTask(taskText, save = true) {
      // Retrieve and trim the value from the task input field
      const trimmedTaskText = taskText.trim();
  
      // Check if taskText is not empty
      if (trimmedTaskText === "") {
        alert("Please enter a task");
        return;
      }
  
      // Create a new li element
      const taskListItem = document.createElement('li');
      taskListItem.textContent = trimmedTaskText;
  
      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';
  
      // Assign an onclick event to the remove button
      removeButton.onclick = () => {
        taskList.removeChild(taskListItem);
        removeTaskFromStorage(trimmedTaskText);
      };
  
      // Append the remove button to the li element
      taskListItem.appendChild(removeButton);
  
      // Append the li element to taskList
      taskList.appendChild(taskListItem);
  
      // Clear the task input field
      taskInput.value = "";
  
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(trimmedTaskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
  
    // Function to remove task from tasks array and Local Storage
    function removeTaskFromStorage(task) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const index = storedTasks.indexOf(task);
      if (index !== -1) {
        storedTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
  
    // Load tasks from Local Storage
    loadTasks();
  
    // Attach Event Listeners
    addButton.addEventListener('click', () => {
      addTask(taskInput.value);
    });
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask(taskInput.value);
      }
    });
  });