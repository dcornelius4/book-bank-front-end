import { createAction } from 'promise-middleware-redux';
import { makeBook, getBooks } from '../services/bookApi';

export const [
  newBook,
  NEW_BOOK,
  NEW_BOOK_PENDING
] = createAction('NEW_BOOK', makeBook);

export const [
  fetchBooks,
  FETCH_BOOKS,
  FETCH_BOOKS_PENDING
] = createAction('FETCH_BOOKS', getBooks);
