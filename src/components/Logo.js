import React from 'react';
import { Link } from 'react-router';

const sx = {
  fontFamily: 'Roboto',
  fontWeight: '700',
  textTransform: 'uppercase',
  fontSize: '1.2em',
  textDecoration: 'none',
  color: 'black',
};

function Logo() {
  return (
    <Link to="/" style={sx}>
      Deductr
    </Link>
  );
}

export default Logo;
