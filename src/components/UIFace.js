import React from 'react';
import alice from '../images/Alice.jpg';

const sx = {
  maxWidth: 40,
  borderRadius: '50%',
};

function UIFace() {
  return (
    <img src={alice} style={sx} />
  );
}

export default UIFace;
