import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  const removeBookFromStore = () => {
    console.log('ID: ', id, ' Title: ', title, ' Author: ', author);
    dispatch(removeBook(id));
  };
  return (
    <>
      <li key={id}>
        Title:
        {title}, Author:
        {author}
      </li>
      <button type="button" onClick={removeBookFromStore}>
        Remove {title}
      </button>
    </>
  );
};

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default SingleBook;
