import {
  NEW_BOOK,
  NEW_BOOK_PENDING,
  FETCH_BOOKS,
  FETCH_BOOKS_PENDING
} from '../actions/bookActions';

const initialState = {
  loading: false,
  bookList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_BOOK_PENDING:
      return { ...state, loading: true };
    case NEW_BOOK:
      return { ...state, loading: false, bookList: [...state.bookList, action.payload] };
    case FETCH_BOOKS_PENDING:
      return { ...state, loading: true };
    case FETCH_BOOKS:
      return { ...state, loading: false, bookList: action.payload };
    default:
      return state;
  }
}
