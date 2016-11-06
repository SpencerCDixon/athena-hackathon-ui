import React, { Component, PropTypes } from 'react';
import InsuranceInfo from './InsuranceInfo'

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
      {this.props.name} <InsuranceInfo tooltip={this.props.tooltip} />
      </p>
    );
  }
}

InsuranceHeading.propTypes = propTypes;
export default InsuranceHeading;
