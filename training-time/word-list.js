const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const storageKey = "items";

let items = [];

// ✅ Add Task
function addTask() {
  if (taskInput.value === '') {
    alert('Nanika tsuika shiro yo baka');
    return;
  }

  const task = {
    text: taskInput.value,
    completed: false
  };

  items.push(task);
  saveItems();
  renderItems();
  taskInput.value = '';
}

// ✅ Render Tasks
function renderItems() {
  taskList.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.text}
      <span class="delete-btn" onclick="deleteTask(${index})">❌</span>
    `;
    li.classList.toggle('completed', item.completed);

    li.addEventListener('click', () => toggleComplete(index));
    taskList.appendChild(li);
  });
}

// ✅ Toggle Task Completed
function toggleComplete(index) {
  items[index].completed = !items[index].completed;
  saveItems();
  renderItems();
}

// ✅ Delete Task
function deleteTask(index) {
  items.splice(index, 1);
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

// ✅ Load tasks when page refreshes
document.addEventListener("DOMContentLoaded", loadItems);