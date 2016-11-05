import React, { PropTypes } from 'react';

const sx = {
  fontFamily: 'Raleway',
  fontWeight: '100',
  fontSize: '3.5em',
};

function H1({ children, style }) {
  return (
    <h1 style={{...sx, ...style}}>
      {children}
    </h1>
  );
}

H1.propTypes = {
  children: PropTypes.node,
};
export default H1;
