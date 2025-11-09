from library import Library
from book import Book
from magazine import Magazine

def main():
    library = Library()

    while True:
        print("\n=== Sistem Manajemen Perpustakaan ===")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Lihat Semua Item")
        print("4. Cari Item")
        print("5. Keluar")

        pilihan = input("Pilih menu: ")

        if pilihan == "1":
            item_id = input("Masukkan ID Buku: ")
            title = input("Masukkan Judul: ")
            author = input("Masukkan Penulis: ")
            year = input("Masukkan Tahun Terbit: ")
            genre = input("Masukkan Genre: ")

            book = Book(item_id, title, author, year, genre)
            library.add_item(book)

        elif pilihan == "2":
            item_id = input("Masukkan ID Majalah: ")
            title = input("Masukkan Judul: ")
            author = input("Masukkan Editor: ")
            year = input("Masukkan Tahun Terbit: ")
            issue = input("Masukkan Nomor Edisi: ")

            magazine = Magazine(item_id, title, author, year, issue)
            library.add_item(magazine)

        elif pilihan == "3":
            library.show_all_items()

        elif pilihan == "4":
            print("\n1. Cari berdasarkan ID")
            print("2. Cari berdasarkan Judul")
            cari = input("Pilih metode pencarian: ")

            if cari == "1":
                cid = input("Masukkan ID: ")
                item = library.find_by_id(cid)
                if item:
                    print("Ditemukan:", item.display_info())
                else:
                    print("Item tidak ditemukan.")
            elif cari == "2":
                cjudul = input("Masukkan Judul: ")
                hasil = library.find_by_title(cjudul)
                if hasil:
                    print("\nHasil Pencarian:")
                    for item in hasil:
                        print(item.display_info())
                else:
                    print("Item tidak ditemukan.")
            else:
                print("Pilihan tidak valid.")

        elif pilihan == "5":
            print("Terima kasih telah menggunakan sistem perpustakaan!")
            break
        else:
            print("Pilihan tidak valid, coba lagi.")

if __name__ == "__main__":
    main()
