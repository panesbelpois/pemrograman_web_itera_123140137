# Program Pengelolaan Data Nilai Mahasiswa

Program sederhana untuk mengelola data nilai mahasiswa menggunakan Python.

## Informasi Program
- **Nama:** Anisah Octa Rohila
- **NIM:** 123140137
- **Kelas:** Pengembangan Aplikasi Web RA

## Fitur Program

1. **Tampilkan Data**
   - Menampilkan daftar mahasiswa beserta nilai-nilainya dalam format tabel
   - Kolom yang ditampilkan: Nama, NIM, UTS, UAS, Tugas, Nilai Akhir, dan Grade

2. **Tambah Data Mahasiswa**
   - Menambahkan data mahasiswa baru
   - Input yang diperlukan: Nama, NIM, Nilai UTS, Nilai UAS, dan Nilai Tugas

3. **Cari Nilai Tertinggi dan Terendah**
   - Menampilkan mahasiswa dengan nilai akhir tertinggi dan terendah
   - Menampilkan nama mahasiswa beserta nilai akhirnya

4. **Filter Berdasarkan Grade**
   - Menyaring dan menampilkan mahasiswa berdasarkan grade tertentu
   - Grade yang tersedia: A, B, C, D, E

5. **Hitung Rata-Rata Nilai Kelas**
   - Menghitung dan menampilkan rata-rata nilai akhir seluruh kelas

## Perhitungan Nilai

### Nilai Akhir
Perhitungan nilai akhir menggunakan bobot sebagai berikut:
- UTS: 30%
- UAS: 40%
- Tugas: 30%

### Penentuan Grade
- A: >= 80
- B: >= 70
- C: >= 60
- D: >= 50
- E: < 50

## Cara Penggunaan

1. Jalankan program dengan perintah:
   ```bash
   python program.py
   ```

2. Pilih menu yang tersedia (1-6) dengan menginputkan angka yang sesuai:
   - 1: Tampilkan Data
   - 2: Tambah Data Mahasiswa
   - 3: Cari Nilai Tertinggi dan Terendah
   - 4: Filter Berdasarkan Grade
   - 5: Hitung Rata-Rata Nilai Kelas
   - 6: Keluar

3. Ikuti instruksi yang muncul untuk setiap menu yang dipilih

## Data Awal

Program ini memiliki 5 data mahasiswa yang sudah tersedia sebagai contoh:
1. Anisah (123140137)
2. Octa (123140001)
3. Keira (123140045)
4. Niscil (123140078)
5. Ali (123140102)

## Validasi Input

- Program memiliki validasi untuk input nilai (UTS, UAS, Tugas)
- Input nilai harus berupa angka (integer atau float)
- Jika input tidak valid, program akan menampilkan pesan error dan kembali ke menu utama