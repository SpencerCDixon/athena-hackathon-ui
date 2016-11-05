import React, { PropTypes } from 'react';
import Logo from './Logo';
import UIFace from './UIFace';
import { Flex, Box } from 'reflexbox';

const sx = {
  height: 65,
  width: '100%',
}

function NavBar() {
  return (
    <Flex style={sx} align="center" justify="space-between">
      <Box pl={4}>
        <Logo />
      </Box>
      <Box flexAuto />
      <Box pr={4}>
        <UIFace />
      </Box>
    </Flex>
  );
}

export default NavBar;
