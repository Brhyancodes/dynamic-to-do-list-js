document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
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
      };
  
      // Append the remove button to the li element
      taskListItem.appendChild(removeButton);
  
      // Append the li element to taskList
      taskList.appendChild(taskListItem);
  
      // Clear the task input field
      taskInput.value = "";
    }
  
    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });