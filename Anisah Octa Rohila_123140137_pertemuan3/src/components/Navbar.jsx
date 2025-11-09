import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import bookIcon from '../assets/book1.png';

export default function Navbar(){
  const location = useLocation();
  const isBooks = location.pathname === '/' || location.pathname.startsWith('/books');
  const isStats = location.pathname.startsWith('/stats');

  // Inline styles for non-boxed links (plain text look)
  const plainTextStyle = { textDecoration: 'none', color: 'var(--pink)', fontWeight: 600 };
  const boxedStyle = { textDecoration: 'none' };

  return (
    <header className="app-header">
      <div className="brand">
        <div className="logo">
          <img src={bookIcon} alt="Book" className="book-icon" />
        </div>
        <div>PaneShelf</div>
      </div>
      <nav style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link
          to="/books"
          className={isBooks ? 'btn btn-pink' : undefined}
          style={isBooks ? { ...boxedStyle, padding: '8px 12px', borderRadius: 10 } : plainTextStyle}
        >
          Buku Saya
        </Link>

        <Link
          to="/stats"
          className={isStats ? 'btn btn-pink' : undefined}
          style={isStats ? { ...boxedStyle, padding: '8px 12px', borderRadius: 10 } : { textDecoration: 'none', color: '#444' }}
        >
          Statistik
        </Link>
      </nav>
    </header>
  );
}
