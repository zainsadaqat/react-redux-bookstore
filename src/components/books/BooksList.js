import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {books.map((book) => (
        <SingleBook
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BooksList;
