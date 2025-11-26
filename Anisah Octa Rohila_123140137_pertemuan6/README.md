# Aplikasi API Manajemen Matakuliah dengan Pyramid

## Deskripsi Proyek

Aplikasi API sederhana untuk manajemen data matakuliah yang dibangun menggunakan framework **Pyramid** dan **SQLAlchemy**. Aplikasi ini menyediakan REST API endpoint untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data matakuliah.

### Fitur Utama:
- ✅ Get semua matakuliah
- ✅ Get detail satu matakuliah
- ✅ Tambah matakuliah baru
- ✅ Update data matakuliah
- ✅ Hapus data matakuliah
- ✅ Validasi input data
- ✅ Error handling yang proper
- ✅ Database dengan SQLite

---

## Cara Instalasi

### 1. Persiapan Awal

Pastikan Anda memiliki Python 3.8+ terinstall. Buka Command Prompt/PowerShell dan navigasi ke folder proyek:

```powershell
cd "Anisah Octa Rohila_123140137_pertemuan6\matakuliah_api"
```

### 2. Buat Virtual Environment

```powershell
# Buat virtual environment
python -m venv venv

# Aktifkan virtual environment
# Untuk PowerShell:
.\venv\Scripts\Activate.ps1

# Atau untuk Command Prompt:
venv\Scripts\activate.bat
```

Jika mengalami error pada PowerShell terkait execution policy, jalankan:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 3. Instalasi Dependencies

```powershell
# Install dependencies dari requirements.txt
pip install -r requirements.txt

# Atau install dengan setup.py
pip install -e .
```

Dependencies yang akan diinstall:
- `pyramid==2.0.2` - Web framework
- `sqlalchemy==2.0.23` - ORM untuk database
- `alembic==1.13.0` - Database migration tool
- `waitress==2.1.2` - WSGI server
- `pyramid_sqlalchemy==2.0` - Integration Pyramid dengan SQLAlchemy

### 4. Konfigurasi Database

Database sudah dikonfigurasi untuk menggunakan SQLite di file `matakuliah.db`.

Jalankan script untuk membuat tabel dan menambahkan data awal:

```powershell
# Create database dan tambah data awal
python add_initial_data.py
```

Output yang diharapkan:
```
✓ Database berhasil diinisialisasi
✓ 5 matakuliah awal berhasil ditambahkan:
  - [IF101] Algoritma dan Pemrograman (3 SKS, Semester 1)
  - [IF102] Struktur Data (3 SKS, Semester 2)
  - [IF103] Basis Data (3 SKS, Semester 2)
  - [IF104] Pemrograman Web (3 SKS, Semester 3)
  - [IF105] Sistem Operasi (3 SKS, Semester 4)
```

---

## Cara Menjalankan

### Jalankan Server API

```powershell
python run_server.py
```

Server akan berjalan di: **http://localhost:6543**

Output:
```
============================================================
Matakuliah API Server
============================================================
Server berjalan di: http://localhost:6543
Endpoint: http://localhost:6543/api/matakuliah
============================================================
Tekan CTRL+C untuk menghentikan server
```

---

## API Endpoints

### Base URL
```
http://localhost:6543/api
```

### 1. Get All Matakuliah

**Request:**
```
GET /api/matakuliah
```

**cURL Command:**
```bash
curl -X GET http://localhost:6543/api/matakuliah
```

**Response (200 OK):**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "kode_mk": "IF101",
      "nama_mk": "Algoritma dan Pemrograman",
      "sks": 3,
      "semester": 1
    },
    {
      "id": 2,
      "kode_mk": "IF102",
      "nama_mk": "Struktur Data",
      "sks": 3,
      "semester": 2
    },
    {
      "id": 3,
      "kode_mk": "IF103",
      "nama_mk": "Basis Data",
      "sks": 3,
      "semester": 2
    }
  ]
}
```

---

### 2. Get Detail Satu Matakuliah

**Request:**
```
GET /api/matakuliah/{id}
```

**cURL Command:**
```bash
curl -X GET http://localhost:6543/api/matakuliah/1
```

**Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "kode_mk": "IF101",
    "nama_mk": "Algoritma dan Pemrograman",
    "sks": 3,
    "semester": 1
  }
}
```

**Response (404 Not Found):**
```json
{
  "status": "error",
  "message": "Matakuliah dengan ID 999 tidak ditemukan"
}
```

---

### 3. Create Matakuliah Baru

**Request:**
```
POST /api/matakuliah
Content-Type: application/json

{
  "kode_mk": "IF201",
  "nama_mk": "Jaringan Komputer",
  "sks": 3,
  "semester": 5
}
```

**cURL Command (PowerShell):**
```powershell
$body = @{
    kode_mk = "IF201"
    nama_mk = "Jaringan Komputer"
    sks = 3
    semester = 5
} | ConvertTo-Json

curl -X POST http://localhost:6543/api/matakuliah `
  -H "Content-Type: application/json" `
  -d $body
```

**cURL Command (Bash/Git Bash):**
```bash
curl -X POST http://localhost:6543/api/matakuliah \
  -H "Content-Type: application/json" \
  -d '{"kode_mk":"IF201","nama_mk":"Jaringan Komputer","sks":3,"semester":5}'
```

**Response (201 Created):**
```json
{
  "status": "success",
  "message": "Matakuliah berhasil ditambahkan",
  "data": {
    "id": 6,
    "kode_mk": "IF201",
    "nama_mk": "Jaringan Komputer",
    "sks": 3,
    "semester": 5
  }
}
```

**Response (400 Bad Request - Field kurang):**
```json
{
  "status": "error",
  "message": "Field nama_mk harus diisi"
}
```

**Response (400 Bad Request - Kode sudah ada):**
```json
{
  "status": "error",
  "message": "Kode matakuliah sudah ada"
}
```

---

### 4. Update Matakuliah

**Request:**
```
PUT /api/matakuliah/{id}
Content-Type: application/json

{
  "nama_mk": "Algoritma dan Pemrograman Lanjut",
  "sks": 4
}
```

**cURL Command (PowerShell):**
```powershell
$body = @{
    nama_mk = "Algoritma dan Pemrograman Lanjut"
    sks = 4
} | ConvertTo-Json

curl -X PUT http://localhost:6543/api/matakuliah/1 `
  -H "Content-Type: application/json" `
  -d $body
```

**cURL Command (Bash/Git Bash):**
```bash
curl -X PUT http://localhost:6543/api/matakuliah/1 \
  -H "Content-Type: application/json" \
  -d '{"nama_mk":"Algoritma dan Pemrograman Lanjut","sks":4}'
```

**Response (200 OK):**
```json
{
  "status": "success",
  "message": "Matakuliah berhasil diupdate",
  "data": {
    "id": 1,
    "kode_mk": "IF101",
    "nama_mk": "Algoritma dan Pemrograman Lanjut",
    "sks": 4,
    "semester": 1
  }
}
```

**Response (404 Not Found):**
```json
{
  "status": "error",
  "message": "Matakuliah dengan ID 999 tidak ditemukan"
}
```

---

### 5. Delete Matakuliah

**Request:**
```
DELETE /api/matakuliah/{id}
```

**cURL Command:**
```bash
curl -X DELETE http://localhost:6543/api/matakuliah/6
```

**Response (200 OK):**
```json
{
  "status": "success",
  "message": "Matakuliah berhasil dihapus"
}
```

**Response (404 Not Found):**
```json
{
  "status": "error",
  "message": "Matakuliah dengan ID 999 tidak ditemukan"
}
```

---

## Testing

### Method 1: Menggunakan PowerShell/bash dengan curl

Jalankan satu per satu command curl yang ada di atas.

### Method 2: Menggunakan Postman

1. Buka Postman
2. Import atau buat request sesuai endpoint di atas
3. Test semua HTTP method (GET, POST, PUT, DELETE)

### Method 3: Menggunakan Script Testing

Jalankan batch file untuk testing otomatis:

**Windows Command Prompt:**
```cmd
test_api.bat
```

---

## Struktur Proyek

```
matakuliah_api/
├── matakuliah_app/
│   ├── __init__.py              # Konfigurasi Pyramid dan routing
│   ├── models.py                # Model SQLAlchemy untuk Matakuliah
│   ├── views.py                 # API endpoints handler
│   ├── migrations/              # Alembic migration files
│   │   ├── env.py
│   │   ├── script.py.mako
│   │   ├── alembic.ini
│   │   └── versions/
│   │       └── 001_create_matakuliah_table.py
│   ├── models/                  # (untuk struktur modular jika diperluas)
│   └── views/                   # (untuk struktur modular jika diperluas)
├── setup.py                     # Package configuration
├── requirements.txt             # Python dependencies
├── development.ini              # Pyramid configuration
├── add_initial_data.py          # Script untuk seeding data awal
├── run_server.py                # Script untuk menjalankan server
├── test_api.py                  # Test API script
├── test_api.bat                 # Batch file untuk testing
├── matakuliah.db                # SQLite database (auto-created)
└── README.md                    # Dokumentasi ini
```

---

## Model Data - Matakuliah

```python
class Matakuliah(Base):
    __tablename__ = 'matakuliah'
    
    id = Column(Integer, primary_key=True)              # Auto increment
    kode_mk = Column(Text, unique=True, nullable=False) # Unique, Not null
    nama_mk = Column(Text, nullable=False)              # Not null
    sks = Column(Integer, nullable=False)               # Not null
    semester = Column(Integer, nullable=False)          # Not null
    
    def to_dict(self):
        return {
            'id': self.id,
            'kode_mk': self.kode_mk,
            'nama_mk': self.nama_mk,
            'sks': self.sks,
            'semester': self.semester,
        }
```

### Atribut:
| Atribut | Tipe | Deskripsi | Constraint |
|---------|------|-----------|-----------|
| id | Integer | Primary key | Auto increment |
| kode_mk | Text | Kode mata kuliah | Unique, Not null |
| nama_mk | Text | Nama mata kuliah | Not null |
| sks | Integer | Jumlah SKS | Not null |
| semester | Integer | Semester pengambilan | Not null |

---

## Validasi Input

Aplikasi melakukan validasi pada setiap request:

### CREATE/UPDATE Validation:
- **kode_mk**: Harus unik (tidak boleh sama dengan data lain)
- **nama_mk**: Tidak boleh kosong
- **sks**: Harus angka positif (> 0)
- **semester**: Harus angka positif (> 0)

### Contoh Error Response:

**Validasi SKS negatif:**
```bash
curl -X POST http://localhost:6543/api/matakuliah \
  -H "Content-Type: application/json" \
  -d '{"kode_mk":"IF301","nama_mk":"Test","sks":-5,"semester":1}'
```

Response:
```json
{
  "status": "error",
  "message": "SKS harus berupa angka positif"
}
```

---

## Troubleshooting

### Error: `ModuleNotFoundError: No module named 'pyramid'`
**Solusi:** Install dependencies terlebih dahulu
```powershell
pip install -r requirements.txt
```

### Error: `database is locked`
**Solusi:** Tutup semua koneksi database dan hapus file `matakuliah.db`, kemudian jalankan `add_initial_data.py` kembali

### Error: Port 6543 sudah digunakan
**Solusi:** Ubah port di file `run_server.py` pada baris terakhir:
```python
serve(app, host='0.0.0.0', port=6544)  # Ganti 6543 menjadi port lain
```

### Virtual environment tidak aktif
**Solusi:** Jalankan kembali activation command
```powershell
.\venv\Scripts\Activate.ps1
```

---

## Catatan Penting

1. Pastikan virtual environment sudah **aktif** sebelum menjalankan aplikasi
2. Pastikan tidak ada aplikasi lain yang menggunakan **port 6543**
3. Untuk menghentikan server: tekan **CTRL+C** di terminal
4. Database akan dibuat otomatis pada folder root proyek
5. Setiap API endpoint mengembalikan JSON response

---

## Informasi Mahasiswa

- **Nama:** Anisah Octa Rohila
- **NIM:** 123140137
- **Praktikum:** Pertemuan 6 - Pyramid Framework
- **Tanggal:** November 2025

---

## Referensi

- [Pyramid Documentation](https://docs.pylonsproject.org/projects/pyramid/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Alembic Documentation](https://alembic.sqlalchemy.org/)
- [REST API Best Practices](https://restfulapi.net/)

