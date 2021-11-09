import axios from 'axios';
import { ENDPOINT } from '../../App';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const newBook = {
    item_id: `${payload.item_id}`,
    title: `${payload.name}&&&${payload.author}`,
    category: `${payload.category}`,
  };
  await axios.post(ENDPOINT, newBook);
  dispatch({ type: ADD_BOOK, payload });
};

export const removeBook = (id) => async (dispatch) => {
  const body = {
    item_id: id,
  };
  await axios.delete(`${ENDPOINT}/${id}`, body);
  dispatch({ type: REMOVE_BOOK, id });
};

export const fetchBooks = () => async (dispatch) => {
  const response = await axios.get(ENDPOINT);
  const array = [];
  const keys = Object.keys(response.data);
  const values = Object.values(response.data);
  values.forEach((value, index) => {
    const obj = value[0];
    const splitArray = obj.title.split('&&&');
    const book = {
      title: splitArray[0],
      author: splitArray[1],
      id: keys[index],
    };
    array.push(book);
  });
  dispatch({
    type: LOAD_BOOKS,
    payload: array,
  });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case LOAD_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
