const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  if (taskInput.value === '') {
    alert('Nanika tsuika shiro yo baka');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskInput.value}
    <span class="delete-btn" onclick="deleteTask(this)">❌</span>
  `;
  li.addEventListener('click', () => {
    li.classList.toggle('completed'); 
  });

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(task) {
  task.parentElement.remove();
}
