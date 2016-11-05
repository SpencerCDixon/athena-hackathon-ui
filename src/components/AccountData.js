import React, { PropTypes } from 'react';
import Text from './Text';
import { Flex, Box } from 'reflexbox';

function AccountData({  }) {
  return (
    <Flex flexColumn>
      <Box style={{margin: '0 auto'}}>
        <Text bold>Account Balance</Text> 
        <Text>$ 420</Text>
      </Box>
    </Flex>
  );
}

AccountData.propTypes = {
};
export default AccountData;
