import React from 'react';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';
import './Books.css';

const Books = () => (
  <>
    <section id="books" className="bg">
      <BookList />
      <AddBook />
    </section>
  </>
);

export default Books;
