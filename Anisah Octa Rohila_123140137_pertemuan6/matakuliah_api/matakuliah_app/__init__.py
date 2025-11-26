"""
Main application initialization for Matakuliah API
"""
import os
import sys
from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker

from .models import Base


def main(global_config, **settings):
    """
    This function returns a Pyramid WSGI application.
    """
    # Database configuration
    engine = engine_from_config(settings, 'sqlalchemy.')
    session_factory = sessionmaker(bind=engine)
    Base.metadata.bind = engine
    
    config = Configurator(settings=settings)
    
    # Register session factory
    config.registry['dbsession_factory'] = session_factory
    
    # Add routes
    config.add_route('api_get_all_matakuliah', '/api/matakuliah', request_method='GET')
    config.add_route('api_get_matakuliah', '/api/matakuliah/{id}', request_method='GET')
    config.add_route('api_create_matakuliah', '/api/matakuliah', request_method='POST')
    config.add_route('api_update_matakuliah', '/api/matakuliah/{id}', request_method='PUT')
    config.add_route('api_delete_matakuliah', '/api/matakuliah/{id}', request_method='DELETE')
    
    # Scan for view functions
    config.scan()
    
    return config.make_wsgi_app()
