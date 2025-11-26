"""
Configuration file untuk Matakuliah API
"""

# Database configuration
DATABASE_URL = 'sqlite:///./matakuliah.db'

# Server configuration
SERVER_HOST = '0.0.0.0'
SERVER_PORT = 6543

# Application settings
APP_NAME = 'Matakuliah API'
APP_VERSION = '1.0'
DEBUG = True

# Validasi constraints
MIN_SKS = 1
MAX_SKS = 6
MIN_SEMESTER = 1
MAX_SEMESTER = 8
