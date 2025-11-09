import React, { useState } from 'react';
import BookFilter from '../components/BookFilter';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import FloatingButton from '../components/FloatingButton';
import loopIcon from '../assets/loop.png';
import { useBooks } from '../context/BookContext';

export default function Home(){
  const { books, addBook, editBook, deleteBook } = useBooks();
  const [filter, setFilter] = useState('Semua Buku');
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState('');

  const filtered = books.filter(b => {
    if(filter !== 'Semua Buku' && b.status !== filter) return false;
    if(query && !b.title.toLowerCase().includes(query.toLowerCase()) && !b.author?.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const handleSubmit = (data) => {
    if(editing) {
      editBook(editing.id, data);
      setEditing(null);
    } else {
      addBook(data);
    }
  };

  return (
    <div>
      <div className="search-area">
        <div className="search-wrapper">
          <div className="search-box">
            <img src={loopIcon} alt="Search" style={{ width: 20, height: 20, opacity: 0.6 }} />
            <input placeholder="Cari judul atau penulis..." value={query} onChange={e=>setQuery(e.target.value)} />
          </div>

          <BookFilter active={filter} setActive={setFilter} />
        </div>
      </div>

      <div className="container">
        <BookList books={filtered} onEdit={(b)=>{setEditing(b); setOpenForm(true)}} onDelete={deleteBook} />
      </div>

      <FloatingButton onClick={() => { setEditing(null); setOpenForm(true) }} />

      <BookForm open={openForm} onClose={()=>{ setOpenForm(false); setEditing(null)}} onSubmit={handleSubmit} initial={editing} />
    </div>
  );
}
