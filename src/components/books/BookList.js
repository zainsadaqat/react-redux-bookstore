import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <ul>
      {books.map((book) => (
        <div key={book.item_id}>
          <article>
            <Book id={book.item_id} title={book.title} author={book.author} />
          </article>
        </div>
      ))}
    </ul>
  );
};

export default BookList;
