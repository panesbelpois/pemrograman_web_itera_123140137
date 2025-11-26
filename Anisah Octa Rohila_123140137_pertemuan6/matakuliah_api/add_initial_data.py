"""
Script untuk menambahkan data matakuliah awal ke database
Jalankan: python add_initial_data.py
"""
import os
import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Add the app directory to path
sys.path.insert(0, os.path.dirname(__file__))

from matakuliah_app.models import Base, Matakuliah


def init_db():
    """Initialize database dan tambahkan data awal"""
    # Create database engine
    engine = create_engine('sqlite:///./matakuliah.db')
    
    # Create tables
    Base.metadata.create_all(engine)
    
    # Create session
    Session = sessionmaker(bind=engine)
    session = Session()
    
    try:
        # Check if data already exists
        count = session.query(Matakuliah).count()
        if count > 0:
            print(f"Database sudah berisi {count} matakuliah")
            return
        
        # Tambahkan data awal
        data_initial = [
            Matakuliah(
                kode_mk='IF101',
                nama_mk='Algoritma dan Pemrograman',
                sks=3,
                semester=1
            ),
            Matakuliah(
                kode_mk='IF102',
                nama_mk='Struktur Data',
                sks=3,
                semester=2
            ),
            Matakuliah(
                kode_mk='IF103',
                nama_mk='Basis Data',
                sks=3,
                semester=2
            ),
            Matakuliah(
                kode_mk='IF104',
                nama_mk='Pemrograman Web',
                sks=3,
                semester=3
            ),
            Matakuliah(
                kode_mk='IF105',
                nama_mk='Sistem Operasi',
                sks=3,
                semester=4
            ),
        ]
        
        session.add_all(data_initial)
        session.commit()
        
        print("✓ Database berhasil diinisialisasi")
        print("✓ 5 matakuliah awal berhasil ditambahkan:")
        for mk in data_initial:
            print(f"  - [{mk.kode_mk}] {mk.nama_mk} ({mk.sks} SKS, Semester {mk.semester})")
    
    except Exception as e:
        session.rollback()
        print(f"✗ Error: {str(e)}")
        sys.exit(1)
    
    finally:
        session.close()


if __name__ == '__main__':
    init_db()
