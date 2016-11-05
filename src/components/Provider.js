import React, { Component, PropTypes } from 'react';

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

class Provider extends Component {
  render() {
    return (
      <p style={sx}>
      {this.props.name} <i className="material-icons" style={{fontSize: "16px"}}>info</i>
      </p>
    );
  }
}

Provider.propTypes = propTypes;
export default Provider;
