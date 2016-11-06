import React, { Component, PropTypes } from 'react';
import InfoButton from './InfoButton'

const sx = {
  fontFamily: 'Open Sans',
  fontWeight: 300,
  fontSize: '1em',
  color: '#8C8887',
  marginTop: '5px',
  marginBottom: '5px'
};

const propTypes = {
  name: PropTypes.string,
};

class InsuranceHeading extends Component {
  render() {
    return (
      <p style={sx}>
      {this.props.name} <InfoButton tooltip={this.props.tooltip} />
      </p>
    );
  }
}

InsuranceHeading.propTypes = propTypes;
export default InsuranceHeading;
