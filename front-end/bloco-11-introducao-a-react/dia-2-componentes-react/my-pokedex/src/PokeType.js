import React, { Component } from "react";
import PropTypes from 'prop-types';

class PokeType extends Component {
  render() {
    const type = this.props.type;
    return (
      <p>{type}</p>
    )
  }
}

PokeType.propType = {
  type: PropTypes.string.isRequired,
}

export default PokeType;
