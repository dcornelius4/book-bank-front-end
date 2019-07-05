import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { ListGroup } from 'react-bootstrap';

function Books({ books }) {
  const bookList = books.map(book => (
    <ListGroup.Item action variant="dark" key={book._id}>
      <Book book={book} />
    </ListGroup.Item>
  ));
  return (
    <ListGroup>
      {bookList}
    </ListGroup>
  );
}

Books.propTypes = {
  books: PropTypes.array
};

export default Books;
