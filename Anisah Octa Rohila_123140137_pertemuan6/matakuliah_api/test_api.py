"""
Script untuk testing API endpoint dengan curl
Gunakan script ini untuk test semua endpoint
"""

CURL_COMMANDS = """
# ============================================
# TEST API ENDPOINTS - Matakuliah Management
# ============================================

# 1. GET ALL MATAKULIAH
curl -X GET http://localhost:6543/api/matakuliah

# 2. GET MATAKULIAH DENGAN ID 1
curl -X GET http://localhost:6543/api/matakuliah/1

# 3. CREATE MATAKULIAH BARU
curl -X POST http://localhost:6543/api/matakuliah ^
  -H "Content-Type: application/json" ^
  -d {\"kode_mk\":\"IF201\",\"nama_mk\":\"Jaringan Komputer\",\"sks\":3,\"semester\":5}

# 4. UPDATE MATAKULIAH DENGAN ID 1
curl -X PUT http://localhost:6543/api/matakuliah/1 ^
  -H "Content-Type: application/json" ^
  -d {\"nama_mk\":\"Algoritma dan Pemrograman Lanjut\",\"sks\":4}

# 5. DELETE MATAKULIAH DENGAN ID 5
curl -X DELETE http://localhost:6543/api/matakuliah/5

# ============================================
# TEST ERROR HANDLING
# ============================================

# Test: Get matakuliah dengan ID yang tidak ada
curl -X GET http://localhost:6543/api/matakuliah/999

# Test: Create matakuliah dengan kode yang sudah ada
curl -X POST http://localhost:6543/api/matakuliah ^
  -H "Content-Type: application/json" ^
  -d {\"kode_mk\":\"IF101\",\"nama_mk\":\"Test\",\"sks\":3,\"semester\":1}

# Test: Create matakuliah dengan field yang kurang
curl -X POST http://localhost:6543/api/matakuliah ^
  -H "Content-Type: application/json" ^
  -d {\"kode_mk\":\"IF301\",\"nama_mk\":\"Test\"}

# Test: Update dengan SKS negatif
curl -X PUT http://localhost:6543/api/matakuliah/1 ^
  -H "Content-Type: application/json" ^
  -d {\"sks\":-5}
"""

print(CURL_COMMANDS)

if __name__ == '__main__':
    print("Simpan perintah di atas ke file batch atau jalankan di terminal PowerShell")
    print("\nCatatan: Pastikan server sudah berjalan di http://localhost:6543")
