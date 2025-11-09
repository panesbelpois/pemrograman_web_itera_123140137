from library_item import LibraryItem

class Book(LibraryItem):
    """
    Class Book mewarisi dari LibraryItem.
    Menambahkan atribut genre.
    """

    def __init__(self, item_id, title, author, year, genre):
        super().__init__(item_id, title, author, year)
        self.__genre = genre

    @property
    def genre(self):
        """Getter untuk genre buku"""
        return self.__genre

    def display_info(self):
        """Implementasi polymorphism dari LibraryItem"""
        return f"[Book] {self.title} ({self.year}) oleh {self.author} - Genre: {self.genre}"
