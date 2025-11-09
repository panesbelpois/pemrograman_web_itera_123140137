# ============================================
# Program Pengelolaan Data Nilai Mahasiswa
# Nama  : Anisah Octa Rohila
# NIM   : 123140137
# Kelas : Pengembangan Aplikasi Web RA
# ============================================

# Fungsi untuk menghitung nilai akhir
def hitung_nilai_akhir(uts, uas, tugas):
    return (0.3 * uts) + (0.4 * uas) + (0.3 * tugas)

# Fungsi untuk menentukan grade
def tentukan_grade(nilai):
    if nilai >= 80:
        return "A"
    elif nilai >= 70:
        return "B"
    elif nilai >= 60:
        return "C"
    elif nilai >= 50:
        return "D"
    else:
        return "E"

# Fungsi untuk menampilkan data mahasiswa dalam format tabel
def tampilkan_data(mahasiswa):
    if not mahasiswa:
        print("Tidak ada data mahasiswa untuk ditampilkan.\n")
        return

    print(f"{'Nama':<15}{'NIM':<12}{'UTS':<8}{'UAS':<8}{'Tugas':<8}{'Akhir':<8}{'Grade'}")
    print("-" * 65)
    for m in mahasiswa:
        akhir = hitung_nilai_akhir(m['nilai_uts'], m['nilai_uas'], m['nilai_tugas'])
        grade = tentukan_grade(akhir)
        print(f"{m['nama']:<15}{m['nim']:<12}{m['nilai_uts']:<8}{m['nilai_uas']:<8}{m['nilai_tugas']:<8}{akhir:<8.2f}{grade}")
    print()

# Fungsi untuk menambah data mahasiswa baru
def tambah_mahasiswa(mahasiswa):
    print("\n=== Tambah Data Mahasiswa ===")
    nama = input("Masukkan nama: ")
    nim = input("Masukkan NIM: ")
    try:
        uts = float(input("Masukkan nilai UTS: "))
        uas = float(input("Masukkan nilai UAS: "))
        tugas = float(input("Masukkan nilai Tugas: "))
    except ValueError:
        print("Input nilai harus berupa angka!")
        return

    mahasiswa.append({
        "nama": nama,
        "nim": nim,
        "nilai_uts": uts,
        "nilai_uas": uas,
        "nilai_tugas": tugas
    })
    print("✅ Data berhasil ditambahkan!\n")

# Fungsi untuk mencari mahasiswa dengan nilai tertinggi dan terendah
def cari_tertinggi_terendah(mahasiswa):
    if not mahasiswa:
        print("Belum ada data mahasiswa.\n")
        return

    nilai_akhir = [(m['nama'], hitung_nilai_akhir(m['nilai_uts'], m['nilai_uas'], m['nilai_tugas'])) for m in mahasiswa]
    tertinggi = max(nilai_akhir, key=lambda x: x[1])
    terendah = min(nilai_akhir, key=lambda x: x[1])
    print(f"\nNilai Tertinggi : {tertinggi[0]} ({tertinggi[1]:.2f})")
    print(f"Nilai Terendah  : {terendah[0]} ({terendah[1]:.2f})\n")

# Fungsi untuk filter mahasiswa berdasarkan grade
def filter_grade(mahasiswa, target_grade):
    hasil = []
    for m in mahasiswa:
        nilai = hitung_nilai_akhir(m['nilai_uts'], m['nilai_uas'], m['nilai_tugas'])
        if tentukan_grade(nilai) == target_grade:
            hasil.append(m)
    return hasil

# Fungsi untuk menghitung rata-rata nilai kelas
def rata_rata_kelas(mahasiswa):
    if not mahasiswa:
        return 0
    total = sum([hitung_nilai_akhir(m['nilai_uts'], m['nilai_uas'], m['nilai_tugas']) for m in mahasiswa])
    return total / len(mahasiswa)

# Fungsi utama (menu program)
def main():
    mahasiswa = [
        {"nama": "Anisah", "nim": "123140137", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
        {"nama": "Octa", "nim": "123140001", "nilai_uts": 70, "nilai_uas": 65, "nilai_tugas": 72},
        {"nama": "Keira", "nim": "123140045", "nilai_uts": 60, "nilai_uas": 58, "nilai_tugas": 64},
        {"nama": "Niscil", "nim": "123140078", "nilai_uts": 95, "nilai_uas": 90, "nilai_tugas": 94},
        {"nama": "Ali", "nim": "123140102", "nilai_uts": 80, "nilai_uas": 82, "nilai_tugas": 78}
    ]

    while True:
        print("=== PROGRAM PENGELOLAAN DATA NILAI MAHASISWA ===")
        print("1. Tampilkan Data")
        print("2. Tambah Data Mahasiswa")
        print("3. Cari Nilai Tertinggi dan Terendah")
        print("4. Filter Berdasarkan Grade")
        print("5. Hitung Rata-Rata Nilai Kelas")
        print("6. Keluar")
        pilihan = input("Pilih menu (1-6): ")

        if pilihan == "1":
            tampilkan_data(mahasiswa)
        elif pilihan == "2":
            tambah_mahasiswa(mahasiswa)
        elif pilihan == "3":
            cari_tertinggi_terendah(mahasiswa)
        elif pilihan == "4":
            grade = input("Masukkan grade yang ingin difilter (A-E): ").upper()
            hasil = filter_grade(mahasiswa, grade)
            print(f"\nData Mahasiswa dengan Grade {grade}:")
            tampilkan_data(hasil)
        elif pilihan == "5":
            rata2 = rata_rata_kelas(mahasiswa)
            print(f"\nRata-rata nilai akhir kelas: {rata2:.2f}\n")
        elif pilihan == "6":
            print("\nTerima kasih telah menggunakan program ini 😊")
            break
        else:
            print("Pilihan tidak valid! Silakan coba lagi.\n")

# Menjalankan program utama
if __name__ == "__main__":
    main()
