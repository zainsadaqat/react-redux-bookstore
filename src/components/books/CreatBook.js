import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const CreateBook = () => {
  const [title, setTitle] = useState('Rich Dad, Poor Dad');
  const [author, setAuthor] = useState('Zain');
  const [category, setCategory] = useState('Next.js');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: Date.now().toString(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select
        defaultValue={category}
        onClick={(e) => setCategory(e.target.value)}
      >
        <option value={category}>Next.js</option>
        <option value={category}>React.js</option>
        <option value={category}>Vue.js</option>
        <option value={category}>Angular.js</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default CreateBook;
