# PaneShelf (my-bukuku-app)

[![Lisensi: MIT](https://img.shields.io/badge/Lisensi-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.14.1-blue?logo=reactrouter)](https://reactrouter.com/)
[![Jest](https://img.shields.io/badge/Jest-passed-green?logo=jest)](https://jestjs.io/)

PaneShelf adalah aplikasi web berbasis React yang berfungsi sebagai pelacak koleksi buku pribadi. Pengguna dapat dengan mudah menambah, melihat, mengedit, menghapus, dan memfilter buku-buku dalam perpustakaan digital mereka.

---

## 1. Deskripsi Aplikasi

Aplikasi ini menyediakan antarmuka yang bersih dan sederhana untuk manajemen buku. Dibangun menggunakan **Create React App** dengan **React Router** untuk navigasi dan **React Context API** untuk manajemen state global.

### Fitur Utama
* **Manajemen Buku (CRUD):** Pengguna dapat **Menambah** buku baru, **Melihat** (Read) daftar buku, **Memperbarui** (Update) detail buku, dan **Menghapus** (Delete) buku dari koleksi.
* **Filter Buku:** Buku dapat difilter berdasarkan statusnya: "Semua Buku", "Milik Saya", "Sedang Dibaca", dan "Ingin Dibeli".
* **Navigasi Halaman:** Aplikasi ini memiliki dua halaman utama: "Buku Saya" (halaman utama) dan "Statistik", yang dapat diakses melalui `Navbar`.
* **State Management:** Menggunakan React Context API (`BookProvider`) untuk mengelola daftar buku secara global, sehingga semua komponen memiliki akses ke data yang konsisten.
* **Antarmuka Responsif (Dasar):** Didesain dengan komponen modern seperti modal (untuk form) dan *floating action button* (untuk menambah buku).

---

## 2. Screenshot Antarmuka

### Tampilan Utama (Saat Belum Ada Buku)
Tampilan awal aplikasi ketika koleksi buku masih kosong.

![Tampilan Utama Kosong](src/assets/ss1.png)

### SS2: Tampilan Menambahkan Buku
Formulir modal yang muncul saat pengguna menekan tombol `+` untuk menambahkan buku baru.

![Tampilan Menambahkan Buku](src/assets/ss2.png)

### SS3: Tampilan Saat Buku Sudah Ditambahkan
Tampilan utama setelah beberapa buku ditambahkan ke dalam koleksi, ditampilkan dalam format kartu.

![Tampilan Daftar Buku](src/assets/ss3.png)

### SS4: Tampilan Statistik Buku
Halaman statistik yang menunjukkan rekapitulasi koleksi buku (catatan: fungsionalitas ini mungkin masih dalam pengembangan).

![Tampilan Statistik](src/assets/ss4.png)

---

## 3. Instruksi Instalasi dan Menjalankan

### Prasyarat
Pastikan Anda telah menginstal:
* [Node.js](https://nodejs.org/) (v14 atau lebih baru)
* [npm](https://www.npmjs.com/) (biasanya terinstal bersama Node.js)

### Langkah-langkah
1.  **Kloning Repositori**
    ```bash
    git clone [URL_REPOSITORI_ANDA]
    cd my-bukuku-app
    ```

2.  **Instal Dependensi**
    Jalankan perintah berikut di terminal untuk menginstal semua paket yang diperlukan dari `package.json`.
    ```bash
    npm install
    ```

3.  **Menjalankan Aplikasi (Mode Pengembangan)**
    Perintah ini akan menjalankan aplikasi dalam mode pengembangan dan membukanya di [http://localhost:3000](http://localhost:3000).
    ```bash
    npm start
    ```

4.  **Menjalankan Pengujian (Testing)**
    Aplikasi ini menggunakan Jest dan React Testing Library. Untuk menjalankan semua unit test:
    ```bash
    npm test
    ```

5.  **Membuat Build (Mode Produksi)**
    Perintah ini akan membuat *build* aplikasi yang telah dioptimalkan untuk produksi di dalam folder `build/`.
    ```bash
    npm run build
    ```

---

## 4. Penjelasan Fitur React yang Digunakan

Aplikasi ini dibangun dengan memanfaatkan fitur-fitur inti dan modern dari React:

* **React Hooks**:
    * **`useState`**: Digunakan secara ekstensif untuk mengelola state lokal, seperti mengontrol status *modal* (terbuka/tertutup) di halaman `Home`, mengelola *filter* yang aktif di `BookFilter.jsx`, dan mengelola nilai *input* di `BookForm.jsx`.
    * **`useEffect`**: Digunakan dalam `BookForm.jsx` untuk menyinkronkan state formulir. *Hook* ini "mendengarkan" perubahan pada *prop* `initial`. Jika `initial` (data buku untuk diedit) tersedia, `useEffect` akan mengisi *state* formulir dengan data tersebut.
    * **`useContext`**: Digunakan secara implisit melalui `BookProvider` (didefinisikan di `index.js`). Ini adalah implementasi dari React Context API yang menyediakan *state* global (daftar buku, fungsi tambah/edit/hapus) ke seluruh pohon komponen tanpa perlu *prop-drilling*.

* **React Router (`react-router-dom`)**:
    * **`<BrowserRouter>`**: Membungkus seluruh aplikasi di `index.js` untuk mengaktifkan *client-side routing*.
    * **`<Routes>`, `<Route>`, `<Navigate>`**: Digunakan di `App.js` untuk mendefinisikan rute URL. Rute `/` secara otomatis dialihkan (`<Navigate>`) ke `/books`, sementara `/books` me-render halaman `Home` dan `/stats` me-render halaman `Stats`.
    * **`useLocation`**: *Hook* ini digunakan di `Navbar.jsx` untuk mendeteksi URL saat ini (`location.pathname`). Informasi ini digunakan untuk memberikan *style* khusus (highlight) pada tautan navigasi yang sedang aktif.
    * **`<Link>`**: Digunakan di `Navbar.jsx` untuk navigasi antar halaman tanpa me-refresh browser.

* **Pemisahan Komponen**:
    Proyek ini memecah antarmuka menjadi komponen-komponen yang dapat digunakan kembali (`reusable components`) seperti `Navbar.jsx`, `BookList.jsx`, `BookFilter.jsx`, `BookForm.jsx`, dan `FloatingButton.jsx`.

---

## 5. Sorotan Kode Penting

Berikut adalah penjelasan dan cuplikan kode dari file-file komponen utama dalam proyek ini, yang menunjukkan bagaimana fitur-fitur React digunakan.

---

### `index.js` (Entry Point & Context Provider)

File ini adalah titik masuk (entry point) utama aplikasi. File ini menggunakan `createRoot` dari React 18 dan membungkus seluruh aplikasi dengan:
1.  **`<BrowserRouter>`**: Mengaktifkan *client-side routing* untuk seluruh aplikasi.
2.  **`<BookProvider>`**: Menyediakan *state* manajemen buku (seperti daftar buku, fungsi tambah/hapus) ke semua komponen di dalamnya menggunakan React Context API.
