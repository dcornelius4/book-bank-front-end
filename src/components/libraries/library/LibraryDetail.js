import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Button, FormControl, Card } from 'react-bootstrap';
import CreateBook from '../../../containers/books/CreateBook';
import AllBooks from '../../../containers/books/AllBooks';

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
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Book Wishlist"
            aria-label="Book Wishlist"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </section>
      <section>
        {/* <Card>
          <AllBooks />
        </Card> */}
      </section>
    </>
  );

  return displayLibrary;
}

LibraryDetail.propTypes = {
  library: PropTypes.object.isRequired
};

export default LibraryDetail;
