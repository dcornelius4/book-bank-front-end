import { newBook, fetchBooks } from './bookActions';

jest.mock('../services/libraryApi.js', () => ({
  makeBook() {
    return Promise.resolve([]);
  },
  getBooks() {
    return Promise.resolve([]);
  }
}));

jest.mock('../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([]);
  },
  handleCheck() {
    return Promise.resolve([]);
  }
}));

describe('book action', () => {
  it('creates an action to post a book', () => {
    const bookAction = newBook({
      bookName: 'My Book'
    });

    expect(bookAction).toEqual({
      type: 'NEW_BOOK',
      pendingType: 'NEW_BOOK_PENDING',
      payload: expect.any(Promise),
      fulfilledType: 'NEW_BOOK_FULFILLED',
      rejectedType: 'NEW_BOOK_REJECTED',
    });
  });

  it('creates an action to fetch books', () => {
    const bookAction = fetchBooks();

    expect(bookAction).toEqual({
      type: 'FETCH_BOOKS',
      pendingType: 'FETCH_BOOKS_PENDING',
      payload: expect.any(Promise),
      fulfilledType: 'FETCH_BOOKS_FULFILLED',
      rejectedType: 'FETCH_BOOKS_REJECTED',
    });
  });
});
