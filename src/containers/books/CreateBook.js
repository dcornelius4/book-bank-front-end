import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newBook } from '../../actions/bookActions';
import BookForm from '../../components/libraries/libraryForms/BookForm';

class CreateBook extends PureComponent {
  static propTypes = {
    createBook: PropTypes.func
  }

  state = {
    bookName: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { bookName } = this.state;

    this.props.createBook({ bookName });

    this.setState({ bookName: '' });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    const { bookName } = this.state;
    return (
      <BookForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        bookName={bookName}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook(book) {
    dispatch(newBook(book));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateBook);
