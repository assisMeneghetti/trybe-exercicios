import React, { Component } from "react";
import PropTypes from 'prop-types';


class PokeName extends Component {
  render() {
    const name = this.props.name;
    return (
      <p>{name}</p>
    )
  }
}

PokeName.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PokeName;
