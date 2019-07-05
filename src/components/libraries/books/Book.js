import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <p>{book.bookName}</p>
  );
}

Book.propTypes = {
  book: PropTypes.object
};
export default Book;
