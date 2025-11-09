import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

const BookContext = createContext();

export function BookProvider({ children }){
  const [books, setBooks] = useLocalStorage('bukuku_books', []);

  const addBook = ({ title, author, status }) => {
    const book = { id: uuidv4(), title, author, status, createdAt: Date.now() };
    setBooks(prev => [book, ...prev]);
  };

  const editBook = (id, changes) => {
    setBooks(prev => prev.map(b => b.id === id ? { ...b, ...changes } : b));
  };

  const deleteBook = (id) => {
    setBooks(prev => prev.filter(b => b.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  )
}

export function useBooks(){
  return useContext(BookContext);
}