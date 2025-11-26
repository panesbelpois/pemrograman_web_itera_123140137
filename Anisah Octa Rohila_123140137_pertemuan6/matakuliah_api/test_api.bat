@echo off
REM Script untuk testing API endpoints menggunakan curl
REM Pastikan server berjalan di http://localhost:6543

echo ============================================
echo TEST API ENDPOINTS - Matakuliah Management
echo ============================================
echo.

echo [1] GET ALL MATAKULIAH
echo Request:
echo curl -X GET http://localhost:6543/api/matakuliah
curl -X GET http://localhost:6543/api/matakuliah
echo.
echo.

echo [2] GET MATAKULIAH DENGAN ID 1
echo Request:
echo curl -X GET http://localhost:6543/api/matakuliah/1
curl -X GET http://localhost:6543/api/matakuliah/1
echo.
echo.

echo [3] CREATE MATAKULIAH BARU
echo Request:
echo curl -X POST http://localhost:6543/api/matakuliah -H "Content-Type: application/json" -d "{\"kode_mk\":\"IF201\",\"nama_mk\":\"Jaringan Komputer\",\"sks\":3,\"semester\":5}"
curl -X POST http://localhost:6543/api/matakuliah ^
  -H "Content-Type: application/json" ^
  -d "{\"kode_mk\":\"IF201\",\"nama_mk\":\"Jaringan Komputer\",\"sks\":3,\"semester\":5}"
echo.
echo.

echo [4] UPDATE MATAKULIAH DENGAN ID 1
echo Request:
echo curl -X PUT http://localhost:6543/api/matakuliah/1 -H "Content-Type: application/json" -d "{\"nama_mk\":\"Algoritma dan Pemrograman Lanjut\",\"sks\":4}"
curl -X PUT http://localhost:6543/api/matakuliah/1 ^
  -H "Content-Type: application/json" ^
  -d "{\"nama_mk\":\"Algoritma dan Pemrograman Lanjut\",\"sks\":4}"
echo.
echo.

echo [5] DELETE MATAKULIAH DENGAN ID 5
echo Request:
echo curl -X DELETE http://localhost:6543/api/matakuliah/5
curl -X DELETE http://localhost:6543/api/matakuliah/5
echo.
echo.

echo ============================================
echo TEST ERROR HANDLING
echo ============================================
echo.

echo [ERROR TEST 1] Get matakuliah dengan ID yang tidak ada
curl -X GET http://localhost:6543/api/matakuliah/999
echo.
echo.

pause
