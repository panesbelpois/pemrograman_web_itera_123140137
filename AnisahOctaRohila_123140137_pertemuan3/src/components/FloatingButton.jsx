import React from 'react';

export default function FloatingButton({onClick}){
  return (
    <button className="fab" onClick={onClick} aria-label="Tambah Buku">
      +
    </button>
  );
}
