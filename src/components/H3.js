import React, { PropTypes } from 'react';

const sx = {
  fontFamily: 'Raleway',
  fontWeight: '100',
  fontSize: '1.5em'
};

function H3({ children, style }) {
  return (
    <h3 style={{...sx, ...style}}>
      {children}
    </h3>
  );
}

H3.propTypes = {
  children: PropTypes.node,
};
export default H3;
