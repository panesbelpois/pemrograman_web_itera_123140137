from abc import ABC, abstractmethod

class LibraryItem(ABC):
    """
    Abstract Class dasar untuk semua item di perpustakaan.
    Memiliki atribut umum seperti id, title, author, dan year.
    """

    def __init__(self, item_id, title, author, year):
        self.__id = item_id              # private attribute
        self.__title = title
        self.__author = author
        self.__year = year

    @property
    def id(self):
        """Getter untuk ID item"""
        return self.__id

    @property
    def title(self):
        """Getter untuk Judul item"""
        return self.__title

    @title.setter
    def title(self, new_title):
        """Setter untuk Judul item"""
        if new_title.strip() != "":
            self.__title = new_title

    @property
    def author(self):
        """Getter untuk nama penulis"""
        return self.__author

    @property
    def year(self):
        """Getter untuk tahun terbit"""
        return self.__year

    @abstractmethod
    def display_info(self):
        """Method abstrak yang wajib diimplementasikan subclass"""
        pass
