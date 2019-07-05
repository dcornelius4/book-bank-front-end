import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Books from '../../components/libraries/books/Books';
import { getAllBooks } from '../../selectors/bookSelector';
import { fetchBooks } from '../../actions/bookActions';

class AllBooks extends PureComponent {
  static propTypes = {
    books: PropTypes.array,
    fetch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      books
    } = this.props;

    return <Books books={books} />;
  }
}

const mapStateToProps = state => ({
  books: getAllBooks(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchBooks());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBooks);
