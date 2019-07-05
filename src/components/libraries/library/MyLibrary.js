import React from 'react';
import AllBooks from '../../../containers/books/AllBooks';
import { Card } from 'react-bootstrap';

export default function Library() {
  return (
    <div>
      <Card>
        <AllBooks />
      </Card>
    </div>
  );
}
