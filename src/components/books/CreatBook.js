import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="text" name="category" placeholder="Category" disabled />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default CreateBook;
