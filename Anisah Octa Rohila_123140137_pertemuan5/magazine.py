from library_item import LibraryItem

class Magazine(LibraryItem):
    """
    Class Magazine mewarisi dari LibraryItem.
    Menambahkan atribut issue_number.
    """

    def __init__(self, item_id, title, author, year, issue_number):
        super().__init__(item_id, title, author, year)
        self.__issue_number = issue_number

    @property
    def issue_number(self):
        """Getter untuk nomor edisi majalah"""
        return self.__issue_number

    def display_info(self):
        """Implementasi polymorphism dari LibraryItem"""
        return f"[Magazine] {self.title} ({self.year}) oleh {self.author} - Edisi #{self.issue_number}"
