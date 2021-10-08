import React, { Component } from "react";
import PropTypes from 'prop-types';

class AverageWeight extends Component {
  render() {
    const { averageWeight: { value, masurementUnit } } = this.props;
    return (
      <p> Average Weight: {value} {masurementUnit} </p>
    );
  }
}

AverageWeight.propTypes = {
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    masurementUnit: PropTypes.string.isRequired,
  }).isRequired,
}

export default AverageWeight;
