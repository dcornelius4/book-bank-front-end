import {
  FETCH_LIBRARY_BY_ID,
  FETCH_LIBRARY_BY_ID_PENDING
} from '../actions/libraryActions';

const initialState = {
  loading: true,
  details: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LIBRARY_BY_ID_PENDING:
      return { ...state, loading: true };
    case FETCH_LIBRARY_BY_ID:
      return { ...state, loading: false, details: action.payload };
    default:
      return state;
  }
}
