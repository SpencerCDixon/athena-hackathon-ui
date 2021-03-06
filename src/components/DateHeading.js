import React, { Component, PropTypes } from 'react';

const sx = {
  fontFamily: 'Open Sans',
  fontWeight: 300,
  fontSize: '1em',
  color: '#000000',
  marginTop: '5px',
  marginBottom: '5px'
};

const propTypes = {
  date: PropTypes.string,
};

class DateHeading extends Component {
  render() {
    return (
      <p style={sx}>
      Expiration Date: {this.props.date}
      </p>
    );
  }
}

DateHeading.propTypes = propTypes;
export default DateHeading;
