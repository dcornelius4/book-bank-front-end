import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Button, FormControl, Form } from 'react-bootstrap';

function BookForm({ onSubmit, onChange, bookName, submitText }) {
  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          name="bookName"
          value={bookName}
          onChange={onChange}
          placeholder="Enter Book Name"
          aria-label="Book Name"
          aria-describedby="basic-addon"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit">{submitText}</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  bookName: PropTypes.string
};

BookForm.defaultProps = {
  submitText: 'Add Book'
};

export default BookForm;

