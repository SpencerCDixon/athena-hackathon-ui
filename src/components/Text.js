import React, { PropTypes } from 'react';

const sx = {
  fontFamily: 'Open Sans',
  fontWeight: 300,
};

function Text({ children, style, bold = false}) {
  const finalStyles = Object.assign(
    sx,
    bold ? { fontWeight: 700 } : { fontWeight: 300 },
    style,
  );

  return (
    <span style={finalStyles}>
      {children}
    </span>
  );
}

Text.propTypes = {
  children: PropTypes.node,
};
export default Text;
