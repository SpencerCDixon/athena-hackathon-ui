import React, { PropTypes } from 'react';
import Radium from 'radium';
import { colors } from '../styles';

const sx = {
  color: colors.lightGreen,
  textDecoration: 'underline',
  ':hover': {
    cursor: 'pointer',
  },
};

function Link({ children, style, ...rest }) {
  return (
    <a style={{...sx, ...style}} {...rest}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
export default Radium(Link);
