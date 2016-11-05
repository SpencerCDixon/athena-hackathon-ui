import React from 'react';
import face from '../images/uiface.png';

const sx = {
  maxWidth: 40,
};

function UIFace() {
  return (
    <img src={face} style={sx} />
  );
}

export default UIFace;
