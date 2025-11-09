import React from 'react';

export default function BookFilter({ active, setActive }){
  const tabs = ['Semua Buku','Milik Saya','Sedang Dibaca','Ingin Dibeli'];
  return (
    <div className="tabs" style={{paddingTop:12}}>
      {tabs.map(t => (
        <button key={t} className={`tab ${active === t ? 'active' : ''}`} onClick={()=>setActive(t)}>
          {t}
        </button>
      ))}
    </div>
  );
}
