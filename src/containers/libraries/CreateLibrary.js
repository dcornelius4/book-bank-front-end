import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Add from '../../components/add/Add';
import { connect } from 'react-redux';
import { newLibrary } from '../../actions/libraryActions';

class CreateLibrary extends PureComponent {
  static propTypes = {
    createLibrary: PropTypes.func.isRequired
  }

  state = {
    placeName: '',
    address: '',
    description: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { placeName, address, description } = this.state;

    this.props.createLibrary({ placeName, address, description });

    this.setState({ placeName: '', address: '', description: '' });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    const { placeName, address, description } = this.state;
    return (
      <Add
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        placeName={placeName}
        address={address}
        description={description}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createLibrary(library) {
    dispatch(newLibrary(library));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateLibrary);

