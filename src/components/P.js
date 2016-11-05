import React, { PropTypes } from 'react';

const sx = {
  fontFamily: 'Open Sans',
  fontWeight: 300,
};

function P({ children }) {
  return (
    <p style={sx}>
      {children}
    </p>
  );
}

P.propTypes = {
  children: PropTypes.node,
};
export default P;
