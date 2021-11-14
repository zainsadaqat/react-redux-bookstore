import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = (props) => {
  const { title, category, author, progress, currentChapter, id } = props;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <section className="book-card">
      <article className="left-side">
        <div className="left">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
          <div className="btn-section">
            <button type="button" className="btn">
              Comment
            </button>
            <div className="sm-line" />
            <button type="button" className="btn" onClick={removeHandler}>
              Remove
            </button>
            <div className="sm-line" />
            <button type="button" className="btn">
              Edit
            </button>
          </div>
        </div>
        <div className="center">
          <div className="center-in">
            <div className="circle" />
            <div className="data">
              <p className="progress">{progress}%</p>
              <p className="completed">completed</p>
            </div>
          </div>
        </div>
      </article>
      <div className="lg-line" />
      <div className="right">
        <div className="cc-heading">current chapter</div>
        <div className="current-chapter">{currentChapter}</div>
        <button type="button" className="update-btn">
          UPDATE PROGRESS
        </button>
      </div>
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  author: PropTypes.string,
  progress: PropTypes.number,
  currentChapter: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  author: 'Zain Sadaqat',
  category: 'Drama',
  progress: 50,
  currentChapter: 'Testing',
};

export default Book;
