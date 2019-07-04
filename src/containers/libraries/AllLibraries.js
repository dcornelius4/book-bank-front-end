import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Libraries from '../../components/libraries/library/Libraries';
import { getAllLibraries } from '../../selectors/librarySelector';
import { fetchLibraries } from '../../actions/libraryActions';

class AllLibraries extends PureComponent {
  static propTypes = {
    libraries: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      libraries
    } = this.props;

    return <Libraries libraries={libraries} />;
  }
}

const mapStateToProps = state => ({
  libraries: getAllLibraries(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchLibraries());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllLibraries);
