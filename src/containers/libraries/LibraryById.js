import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LibraryDetail from '../../components/libraries/library/LibraryDetail';
import { fetchLibraryById } from '../../actions/libraryActions';
import { getLibraryByDetail } from '../../selectors/libraryDetailSelector';

class LibraryById extends PureComponent {
  static propTypes = {
    library: PropTypes.shape({
      details: PropTypes.object
    }).isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { library } = this.props;
    return <LibraryDetail library={library} />;
  }
}

const mapStateToProps = state => ({
  library: getLibraryByDetail(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetch() {
    dispatch(fetchLibraryById(match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryById);
