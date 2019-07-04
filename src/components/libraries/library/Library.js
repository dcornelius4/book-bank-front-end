import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Library({ library }) {
  return (
    <Link to={`libraries/${library._id}`}>{library.placeName}</Link>
  );
}

Library.propTypes = {
  library: PropTypes.object.isRequired
};

export default Library;
