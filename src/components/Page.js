import React, { PropTypes } from 'react';
import H1 from './H1';
import { Flex } from 'reflexbox';
import { space } from '../styles';

const sx = {
  title: {
    marginBottom: space[0],
  },
  page: {
    maxWidth: 1400,
    minWidth: 800,
    margin: '0 auto',
  }
};

function Page({ children, title }) {
  return (
    <Flex style={sx.page} flexColumn>
      {title && <H1 style={sx.title}>{title}</H1>}
      {children}
    </Flex>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Page;
