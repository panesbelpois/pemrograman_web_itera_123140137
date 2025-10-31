import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BookProvider } from '../context/BookContext';
import App from '../App';

test('renders navbar brand', () => {
  render(
    <BrowserRouter>
      <BookProvider>
        <App />
      </BookProvider>
    </BrowserRouter>
  );
  expect(screen.getByText(/BukuKu/i)).toBeInTheDocument();
});
