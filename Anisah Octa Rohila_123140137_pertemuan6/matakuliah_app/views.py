"""
Views/Routes for Matakuliah API
Implementasi endpoint untuk operasi CRUD Matakuliah
"""
import json
from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from .models import Matakuliah


class MatakuliahAPI:
    """API Views untuk manajemen matakuliah"""
    
    def __init__(self, request):
        self.request = request
        self.dbsession = request.registry['dbsession_factory']()
    
    @view_config(route_name='api_get_all_matakuliah', renderer='json')
    def get_all_matakuliah(self):
        """
        GET /api/matakuliah
        Mendapatkan semua data matakuliah
        """
        try:
            matakuliahs = self.dbsession.query(Matakuliah).all()
            return {
                'status': 'success',
                'data': [mk.to_dict() for mk in matakuliahs]
            }
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }
    
    @view_config(route_name='api_get_matakuliah', renderer='json')
    def get_matakuliah(self):
        """
        GET /api/matakuliah/{id}
        Mendapatkan detail satu matakuliah berdasarkan ID
        """
        try:
            mk_id = self.request.matchdict['id']
            matakuliah = self.dbsession.query(Matakuliah).filter(
                Matakuliah.id == mk_id
            ).first()
            
            if not matakuliah:
                self.request.response.status = 404
                return {
                    'status': 'error',
                    'message': f'Matakuliah dengan ID {mk_id} tidak ditemukan'
                }
            
            return {
                'status': 'success',
                'data': matakuliah.to_dict()
            }
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }
    
    @view_config(route_name='api_create_matakuliah', renderer='json')
    def create_matakuliah(self):
        """
        POST /api/matakuliah
        Menambahkan matakuliah baru
        
        Request body:
        {
            "kode_mk": "IF101",
            "nama_mk": "Algoritma dan Pemrograman",
            "sks": 3,
            "semester": 1
        }
        """
        try:
            data = self.request.json_body
            
            # Validasi input
            required_fields = ['kode_mk', 'nama_mk', 'sks', 'semester']
            for field in required_fields:
                if field not in data:
                    self.request.response.status = 400
                    return {
                        'status': 'error',
                        'message': f'Field {field} harus diisi'
                    }
            
            # Validasi tipe data
            if not isinstance(data['sks'], int) or data['sks'] <= 0:
                self.request.response.status = 400
                return {
                    'status': 'error',
                    'message': 'SKS harus berupa angka positif'
                }
            
            if not isinstance(data['semester'], int) or data['semester'] <= 0:
                self.request.response.status = 400
                return {
                    'status': 'error',
                    'message': 'Semester harus berupa angka positif'
                }
            
            # Buat instance baru
            matakuliah = Matakuliah(
                kode_mk=data['kode_mk'],
                nama_mk=data['nama_mk'],
                sks=data['sks'],
                semester=data['semester']
            )
            
            # Tambahkan ke database
            self.dbsession.add(matakuliah)
            self.dbsession.commit()
            
            self.request.response.status = 201
            return {
                'status': 'success',
                'message': 'Matakuliah berhasil ditambahkan',
                'data': matakuliah.to_dict()
            }
        
        except IntegrityError as e:
            self.dbsession.rollback()
            self.request.response.status = 400
            return {
                'status': 'error',
                'message': 'Kode matakuliah sudah ada'
            }
        except Exception as e:
            self.dbsession.rollback()
            self.request.response.status = 500
            return {
                'status': 'error',
                'message': str(e)
            }
    
    @view_config(route_name='api_update_matakuliah', renderer='json')
    def update_matakuliah(self):
        """
        PUT /api/matakuliah/{id}
        Mengupdate data matakuliah
        
        Request body:
        {
            "kode_mk": "IF101",
            "nama_mk": "Algoritma dan Pemrograman",
            "sks": 3,
            "semester": 1
        }
        """
        try:
            mk_id = self.request.matchdict['id']
            matakuliah = self.dbsession.query(Matakuliah).filter(
                Matakuliah.id == mk_id
            ).first()
            
            if not matakuliah:
                self.request.response.status = 404
                return {
                    'status': 'error',
                    'message': f'Matakuliah dengan ID {mk_id} tidak ditemukan'
                }
            
            data = self.request.json_body
            
            # Update field yang ada di request
            if 'kode_mk' in data:
                matakuliah.kode_mk = data['kode_mk']
            if 'nama_mk' in data:
                matakuliah.nama_mk = data['nama_mk']
            if 'sks' in data:
                if not isinstance(data['sks'], int) or data['sks'] <= 0:
                    self.request.response.status = 400
                    return {
                        'status': 'error',
                        'message': 'SKS harus berupa angka positif'
                    }
                matakuliah.sks = data['sks']
            if 'semester' in data:
                if not isinstance(data['semester'], int) or data['semester'] <= 0:
                    self.request.response.status = 400
                    return {
                        'status': 'error',
                        'message': 'Semester harus berupa angka positif'
                    }
                matakuliah.semester = data['semester']
            
            self.dbsession.commit()
            
            return {
                'status': 'success',
                'message': 'Matakuliah berhasil diupdate',
                'data': matakuliah.to_dict()
            }
        
        except IntegrityError as e:
            self.dbsession.rollback()
            self.request.response.status = 400
            return {
                'status': 'error',
                'message': 'Kode matakuliah sudah digunakan oleh data lain'
            }
        except Exception as e:
            self.dbsession.rollback()
            self.request.response.status = 500
            return {
                'status': 'error',
                'message': str(e)
            }
    
    @view_config(route_name='api_delete_matakuliah', renderer='json')
    def delete_matakuliah(self):
        """
        DELETE /api/matakuliah/{id}
        Menghapus data matakuliah
        """
        try:
            mk_id = self.request.matchdict['id']
            matakuliah = self.dbsession.query(Matakuliah).filter(
                Matakuliah.id == mk_id
            ).first()
            
            if not matakuliah:
                self.request.response.status = 404
                return {
                    'status': 'error',
                    'message': f'Matakuliah dengan ID {mk_id} tidak ditemukan'
                }
            
            self.dbsession.delete(matakuliah)
            self.dbsession.commit()
            
            return {
                'status': 'success',
                'message': 'Matakuliah berhasil dihapus'
            }
        
        except Exception as e:
            self.dbsession.rollback()
            self.request.response.status = 500
            return {
                'status': 'error',
                'message': str(e)
            }
