import React, { PropTypes } from 'react';
import Radium from 'radium';
import { font, colors } from '../styles';

const sx = {
  button: {
    color: colors.darkGreen,
    border: `2px solid ${colors.lightGreen}`,
    padding: '12px 20px',
    borderRadius: '3px',
    height: '100%',
    display: 'inline-block',
    ':hover': {
      border: `2px solid ${colors.darkGreen}`,
      cursor: 'pointer',
    }
  },
  text: {
    fontFamily: font.bodyText,
    fontWeight: font.thin,
  },
};

function Button({ children, style, ...rest }) {
  return (
    <a style={{...sx.button, ...style}}>
      <span style={sx.text}>{children}</span>
    </a>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};
export default Radium(Button);
