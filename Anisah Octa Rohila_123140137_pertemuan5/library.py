class Library:
    """
    Class Library untuk mengelola koleksi item perpustakaan.
    Menerapkan konsep encapsulation.
    """

    def __init__(self):
        self.__collection = []  # private list menyimpan objek LibraryItem

    def add_item(self, item):
        """Menambahkan item ke koleksi"""
        self.__collection.append(item)
        print("Item berhasil ditambahkan!")

    def show_all_items(self):
        """Menampilkan semua item dalam koleksi"""
        if not self.__collection:
            print("Belum ada item di perpustakaan.")
        else:
            print("\n=== Daftar Koleksi Perpustakaan ===")
            for item in self.__collection:
                print(item.display_info())

    def find_by_id(self, item_id):
        """Mencari item berdasarkan ID"""
        for item in self.__collection:
            if item.id == item_id:
                return item
        return None

    def find_by_title(self, title):
        """Mencari item berdasarkan judul"""
        results = [item for item in self.__collection if title.lower() in item.title.lower()]
        return results
