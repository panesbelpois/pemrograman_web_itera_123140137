import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { BookProvider, useBooks } from '../context/BookContext';
import { render } from '@testing-library/react';

function wrapper({ children }) {
  return <BookProvider>{children}</BookProvider>;
}

test('BookContext add and delete book', () => {
  const { result } = renderHook(() => useBooks(), { wrapper });
  act(() => {
    result.current.addBook({ title: 'A', author: 'X', status: 'Milik Saya' });
  });
  expect(result.current.books.length).toBe(1);
  const id = result.current.books[0].id;
  act(() => result.current.deleteBook(id));
  expect(result.current.books.length).toBe(0);
});
