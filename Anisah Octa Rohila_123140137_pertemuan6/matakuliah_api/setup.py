from setuptools import setup, find_packages

setup(
    name='matakuliah_app',
    version='1.0',
    description='API Manajemen Matakuliah dengan Pyramid Framework',
    author='Anisah Octa Rohila',
    author_email='',
    url='',
    keywords='pyramid matakuliah api',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'pyramid==2.0.2',
        'pyramid_sqlalchemy==2.0',
        'sqlalchemy==2.0.23',
        'alembic==1.13.0',
        'waitress==2.1.2',
        'transaction==3.1.1',
    ],
    entry_points={
        'paste.app_factory': [
            'main = matakuliah_app:main',
        ],
    },
)
