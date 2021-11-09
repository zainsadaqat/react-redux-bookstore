import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <li key={id}>
        <p>{title}</p>
        <p>{author}</p>
      </li>
      <button type="button" onClick={removeBookFromStore}>
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
