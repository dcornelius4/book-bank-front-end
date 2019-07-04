import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Add({ onSubmit, onChange, placeName, address, description, submitText }) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formLibraryName">
        <Form.Label>LFB Name</Form.Label>
        <Form.Control name="placeName" value={placeName} onChange={onChange} placeholder="Enter LFB Name" />
        <Form.Text className="text-muted">
          LFB = Little Free Library
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" value={address} onChange={onChange} placeholder="Enter LFB Address" />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control size="lg" name="description" value={description} onChange={onChange} placeholder="Enter Short Description" />
      </Form.Group>
      <Button variant="dark" type="submit">
        {submitText}
      </Button>
    </Form>
  );
}

Add.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  submitText: PropTypes.string
};

Add.defaultProps = {
  submitText: 'Submit Library'
};

export default Add;
