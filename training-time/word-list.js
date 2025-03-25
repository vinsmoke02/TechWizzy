const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const storageKey = "items";

let items = [];

// ✅ Load existing tasks when the page loads
document.addEventListener("DOMContentLoaded", loadItems);

// ✅ Add Task
function addTask() {
  if (taskInput.value.trim() === '') {
    alert('Nanika tsuika shiro yo baka!');
    return;
  }

  const task = {
    id: Date.now(), // ✅ Assign a unique ID to each task
    text: taskInput.value,
    completed: false
  };

  items.push(task);
  saveItems();
  renderItems();
  taskInput.value = ''; // ✅ Clear input after adding
}

// ✅ Render Tasks
function renderItems() {
  taskList.innerHTML = '';

  items.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', item.id); // ✅ Keep a unique identifier

    li.innerHTML = `
      <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
      <span class="delete-btn" onclick="deleteTask(${item.id})">❌</span>
    `;

    li.addEventListener('click', () => toggleComplete(item.id));
    taskList.appendChild(li);
  });
}

// ✅ Toggle Task Completed (based on unique ID)
function toggleComplete(taskId) {
  const task = items.find(item => item.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveItems();
    renderItems();
  }
}

// ✅ Delete Task (using unique ID)
function deleteTask(taskId) {
  items = items.filter(item => item.id !== taskId); // ✅ Remove correct task
  saveItems();
  renderItems();
}

// ✅ Save to Local Storage
function saveItems() {
  localStorage.setItem(storageKey, JSON.stringify(items));
}

// ✅ Load from Local Storage
function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) items = JSON.parse(oldItems);
  renderItems();
}

function goBack() {
  window.history.back(); // Navigates to the previous page
}

