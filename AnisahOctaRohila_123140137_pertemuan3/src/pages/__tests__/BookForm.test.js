import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from '../components/BookForm';

test('BookForm validation and submit', () => {
  const onSubmit = jest.fn();
  const onClose = jest.fn();
  render(<BookForm open={true} onSubmit={onSubmit} onClose={onClose} />);

  fireEvent.change(screen.getByPlaceholderText(/Masukkan judul buku/i), { target: { value: 'Buku A' }});
  fireEvent.change(screen.getByPlaceholderText(/Masukkan nama penulis/i), { target: { value: 'Penulis' }});
  fireEvent.click(screen.getByText(/Tambah Buku/i));
  expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ title: 'Buku A', author: 'Penulis' }));
});
