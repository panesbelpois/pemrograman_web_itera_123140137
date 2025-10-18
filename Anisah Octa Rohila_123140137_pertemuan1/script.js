const $ = (sel) => document.querySelector(sel);
let tasks = [];
const STORAGE_KEY = "panes_tasks_v1";

function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  tasks = data ? JSON.parse(data) : [];
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  const list = $("#taskList");
  list.innerHTML = "";

  if (tasks.length === 0) {
    $("#emptyState").style.display = "flex";
  } else {
    $("#emptyState").style.display = "none";
  }

  tasks.forEach((t) => {
    const item = document.createElement("div");
    item.className = "task";
    item.dataset.id = t.id;

    item.innerHTML = `
      <input type="checkbox" class="check" ${t.completed ? "checked" : ""}>
      <div class="meta">
        <h3 class="${t.completed ? "completed" : ""}">${t.title}</h3>
        <div class="course">${t.course || "Tidak ada mata kuliah"}</div>
        <div class="deadline">${t.deadline || "Tanpa deadline"}</div>
      </div>
      <div class="actions">
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-hapus">Hapus</button>
      </div>
    `;

    list.appendChild(item);
  });

  updateStats();
}

function updateStats() {
  $("#totalCount").textContent = tasks.length;
  $("#pendingCount").textContent = tasks.filter((t) => !t.completed).length;
}

$("#taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = $("#titleInput").value.trim();
  const course = $("#courseInput").value.trim();
  const deadline = $("#deadlineInput").value;
  const err = $("#formError");
  err.style.display = "none";

  if (!title) {
    err.textContent = "Nama tugas tidak boleh kosong.";
    err.style.display = "block";
    return;
  }

  const newTask = {
    id: "task_" + Date.now(),
    title,
    course,
    deadline,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  e.target.reset();
});

$("#taskList").addEventListener("click", (e) => {
  const taskEl = e.target.closest(".task");
  if (!taskEl) return;
  const id = taskEl.dataset.id;

  if (e.target.classList.contains("btn-hapus")) {
    if (confirm("Yakin ingin menghapus tugas ini?")) {
      tasks = tasks.filter((t) => t.id !== id);
      saveTasks();
      renderTasks();
    }
  }

  if (e.target.classList.contains("btn-edit")) {
    openEditModal(id);
  }

  if (e.target.classList.contains("check")) {
    const t = tasks.find((x) => x.id === id);
    if (t) {
      t.completed = !t.completed;
      saveTasks();
      renderTasks();
    }
  }
});

let editingId = null;

function openEditModal(id) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return;
  editingId = id;
  $("#editTitle").value = t.title;
  $("#editCourse").value = t.course;
  $("#editDeadline").value = t.deadline;
  $("#editError").style.display = "none";
  $("#modalBackdrop").style.display = "flex";
}

function closeEditModal() {
  $("#modalBackdrop").style.display = "none";
  editingId = null;
}

$("#editForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = $("#editTitle").value.trim();
  const course = $("#editCourse").value.trim();
  const deadline = $("#editDeadline").value;

  if (!title) {
    $("#editError").textContent = "Nama tugas tidak boleh kosong.";
    $("#editError").style.display = "block";
    return;
  }

  const t = tasks.find((x) => x.id === editingId);
  if (t) {
    t.title = title;
    t.course = course;
    t.deadline = deadline;
    saveTasks();
    renderTasks();
    closeEditModal();
  }
});

$("#cancelEdit").addEventListener("click", closeEditModal);
$("#modalBackdrop").addEventListener("click", (e) => {
  if (e.target === $("#modalBackdrop")) closeEditModal();
});

let currentFilter = "all";
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    applyFilter();
  });
});

function applyFilter() {
  const list = $("#taskList");
  list.innerHTML = "";

  let filtered = tasks;
  if (currentFilter === "pending") filtered = tasks.filter((t) => !t.completed);
  if (currentFilter === "completed") filtered = tasks.filter((t) => t.completed);

  if (filtered.length === 0) {
    $("#emptyState").style.display = "flex";
  } else {
    $("#emptyState").style.display = "none";
  }

  filtered.forEach((t) => {
    const item = document.createElement("div");
    item.className = "task";
    item.dataset.id = t.id;
    item.innerHTML = `
      <input type="checkbox" class="check" ${t.completed ? "checked" : ""}>
      <div class="meta">
        <h3 class="${t.completed ? "completed" : ""}">${t.title}</h3>
        <div class="course">${t.course || "Tidak ada mata kuliah"}</div>
        <div class="deadline">${t.deadline || "Tanpa deadline"}</div>
      </div>
      <div class="actions">
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-hapus">Hapus</button>
      </div>
    `;
    list.appendChild(item);
  });

  updateStats();
}

$("#searchInput").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  const list = $("#taskList");
  list.innerHTML = "";

  const filtered = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      (t.course && t.course.toLowerCase().includes(q))
  );

  if (filtered.length === 0) {
    $("#emptyState").style.display = "flex";
  } else {
    $("#emptyState").style.display = "none";
  }

  filtered.forEach((t) => {
    const item = document.createElement("div");
    item.className = "task";
    item.dataset.id = t.id;
    item.innerHTML = `
      <input type="checkbox" class="check" ${t.completed ? "checked" : ""}>
      <div class="meta">
        <h3 class="${t.completed ? "completed" : ""}">${t.title}</h3>
        <div class="course">${t.course || "Tidak ada mata kuliah"}</div>
        <div class="deadline">${t.deadline || "Tanpa deadline"}</div>
      </div>
      <div class="actions">
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-hapus">Hapus</button>
      </div>
    `;
    list.appendChild(item);
  });

  updateStats();
});

const themeToggle = $("#themeToggle");
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

function applySavedTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

function init() {
  applySavedTheme();
  loadTasks();
  renderTasks();
}
init();
