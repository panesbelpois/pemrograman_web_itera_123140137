"""
Script untuk menjalankan API server dengan Waitress
Jalankan: python run_server.py
"""
import os
import sys
from waitress import serve
from matakuliah_app import main
from pyramid.config import Configurator

if __name__ == '__main__':
    # Setup settings
    settings = {
        'sqlalchemy.url': 'sqlite:///./matakuliah.db'
    }
    
    app = main({}, **settings)
    
    print("=" * 60)
    print("Matakuliah API Server")
    print("=" * 60)
    print("Server berjalan di: http://localhost:6543")
    print("Endpoint: http://localhost:6543/api/matakuliah")
    print("=" * 60)
    print("Tekan CTRL+C untuk menghentikan server\n")
    
    serve(app, host='0.0.0.0', port=6543)
