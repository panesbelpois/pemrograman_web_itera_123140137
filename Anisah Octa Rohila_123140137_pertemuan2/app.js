/* app.js
  - Implements classes for Task, Note, Schedule, DashboardManager
  - Uses localStorage for persistence
  - Uses template literals for rendering
  - Uses let/const, arrow functions, async/await
*/

/* ---------- Utilities (arrow functions used) ---------- */
const $ = (sel) => document.querySelector(sel);
const createEl = (tag, cls = '') => {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  return el;
};
const fmtDate = (d) => {
  if(!d) return '';
  const dt = new Date(d);
  return `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}/${dt.getFullYear()}`;
};

/* ---------- Data Models ---------- */
class Task {
  constructor({id=null,title,status='Sedang',deadline=null}){
    this.id = id || `t-${Date.now()}-${Math.floor(Math.random()*1000)}`;
    this.title = title;
    this.status = status;
    this.deadline = deadline; // yyyy-mm-dd or null
  }
}

class Note {
  constructor({id=null,title='',body=''}){
    this.id = id || `n-${Date.now()}-${Math.floor(Math.random()*1000)}`;
    this.title = title;
    this.body = body;
  }
}

class Schedule {
  constructor({id=null,title='',day='Senin',start='',end='',loc=''}){
    this.id = id || `s-${Date.now()}-${Math.floor(Math.random()*1000)}`;
    this.title = title;
    this.day = day;
    this.start = start;
    this.end = end;
    this.loc = loc;
  }
}

/* ---------- Dashboard manager (handles storage & render) ---------- */
class DashboardManager {
  constructor(){
    // localStorage keys
    this.keys = { tasks: 'dash_tasks', notes: 'dash_notes', sched: 'dash_sched' };
    // load existing or init arrays
    this.tasks = this.load(this.keys.tasks) || [];
    this.notes = this.load(this.keys.notes) || [];
    this.sched = this.load(this.keys.sched) || [];
  }

  load = (key) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error('Load error', e);
      return null;
    }
  }

  save = async (key, data) => {
    // simulate small async operation and then persist
    await new Promise(res => setTimeout(res, 60));
    localStorage.setItem(key, JSON.stringify(data));
  }

  addTask = async (task) => {
    this.tasks.unshift(task);
    await this.save(this.keys.tasks, this.tasks);
    return task;
  }

  updateTask = async (id, patch) => {
    this.tasks = this.tasks.map(t => t.id === id ? {...t, ...patch} : t);
    await this.save(this.keys.tasks, this.tasks);
  }

  removeTask = async (id) => {
    this.tasks = this.tasks.filter(t => t.id !== id);
    await this.save(this.keys.tasks, this.tasks);
  }

  addNote = async (note) => {
    this.notes.unshift(note);
    await this.save(this.keys.notes, this.notes);
  }

  removeNote = async (id) => {
    this.notes = this.notes.filter(n => n.id !== id);
    await this.save(this.keys.notes, this.notes);
  }

  addSchedule = async (s) => {
    this.sched.unshift(s);
    await this.save(this.keys.sched, this.sched);
  }

  removeSchedule = async (id) => {
    this.sched = this.sched.filter(s => s.id !== id);
    await this.save(this.keys.sched, this.sched);
  }
}

/* ---------- UI & Event Wiring ---------- */
const store = new DashboardManager();

/* Render functions use template literals */
const renderTasks = () => {
  const list = $('#task-list');
  list.innerHTML = '';
  if (store.tasks.length === 0) {
    const li = createEl('li', 'task-item');
    li.innerHTML = `<div class="task-left"><div style="width:18px;height:18px;border-radius:4px;border:1px solid #f0d0e0"></div><div>Tidak ada tugas</div></div>`;
    list.appendChild(li);
  } else {
    store.tasks.forEach(t => {
      const li = createEl('li', 'task-item');
      li.innerHTML = `
        <div class="task-left">
          <input type="checkbox" data-id="${t.id}" class="task-check" ${t.status === 'Selesai' ? 'checked' : ''}/>
          <div>
            <div style="font-weight:600">${t.title}</div>
            <small class="muted">Deadline: ${t.deadline ? fmtDate(t.deadline) : '-'}</small>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <div class="status-pill">${t.status}</div>
          <button class="btn edit-btn" data-id="${t.id}">✎</button>
          <button class="btn" data-delete="${t.id}">🗑</button>
        </div>
      `;
      list.appendChild(li);
    });
  }
  $('#active-count').textContent = `${store.tasks.filter(x=>x.status !== 'Selesai').length} Aktif`;
};

const renderNotes = () => {
  const area = $('#notes-area');
  area.innerHTML = '';
  if (store.notes.length === 0) {
    area.classList.add('card-empty');
    area.innerHTML = `<p>Belum ada catatan. Buat catatan pertama Anda!</p>`;
    return;
  }
  area.classList.remove('card-empty');
  const wrap = createEl('div');
  wrap.style.display = 'grid';
  wrap.style.gap = '10px';
  store.notes.forEach(n => {
    const card = createEl('div');
    card.style.border = '1px solid #f0d0e6';
    card.style.padding = '10px';
    card.style.borderRadius = '8px';
    card.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <strong>${n.title}</strong>
        <div style="display:flex;gap:6px">
          <button class="btn" data-note-delete="${n.id}">Hapus</button>
        </div>
      </div>
      <div style="margin-top:8px;color:#555">${n.body}</div>
    `;
    wrap.appendChild(card);
  });
  area.appendChild(wrap);
};

const renderSched = () => {
  const area = $('#schedule-area');
  area.innerHTML = '';
  if (store.sched.length === 0) {
    area.classList.add('card-empty');
    area.innerHTML = `<p>Belum ada jadwal. Tambahkan jadwal kuliah Anda!</p>`;
    return;
  }
  area.classList.remove('card-empty');
  const tbl = createEl('div');
  tbl.style.display = 'grid';
  tbl.style.gap = '10px';
  store.sched.forEach(s => {
    const box = createEl('div');
    box.style.border = '1px solid #f0d0e6';
    box.style.padding = '10px';
    box.style.borderRadius = '8px';
    box.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:700">${s.title}</div>
          <small class="muted">${s.day} • ${s.start || '--:--'} - ${s.end || '--:--'}</small>
          <div style="color:#666">${s.loc || ''}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn" data-sched-delete="${s.id}">Hapus</button>
        </div>
      </div>
    `;
    tbl.appendChild(box);
  });
  area.appendChild(tbl);
};

/* ---------- Time & Clock ---------- */
const tickClock = () => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  const ss = String(now.getSeconds()).padStart(2,'0');
  $('#clock').textContent = `${hh}:${mm}:${ss}`;
  const dnames = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  $('#date').textContent = `${dnames[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
};
setInterval(tickClock, 1000);
tickClock();

/* ---------- Events ---------- */
const setup = () => {
  // initial render
  renderTasks();
  renderNotes();
  renderSched();

  // Task add
  $('#task-add-btn').addEventListener('click', async () => {
    const title = $('#task-title').value.trim();
    const status = $('#task-status').value;
    const deadline = $('#task-deadline').value || null;
    if (!title) return alert('Isi judul tugas.');
    const t = new Task({title,status,deadline});
    await store.addTask(t);
    $('#task-title').value = '';
    renderTasks();
  });

  // Delegation for task operations
  $('#task-list').addEventListener('click', async (e) => {
    const idDel = e.target.getAttribute('data-delete');
    if (idDel) {
      if (!confirm('Hapus tugas ini?')) return;
      await store.removeTask(idDel);
      renderTasks();
      return;
    }
    const id = e.target.getAttribute('data-id');
    if (id && e.target.classList.contains('task-check')) {
      const checked = e.target.checked;
      await store.updateTask(id, { status: checked ? 'Selesai' : 'Sedang' });
      renderTasks();
    }
    if (e.target.classList.contains('edit-btn')) {
      const tid = e.target.dataset.id;
      const t = store.tasks.find(x => x.id === tid);
      const newTitle = prompt('Edit judul tugas:', t.title);
      if (newTitle !== null) {
        await store.updateTask(tid, { title: newTitle });
        renderTasks();
      }
    }
  });

  // Notes modal flow
  const noteModal = $('#note-modal');
  $('#open-note-modal').addEventListener('click', () => {
    noteModal.classList.remove('hidden');
  });
  document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => {
    noteModal.classList.add('hidden');
    $('#schedule-modal').classList.add('hidden');
  }));

  $('#note-save-btn').addEventListener('click', async () => {
    const t = $('#note-title').value.trim();
    const b = $('#note-body').value.trim();
    if (!t) return alert('Judul catatan diperlukan.');
    await store.addNote(new Note({title:t,body:b}));
    $('#note-title').value = '';
    $('#note-body').value = '';
    $('#note-modal').classList.add('hidden');
    renderNotes();
  });

  // Note delete
  $('#notes-area').addEventListener('click', async (e) => {
    const id = e.target.getAttribute('data-note-delete');
    if (id && confirm('Hapus catatan?')) {
      await store.removeNote(id);
      renderNotes();
    }
  });

  // Schedule modal
  const schedModal = $('#schedule-modal');
  $('#open-schedule-modal').addEventListener('click', () => schedModal.classList.remove('hidden'));
  $('#sched-save-btn').addEventListener('click', async () => {
    const title = $('#sched-title').value.trim();
    const day = $('#sched-day').value;
    const start = $('#sched-start').value;
    const end = $('#sched-end').value;
    const loc = $('#sched-loc').value.trim();
    if (!title) return alert('Nama mata kuliah diperlukan.');
    await store.addSchedule(new Schedule({title,day,start,end,loc}));
    $('#sched-title').value = '';
    $('#sched-start').value = '';
    $('#sched-end').value = '';
    $('#sched-loc').value = '';
    $('#schedule-modal').classList.add('hidden');
    renderSched();
  });

  // schedule delete
  $('#schedule-area').addEventListener('click', async (e) => {
    const id = e.target.getAttribute('data-sched-delete');
    if (id && confirm('Hapus jadwal?')) {
      await store.removeSchedule(id);
      renderSched();
    }
  });
};

/* --------- Initialize on DOM ready --------- */
document.addEventListener('DOMContentLoaded', setup);
