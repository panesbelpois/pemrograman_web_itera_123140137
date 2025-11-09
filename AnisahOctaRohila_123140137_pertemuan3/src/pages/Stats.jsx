import React from 'react';
import useBookStats from '../hooks/useBookStats';

export default function Stats(){
  const { total, milik, dibaca, ingin, latest } = useBookStats();
  return (
    <div className="container">
      <h1 style={{fontSize:36}}>Statistik Buku</h1>
      <p style={{color:'#777'}}>Ringkasan koleksi buku Anda</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div>
            <h3>Total Buku</h3>
            <div className="num">{total}</div>
          </div>
        </div>

        <div className="stat-card">
          <div>
            <h3>Milik Saya</h3>
            <div className="num">{milik}</div>
          </div>
        </div>

        <div className="stat-card">
          <div>
            <h3>Sedang Dibaca</h3>
            <div className="num">{dibaca}</div>
          </div>
        </div>

        <div className="stat-card">
          <div>
            <h3>Ingin Dibeli</h3>
            <div className="num">{ingin}</div>
          </div>
        </div>
      </div>

      <div style={{marginTop:28}}>
        <div style={{background:'white',padding:20,borderRadius:12,boxShadow:'var(--shadow)'}}>
          <h3>Buku Terbaru</h3>
          {latest.length === 0 ? <p style={{color:'#777'}}>Belum ada buku yang ditambahkan</p> : (
            <ul>
              {latest.map(b => <li key={b.id} style={{marginTop:8}}>{b.title} — {b.author || '—'}</li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
