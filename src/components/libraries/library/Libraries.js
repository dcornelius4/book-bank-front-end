import React from 'react';
import PropTypes from 'prop-types';
import Library from './Library';
import { ListGroup } from 'react-bootstrap';

function Libraries({ libraries }) {
  const libraryList = libraries.map(library => (
    <ListGroup.Item action variant="info" key={library._id}>
      <Library library={library} />
    </ListGroup.Item>
  ));
  return (
    <ListGroup>
      {libraryList}
    </ListGroup>
  );
}

Libraries.propTypes = {
  libraries: PropTypes.array.isRequired
};

export default Libraries;
