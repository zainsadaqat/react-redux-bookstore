import axios from 'axios';
import { ENDPOINT } from '../../App';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => {
  const newBook = {
    item_id: payload.item_id,
    title: payload.title,
    category: payload.category,
  };
  return async (dispatch) => {
    await axios.post(ENDPOINT, newBook);
    dispatch({ type: ADD_BOOK, payload });
  };
};

export const removeBook = (id) => {
  const removeBook = {
    item_id: id,
  };

  return async (dispatch) => {
    await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OWE8y7l6VJxjIC8WGkOP/books/${id}`,
      removeBook
    );
    dispatch({ type: REMOVE_BOOK, removeBook });
  };
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.item_id);
    default:
      return state;
  }
};

export default booksReducer;
