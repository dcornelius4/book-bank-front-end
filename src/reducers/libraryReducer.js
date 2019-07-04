import {
  NEW_LIBRARY,
  NEW_LIBRARY_PENDING,
  FETCH_LIBRARIES,
  FETCH_LIBRARIES_PENDING
} from '../actions/libraryActions';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_LIBRARY_PENDING:
      return { ...state, loading: true };
    case NEW_LIBRARY:
      return { ...state, loading: false, list: [...state.list, action.payload] };
    case FETCH_LIBRARIES_PENDING:
      return { ...state, loading: true };
    case FETCH_LIBRARIES:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}
