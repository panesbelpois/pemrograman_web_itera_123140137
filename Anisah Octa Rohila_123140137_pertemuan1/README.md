# Panes' Task Tracker 📝

**Panes' Task Tracker** adalah aplikasi web sederhana yang dirancang untuk membantu mahasiswa melacak dan mengelola tugas-tugas kuliah mereka. Dengan antarmuka yang bersih, fitur yang intuitif, dan dukungan tema gelap, pengguna dapat dengan mudah menambah, mengedit, menghapus, dan menandai tugas yang sudah selesai.

---

## 📸 Screenshot Tampilan

Berikut adalah beberapa tampilan dari aplikasi:

### Tampilan Utama & Menambah Tugas
![Tampilan Utama](Screenshots/ss1.png)
*Tampilan utama aplikasi dalam mode terang (light mode) ketika belum ada tugas.*
![Menambah Tugas](Screenshots/ss2.png)
*Tampilan setelah beberapa tugas ditambahkan ke dalam daftar.*

### Edit & Hapus Tugas
![Edit Tugas](Screenshots/ss3.png)
*Modal pop-up untuk mengedit detail tugas yang sudah ada.*

![Hapus Tugas](Screenshots/ss4.png)
*Konfirmasi sebelum menghapus tugas untuk mencegah kesalahan.*

### Tampilan Dark Mode
![Dark Mode](Screenshots/ss5.png)
*Aplikasi juga mendukung tema gelap (dark mode) bagi yang lebih senang dengan dark mode*

---

## ✨ Fitur-Fitur

Aplikasi ini dilengkapi dengan berbagai fitur untuk meningkatkan produktivitas:

- ✅ **Manajemen Tugas (CRUD):** Tambah, lihat, edit, dan hapus tugas dengan mudah melalui antarmuka yang ramah pengguna.
- ✅ **Penyimpanan Lokal:** Tugas tersimpan secara otomatis di `localStorage` browser, sehingga data tidak akan hilang saat halaman di-refresh atau ditutup.
- ✅ **Status Tugas:** Tandai tugas sebagai "selesai" atau "belum selesai" hanya dengan satu klik pada checkbox.
- ✅ **Filter & Pencarian:** Saring tugas berdasarkan status (Semua, Belum Selesai, Selesai) dan cari tugas spesifik berdasarkan judul atau nama mata kuliah.
- ✅ **Statistik Tugas:** Pantau progres dengan melihat ringkasan jumlah total tugas dan jumlah tugas yang belum selesai.
- ✅ **Tema Ganda (Light/Dark Mode):** Ganti tema antara terang dan gelap sesuai preferensi Anda. Pilihan tema juga akan disimpan.
- ✅ **Desain Responsif:** Tampilan yang optimal dan menyesuaikan dengan berbagai ukuran layar, baik di desktop maupun perangkat mobile.

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini dibuat dengan HTML, CSS, dan JavaScript murni, sehingga tidak memerlukan proses instalasi yang rumit.

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/panesbelpois/pemrograman_web_itera_123140137.git](https://github.com/panesbelpois/pemrograman_web_itera_123140137.git)
    ```

2.  **Masuk ke Direktori Proyek**
    ```bash
    cd pemrograman_web_itera_123140137
    ```

3.  **Buka File `index.html`**
    Cukup buka file `index.html` di browser favorit Anda (seperti Chrome, Firefox, atau Edge) untuk langsung menggunakan aplikasi.

---

## 🛠️ Penjelasan Teknis

### 1. Penggunaan `localStorage`
Aplikasi ini memanfaatkan **Web Storage API**, khususnya `localStorage`, untuk menyimpan data tugas dan preferensi tema secara persisten di browser pengguna.

-   **Penyimpanan Data**: Saat pengguna menambah, mengedit, atau menghapus tugas, seluruh *array* `tasks` akan diubah menjadi format JSON `string` menggunakan `JSON.stringify()` dan disimpan ke `localStorage` dengan *key* `"panes_tasks_v1"`.
-   **Pengambilan Data**: Ketika aplikasi dimuat, ia akan memeriksa `localStorage` untuk *key* tersebut. Jika data ditemukan, data akan diambil menggunakan `localStorage.getItem()` dan diubah kembali menjadi objek JavaScript menggunakan `JSON.parse()` untuk ditampilkan di antarmuka.
-   **Keuntungan**: Dengan `localStorage`, data pengguna tetap aman dan tidak akan hilang meskipun mereka menutup tab browser atau me-refresh halaman, memberikan pengalaman pengguna yang mulus.

### 2. Validasi Form
Untuk menjaga integritas data, aplikasi ini menerapkan validasi form sederhana pada sisi klien (*client-side*).

-   **Pemeriksaan Input Kosong**: Sebelum sebuah tugas baru ditambahkan atau data tugas yang ada diperbarui, script akan memeriksa apakah kolom input "Nama Tugas" (`title`) kosong atau tidak melalui `input.value.trim()`.
-   **Umpan Balik Pengguna**: Jika validasi gagal (input kosong), proses penyimpanan akan dibatalkan, dan sebuah pesan kesalahan akan ditampilkan di bawah form untuk memberitahu pengguna bahwa kolom tersebut wajib diisi.
-   **Tujuan**: Validasi ini penting untuk mencegah masuknya data yang tidak valid atau kosong ke dalam daftar tugas.

---

## 💻 Teknologi yang Digunakan

-   **HTML5**
-   **CSS3**
-   **JavaScript (ES6+)**
