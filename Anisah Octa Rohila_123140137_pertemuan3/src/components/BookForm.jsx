import React, { useState, useEffect } from 'react';

export default function BookForm({ open, onClose, onSubmit, initial }){
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('Selesai Dibaca');

  useEffect(() => {
    if(initial){
      setTitle(initial.title || '');
      setAuthor(initial.author || '');
      setStatus(initial.status || 'Selesai Dibaca');
    } else {
      setTitle('');setAuthor('');setStatus('Selesai Dibaca');
    }
  }, [initial, open]);

  if(!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim()) return alert('Judul wajib diisi');
    onSubmit({ title: title.trim(), author: author.trim(), status });
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <h2>Tambah Buku Baru</h2>
            <div style={{color:'#777'}}>Tambahkan buku baru ke koleksi Anda</div>
          </div>
          <button onClick={onClose} style={{background:'transparent',border:0,fontSize:20}}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Judul Buku</label>
            <input className="input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Masukkan judul buku" />
          </div>

          <div className="form-field">
            <label>Penulis</label>
            <input className="input" value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Masukkan nama penulis" />
          </div>

          <div className="form-field">
            <label>Status</label>
            <select className="select" value={status} onChange={e=>setStatus(e.target.value)}>
              <option>Selesai Dibaca</option>
              <option>Sedang Dibaca</option>
              <option>Ingin Dibeli</option>
            </select>
          </div>

          <div style={{display:'flex',justifyContent:'flex-end',gap:12, marginTop:14}}>
            <button type="button" className="btn btn-outline" onClick={onClose}>Batal</button>
            <button type="submit" className="btn btn-pink">Tambah Buku</button>
          </div>
        </form>
      </div>
    </div>
  );
}
