import React from 'react';
import PropTypes from 'prop-types';
import CreateBook from '../../../containers/books/CreateBook';

function LibraryDetail({ library }) {
  const {
    placeName,
    address,
    description
  } = library;

  const displayLibrary = (
    <>
      <h1>{placeName}</h1>
      <h3>{address}</h3>
      <section>{description}</section>

      <section>
        <CreateBook />
      </section>
    </>
  );

  return displayLibrary;
}

LibraryDetail.propTypes = {
  library: PropTypes.object.isRequired
};

export default LibraryDetail;
