// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma tarefa
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    displayTasks();
    taskInput.value = '';
  } else {
    alert('Por favor, insira uma tarefa válida.');
  }
}

// Função para exibir as tarefas na lista
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', () => {
        editTask(index);
    });
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover Tarefa';
    removeBtn.addEventListener('click', () => {
        removeTask(index);
    });
    div.appendChild(li);
    div.appendChild(removeBtn);
    taskList.appendChild(div);
  });
}

// Função para remover uma tarefa
function removeTask(index) {
  tasks = tasks.filter((task, taskIndex) => index !== taskIndex);
  displayTasks();
}

// Função para editar uma tarefa
function editTask(index) {
  const newTask = prompt('Editar tarefa:', tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    displayTasks();
  }
}

// Exibir tarefas iniciais
displayTasks();
