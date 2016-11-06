import React, { PropTypes } from 'react';
import Text from './Text';
import { Flex, Box } from 'reflexbox';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link as RouterLink } from 'react-router';
import Link from './Link';

function AccountData({  }) {
  return (
    <Flex flexColumn style={{maxWidth: 400, margin: '0 auto'}}>
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn><Text bold>Account Balance: </Text></TableRowColumn>
            <TableRowColumn>
              <RouterLink to="/bills"><Link><Text>$1,200</Text></Link></RouterLink>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Text bold>Payment Due Date:</Text></TableRowColumn>
            <TableRowColumn><Text>September 21st, 2016</Text></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Text bold>Minimum Payment: </Text></TableRowColumn>
            <TableRowColumn><Text>$ 255</Text></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Flex>
  );
}

AccountData.propTypes = {
};
export default AccountData;
