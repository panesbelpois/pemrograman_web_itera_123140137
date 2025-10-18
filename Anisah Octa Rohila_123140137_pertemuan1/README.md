# Panes' Task Tracker 📚

Aplikasi web manajemen tugas kuliah untuk mahasiswa yang membantu mengorganisir deadline dan progress tugas dengan antarmuka yang modern dan user-friendly.

---

## 📖 Tentang Aplikasi

**Panes' Task Tracker** adalah aplikasi to-do list khusus untuk mahasiswa dalam mengelola tugas kuliah. Aplikasi ini menyediakan fitur lengkap untuk mencatat, memantau, dan menyelesaikan tugas dengan mudah, termasuk pencarian, filter status, dan mode dark untuk kenyamanan mata.

### ✨ Fitur Utama

- 📝 **Manajemen Tugas Lengkap** - Tambah, edit, dan hapus tugas dengan mudah
- ✅ **Tracking Progress** - Tandai tugas yang sudah selesai dengan checkbox
- 🎯 **Filter Status** - Filter tugas berdasarkan status (Semua/Belum Selesai/Selesai)
- 🔍 **Pencarian Real-time** - Cari tugas berdasarkan nama atau mata kuliah
- 📊 **Dashboard Statistik** - Lihat total tugas dan yang belum selesai
- 🌙 **Dark Mode** - Toggle tema gelap/terang sesuai preferensi
- 💾 **Auto-Save** - Data tersimpan otomatis di browser tanpa perlu login
- 📱 **Responsive Design** - Tampilan optimal di desktop, tablet, dan mobile

---

## 📸 Screenshot Aplikasi

### 1. Halaman Utama dengan Statistik & Form Input
![Screenshot 1](https://via.placeholder.com/900x550/fbf7f8/ec3b74?text=Halaman+Utama+-+Dashboard+%26+Form+Tambah+Tugas)

**Tampilan:**
- Statistik total tugas dan tugas yang belum selesai di bagian atas
- Form tambah tugas baru dengan field nama tugas, mata kuliah, dan deadline
- Validasi form dengan penanda field wajib (*)

---

### 2. Daftar Tugas dengan Filter & Search
![Screenshot 2](https://via.placeholder.com/900x550/fbf7f8/ec3b74?text=Fitur+Filter+%26+Pencarian+Tugas)

**Tampilan:**
- Tombol filter: Semua, Belum Selesai, Selesai
- Search bar untuk pencarian cepat
- Daftar tugas dengan checkbox, info mata kuliah, deadline, dan tombol aksi
- Hover effect pada card tugas

---

### 3. Modal Edit Tugas
![Screenshot 3](https://via.placeholder.com/900x550/333333/ec3b74?text=Modal+Edit+dengan+Validasi+Form)

**Tampilan:**
- Modal popup untuk edit tugas
- Form dengan field yang sudah terisi data sebelumnya
- Tombol Batal dan Simpan
- Validasi form untuk memastikan data valid

---

### 4. Dark Mode & Empty State
![Screenshot 4](https://via.placeholder.com/900x550/1b1b1b/ff6f91?text=Dark+Mode+%26+Empty+State)

**Tampilan:**
- Tema gelap yang nyaman untuk mata
- Empty state dengan ilustrasi ketika belum ada tugas
- Toggle tema di header kanan atas

---

## 🚀 Cara Menjalankan Aplikasi

### Metode 1: Buka Langsung di Browser (Paling Mudah)

1. **Download semua file:**
   - `index.html`
   - `style.css`
   - `script.js`

2. **Pastikan struktur folder:**
   ```
   folder-project/
   ├── index.html
   ├── style.css
   └── script.js
   ```

3. **Buka aplikasi:**
   - Double-click file `index.html`, atau
   - Klik kanan `index.html` → Open with → Pilih browser favorit Anda

4. **Selesai!** Aplikasi siap digunakan.

---

### Metode 2: Menggunakan Live Server (Untuk Development)

1. **Install Visual Studio Code**
   - Download dari https://code.visualstudio.com/

2. **Install Extension Live Server:**
   - Buka VS Code
   - Pergi ke Extensions (Ctrl+Shift+X)
   - Cari "Live Server" oleh Ritwick Dey
   - Klik Install

3. **Jalankan aplikasi:**
   ```bash
   # Buka folder project
   cd panes-task-tracker
   
   # Buka di VS Code
   code .
   ```

4. **Klik kanan pada `index.html` → "Open with Live Server"**

5. **Aplikasi akan terbuka di `http://127.0.0.1:5500`**

---

### Metode 3: Menggunakan Python HTTP Server

```bash
# Masuk ke folder project
cd panes-task-tracker

# Python 3
python -m http.server 8000

# Atau Python 2
python -m SimpleHTTPServer 8000
```

Buka browser dan akses: `http://localhost:8000`

---

### Metode 4: Menggunakan Node.js http-server

```bash
# Install http-server (sekali saja)
npm install -g http-server

# Jalankan server
cd panes-task-tracker
http-server -p 8080
```

Buka browser dan akses: `http://localhost:8080`

---

## ✅ Daftar Fitur yang Telah Diimplementasikan

### 🎯 Manajemen Tugas
- [x] **Tambah Tugas Baru**
  - Input nama tugas (required)
  - Input mata kuliah (optional)
  - Input deadline (optional)
  - Validasi form sebelum submit
  
- [x] **Edit Tugas**
  - Modal popup untuk edit
  - Pre-fill data yang sudah ada
  - Validasi saat update
  
- [x] **Hapus Tugas**
  - Konfirmasi sebelum hapus
  - Update statistik otomatis
  
- [x] **Tandai Selesai/Belum Selesai**
  - Checkbox untuk toggle status
  - Visual strikethrough untuk tugas selesai
  - Update counter real-time

### 🔍 Pencarian & Filter
- [x] **Filter Berdasarkan Status**
  - Tombol: Semua / Belum Selesai / Selesai
  - Highlight tombol yang aktif
  - Update list secara dinamis
  
- [x] **Pencarian Real-time**
  - Cari berdasarkan nama tugas
  - Cari berdasarkan mata kuliah
  - Tidak case-sensitive

### 📊 Dashboard & Statistik
- [x] **Counter Total Tugas**
  - Update otomatis saat ada perubahan
  - Dengan icon visual
  
- [x] **Counter Belum Selesai**
  - Menghitung tugas yang belum di-check
  - Update real-time

### 🎨 UI/UX
- [x] **Desain Responsif**
  - Mobile-friendly
  - Tablet optimization
  - Desktop view
  
- [x] **Dark/Light Mode**
  - Toggle tema di header
  - Preferensi tersimpan
  - Smooth transition
  
- [x] **Empty State**
  - Tampilan khusus saat belum ada tugas
  - Ilustrasi dan teks informatif
  
- [x] **Animasi & Interaksi**
  - Hover effect pada card
  - Smooth modal transition
  - Button active states

### 💾 Persistensi Data
- [x] **LocalStorage Integration**
  - Auto-save setiap perubahan
  - Load data saat aplikasi dibuka
  - Tidak perlu login/server
  
- [x] **Tema Preferences**
  - Simpan pilihan dark/light mode
  - Auto-apply saat buka aplikasi

---

## 🔧 Penjelasan Teknis

### 1. Penggunaan LocalStorage

#### 📦 Apa itu LocalStorage?

LocalStorage adalah Web Storage API yang memungkinkan aplikasi web menyimpan data di browser pengguna secara permanen. Data tetap tersimpan meskipun browser ditutup atau komputer di-restart.

**Karakteristik LocalStorage:**
- Kapasitas: ~5-10 MB per domain
- Format: Key-value pairs (string)
- Scope: Per domain/origin
- Sifat: Synchronous
- Keamanan: Same-origin policy

---

#### 💻 Implementasi dalam Aplikasi

**1. Konstanta Storage Key**
```javascript
const STORAGE_KEY = "panes_tasks_v1";
```
- Menggunakan versioning (`_v1`) untuk memudahkan migrasi data di masa depan
- Key unik untuk menghindari konflik dengan aplikasi lain

---

**2. Struktur Data yang Disimpan**

```javascript
// Array of task objects
[
  {
    id: "task_1729234567890",      // Unique ID (timestamp-based)
    title: "Tugas Pemrograman Web", // Nama tugas
    course: "PWL",                  // Mata kuliah
    deadline: "2025-10-25",         // Format: YYYY-MM-DD
    completed: false                // Status penyelesaian
  },
  {
    id: "task_1729234567891",
    title: "Essay Bahasa Inggris",
    course: "English",
    deadline: "2025-10-30",
    completed: true
  }
]
```

---

**3. Fungsi Menyimpan Data (Save)**

```javascript
function saveTasks() {
    // Convert JavaScript object/array ke JSON string
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
```

**Penjelasan:**
- `JSON.stringify()` mengubah array menjadi string JSON
- `localStorage.setItem()` menyimpan dengan key yang ditentukan
- Dipanggil setiap kali ada perubahan data (tambah/edit/hapus/toggle)

**Contoh data tersimpan:**
```json
panes_tasks_v1: '[{"id":"task_123","title":"Buat PPT","course":"Statistika","deadline":"2025-11-01","completed":false}]'
```

---

**4. Fungsi Memuat Data (Load)**

```javascript
function loadTasks() {
    const data = localStorage.getItem(STORAGE_KEY);
    tasks = data ? JSON.parse(data) : [];
}
```

**Penjelasan:**
- `localStorage.getItem()` mengambil string JSON dari storage
- `JSON.parse()` mengubah string JSON kembali ke array JavaScript
- Jika data tidak ada (null), gunakan array kosong `[]`
- Dipanggil saat aplikasi pertama kali dibuka

---

**5. Penyimpanan Preferensi Tema**

```javascript
// Simpan tema dark
localStorage.setItem("theme", "dark");

// Hapus tema (kembali ke light)
localStorage.removeItem("theme");

// Load tema saat startup
function applySavedTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}
```

**Penjelasan:**
- Key: `"theme"`
- Value: `"dark"` atau tidak ada (untuk light mode)
- Diaplikasikan sebelum render pertama untuk menghindari "flash"

---

#### 🔄 Flow Penyimpanan Data

```
User Action (Tambah/Edit/Hapus)
        ↓
Update Array 'tasks' di Memory
        ↓
Panggil saveTasks()
        ↓
JSON.stringify(tasks)
        ↓
localStorage.setItem()
        ↓
Data Tersimpan di Browser
```

---

#### ⚡ Kapan Data Disimpan?

| Aksi User | Fungsi | Storage |
|-----------|--------|---------|
| Tambah tugas baru | `tasks.push()` → `saveTasks()` | ✅ Saved |
| Edit tugas | Update object → `saveTasks()` | ✅ Saved |
| Hapus tugas | `tasks.filter()` → `saveTasks()` | ✅ Saved |
| Toggle complete | `task.completed = !task.completed` → `saveTasks()` | ✅ Saved |
| Ganti tema | `localStorage.setItem("theme", ...)` | ✅ Saved |

---

#### ⚠️ Keterbatasan & Solusi

| Keterbatasan | Dampak | Solusi dalam Aplikasi |
|--------------|--------|----------------------|
| Hanya string | Tidak bisa simpan object langsung | Gunakan `JSON.stringify/parse` |
| ~5MB limit | Tidak cocok untuk data besar | Cukup untuk ratusan tugas |
| Per browser | Data tidak sync antar device | Bisa upgrade ke Backend + Auth di masa depan |
| User bisa hapus | Data hilang jika clear storage | Beri warning, atau tambah export feature |

---

### 2. Validasi Form

#### 🛡️ Jenis Validasi yang Diterapkan

**A. HTML5 Native Validation**

```html
<!-- Validasi Required -->
<input id="titleInput" type="text" required>

<!-- Validasi Date -->
<input id="deadlineInput" type="date">
```

**Keuntungan:**
- ✅ Browser built-in (tidak perlu coding)
- ✅ Responsive error messages
- ✅ Mencegah form submit jika invalid

---

**B. Client-Side JavaScript Validation**

**1. Validasi Tambah Tugas Baru**

```javascript
$("#taskForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah form submit default
    
    // Ambil nilai input & trim whitespace
    const title = $("#titleInput").value.trim();
    const course = $("#courseInput").value.trim();
    const deadline = $("#deadlineInput").value;
    
    // Element untuk menampilkan error
    const err = $("#formError");
    err.style.display = "none"; // Reset error message
    
    // VALIDASI: Nama tugas tidak boleh kosong
    if (!title) {
        err.textContent = "Nama tugas tidak boleh kosong.";
        err.style.display = "block";
        return; // Stop execution
    }
    
    // Jika valid, buat task baru
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
    e.target.reset(); // Clear form
});
```

**Penjelasan Detail:**

1. **`e.preventDefault()`**
   - Mencegah form submit ke server
   - Memberikan kontrol penuh untuk validasi custom

2. **`.trim()`**
   - Menghapus spasi di awal dan akhir
   - Mencegah input hanya berisi spasi
   - Contoh: `"  Tugas  "` → `"Tugas"`

3. **Error Display Pattern**
   ```javascript
   err.style.display = "none";  // Sembunyikan dulu
   if (invalid) {
       err.textContent = "Pesan error";
       err.style.display = "block"; // Tampilkan
   }
   ```

4. **Early Return**
   - Jika validasi gagal, langsung `return`
   - Mencegah kode selanjutnya dieksekusi

---

**2. Validasi Edit Tugas**

```javascript
$("#editForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = $("#editTitle").value.trim();
    const course = $("#editCourse").value.trim();
    const deadline = $("#editDeadline").value;
    
    // Validasi
    if (!title) {
        $("#editError").textContent = "Nama tugas tidak boleh kosong.";
        $("#editError").style.display = "block";
        return;
    }
    
    // Update task
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
```

**Fitur Tambahan pada Edit:**
- Pre-fill form dengan data existing
- Validasi sama seperti form tambah
- Auto-close modal setelah sukses

---

**3. Validasi Hapus Tugas**

```javascript
if (e.target.classList.contains("btn-hapus")) {
    if (confirm("Yakin ingin menghapus tugas ini?")) {
        tasks = tasks.filter((t) => t.id !== id);
        saveTasks();
        renderTasks();
    }
}
```

**Penjelasan:**
- `confirm()` menampilkan dialog konfirmasi browser native
- User harus klik "OK" untuk melanjutkan
- Mencegah penghapusan tidak sengaja

---

#### 📋 Checklist Validasi

| Field | Validasi | Error Message |
|-------|----------|---------------|
| Nama Tugas | Required, tidak boleh kosong | "Nama tugas tidak boleh kosong." |
| Mata Kuliah | Optional | - |
| Deadline | Optional, harus format date valid | (Browser validation) |

---

#### 🎨 User Experience untuk Validasi

**1. Visual Feedback**

```css
.form-error {
    color: #b00020;
    margin-top: 8px;
    display: none; /* Hidden by default */
}

.required {
    color: var(--pink); /* Asterisk merah */
}
```

**2. Accessibility**

```html
<div id="formError" 
     class="form-error" 
     role="alert" 
     aria-live="polite">
</div>
```

- `role="alert"` → Screen reader tahu ini pesan penting
- `aria-live="polite"` → Dibaca saat user idle

**3. Progressive Enhancement**

```html
<input id="titleInput" type="text" required>
```

- HTML5 validation sebagai fallback
- JavaScript validation untuk UX lebih baik
- Tetap berfungsi jika JavaScript disabled

---

#### ✅ Best Practices yang Diterapkan

1. **Client-Side First**
   - Validasi instant tanpa server roundtrip
   - Feedback cepat untuk user

2. **Clear Error Messages**
   - Spesifik: "Nama tugas tidak boleh kosong"
   - Bukan generic: "Error occurred"

3. **Trim Input**
   - Mencegah whitespace-only input
   - Konsistensi data

4. **Required Field Indicator**
   - Asterisk (*) merah pada label
   - User tahu field mana yang wajib

5. **Form Reset After Success**
   - `e.target.reset()` setelah submit berhasil
   - Siap untuk input berikutnya

6. **Prevent Double Submit**
   - `e.preventDefault()` kontrol penuh
   - Mencegah duplicate data

---

### 3. Alur Kerja Aplikasi (Application Flow)

```
┌─────────────────────────────────────────────┐
│           1. INIT (Page Load)               │
├─────────────────────────────────────────────┤
│  - applySavedTheme()                        │
│  - loadTasks() from localStorage            │
│  - renderTasks()                            │
│  - updateStats()                            │
└────────────────┬────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────┐
│         2. USER INTERACTION                 │
├─────────────────────────────────────────────┤
│  A. Tambah Tugas                            │
│     → Validate → Push to array              │
│     → saveTasks() → renderTasks()           │
│                                             │
│  B. Edit Tugas                              │
│     → Open modal → Validate                 │
│     → Update object → saveTasks()           │
│                                             │
│  C. Hapus Tugas                             │
│     → Confirm → Filter array                │
│     → saveTasks() → renderTasks()           │
│                                             │
│  D. Toggle Complete                         │
│     → Update completed property             │
│     → saveTasks() → renderTasks()           │
│                                             │
│  E. Filter/Search                           │
│     → Filter array → Re-render list         │
│                                             │
│  F. Toggle Theme                            │
│     → Update DOM → Save to localStorage     │
└─────────────────────────────────────────────┘
```

---

## 📦 Struktur File

```
panes-task-tracker/
│
├── index.html          # Struktur HTML aplikasi
├── style.css           # Styling dan tema (light/dark)
├── script.js           # Logic aplikasi & localStorage
└── README.md           # Dokumentasi (file ini)
```

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur aplikasi & semantic markup
- **CSS3** - Styling, responsive design, dark mode
- **Vanilla JavaScript** - Logic tanpa framework
- **LocalStorage API** - Persistensi data
- **Google Fonts (Poppins)** - Typography
- **CSS Custom Properties** - Theming system

**Tidak Ada Dependencies! 🎉**
- Tidak perlu npm install
- Tidak perlu build process
- Tidak perlu internet setelah load pertama

---

## 🌐 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 11+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| Opera | 47+ | ✅ Full |

**Requirements:**
- JavaScript enabled
- LocalStorage enabled
- Modern browser (2017+)

---

## 👤 Developer

**Nama:** Anisah Octa Rohila  
**NIM:** 123140137  
**Institusi:** [Nama Universitas]  
**Program Studi:** [Nama Prodi]

---

## 📝 Lisensi

Aplikasi ini dibuat untuk keperluan edukasi dan dapat digunakan secara bebas.

---

## 🐛 Known Issues

Saat ini tidak ada bug yang diketahui. Jika menemukan bug, silakan laporkan.

---

## 🚀 Future Improvements

Fitur yang bisa ditambahkan di masa depan:

- [ ] **Export/Import Data** - JSON atau CSV
- [ ] **Notifikasi Deadline** - Web Notification API
- [ ] **Kategori/Tags** - Organizer tugas lebih baik
- [ ] **Priority Level** - High, Medium, Low
- [ ] **Drag & Drop** - Reorder tugas
- [ ] **Backend Integration** - Sync antar device
- [ ] **User Authentication** - Multi-user support
- [ ] **Recurring Tasks** - Tugas berulang
- [ ] **Time Tracking** - Berapa lama mengerjakan
- [ ] **Analytics Dashboard** - Statistik lebih detail

---

## 💡 Tips Penggunaan

1. **Backup Data Berkala**
   - Buka Developer Tools (F12)
   - Console → ketik: `localStorage.getItem('panes_tasks_v1')`
   - Copy dan simpan hasilnya

2. **Import Data**
   ```javascript
   // Paste di Console
   localStorage.setItem('panes_tasks_v1', 'PASTE_DATA_HERE');
   location.reload();
   ```

3. **Reset Aplikasi**
   ```javascript
   // Hapus semua data
   localStorage.clear();
   location.reload();
   ```

---

## 🙏 Acknowledgments

- Font: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- Icons: Inline SVG (custom)
- Inspiration: Modern to-do apps

---

## 📧 Kontak

Jika ada pertanyaan atau saran, silakan hubungi:
- Email: [email@example.com]
- GitHub: [@username]

---

**⭐ Jika aplikasi ini membantu, jangan lupa beri star!**

**Happy Task Tracking! 🎯📝**
