import React from 'react';
import PropTypes from 'prop-types';

function LibraryDetail({ library }) {
  const {
    placeName,
    address,
    description
  } = library;

  const displayLibrary = (
    <>
      <h1>{placeName}</h1>
      <h2>{address}</h2>
      <section>{description}</section>
    </>
  );

  return displayLibrary;
}

LibraryDetail.propTypes = {
  library: PropTypes.object.isRequired
};

export default LibraryDetail;
