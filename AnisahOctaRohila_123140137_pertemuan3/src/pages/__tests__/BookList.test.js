import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';

test('renders empty state when no books', () => {
  render(<BookList books={[]} onEdit={() => {}} onDelete={() => {}} />);
  expect(screen.getByText(/Belum Ada Buku/i)).toBeInTheDocument();
});
