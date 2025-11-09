import React from 'react';
import bookIcon from '../assets/book2.png';

export default function BookList({ books = [], onEdit, onDelete }){
  if(!books.length){
    return <div className="empty-state"><div style={{width:88,height:88,borderRadius:44,background:'#fde9f3',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:18}}><img src={bookIcon} alt="Book" className="book-icon-xlarge" /></div>
      <h2 style={{margin:0}}>Belum Ada Buku</h2>
      <p>Mulai tambahkan buku favorit Anda dengan menekan tombol "+" di kiri bawah</p>
    </div>
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-card">
          <div>
            <h4>{book.title}</h4>
            <p>{book.author || '—'}</p>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10}}>
            <div style={{fontSize:13,color:'#777'}}>{book.status}</div>
            <div style={{display:'flex',gap:8}}>
              <button className="btn btn-outline" onClick={() => onEdit(book)}>Edit</button>
              <button className="btn" style={{background:'#fff0f6',border:'1px solid #ffd6e8',color:'#d21f66'}} onClick={() => onDelete(book.id)}>Hapus</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
