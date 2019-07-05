import { createAction } from 'promise-middleware-redux';
import { makeBook } from '../services/bookApi';

export const [
  newBook,
  NEW_BOOK,
  NEW_BOOK_PENDING
] = createAction('NEW_BOOK', makeBook);
