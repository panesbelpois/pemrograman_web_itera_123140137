import { useMemo } from 'react';
import { useBooks } from '../context/BookContext';

export default function useBookStats(){
  const { books } = useBooks();

  return useMemo(() => {
    const total = books.length;
    const milik = books.filter(b => b.status === 'Milik Saya').length;
    const dibaca = books.filter(b => b.status === 'Sedang Dibaca').length;
    const ingin = books.filter(b => b.status === 'Ingin Dibeli').length;
    const latest = books.slice(0,5);
    return { total, milik, dibaca, ingin, latest };
  }, [books]);
}
