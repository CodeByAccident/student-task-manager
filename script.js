let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, index) => {
    let li = document.createElement("li");
    li.className = t.completed ? "completed" : "";

    li.innerHTML = `
      <span>
        <b>${t.subject}</b>: ${t.task} 
        (${t.priority}) - ${t.deadline}
      </span>
      <div>
        <button onclick="toggle(${index})">✔</button>
        <button onclick="deleteTask(${index})">❌</button>
      </div>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  let subject = document.getElementById("subject").value;
  let task = document.getElementById("task").value;
  let deadline = document.getElementById("deadline").value;
  let priority = document.getElementById("priority").value;

  if (!subject || !task) return alert("Fill all fields!");

  tasks.push({ subject, task, deadline, priority, completed: false });

  saveTasks();
  renderTasks();
}

function toggle(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

renderTasks();
