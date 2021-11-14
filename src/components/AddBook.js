import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './AddBook.css';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      name: e.target.addBook.value,
      author: e.target.addBookAuthor.value,
    };
    e.target.reset();
    dispatch(addBook(newBook));
  };
  return (
    <section id="addBook" className="add-books-container">
      <h2 className="add-new-book">ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} className="book-form">
        <input
          type="text"
          className="title-field"
          id="addBook"
          name="addBook"
          placeholder="Book Name"
        />
        <input
          type="text"
          id="addBookAuthor"
          className="category-field"
          name="addBookAuthor"
          placeholder="Book's Author Name"
        />
        <button type="submit" className="add-book-btn">
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
