import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <select name="category" id="category" disabled>
        <option value="Marvel">Marvel</option>
        <option value="Harry Potter">Harry Potter</option>
        <option value="Cricket">Cricket</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateNewBook;
